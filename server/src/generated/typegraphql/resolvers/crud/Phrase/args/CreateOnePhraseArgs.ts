import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhraseCreateInput } from "../../../inputs/PhraseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePhraseArgs {
  @TypeGraphQL.Field(_type => PhraseCreateInput, {
    nullable: false
  })
  data!: PhraseCreateInput;
}
