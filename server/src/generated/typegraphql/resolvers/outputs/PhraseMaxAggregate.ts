import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PhraseMaxAggregate", {})
export class PhraseMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phrase!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  translation!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  targetLang!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  streak!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  practisedAt!: Date | null;
}
