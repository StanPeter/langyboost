import * as TypeGraphQL from "type-graphql";

export enum Role {
  MEMBER = "MEMBER",
  PREMIUM = "PREMIUM",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
