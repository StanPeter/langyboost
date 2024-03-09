import { Phrase as PhraseTypeGraphql } from 'generated/typegraphql';
import { ObjectType } from 'type-graphql';

@ObjectType({ description: 'Phrase entity' }) //makes available to be used as an object type for resolvers
export class User extends PhraseTypeGraphql {}
