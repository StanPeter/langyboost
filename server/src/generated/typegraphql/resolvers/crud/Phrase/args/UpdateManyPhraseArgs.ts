import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhraseUpdateManyMutationInput } from "../../../inputs/PhraseUpdateManyMutationInput";
import { PhraseWhereInput } from "../../../inputs/PhraseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPhraseArgs {
  @TypeGraphQL.Field(_type => PhraseUpdateManyMutationInput, {
    nullable: false
  })
  data!: PhraseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PhraseWhereInput, {
    nullable: true
  })
  where?: PhraseWhereInput | undefined;
}
