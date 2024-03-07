import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhraseUpdateInput } from "../../../inputs/PhraseUpdateInput";
import { PhraseWhereUniqueInput } from "../../../inputs/PhraseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePhraseArgs {
  @TypeGraphQL.Field(_type => PhraseUpdateInput, {
    nullable: false
  })
  data!: PhraseUpdateInput;

  @TypeGraphQL.Field(_type => PhraseWhereUniqueInput, {
    nullable: false
  })
  where!: PhraseWhereUniqueInput;
}
