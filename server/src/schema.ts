// import builder from 'builder';
import { buildSchema } from 'type-graphql';
import './schema/index';

// export const schema = builder.toSchema({});

export const schema = buildSchema({ resolvers: [] });
