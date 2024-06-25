import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PhraseAvgOrderByAggregateInput } from "../inputs/PhraseAvgOrderByAggregateInput";
import { PhraseCountOrderByAggregateInput } from "../inputs/PhraseCountOrderByAggregateInput";
import { PhraseMaxOrderByAggregateInput } from "../inputs/PhraseMaxOrderByAggregateInput";
import { PhraseMinOrderByAggregateInput } from "../inputs/PhraseMinOrderByAggregateInput";
import { PhraseSumOrderByAggregateInput } from "../inputs/PhraseSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PhraseOrderByWithAggregationInput", {})
export class PhraseOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  phrase?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  translation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  streak?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  practisedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PhraseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PhraseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PhraseAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PhraseAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PhraseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PhraseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PhraseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PhraseMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PhraseSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PhraseSumOrderByAggregateInput | undefined;
}
