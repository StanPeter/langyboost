import { ObjectId } from 'mongodb';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'User entity' }) //makes available to be used as an object type for resolvers
export class User {
	@Field(() => ID)
	id!: ObjectId;

	@Field()
	firstName!: string;

	@Field()
	lastName?: string;

	@Field()
	username!: string;

	@Field()
	email!: string;

	@Field()
	birthday!: string;

	@Field({ nullable: true })
	phoneNumber?: string;

	@Field({ nullable: true })
	address?: string;

	@Field({ nullable: true })
	nationality?: string;

	@Field({ nullable: true })
	membershipType?: string;

	@Field({ nullable: true })
	membershipExpiration?: string;

	@Field({ nullable: true })
	avatar?: string;

	// @Field(() => Boolean)
	// // @Column("bool", { default: false, nullable: true })
	// receivePromo?: boolean;

	// @Column("text") //don't wanna expose this inside Field
	// password: string;

	// @Column("int", { default: 0 }) //used for revoking the user's tokens
	// tokenVersion: number;
}
