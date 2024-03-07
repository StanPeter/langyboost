import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType("UserMaxAggregate", {})
export class UserMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userName!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  receivePromo!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  passwordHash!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tokenVersion!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  birthday!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nationality!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  membershipExpiration!: string | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  membershipType!: "MEMBER" | "PREMIUM" | "ADMIN" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accessToken!: string | null;
}
