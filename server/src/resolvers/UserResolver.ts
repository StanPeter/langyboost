import { ApolloError } from "apollo-server-errors";
import { compare, hash } from "bcryptjs";
import { isAuth } from "middleware/isAuth";
import mockData, { testUserData } from "settings/mockData";
import settings from "settings/projectConfiq.json";
import { IContextType } from "ts/interfaces";
import {
    Arg,
    Ctx,
    Field,
    Int,
    Mutation,
    ObjectType,
    Query,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken,
} from "utils/auth";

@ObjectType()
class LoginResponse {
    @Field()
    accessToken: string;

    @Field(() => User)
    user: User;
}

@Resolver()
export class UserResolver {
    // getting data of a user
    @UseMiddleware(isAuth)
    @Query(() => User, { nullable: true })
    async getUser(@Ctx() { payload }: any) {
        // when mocked
        if (settings.isMocked) return User.create(testUserData);

        try {
            const foundUser = await User.findOne({ id: payload.userId });

            return foundUser;
        } catch (error) {
            console.log(error, "Unfortunately, there was an error");
            return null;
        }
    }

    // getting data of all users
    @UseMiddleware(isAuth)
    @Query(() => [User])
    getUsers(@Ctx() { payload }: IContextType) {
        console.log(payload, "payload");

        return User.find();
    }

    @Mutation(() => Boolean)
    async revokeRefreshTokenForUser(@Arg("userId", () => Int) userId: number) {
        await getConnection().getRepository(User).increment({ id: userId }, "tokenVersion", 1);

        return true;
    }

    // sign in mutation
    @Mutation(() => LoginResponse)
    async signIn(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() { res }: IContextType //destructuring context type to later set cookies
    ): Promise<LoginResponse> {
        // return when mocked
        if (settings.isMocked) {
            const testUser = User.create(testUserData);

            sendRefreshToken(res, createRefreshToken(testUser));

            return {
                user: testUser,
                accessToken: createAccessToken(testUser),
            };
        }

        //just TS returning type, its a generic
        const user = await User.findOne({ where: { email } });

        if (!user)
            throw new ApolloError("User does not exist! Please check again your email address.");

        const isValid = await compare(password, user.password);

        if (!isValid) throw new ApolloError("Invalid password! Please try again.");

        const accessToken = createAccessToken(user);

        // create both tokens
        sendRefreshToken(res, createRefreshToken(user));
        sendAccessToken(res, accessToken);

        //if all went ok, returns a new token
        return {
            accessToken: accessToken,
            user,
        };
    }

    // logout mutation
    @Mutation(() => Boolean)
    async signOut(
        @Ctx() { res }: IContextType //destructuring context type to later set cookies
    ) {
        sendRefreshToken(res, "");

        return true;
    }

    // sign up mutation
    @Mutation(() => LoginResponse)
    async signUp(
        @Arg("email") email: string,
        @Arg("username") username: string,
        @Arg("password") password: string,
        @Arg("repeatPassword") repeatPassword: string,
        @Ctx() { res }: IContextType
    ) {
        // for mocked use case
        if (settings.isMocked) {
            const testUser = User.create(testUserData);

            sendRefreshToken(res, createRefreshToken(testUser));

            return mockData.signUpMockData;
        }

        const existingUser = await User.find({ where: { email: email } });

        if (existingUser.length > 0)
            throw new ApolloError("The user with the email already exists.");
        if (password !== repeatPassword)
            throw new ApolloError("Passwords do not match. Please try again.");

        const hashedPass = await hash(password, 10);

        try {
            const newUser = User.create({
                email,
                password: hashedPass,
                username: username,
            });

            newUser.save();

            // await User.insert({
            //     email,
            //     password: hashedPass,
            //     username: username,
            // });

            // const existingUser2 = await User.find({ where: { email: email } });

            // console.log(existingUser2);

            // // same part as logging in
            // create both tokens
            const accessToken = createAccessToken(newUser);

            sendRefreshToken(res, createRefreshToken(newUser));
            sendAccessToken(res, accessToken);

            // //if all went ok, returns a new tokens
            return {
                accessToken: createAccessToken(newUser),
                user: newUser,
            };
        } catch (error) {
            throw new ApolloError("There was an error: " + (error as Error).message);
            // return false;
        }

        return true;
    }
}
