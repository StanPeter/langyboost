import { ApolloError } from "apollo-server-errors";
import { compare, hash } from "bcryptjs";
import errors from "constants/errors";
import db from "db";
import mockData from "db/mockData";
import { LoginResponse } from "model/User";
import serverConfig from "settings/serverConfig";
import { IContextType } from "ts/interfaces";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { createAccessToken, createRefreshToken, sendRefreshToken } from "utils/auth";
import { Validator } from "utils/validator";

@Resolver()
export class UserResolver {
    // getting data of a user
    // @UseMiddleware(isAuth)
    // @Query(() => UserEntity, { nullable: true })
    // async getUser(@Ctx() { payload }: any) {
    // 	when mocked
    // 	if (settings.isMocked) return User.create(testUserData);
    // 	if (settings.isMocked) return db.user.create({ data: testUserData });

    // 	try {
    // 		const foundUser = await User.findOne({ id: payload.userId });
    // 		const foundUser = await db.user.findFirst({ where: { id: payload.userId } });

    // 		return foundUser;
    // 	} catch (error) {
    // 		console.log(error, 'Unfortunately, there was an error');
    // 		return null;
    // 	}
    // }

    // @Mutation(() => Boolean)
    // async revokeRefreshTokenForUser(@Arg('userId', () => Int) userId: number) {
    // 	await getConnection().getRepository(User).increment({ id: userId }, 'tokenVersion', 1);

    // 	return true;
    // }

    @Mutation(() => LoginResponse)
    async signIn(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() { res }: IContextType //destructuring context type to later set cookies
    ): Promise<LoginResponse> {
        if (serverConfig.isMocked) return mockData.signUpMockData;

        // find user and validate
        const foundUser = await db.user.findFirst({
            where: {
                email: { equals: email },
            },
        });

        if (!foundUser) throw new ApolloError(errors.INVALID_EMAIL_PASSWORD);

        const isValid = await compare(password, foundUser.passwordHash);

        if (!isValid) throw new ApolloError(errors.INVALID_EMAIL_PASSWORD);

        // create access and refresh tokens
        const accessToken = createAccessToken(foundUser);
        sendRefreshToken(res, createRefreshToken(foundUser));

        foundUser.accessToken = accessToken;

        return { user: foundUser, accessToken: accessToken };
    }

    // logout mutation
    // @Mutation(() => Boolean)
    // async signOut(
    // 	@Ctx() { res }: IContextType //destructuring context type to later set cookies
    // ) {
    // 	sendRefreshToken(res, '');

    // 	return true;
    // }

    @Mutation(() => LoginResponse)
    async signUp(
        @Arg("email") email: string,
        @Arg("userName") userName: string,
        @Arg("password") password: string,
        @Arg("repeatPassword") repeatPassword: string,
        @Ctx() { res }: IContextType
    ) {
        // for mocked use case
        if (serverConfig.isMocked) return mockData.signUpMockData;

        // check whether user exist
        const foundUser = await db.user.findFirst({
        	where: {
        		OR: [
        			{
        				email: { equals: email },
        			},
        			{
        				userName: { equals: userName },
        			},
        		],
        	},
        });

        // // validation
        if (foundUser) throw new ApolloError('User already exists.');
        if (password !== repeatPassword) throw new ApolloError(errors.PASSWORDS_DONT_MATCH);
		if (!Validator.isValidEmail(email)) throw new ApolloError(errors.INVALID_EMAIL);

        // create hash password
        const hashedPass = await hash(password, 10);

        // create new user and handle tokens
        try {
            const newUser = await db.user.create({
                data: { email: email, userName: userName, passwordHash: hashedPass },
            });

            // create both tokens
            const accessToken = createAccessToken(newUser);
            sendRefreshToken(res, createRefreshToken(newUser));

            return { user: newUser, accessToken };
        } catch (error) {
            throw new ApolloError("There was an error: " + (error as Error).message);
        }
    }
}
