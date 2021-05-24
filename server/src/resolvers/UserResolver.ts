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
import {
    createAccessToken,
    createRefreshToken,
    sendRefreshToken,
} from "utils/auth";
import { isAuth } from "middleware/isAuth";
import { getConnection } from "typeorm";
import { verify } from "jsonwebtoken";
import { ApolloError } from "apollo-server-errors";

@ObjectType()
class LoginResponse {
    @Field()
    accessToken: string;

    @Field(() => User)
    user: User;
}

@Resolver()
export class UserResolver {
    @Query(() => [User])
    tryingOut() {
        return User.find();
    }

    @Query(() => User, { nullable: true })
    async getUser(@Ctx() context: ContextType) {
        const authorization = context.req.headers["authorization"];

        if (!authorization) return null;

        try {
            const token = authorization.split(" ")[1];
            const payload: any = verify(
                token,
                process.env.ACCESS_TOKEN_SECRET!
            );
            const foundUser = await User.findOne({ id: payload.userId });

            return foundUser;
        } catch (error) {
            console.log(error, "Unfortunately, there was an error");
            return null;
        }
    }

    @UseMiddleware(isAuth)
    @Query(() => [User])
    getUsers(@Ctx() { payload }: ContextType) {
        console.log(payload, "payload");

        return User.find();
    }

    @Mutation(() => Boolean)
    async revokeRefreshTokenForUser(@Arg("userId", () => Int) userId: number) {
        await getConnection()
            .getRepository(User)
            .increment({ id: userId }, "tokenVersion", 1);

        return true;
    }

    @Mutation(() => LoginResponse)
    async login(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() { res }: ContextType //destructuring context type to later set cookies
    ): Promise<LoginResponse> {
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

    @Mutation(() => Boolean)
    async logout(
        @Ctx() { res }: ContextType //destructuring context type to later set cookies
    ) {
        sendRefreshToken(res, "");

        return true;
    }

    @Mutation(() => Boolean)
    async register(
        @Arg("email") email: string,
        @Arg("password") password: string
    ) {
        const hashedPass = await hash(password, 10);

        try {
            await User.insert({
                email,
                password: hashedPass,
            });
        } catch (error) {
            console.log("Upps, there was an error" + error);

            return false;
        }

        return true;
    }
}
