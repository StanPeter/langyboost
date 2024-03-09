import { Phrase as PhraseTypeGraphql } from 'generated/typegraphql';
import { ObjectType } from 'type-graphql';

@ObjectType({ description: 'Phrase entity' }) //makes available to be used as an object type for resolvers
export class User extends PhraseTypeGraphql {}

// @ObjectType()
// export class Phrase extends BaseEntity {
// 	@Field(() => ID)
// 	id!: ObjectId;

// 	@Field(() => String)
// 	phrase!: string;

// 	@Field(() => String, { nullable: true })
// 	translation?: string;

// 	@Field(() => String, { defaultValue: new Date() })
// 	createdAt?: Date;

//     @Field(() => Number, { defaultValue: 0 })
// 	streak!: number;

// 	@Field(() => Date, { nullable: true })
// 	practisedAt?: Date;
// }
