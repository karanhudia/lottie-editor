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

export type LottieFragment = { __typename?: 'Lottie'; json: any };

export type ResponseFragment = {
  __typename?: 'SocketAcknowledgement';
  code: number;
  status: string;
};

export type CreateLottieJsonMutationVariables = Exact<{
  editId: Scalars['ID']['input'];
  json?: InputMaybe<Scalars['JSON']['input']>;
}>;

export type CreateLottieJsonMutation = {
  __typename?: 'Mutation';
  createLottie?: { __typename?: 'SocketAcknowledgement'; code: number; status: string } | null;
};

export type FetchEditedLottieQueryVariables = Exact<{
  editId: Scalars['ID']['input'];
}>;

export type FetchEditedLottieQuery = {
  __typename?: 'Query';
  lottie?: { __typename?: 'Lottie'; json: any } | null;
};

export const LottieFragmentDoc = gql`
  fragment Lottie on Lottie {
    json
  }
`;
export const ResponseFragmentDoc = gql`
  fragment Response on SocketAcknowledgement {
    code
    status
  }
`;
export const CreateLottieJsonDocument = gql`
  mutation CreateLottieJson($editId: ID!, $json: JSON) {
    createLottie(uuid: $editId, json: $json) {
      ...Response
    }
  }
  ${ResponseFragmentDoc}
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
      ...Lottie
    }
  }
  ${LottieFragmentDoc}
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
  Fragment: {
    Lottie: 'Lottie',
    Response: 'Response',
  },
};

export const anAnimatedProperty = (
  overrides?: Partial<AnimatedProperty>,
  _relationshipsToOmit: Set<string> = new Set(),
): AnimatedProperty => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('AnimatedProperty');
  return {
    a: overrides && overrides.hasOwnProperty('a') ? overrides.a! : 119,
    ix: overrides && overrides.hasOwnProperty('ix') ? overrides.ix! : 9158,
    k:
      overrides && overrides.hasOwnProperty('k')
        ? overrides.k!
        : [
            relationshipsToOmit.has('Keyframe')
              ? ({} as Keyframe)
              : aKeyframe({}, relationshipsToOmit),
          ],
    l: overrides && overrides.hasOwnProperty('l') ? overrides.l! : 3872,
  };
};

export const anAsset = (
  overrides?: Partial<Asset>,
  _relationshipsToOmit: Set<string> = new Set(),
): Asset => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Asset');
  return {
    e: overrides && overrides.hasOwnProperty('e') ? overrides.e! : 6662,
    h: overrides && overrides.hasOwnProperty('h') ? overrides.h! : 1463,
    id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'omnis',
    layers:
      overrides && overrides.hasOwnProperty('layers')
        ? overrides.layers!
        : [relationshipsToOmit.has('Layer') ? ({} as Layer) : aLayer({}, relationshipsToOmit)],
    p: overrides && overrides.hasOwnProperty('p') ? overrides.p! : 'ducimus',
    u: overrides && overrides.hasOwnProperty('u') ? overrides.u! : 'qui',
    w: overrides && overrides.hasOwnProperty('w') ? overrides.w! : 3157,
  };
};

export const aColor = (
  overrides?: Partial<Color>,
  _relationshipsToOmit: Set<string> = new Set(),
): Color => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Color');
  return {
    a: overrides && overrides.hasOwnProperty('a') ? overrides.a! : 3239,
    ix: overrides && overrides.hasOwnProperty('ix') ? overrides.ix! : 4105,
    k: overrides && overrides.hasOwnProperty('k') ? overrides.k! : [7061],
  };
};

export const aColorPayload = (
  overrides?: Partial<ColorPayload>,
  _relationshipsToOmit: Set<string> = new Set(),
): ColorPayload => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ColorPayload');
  return {
    color: overrides && overrides.hasOwnProperty('color') ? overrides.color! : [2773],
    layer: overrides && overrides.hasOwnProperty('layer') ? overrides.layer! : [9261],
    shape: overrides && overrides.hasOwnProperty('shape') ? overrides.shape! : 8794,
    shapeItem: overrides && overrides.hasOwnProperty('shapeItem') ? overrides.shapeItem! : 1134,
  };
};

export const aCreateLottieMessage = (
  overrides?: Partial<CreateLottieMessage>,
  _relationshipsToOmit: Set<string> = new Set(),
): CreateLottieMessage => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CreateLottieMessage');
  return {
    payload:
      overrides && overrides.hasOwnProperty('payload')
        ? overrides.payload!
        : relationshipsToOmit.has('CreateLottiePayload')
          ? ({} as CreateLottiePayload)
          : aCreateLottiePayload({}, relationshipsToOmit),
    uuid: overrides && overrides.hasOwnProperty('uuid') ? overrides.uuid! : 'error',
  };
};

export const aCreateLottiePayload = (
  overrides?: Partial<CreateLottiePayload>,
  _relationshipsToOmit: Set<string> = new Set(),
): CreateLottiePayload => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CreateLottiePayload');
  return {
    json: overrides && overrides.hasOwnProperty('json') ? overrides.json! : 'dolorem',
  };
};

export const aDeleteLottieLayerMessage = (
  overrides?: Partial<DeleteLottieLayerMessage>,
  _relationshipsToOmit: Set<string> = new Set(),
): DeleteLottieLayerMessage => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('DeleteLottieLayerMessage');
  return {
    payload:
      overrides && overrides.hasOwnProperty('payload')
        ? overrides.payload!
        : relationshipsToOmit.has('LayerPayload')
          ? ({} as LayerPayload)
          : aLayerPayload({}, relationshipsToOmit),
    uuid: overrides && overrides.hasOwnProperty('uuid') ? overrides.uuid! : 'maxime',
  };
};

export const anEasing = (
  overrides?: Partial<Easing>,
  _relationshipsToOmit: Set<string> = new Set(),
): Easing => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Easing');
  return {
    x: overrides && overrides.hasOwnProperty('x') ? overrides.x! : [0.77],
    y: overrides && overrides.hasOwnProperty('y') ? overrides.y! : [2.03],
  };
};

export const aKeyframe = (
  overrides?: Partial<Keyframe>,
  _relationshipsToOmit: Set<string> = new Set(),
): Keyframe => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Keyframe');
  return {
    i:
      overrides && overrides.hasOwnProperty('i')
        ? overrides.i!
        : relationshipsToOmit.has('Easing')
          ? ({} as Easing)
          : anEasing({}, relationshipsToOmit),
    o:
      overrides && overrides.hasOwnProperty('o')
        ? overrides.o!
        : relationshipsToOmit.has('Easing')
          ? ({} as Easing)
          : anEasing({}, relationshipsToOmit),
    s: overrides && overrides.hasOwnProperty('s') ? overrides.s! : [2.3],
    t: overrides && overrides.hasOwnProperty('t') ? overrides.t! : 1491,
  };
};

export const aLayer = (
  overrides?: Partial<Layer>,
  _relationshipsToOmit: Set<string> = new Set(),
): Layer => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Layer');
  return {
    ao: overrides && overrides.hasOwnProperty('ao') ? overrides.ao! : 2601,
    bm: overrides && overrides.hasOwnProperty('bm') ? overrides.bm! : 6981,
    ct: overrides && overrides.hasOwnProperty('ct') ? overrides.ct! : 4629,
    ddd: overrides && overrides.hasOwnProperty('ddd') ? overrides.ddd! : 9464,
    ind: overrides && overrides.hasOwnProperty('ind') ? overrides.ind! : 8580,
    ip: overrides && overrides.hasOwnProperty('ip') ? overrides.ip! : 9164,
    ks:
      overrides && overrides.hasOwnProperty('ks')
        ? overrides.ks!
        : relationshipsToOmit.has('Transform')
          ? ({} as Transform)
          : aTransform({}, relationshipsToOmit),
    layers:
      overrides && overrides.hasOwnProperty('layers')
        ? overrides.layers!
        : [relationshipsToOmit.has('Layer') ? ({} as Layer) : aLayer({}, relationshipsToOmit)],
    nm: overrides && overrides.hasOwnProperty('nm') ? overrides.nm! : 'sed',
    op: overrides && overrides.hasOwnProperty('op') ? overrides.op! : 6257,
    shapes:
      overrides && overrides.hasOwnProperty('shapes')
        ? overrides.shapes!
        : [relationshipsToOmit.has('Shape') ? ({} as Shape) : aShape({}, relationshipsToOmit)],
    sr: overrides && overrides.hasOwnProperty('sr') ? overrides.sr! : 4.24,
    st: overrides && overrides.hasOwnProperty('st') ? overrides.st! : 7275,
    ty: overrides && overrides.hasOwnProperty('ty') ? overrides.ty! : 8476,
  };
};

export const aLayerPayload = (
  overrides?: Partial<LayerPayload>,
  _relationshipsToOmit: Set<string> = new Set(),
): LayerPayload => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('LayerPayload');
  return {
    layer: overrides && overrides.hasOwnProperty('layer') ? overrides.layer! : [9870],
  };
};

export const aLottie = (
  overrides?: Partial<Lottie>,
  _relationshipsToOmit: Set<string> = new Set(),
): Lottie => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Lottie');
  return {
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : '1970-01-13T01:22:26.309Z',
    json: overrides && overrides.hasOwnProperty('json') ? overrides.json! : 'quasi',
    updatedAt:
      overrides && overrides.hasOwnProperty('updatedAt')
        ? overrides.updatedAt!
        : '1970-01-04T09:33:08.290Z',
    uuid: overrides && overrides.hasOwnProperty('uuid') ? overrides.uuid! : 'quos',
  };
};

export const aLottieAnimation = (
  overrides?: Partial<LottieAnimation>,
  _relationshipsToOmit: Set<string> = new Set(),
): LottieAnimation => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('LottieAnimation');
  return {
    assets:
      overrides && overrides.hasOwnProperty('assets')
        ? overrides.assets!
        : [relationshipsToOmit.has('Asset') ? ({} as Asset) : anAsset({}, relationshipsToOmit)],
    ddd: overrides && overrides.hasOwnProperty('ddd') ? overrides.ddd! : 3533,
    fr: overrides && overrides.hasOwnProperty('fr') ? overrides.fr! : 0.14,
    h: overrides && overrides.hasOwnProperty('h') ? overrides.h! : 7564,
    ip: overrides && overrides.hasOwnProperty('ip') ? overrides.ip! : 8066,
    layers:
      overrides && overrides.hasOwnProperty('layers')
        ? overrides.layers!
        : [relationshipsToOmit.has('Layer') ? ({} as Layer) : aLayer({}, relationshipsToOmit)],
    nm: overrides && overrides.hasOwnProperty('nm') ? overrides.nm! : 'quo',
    op: overrides && overrides.hasOwnProperty('op') ? overrides.op! : 3227,
    v: overrides && overrides.hasOwnProperty('v') ? overrides.v! : 'quia',
    w: overrides && overrides.hasOwnProperty('w') ? overrides.w! : 1683,
  };
};

export const aMutation = (
  overrides?: Partial<Mutation>,
  _relationshipsToOmit: Set<string> = new Set(),
): Mutation => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Mutation');
  return {
    createLottie:
      overrides && overrides.hasOwnProperty('createLottie')
        ? overrides.createLottie!
        : relationshipsToOmit.has('SocketAcknowledgement')
          ? ({} as SocketAcknowledgement)
          : aSocketAcknowledgement({}, relationshipsToOmit),
  };
};

export const aProperty = (
  overrides?: Partial<Property>,
  _relationshipsToOmit: Set<string> = new Set(),
): Property => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Property');
  return {
    a: overrides && overrides.hasOwnProperty('a') ? overrides.a! : 5654,
    ix: overrides && overrides.hasOwnProperty('ix') ? overrides.ix! : 1194,
    k: overrides && overrides.hasOwnProperty('k') ? overrides.k! : 'hic',
  };
};

export const aQuery = (
  overrides?: Partial<Query>,
  _relationshipsToOmit: Set<string> = new Set(),
): Query => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Query');
  return {
    lottie:
      overrides && overrides.hasOwnProperty('lottie')
        ? overrides.lottie!
        : relationshipsToOmit.has('Lottie')
          ? ({} as Lottie)
          : aLottie({}, relationshipsToOmit),
  };
};

export const aScalePayload = (
  overrides?: Partial<ScalePayload>,
  _relationshipsToOmit: Set<string> = new Set(),
): ScalePayload => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ScalePayload');
  return {
    scale: overrides && overrides.hasOwnProperty('scale') ? overrides.scale! : 9.46,
  };
};

export const aShape = (
  overrides?: Partial<Shape>,
  _relationshipsToOmit: Set<string> = new Set(),
): Shape => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Shape');
  return {
    bm: overrides && overrides.hasOwnProperty('bm') ? overrides.bm! : 9050,
    cix: overrides && overrides.hasOwnProperty('cix') ? overrides.cix! : 7633,
    hd: overrides && overrides.hasOwnProperty('hd') ? overrides.hd! : true,
    it:
      overrides && overrides.hasOwnProperty('it')
        ? overrides.it!
        : [
            relationshipsToOmit.has('ShapeItem')
              ? ({} as ShapeItem)
              : aShapeItem({}, relationshipsToOmit),
          ],
    ix: overrides && overrides.hasOwnProperty('ix') ? overrides.ix! : 6960,
    mn: overrides && overrides.hasOwnProperty('mn') ? overrides.mn! : 'excepturi',
    nm: overrides && overrides.hasOwnProperty('nm') ? overrides.nm! : 'vel',
    np: overrides && overrides.hasOwnProperty('np') ? overrides.np! : 8628,
    ty: overrides && overrides.hasOwnProperty('ty') ? overrides.ty! : 'qui',
  };
};

export const aShapeItem = (
  overrides?: Partial<ShapeItem>,
  _relationshipsToOmit: Set<string> = new Set(),
): ShapeItem => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ShapeItem');
  return {
    c:
      overrides && overrides.hasOwnProperty('c')
        ? overrides.c!
        : relationshipsToOmit.has('Color')
          ? ({} as Color)
          : aColor({}, relationshipsToOmit),
    hd: overrides && overrides.hasOwnProperty('hd') ? overrides.hd! : true,
    ind: overrides && overrides.hasOwnProperty('ind') ? overrides.ind! : 6233,
    ix: overrides && overrides.hasOwnProperty('ix') ? overrides.ix! : 4165,
    ks:
      overrides && overrides.hasOwnProperty('ks')
        ? overrides.ks!
        : relationshipsToOmit.has('ShapeProperty')
          ? ({} as ShapeProperty)
          : aShapeProperty({}, relationshipsToOmit),
    mn: overrides && overrides.hasOwnProperty('mn') ? overrides.mn! : 'qui',
    nm: overrides && overrides.hasOwnProperty('nm') ? overrides.nm! : 'molestiae',
    ty: overrides && overrides.hasOwnProperty('ty') ? overrides.ty! : 'mollitia',
  };
};

export const aShapeKeyframe = (
  overrides?: Partial<ShapeKeyframe>,
  _relationshipsToOmit: Set<string> = new Set(),
): ShapeKeyframe => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ShapeKeyframe');
  return {
    c: overrides && overrides.hasOwnProperty('c') ? overrides.c! : true,
    i: overrides && overrides.hasOwnProperty('i') ? overrides.i! : [[2.47]],
    o: overrides && overrides.hasOwnProperty('o') ? overrides.o! : [[9.86]],
    v: overrides && overrides.hasOwnProperty('v') ? overrides.v! : [[2.51]],
  };
};

export const aShapeProperty = (
  overrides?: Partial<ShapeProperty>,
  _relationshipsToOmit: Set<string> = new Set(),
): ShapeProperty => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ShapeProperty');
  return {
    a: overrides && overrides.hasOwnProperty('a') ? overrides.a! : 637,
    ix: overrides && overrides.hasOwnProperty('ix') ? overrides.ix! : 3546,
    k:
      overrides && overrides.hasOwnProperty('k')
        ? overrides.k!
        : relationshipsToOmit.has('ShapeKeyframe')
          ? ({} as ShapeKeyframe)
          : aShapeKeyframe({}, relationshipsToOmit),
  };
};

export const aSocketAcknowledgement = (
  overrides?: Partial<SocketAcknowledgement>,
  _relationshipsToOmit: Set<string> = new Set(),
): SocketAcknowledgement => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('SocketAcknowledgement');
  return {
    code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 6146,
    status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'distinctio',
  };
};

export const aSpeedPayload = (
  overrides?: Partial<SpeedPayload>,
  _relationshipsToOmit: Set<string> = new Set(),
): SpeedPayload => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('SpeedPayload');
  return {
    frameRate: overrides && overrides.hasOwnProperty('frameRate') ? overrides.frameRate! : 6355,
  };
};

export const aTransform = (
  overrides?: Partial<Transform>,
  _relationshipsToOmit: Set<string> = new Set(),
): Transform => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Transform');
  return {
    a:
      overrides && overrides.hasOwnProperty('a')
        ? overrides.a!
        : relationshipsToOmit.has('Property')
          ? ({} as Property)
          : aProperty({}, relationshipsToOmit),
    ix: overrides && overrides.hasOwnProperty('ix') ? overrides.ix! : 9921,
    l: overrides && overrides.hasOwnProperty('l') ? overrides.l! : 6481,
    o:
      overrides && overrides.hasOwnProperty('o')
        ? overrides.o!
        : relationshipsToOmit.has('Property')
          ? ({} as Property)
          : aProperty({}, relationshipsToOmit),
    p:
      overrides && overrides.hasOwnProperty('p')
        ? overrides.p!
        : relationshipsToOmit.has('Property')
          ? ({} as Property)
          : aProperty({}, relationshipsToOmit),
    r:
      overrides && overrides.hasOwnProperty('r')
        ? overrides.r!
        : relationshipsToOmit.has('Property')
          ? ({} as Property)
          : aProperty({}, relationshipsToOmit),
    s:
      overrides && overrides.hasOwnProperty('s')
        ? overrides.s!
        : relationshipsToOmit.has('AnimatedProperty')
          ? ({} as AnimatedProperty)
          : anAnimatedProperty({}, relationshipsToOmit),
  };
};

export const anUpdateLottieColorMessage = (
  overrides?: Partial<UpdateLottieColorMessage>,
  _relationshipsToOmit: Set<string> = new Set(),
): UpdateLottieColorMessage => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UpdateLottieColorMessage');
  return {
    payload:
      overrides && overrides.hasOwnProperty('payload')
        ? overrides.payload!
        : relationshipsToOmit.has('ColorPayload')
          ? ({} as ColorPayload)
          : aColorPayload({}, relationshipsToOmit),
    uuid: overrides && overrides.hasOwnProperty('uuid') ? overrides.uuid! : 'architecto',
  };
};

export const anUpdateLottieScaleMessage = (
  overrides?: Partial<UpdateLottieScaleMessage>,
  _relationshipsToOmit: Set<string> = new Set(),
): UpdateLottieScaleMessage => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UpdateLottieScaleMessage');
  return {
    payload:
      overrides && overrides.hasOwnProperty('payload')
        ? overrides.payload!
        : relationshipsToOmit.has('ScalePayload')
          ? ({} as ScalePayload)
          : aScalePayload({}, relationshipsToOmit),
    uuid: overrides && overrides.hasOwnProperty('uuid') ? overrides.uuid! : 'aspernatur',
  };
};

export const anUpdateLottieSpeedMessage = (
  overrides?: Partial<UpdateLottieSpeedMessage>,
  _relationshipsToOmit: Set<string> = new Set(),
): UpdateLottieSpeedMessage => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UpdateLottieSpeedMessage');
  return {
    payload:
      overrides && overrides.hasOwnProperty('payload')
        ? overrides.payload!
        : relationshipsToOmit.has('SpeedPayload')
          ? ({} as SpeedPayload)
          : aSpeedPayload({}, relationshipsToOmit),
    uuid: overrides && overrides.hasOwnProperty('uuid') ? overrides.uuid! : 'aliquid',
  };
};
