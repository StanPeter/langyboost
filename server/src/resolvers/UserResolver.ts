import {
    Arg,
    Ctx,
    Field,
    Mutation,
    ObjectType,
    Query,
    Resolver,
} from "type-graphql";
import { hash, compare } from "bcryptjs";
import { User } from "entity/User";
import { sign } from "jsonwebtoken";
import { ContextType } from "ts/ContextType";

@ObjectType()
class LoginResponse {
    @Field()
    accessToken: string;
}

@Resolver()
export class UserResolver {
    @Query(() => [User])
    getUsers() {
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
        res.cookie(
            "jid",
            sign({ userId: user.id }, "gkrergeqqe", {
                expiresIn: "1d",
            }),
            { httpOnly: true }
        );

        //if all went ok, returns a new token
        return {
            accessToken: sign({ userId: user.id }, "asgasgeqtqwtg", {
                expiresIn: "30m",
            }),
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
