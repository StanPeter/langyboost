// import { resolvers } from 'generated/typegraphql';
import { PhraseResolver } from 'resolver/PhraseResolver';
import { UserResolver } from 'resolver/UserResolver';
import { buildSchema } from 'type-graphql';

// export const schema = buildSchema({ resolvers: [...resolvers, PhraseResolver, UserResolver] });
export const schema = buildSchema({ resolvers: [PhraseResolver, UserResolver] });
