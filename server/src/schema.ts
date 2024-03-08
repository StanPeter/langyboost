import { resolvers } from 'generated/typegraphql';
import { PhraseResolver } from 'resolver/PhraseResolver';
import { buildSchema } from 'type-graphql';

export const schema = buildSchema({ resolvers: [...resolvers, PhraseResolver] });
