import { ApolloError } from 'apollo-server-express';
import { compare, hash } from 'bcryptjs';
import builder from 'builder';
import db from 'db';
import mockData, { TEST_USER_DATA } from 'db/mockData';
import serverConfig from 'settings/serverConfig';
import { createAccessToken, createRefreshToken, sendAccessToken, sendRefreshToken } from 'utils/auth';

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
				const testUser = await db.user.create({ data: TEST_USER_DATA });

				sendRefreshToken(res, createRefreshToken(testUser));

				return mockData.signUpMockData;
			}

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
				throw new ApolloError('The user with the email already exists.');
			}
			if (args.password !== args.repeatPassword)
				throw new ApolloError('Passwords do not match. Please try again.');

			console.log('HASHING');
			const hashedPass = await hash(args.password, 10);

			console.log(hashedPass, 'HASHING');
			try {
				const newUser = await db.user.create({
					data: { email: args.email, userName: args.userName, passwordHash: hashedPass },
				});

				return newUser;
			} catch (error) {
				throw new ApolloError('There was an error: ' + (error as Error).message);
			}
		},
	}),
	signIn: t.prismaField({
		type: 'User',
		args: {
			email: t.arg.string({ required: true }),
			password: t.arg.string({ required: true }),
		},
		resolve: async (query, _, args, { res, req, payload }) => {
			// for mocked use case
			if (serverConfig.isMocked) {
				const testUser = await db.user.create({ data: TEST_USER_DATA });

				sendRefreshToken(res, createRefreshToken(testUser));

				return mockData.signUpMockData;
			}

			const foundUser = await db.user.findFirst({
				...query,
				where: {
					email: { equals: args.email },
				},
			});

			if (!foundUser) {
				throw new ApolloError('Invalid email or password');
			}

			const isValid = await compare(args.password, foundUser.passwordHash);

			if (!isValid) throw new ApolloError('Invalid email or password');

			const accessToken = createAccessToken(foundUser);

			// create both tokens
			sendRefreshToken(res, createRefreshToken(foundUser));
			sendAccessToken(res, accessToken);

			//if all went ok, returns a new token
			return { ...foundUser, accessToken };
		},
	}),
}));
