import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Phrase", {})
export class Phrase {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phrase!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  translation!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  streak!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  practisedAt!: Date;
}
