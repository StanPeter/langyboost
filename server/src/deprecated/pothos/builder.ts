// // import SchemaBuilder from '@pothos/core';
// // import PrismaPlugin from '@pothos/plugin-prisma';
// // import type PrismaTypes from 'generated/pothos';
// // This is the default location for the generator, but this can be
// // customized as described above.
// // Using a type only import will help avoid issues with undeclared
// // exports in esm mode
// import SimpleObjectsPlugin from '@pothos/plugin-simple-objects';
// import prisma from 'db';
// import "reflect-metadata";
// import { User } from 'generated/prisma';
// import { DateResolver } from 'graphql-scalars';
// import { IContextType } from 'ts/interfaces';
// import { buildSchema } from 'type-graphql';

// // const prisma = new PrismaClient({});

// type TLoginResponse = {
// 	user: User;
// 	accessToken: string;
// };

// const builder = await buildSchema({
// 	resolvers,
// 	validate: false,
//   });

// // const builder = new SchemaBuilder<{
// // 	Scalars: {
// // 		Date: { Input: Date; Output: Date };
// // 	};
// // 	Objects: {
// // 		LoginResponse: TLoginResponse;
// // 	};
// // 	PrismaTypes: PrismaTypes;
// // 	Context: IContextType;
// // }>({
// // 	plugins: [PrismaPlugin, SimpleObjectsPlugin],
// // 	prisma: {
// // 		client: prisma,
// // 		// defaults to false, uses /// comments from prisma schema as descriptions
// // 		// for object types, relations and exposed fields.
// // 		// descriptions can be omitted by setting description to false
// // 		// exposeDescriptions: boolean | { models: boolean, fields: boolean },
// // 		// use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
// // 		// filterConnectionTotalCount: true,
// // 		// warn when not using a query parameter correctly
// // 		// onUnusedQuery: process.env.NODE_ENV === 'production' ? null : 'warn',
// // 	},
// // });

// // builder.queryType({});

// builder.addScalarType('Date', DateResolver, {});

// export default builder;
