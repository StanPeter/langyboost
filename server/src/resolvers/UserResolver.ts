import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { hash } from "bcryptjs";
import { User } from "entity/User";

@Resolver()
export class UserResolver {
    @Query(() => [User])
    getUsers() {
        return User.find();
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
