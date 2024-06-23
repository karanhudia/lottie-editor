// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  File: { input: any; output: any };
  JSON: { input: any; output: any };
};

export type Lottie = {
  __typename?: 'Lottie';
  createdAt: Scalars['Date']['output'];
  json: Scalars['JSON']['output'];
  updatedAt: Scalars['Date']['output'];
  uuid: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  lottie?: Maybe<Lottie>;
};

export type QueryLottieArgs = {
  uuid: Scalars['ID']['input'];
};

export type FetchEditedLottieQueryVariables = Exact<{
  editId: Scalars['ID']['input'];
}>;

export type FetchEditedLottieQuery = {
  __typename?: 'Query';
  lottie?: { __typename?: 'Lottie'; json: any } | null;
};

export const FetchEditedLottieDocument = gql`
  query fetchEditedLottie($editId: ID!) {
    lottie(uuid: $editId) {
      json
    }
  }
`;
export type FetchEditedLottieProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    FetchEditedLottieQuery,
    FetchEditedLottieQueryVariables
  >;
} & TChildProps;
export function withFetchEditedLottie<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchEditedLottieQuery,
    FetchEditedLottieQueryVariables,
    FetchEditedLottieProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FetchEditedLottieQuery,
    FetchEditedLottieQueryVariables,
    FetchEditedLottieProps<TChildProps, TDataName>
  >(FetchEditedLottieDocument, {
    alias: 'fetchEditedLottie',
    ...operationOptions,
  });
}

/**
 * __useFetchEditedLottieQuery__
 *
 * To run a query within a React component, call `useFetchEditedLottieQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchEditedLottieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchEditedLottieQuery({
 *   variables: {
 *      editId: // value for 'editId'
 *   },
 * });
 */
export function useFetchEditedLottieQuery(
  baseOptions: Apollo.QueryHookOptions<FetchEditedLottieQuery, FetchEditedLottieQueryVariables> &
    ({ variables: FetchEditedLottieQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchEditedLottieQuery, FetchEditedLottieQueryVariables>(
    FetchEditedLottieDocument,
    options,
  );
}
export function useFetchEditedLottieLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchEditedLottieQuery,
    FetchEditedLottieQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchEditedLottieQuery, FetchEditedLottieQueryVariables>(
    FetchEditedLottieDocument,
    options,
  );
}
export function useFetchEditedLottieSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    FetchEditedLottieQuery,
    FetchEditedLottieQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FetchEditedLottieQuery, FetchEditedLottieQueryVariables>(
    FetchEditedLottieDocument,
    options,
  );
}
export type FetchEditedLottieQueryHookResult = ReturnType<typeof useFetchEditedLottieQuery>;
export type FetchEditedLottieLazyQueryHookResult = ReturnType<typeof useFetchEditedLottieLazyQuery>;
export type FetchEditedLottieSuspenseQueryHookResult = ReturnType<
  typeof useFetchEditedLottieSuspenseQuery
>;
export type FetchEditedLottieQueryResult = Apollo.QueryResult<
  FetchEditedLottieQuery,
  FetchEditedLottieQueryVariables
>;
export const namedOperations = {
  Query: {
    fetchEditedLottie: 'fetchEditedLottie',
  },
};
