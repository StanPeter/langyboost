import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType("UserGroupBy", {})
export class UserGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userName!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  receivePromo!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  passwordHash!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tokenVersion!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  birthday!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phoneNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nationality!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  membershipExpiration!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  membershipType!: "MEMBER" | "PREMIUM" | "ADMIN";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  avatar!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  accessToken!: string;

  @TypeGraphQL.Field(_type => UserCountAggregate, {
    nullable: true
  })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field(_type => UserAvgAggregate, {
    nullable: true
  })
  _avg!: UserAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserSumAggregate, {
    nullable: true
  })
  _sum!: UserSumAggregate | null;

  @TypeGraphQL.Field(_type => UserMinAggregate, {
    nullable: true
  })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field(_type => UserMaxAggregate, {
    nullable: true
  })
  _max!: UserMaxAggregate | null;
}
