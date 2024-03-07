import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PhraseWhereInput } from "../inputs/PhraseWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PhraseWhereUniqueInput", {})
export class PhraseWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [PhraseWhereInput], {
    nullable: true
  })
  AND?: PhraseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhraseWhereInput], {
    nullable: true
  })
  OR?: PhraseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhraseWhereInput], {
    nullable: true
  })
  NOT?: PhraseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  phrase?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  translation?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  targetLang?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  streak?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  practisedAt?: DateTimeFilter | undefined;
}
