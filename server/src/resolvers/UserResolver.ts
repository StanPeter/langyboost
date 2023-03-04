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
import { hash, compare } from "bcryptjs";
import { User } from "entity/User";
import { ContextType } from "ts/ContextType";
import { createAccessToken, createRefreshToken, sendRefreshToken } from "utils/auth";
import { isAuth } from "middleware/isAuth";
import { getConnection } from "typeorm";
import { ApolloError } from "apollo-server-errors";
import settings from "settings/projectConfiq.json";
import mockData from "settings/mockData";

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
        if (settings.isMocked) return User.create(mockData.getUserMockData);

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
    getUsers(@Ctx() { payload }: ContextType) {
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
        @Ctx() { res }: ContextType //destructuring context type to later set cookies
    ): Promise<LoginResponse> {
        // return when mocked
        if (settings.isMocked)
            return {
                user: User.create(mockData.signInMockData),
                accessToken: createAccessToken(User.create(mockData.signInMockData)),
            };

        //just TS returning type, its a generic
        const user = await User.findOne({ where: { email } });

        if (!user) throw new ApolloError("Unfortunately the user was not found");

        const isValid = await compare(password, user.password);

        if (!isValid) throw new ApolloError("Invalid password, please try again");

        sendRefreshToken(res, createRefreshToken(user));

        //if all went ok, returns a new token
        return {
            accessToken: createAccessToken(user),
            user,
        };
    }

    // logout mutation
    @Mutation(() => Boolean)
    async signOut(
        @Ctx() { res }: ContextType //destructuring context type to later set cookies
    ) {
        sendRefreshToken(res, "");

        return true;
    }

    // sign up mutation
    @Mutation(() => Boolean)
    async signUp(
        @Arg("email") email: string,
        @Arg("username") username: string,
        @Arg("password") password: string,
        @Arg("repeatPassword") repeatPassword: string
    ) {
        if (settings.isMocked) return mockData.signUpMockData;

        const existingUser = await User.find({ where: { email: email } });

        if (existingUser.length > 0) throw new ApolloError("The user already exists");
        if (password !== repeatPassword) throw new ApolloError("Passwords do not match");

        const hashedPass = await hash(password, 10);

        try {
            await User.insert({
                email,
                password: hashedPass,
                username: username,
            });
        } catch (error) {
            console.log("Upps, there was an error" + error);

            return false;
        }

        return true;
    }
}
