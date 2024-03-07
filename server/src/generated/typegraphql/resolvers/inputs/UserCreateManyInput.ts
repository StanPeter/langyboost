import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateManyInput", {})
export class UserCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userName!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  receivePromo?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  passwordHash!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tokenVersion?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  birthday?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nationality?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  membershipExpiration?: string | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  membershipType?: "MEMBER" | "PREMIUM" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accessToken?: string | undefined;
}
