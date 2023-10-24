// import { Field, Int, ObjectType } from 'type-graphql';
// // import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

// @ObjectType({ description: 'User entity' }) //makes available to be used as an object type for resolvers
// // @Entity("users") //entity is a table inside the db, (nameOfTable)
// export class User {
// 	//base entity comes with methods to for example save the data
// 	@Field(() => Int)
// 	// @PrimaryGeneratedColumn()
// 	id: number;

// 	@Field()
// 	// @Column("text")
// 	email: string;

// 	@Field()
// 	// @Column("text")
// 	username: string;

// 	@Field()
// 	// @Column("text", { nullable: true })
// 	firstName: string;

// 	@Field()
// 	// @Column("text", { nullable: true })
// 	lastName: string;

// 	@Field(() => Boolean)
// 	// @Column("bool", { default: false, nullable: true })
// 	receivePromo: boolean;

// 	// @Column("text") //don't wanna expose this inside Field
// 	// password: string;

// 	// @Column("int", { default: 0 }) //used for revoking the user's tokens
// 	// tokenVersion: number;
// }

import builder from 'builder';
import db from 'db';

// model User {
//     id       String @id @default(auto()) @map("_id") @db.ObjectId
//     title    String
//     username String
// }

// id       String    @id @default(cuid())
// avatar   String?
// name     String
// email    String
// articles Article[]

builder.prismaObject('User', {
	name: 'User',
	fields: (t) => ({
		id: t.exposeID('id'),
		title: t.exposeString('title'),
		username: t.exposeString('username'),
	}),
});

builder.prismaObject('Post', {
	name: 'Post',
	fields: (t) => ({
		id: t.exposeID('id'),
		title: t.exposeString('title'),
		username: t.exposeString('username'),
	}),
});

// builder.queryType({
// 	fields: (t) => ({
// 		getUserTest: t.prismaField({
// 			type: 'User',
// 			args: {
// 				userId: t.arg.string({ required: true }),
// 			},
// 			resolve: async (query, root, args, ctx, info) => {
// 				console.log(args.userId, ' USER ID');
// 				return db.user.findUniqueOrThrow({ ...query, where: { id: args.userId } });
// 			},
// 		}),
// 	}),
// });

builder.queryType({
	fields: (t) => ({
		users: t.prismaField({
			type: ['User'],
			resolve: async (query, root, args, ctx, info) => {
				const users = await db.user.findMany({ ...query });

				console.log(users, ' USERS');
				return users;
			},
		}),
		posts: t.prismaField({
			type: ['Post'],
			resolve: async (query, root, args, ctx, info) => {
				const posts = await db.post.findMany({ ...query });

				console.log(posts, ' POSTS');
				return posts;
			},
		}),
	}),
});

// builder.queryType({
// 	fields: (t) => ({
// 		posts: t.prismaField({
// 			type: ['Post'],
// 			resolve: async (query, root, args, ctx, info) => {
// 				const posts = await db.post.findMany({ ...query });

// 				console.log(posts, ' POSTS');
// 				return posts;
// 			},
// 		}),
// 	}),
// });

// builder.queryField('users', (t) =>
// 	t.prismaField({
// 		type: ['User'],
// 		resolve: async (query, root, args, ctx, info) => db.user.findMany({ ...query }),
// 	})
// );

// builder.queryFields((t) => ({
// 	// getUser: t.prismaField({
// 	// 	type: 'User',
// 	// 	args: {
// 	// 		// userId: t.arg.string(),
// 	// 		title: t.arg.string({ required: true }),
// 	// 	},
// 	// 	resolve: async (query, _, args) => {
// 	// 		const user = await db.user.findUnique({
// 	// 			...query,
// 	// 			// @ts-ignore
// 	// 			where: { title: args.title },
// 	// 		});

// 	// 		if (!user) {
// 	// 			throw new Error('User not found');
// 	// 		}

// 	// 		return user;
// 	// 	},
// 	// }),
// 	getUsers: t.prismaField({
// 		type: ['User'],
// 		resolve: async (query, root, args, ctx, info) => db.user.findMany({ ...query }),
// 	}),
// }));
