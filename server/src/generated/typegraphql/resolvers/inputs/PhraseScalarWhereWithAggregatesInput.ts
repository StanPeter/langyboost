import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PhraseScalarWhereWithAggregatesInput", {})
export class PhraseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PhraseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PhraseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhraseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PhraseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhraseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PhraseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  phrase?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  translation?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  streak?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  practisedAt?: DateTimeWithAggregatesFilter | undefined;
}
