import { ApolloError } from 'apollo-server-express';
import { compare, hash } from 'bcryptjs';
import builder from 'builder';
import errors from 'constants/errors';
import db from 'db';
import mockData from 'db/mockData';
import serverConfig from 'settings/serverConfig';
import { createAccessToken, createRefreshToken, sendRefreshToken } from 'utils/auth';

// define each individual mutation
builder.mutationFields((t) => ({
	addUser: t.prismaField({
		type: 'User',
		args: {
			email: t.arg.string({ required: true }),
			password: t.arg.string({ required: true }),
			repeatPassword: t.arg.string({ required: true }),
			userName: t.arg.string({ required: true }),
		},
		resolve: async (query, _, args, { res, req, payload }) => {
			// for mocked use case
			if (serverConfig.isMocked) {
				// const testUser = await db.user.create({ data: TEST_USER_DATA });
				// sendRefreshToken(res, createRefreshToken(TEST_USER_DATA));

				return mockData.signUpMockData;
			}

			// check whether user exist
			const foundUser = await db.user.findFirst({
				...query,
				where: {
					OR: [
						{
							email: { equals: args.email },
						},
						{
							userName: { equals: args.userName },
						},
					],
				},
			});

			if (foundUser) {
				throw new ApolloError('User already exists.');
			}
			if (args.password !== args.repeatPassword) throw new ApolloError('Wrong password or email');

			// create hash password
			const hashedPass = await hash(args.password, 10);

			// create new user and handle tokens
			try {
				const newUser = await db.user.create({
					data: { email: args.email, userName: args.userName, passwordHash: hashedPass },
				});

				// create both tokens
				const accessToken = createAccessToken(newUser);

				sendRefreshToken(res, createRefreshToken(newUser));
				// sendAccessToken(res, accessToken);

				return { ...newUser, accessToken };
			} catch (error) {
				throw new ApolloError('There was an error: ' + (error as Error).message);
			}
		},
	}),
	loginUser: t.prismaField({
		type: 'User',
		args: {
			email: t.arg.string({ required: true }),
			password: t.arg.string({ required: true }),
		},
		resolve: async (query, _, args, { res, req, payload }) => {
			// for mocked use case
			if (serverConfig.isMocked) {
				// const testUser = await db.user.create({ data: TEST_USER_DATA });
				// sendRefreshToken(res, createRefreshToken(TEST_USER_DATA));

				console.log('MOCK DATA', mockData.signUpMockData);
				return mockData.signUpMockData;
			}

			// find user and validate
			const foundUser = await db.user.findFirst({
				...query,
				where: {
					email: { equals: args.email },
				},
			});

			if (!foundUser) {
				throw new ApolloError(errors.INVALID_EMAIL_PASSWORD);
			}

			const isValid = await compare(args.password, foundUser.passwordHash);

			if (!isValid) throw new ApolloError(errors.INVALID_EMAIL_PASSWORD);

			// create access and refresh tokens
			const accessToken = createAccessToken(foundUser);

			// create both tokens
			sendRefreshToken(res, createRefreshToken(foundUser));
			// sendAccessToken(res, accessToken);

			foundUser.accessToken = accessToken;

			//if all went ok, returns a new token
			return foundUser;
		},
	}),
}));
