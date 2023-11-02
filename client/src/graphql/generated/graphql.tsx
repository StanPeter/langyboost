import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPhrase: Phrase;
};


export type MutationAddPhraseArgs = {
  phrase: Scalars['String'];
  targetLang: Scalars['String'];
  translation: Scalars['String'];
};

export type Phrase = {
  __typename?: 'Phrase';
  id: Scalars['ID'];
  phrase: Scalars['String'];
  targetLang: Scalars['String'];
  translation: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getPhrase: Phrase;
  getPhrases: Array<Phrase>;
};


export type QueryGetPhraseArgs = {
  phraseId: Scalars['String'];
};

export type GetPhrasesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPhrasesQuery = { __typename?: 'Query', getPhrases: Array<{ __typename?: 'Phrase', phrase: string, translation: string, targetLang: string, id: string }> };


export const GetPhrasesDocument = gql`
    query GetPhrases {
  getPhrases {
    phrase
    translation
    targetLang
    id
  }
}
    `;

/**
 * __useGetPhrasesQuery__
 *
 * To run a query within a React component, call `useGetPhrasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhrasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhrasesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPhrasesQuery(baseOptions?: Apollo.QueryHookOptions<GetPhrasesQuery, GetPhrasesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPhrasesQuery, GetPhrasesQueryVariables>(GetPhrasesDocument, options);
      }
export function useGetPhrasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhrasesQuery, GetPhrasesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPhrasesQuery, GetPhrasesQueryVariables>(GetPhrasesDocument, options);
        }
export type GetPhrasesQueryHookResult = ReturnType<typeof useGetPhrasesQuery>;
export type GetPhrasesLazyQueryHookResult = ReturnType<typeof useGetPhrasesLazyQuery>;
export type GetPhrasesQueryResult = Apollo.QueryResult<GetPhrasesQuery, GetPhrasesQueryVariables>;