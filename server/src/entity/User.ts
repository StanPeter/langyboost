import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType() //makes available to be used as an object type for resolvers
@Entity("users") //entity is a table inside the db, (nameOfTable)
export class User extends BaseEntity {
    //base entity comes with methods to for example save the data
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text")
    email: string;

    @Column("text") //don't wanna expose this inside Field
    password: string;
}
