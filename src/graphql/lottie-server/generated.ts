// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */
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

export type AnimatedProperty = {
  __typename?: 'AnimatedProperty';
  a: Scalars['Int']['output'];
  ix: Scalars['Int']['output'];
  k: Array<Keyframe>;
  l?: Maybe<Scalars['Int']['output']>;
};

export type Asset = {
  __typename?: 'Asset';
  e?: Maybe<Scalars['Int']['output']>;
  h?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  layers?: Maybe<Array<Maybe<Layer>>>;
  p?: Maybe<Scalars['String']['output']>;
  u?: Maybe<Scalars['String']['output']>;
  w?: Maybe<Scalars['Int']['output']>;
};

export type Color = {
  __typename?: 'Color';
  a: Scalars['Int']['output'];
  ix: Scalars['Int']['output'];
  k: Array<Scalars['Int']['output']>;
};

export type ColorPayload = {
  __typename?: 'ColorPayload';
  color: Array<Scalars['Int']['output']>;
  layer: Array<Scalars['Int']['output']>;
  shape: Scalars['Int']['output'];
  shapeItem: Scalars['Int']['output'];
};

export type CreateLottieMessage = {
  __typename?: 'CreateLottieMessage';
  payload?: Maybe<CreateLottiePayload>;
  uuid: Scalars['String']['output'];
};

export type CreateLottiePayload = {
  __typename?: 'CreateLottiePayload';
  json: Scalars['JSON']['output'];
};

export type DeleteLottieLayerMessage = {
  __typename?: 'DeleteLottieLayerMessage';
  payload: LayerPayload;
  uuid: Scalars['String']['output'];
};

export type Easing = {
  __typename?: 'Easing';
  x: Array<Scalars['Float']['output']>;
  y: Array<Scalars['Float']['output']>;
};

export type Keyframe = {
  __typename?: 'Keyframe';
  i: Easing;
  o: Easing;
  s: Array<Scalars['Float']['output']>;
  t: Scalars['Int']['output'];
};

export type Layer = {
  __typename?: 'Layer';
  ao?: Maybe<Scalars['Int']['output']>;
  bm: Scalars['Int']['output'];
  ct?: Maybe<Scalars['Int']['output']>;
  ddd: Scalars['Int']['output'];
  ind: Scalars['Int']['output'];
  ip: Scalars['Int']['output'];
  ks: Transform;
  layers?: Maybe<Array<Layer>>;
  nm: Scalars['String']['output'];
  op: Scalars['Int']['output'];
  shapes?: Maybe<Array<Shape>>;
  sr: Scalars['Float']['output'];
  st: Scalars['Int']['output'];
  ty: Scalars['Int']['output'];
};

export type LayerPayload = {
  __typename?: 'LayerPayload';
  layer: Array<Scalars['Int']['output']>;
};

export type Lottie = {
  __typename?: 'Lottie';
  createdAt: Scalars['Date']['output'];
  json: Scalars['JSON']['output'];
  updatedAt: Scalars['Date']['output'];
  uuid: Scalars['String']['output'];
};

export type LottieAnimation = {
  __typename?: 'LottieAnimation';
  assets: Array<Asset>;
  ddd: Scalars['Int']['output'];
  fr: Scalars['Float']['output'];
  h: Scalars['Int']['output'];
  ip: Scalars['Int']['output'];
  layers: Array<Layer>;
  nm: Scalars['String']['output'];
  op: Scalars['Int']['output'];
  v: Scalars['String']['output'];
  w: Scalars['Int']['output'];
};

export enum LottieSocketEvents {
  CreateJson = 'Create_Json',
  UpdateJson = 'Update_Json',
}

export type Mutation = {
  __typename?: 'Mutation';
  createLottie?: Maybe<SocketAcknowledgement>;
};

export type MutationCreateLottieArgs = {
  json?: InputMaybe<Scalars['JSON']['input']>;
  uuid: Scalars['ID']['input'];
};

export type Property = {
  __typename?: 'Property';
  a: Scalars['Int']['output'];
  ix: Scalars['Int']['output'];
  k: Scalars['JSON']['output'];
};

export type Query = {
  __typename?: 'Query';
  lottie?: Maybe<Lottie>;
};

export type QueryLottieArgs = {
  uuid: Scalars['ID']['input'];
};

export type ScalePayload = {
  __typename?: 'ScalePayload';
  scale: Scalars['Float']['output'];
};

export type Shape = {
  __typename?: 'Shape';
  bm: Scalars['Int']['output'];
  cix: Scalars['Int']['output'];
  hd: Scalars['Boolean']['output'];
  it?: Maybe<Array<Maybe<ShapeItem>>>;
  ix: Scalars['Int']['output'];
  mn: Scalars['String']['output'];
  nm: Scalars['String']['output'];
  np: Scalars['Int']['output'];
  ty: Scalars['String']['output'];
};

