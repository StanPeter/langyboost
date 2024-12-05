// import { User as UserTypeGraphql } from 'generated/typegraphql';
// import { Field, ObjectType } from 'type-graphql';

// @ObjectType({ description: 'User entity' }) //makes available to be used as an object type for resolvers
// export class UserSchema extends UserTypeGraphql {}

// @ObjectType()
// export class LoginResponse {
// 	@Field()
// 	accessToken!: string;

// 	@Field(() => UserSchema)
// 	user!: UserSchema;
// }
import db from 'db';

export const User = db.user;
