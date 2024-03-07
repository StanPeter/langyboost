import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhraseCreateInput } from "../../../inputs/PhraseCreateInput";
import { PhraseUpdateInput } from "../../../inputs/PhraseUpdateInput";
import { PhraseWhereUniqueInput } from "../../../inputs/PhraseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePhraseArgs {
  @TypeGraphQL.Field(_type => PhraseWhereUniqueInput, {
    nullable: false
  })
  where!: PhraseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhraseCreateInput, {
    nullable: false
  })
  create!: PhraseCreateInput;

  @TypeGraphQL.Field(_type => PhraseUpdateInput, {
    nullable: false
  })
  update!: PhraseUpdateInput;
}