export type ShapeItem = {
  __typename?: 'ShapeItem';
  c?: Maybe<Color>;
  hd: Scalars['Boolean']['output'];
  ind: Scalars['Int']['output'];
  ix: Scalars['Int']['output'];
  ks?: Maybe<ShapeProperty>;
  mn: Scalars['String']['output'];
  nm: Scalars['String']['output'];
  ty: Scalars['String']['output'];
};

export type ShapeKeyframe = {
  __typename?: 'ShapeKeyframe';
  c: Scalars['Boolean']['output'];
  i: Array<Array<Scalars['Float']['output']>>;
  o: Array<Array<Scalars['Float']['output']>>;
  v: Array<Array<Scalars['Float']['output']>>;
};

export type ShapeProperty = {
  __typename?: 'ShapeProperty';
  a: Scalars['Int']['output'];
  ix: Scalars['Int']['output'];
  k: ShapeKeyframe;
};

export type SocketAcknowledgement = {
  __typename?: 'SocketAcknowledgement';
  code: Scalars['Int']['output'];
  status: Scalars['String']['output'];
};

export type SpeedPayload = {
  __typename?: 'SpeedPayload';
  frameRate: Scalars['Int']['output'];
};

export type Transform = {
  __typename?: 'Transform';
  a: Property;
  ix?: Maybe<Scalars['Int']['output']>;
  l?: Maybe<Scalars['Int']['output']>;
  o: Property;
  p: Property;
  r: Property;
  s: AnimatedProperty;
};

export type UpdateLottieColorMessage = {
  __typename?: 'UpdateLottieColorMessage';
  payload: ColorPayload;
  uuid: Scalars['String']['output'];
};

export type UpdateLottieMessage =
  | DeleteLottieLayerMessage
  | UpdateLottieColorMessage
  | UpdateLottieScaleMessage
  | UpdateLottieSpeedMessage;

export type UpdateLottieScaleMessage = {
  __typename?: 'UpdateLottieScaleMessage';
  payload: ScalePayload;
  uuid: Scalars['String']['output'];
};

export type UpdateLottieSpeedMessage = {
  __typename?: 'UpdateLottieSpeedMessage';
  payload: SpeedPayload;
  uuid: Scalars['String']['output'];
};

export type CreateLottieJsonMutationVariables = Exact<{
  editId: Scalars['ID']['input'];
  json?: InputMaybe<Scalars['JSON']['input']>;
}>;

export type CreateLottieJsonMutation = {
  __typename?: 'Mutation';
  createLottie?: { __typename?: 'SocketAcknowledgement'; status: string; code: number } | null;
};

export type FetchEditedLottieQueryVariables = Exact<{
  editId: Scalars['ID']['input'];
}>;

export type FetchEditedLottieQuery = {
  __typename?: 'Query';
  lottie?: { __typename?: 'Lottie'; json: any } | null;
};

export const CreateLottieJsonDocument = gql`
  mutation CreateLottieJson($editId: ID!, $json: JSON) {
    createLottie(uuid: $editId, json: $json) {
      status
      code
    }
  }
`;
export type CreateLottieJsonMutationFn = Apollo.MutationFunction<
  CreateLottieJsonMutation,
  CreateLottieJsonMutationVariables
>;
export type CreateLottieJsonProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<
    CreateLottieJsonMutation,
    CreateLottieJsonMutationVariables
  >;
} & TChildProps;
export function withCreateLottieJson<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateLottieJsonMutation,
    CreateLottieJsonMutationVariables,
    CreateLottieJsonProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateLottieJsonMutation,
    CreateLottieJsonMutationVariables,
    CreateLottieJsonProps<TChildProps, TDataName>
  >(CreateLottieJsonDocument, {
    alias: 'createLottieJson',
    ...operationOptions,
  });
}

/**
 * __useCreateLottieJsonMutation__
 *
 * To run a mutation, you first call `useCreateLottieJsonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLottieJsonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLottieJsonMutation, { data, loading, error }] = useCreateLottieJsonMutation({
 *   variables: {
 *      editId: // value for 'editId'
 *      json: // value for 'json'
 *   },
 * });
 */
export function useCreateLottieJsonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLottieJsonMutation,
    CreateLottieJsonMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateLottieJsonMutation, CreateLottieJsonMutationVariables>(
    CreateLottieJsonDocument,
    options,
  );
}
export type CreateLottieJsonMutationHookResult = ReturnType<typeof useCreateLottieJsonMutation>;
export type CreateLottieJsonMutationResult = Apollo.MutationResult<CreateLottieJsonMutation>;
export type CreateLottieJsonMutationOptions = Apollo.BaseMutationOptions<
  CreateLottieJsonMutation,
  CreateLottieJsonMutationVariables
>;
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
  Mutation: {
    CreateLottieJson: 'CreateLottieJson',
  },
};
