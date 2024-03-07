import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("EnumRoleFieldUpdateOperationsInput", {})
export class EnumRoleFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  set?: "MEMBER" | "PREMIUM" | "ADMIN" | undefined;
}
