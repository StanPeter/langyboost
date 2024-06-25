import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhraseOrderByWithAggregationInput } from "../../../inputs/PhraseOrderByWithAggregationInput";
import { PhraseScalarWhereWithAggregatesInput } from "../../../inputs/PhraseScalarWhereWithAggregatesInput";
import { PhraseWhereInput } from "../../../inputs/PhraseWhereInput";
import { PhraseScalarFieldEnum } from "../../../../enums/PhraseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPhraseArgs {
  @TypeGraphQL.Field(_type => PhraseWhereInput, {
    nullable: true
  })
  where?: PhraseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PhraseOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PhraseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhraseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "phrase" | "translation" | "streak" | "practisedAt">;

  @TypeGraphQL.Field(_type => PhraseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PhraseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
