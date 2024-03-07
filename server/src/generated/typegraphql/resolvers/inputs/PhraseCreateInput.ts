import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PhraseCreateInput", {})
export class PhraseCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phrase!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  translation!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  targetLang!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  streak?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  practisedAt?: Date | undefined;
}
