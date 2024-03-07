import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhraseWhereInput } from "../../../inputs/PhraseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPhraseArgs {
  @TypeGraphQL.Field(_type => PhraseWhereInput, {
    nullable: true
  })
  where?: PhraseWhereInput | undefined;
}
