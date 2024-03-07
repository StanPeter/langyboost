import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhraseCreateManyInput } from "../../../inputs/PhraseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPhraseArgs {
  @TypeGraphQL.Field(_type => [PhraseCreateManyInput], {
    nullable: false
  })
  data!: PhraseCreateManyInput[];
}
