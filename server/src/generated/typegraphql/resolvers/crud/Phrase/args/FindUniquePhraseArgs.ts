import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhraseWhereUniqueInput } from "../../../inputs/PhraseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePhraseArgs {
  @TypeGraphQL.Field(_type => PhraseWhereUniqueInput, {
    nullable: false
  })
  where!: PhraseWhereUniqueInput;
}
