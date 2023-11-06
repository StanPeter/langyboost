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
  addUser: User;
  signIn: User;
};


export type MutationAddPhraseArgs = {
  phrase: Scalars['String'];
  targetLang: Scalars['String'];
  translation: Scalars['String'];
};


export type MutationAddUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
  userName: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
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
  getUser: User;
  getUsers: Array<User>;
};


export type QueryGetPhraseArgs = {
  phraseId: Scalars['String'];
};


export type QueryGetUserArgs = {
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  accessToken?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  membershipExpiration?: Maybe<Scalars['String']>;
  membershipType?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  userName: Scalars['String'];
};

export type GetPhrasesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPhrasesQuery = { __typename?: 'Query', getPhrases: Array<{ __typename?: 'Phrase', phrase: string, translation: string, targetLang: string, id: string }> };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, userName: string, address?: string | null, avatar?: string | null, birthday?: string | null, email: string, membershipExpiration?: string | null, membershipType?: string | null, nationality?: string | null, phoneNumber?: string | null } };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
  userName: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', addUser: { __typename?: 'User', id: string, email: string, accessToken?: string | null } };

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'User', id: string, email: string, accessToken?: string | null } };


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
export const GetUserDocument = gql`
    query GetUser($userId: String!) {
  getUser(userId: $userId) {
    id
    firstName
    lastName
    userName
    address
    avatar
    birthday
    email
    membershipExpiration
    membershipType
    nationality
    phoneNumber
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $password: String!, $repeatPassword: String!, $userName: String!) {
  addUser(
    email: $email
    password: $password
    repeatPassword: $repeatPassword
    userName: $userName
  ) {
    id
    email
    accessToken
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      repeatPassword: // value for 'repeatPassword'
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    id
    email
    accessToken
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;