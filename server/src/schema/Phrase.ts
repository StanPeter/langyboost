import { ObjectId } from 'mongodb';
import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity } from 'typeorm';

@ObjectType()
export class Phrase extends BaseEntity {
	@Field(() => ID)
	id!: ObjectId;

	@Field(() => String)
	phrase!: string;

	@Field(() => String, { nullable: true })
	translation?: string;

	@Field(() => String, { defaultValue: new Date() })
	createdAt?: Date;

    @Field(() => Number, { defaultValue: 0 })
	streak!: number;

	@Field(() => Date, { nullable: true })
	practisedAt?: Date;
}
