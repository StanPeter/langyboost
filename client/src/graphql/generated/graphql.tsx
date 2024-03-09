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
  DateTime: any;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: UserSchema;
};

export type Mutation = {
  __typename?: 'Mutation';
  signIn: LoginResponse;
  signUp: LoginResponse;
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
  userName: Scalars['String'];
};

export type Phrase = {
  __typename?: 'Phrase';
  id: Scalars['String'];
  phrase: Scalars['String'];
  practisedAt: Scalars['DateTime'];
  streak: Scalars['Int'];
  targetLang: Scalars['String'];
  translation: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllPhrases: Array<Phrase>;
};

export enum Role {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Premium = 'PREMIUM'
}

/** User entity */
export type UserSchema = {
  __typename?: 'UserSchema';
  accessToken: Scalars['String'];
  address: Scalars['String'];
  avatar: Scalars['String'];
  birthday: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  membershipExpiration: Scalars['String'];
  membershipType: Role;
  nationality: Scalars['String'];
  passwordHash: Scalars['String'];
  phoneNumber: Scalars['String'];
  receivePromo: Scalars['Boolean'];
  tokenVersion: Scalars['Int'];
  userName: Scalars['String'];
};

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
  userName: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'LoginResponse', accessToken: string, user: { __typename?: 'UserSchema', email: string, passwordHash: string } } };

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'LoginResponse', accessToken: string, user: { __typename?: 'UserSchema', email: string, passwordHash: string } } };


export const SignUpDocument = gql`
    mutation SignUp($email: String!, $password: String!, $repeatPassword: String!, $userName: String!) {
  signUp(
    email: $email
    password: $password
    repeatPassword: $repeatPassword
    userName: $userName
  ) {
    user {
      email
      passwordHash
    }
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
    user {
      email
      passwordHash
    }
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