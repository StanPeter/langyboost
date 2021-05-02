import {
    Arg,
    Ctx,
    Field,
    Mutation,
    ObjectType,
    Query,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import { hash, compare } from "bcryptjs";
import { User } from "entity/User";
import { ContextType } from "ts/ContextType";
import { createAccessToken, createRefreshToken } from "utils/auth";
import { isAuth } from "middleware/isAuth";

@ObjectType()
class LoginResponse {
    @Field()
    accessToken: string;
}

@Resolver()
export class UserResolver {
    @UseMiddleware(isAuth)
    @Query(() => [User])
    getUsers(@Ctx() { payload }: ContextType) {
        console.log(payload, "payload");

        return User.find();
    }

    @Mutation(() => LoginResponse)
    async login(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() { res }: ContextType //destructuring context type to later set cookies
    ): Promise<LoginResponse> {
        //just TS returning type, its a generic
        const user = await User.findOne({ where: { email } });

        if (!user) throw new Error("Unfortunately the user was not found");

        const isValid = await compare(password, user.password);

        if (!isValid) throw new Error("Invalid password, please try again");

        //set refreshing token -> name, token, opts
        //we want to return a bit different secret code -> 'gkrergeqqe'
        res.cookie("jid", createRefreshToken(user), { httpOnly: true });

        //if all went ok, returns a new token
        return {
            accessToken: createAccessToken(user),
        };
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
