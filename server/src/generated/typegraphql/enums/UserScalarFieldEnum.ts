import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  firstName = "firstName",
  lastName = "lastName",
  userName = "userName",
  receivePromo = "receivePromo",
  passwordHash = "passwordHash",
  tokenVersion = "tokenVersion",
  birthday = "birthday",
  phoneNumber = "phoneNumber",
  address = "address",
  nationality = "nationality",
  membershipExpiration = "membershipExpiration",
  membershipType = "membershipType",
  avatar = "avatar",
  accessToken = "accessToken"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
