import { ApolloError } from "apollo-server-express";
import { Phrases } from "entity/Phrases";
import { Arg, Mutation, Query } from "type-graphql";

export class PhrasesResolver {
    @Query(() => [Phrases])
    getPhrases() {
        return Phrases.find();
    }

    @Mutation(() => Boolean)
    async createPhrase(@Arg("phrase") phrase: string) {
        const phraseExists = await Phrases.findOne({ where: { phrase } });

        if (phraseExists)
            return new ApolloError("The phrase already exists");

        try {
            await Phrases.insert({ phrase });
        } catch (error) {
            console.log("Upps, there was an error" + error);

            return false;
        }

        return true;
    }
}
