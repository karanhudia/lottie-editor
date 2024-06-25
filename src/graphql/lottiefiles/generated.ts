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
  DateTime: { input: any; output: any };
  IntOrString: { input: any; output: any };
  JSON: { input: any; output: any };
  Point: { input: any; output: any };
  QuerySortOptions: { input: any; output: any };
};

export type Account = {
  __typename?: 'Account';
  addressLineOne?: Maybe<Scalars['String']['output']>;
  addressLineTwo?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Whether the account pays for a subscription to any workspace */
  isPaid: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethodId: Scalars['String']['output'];
  paymentProvider: PaymentProvider;
  paymentProviderCustomerId?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  taxCountry?: Maybe<Scalars['String']['output']>;
  taxId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

/** Account delete request types for account deletion requests */
export enum AccountDeleteRequestType {
  CancelRequest = 'CANCEL_REQUEST',
  RequestDelete = 'REQUEST_DELETE',
}

export type AccountInput = {
  addressLineOne?: InputMaybe<Scalars['String']['input']>;
  addressLineTwo?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  taxCountry?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
};

export type AccountTaxInput = {
  taxCountry: Scalars['String']['input'];
  taxId: Scalars['String']['input'];
};

export type AnimationFilter = {
  canvaCompatible?: InputMaybe<Scalars['Boolean']['input']>;
  creatorCompatible?: InputMaybe<Scalars['Boolean']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
};

export type AnimationReportInput = {
  animationId: Scalars['Int']['input'];
  body?: InputMaybe<Scalars['String']['input']>;
  complaintType: ComplaintType;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Animator = {
  __typename?: 'Animator';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type AnimatorConnection = {
  __typename?: 'AnimatorConnection';
  /** A list edges. */
  edges: Array<AnimatorEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type AnimatorEdge = {
  __typename?: 'AnimatorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Animator;
};

export type Attributes = {
  __typename?: 'Attributes';
  /** Size of the uploaded file */
  contentLength?: Maybe<Scalars['String']['output']>;
  /** Type of uploaded file */
  contentType?: Maybe<Scalars['String']['output']>;
  /** S3 Version Id */
  s3VersionId?: Maybe<Scalars['String']['output']>;
};

export type Authentication = {
  __typename?: 'Authentication';
  /** The token to include in future requests to this API. */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** The ISO Date string in the format "2022-12-06T13:33:08.000Z". */
  expiresAt: Scalars['DateTime']['output'];
  /** If this is not null, the client must redirect to this URL. */
  redirectToURL?: Maybe<Scalars['String']['output']>;
  /** Returned only from the `socialLogin` mutation. Will be true if a LottieFiles account was created in the `socialLogin`. */
  socialLoginAccountCreated?: Maybe<Scalars['Boolean']['output']>;
  /** The token type, e.g. "Bearer". */
  tokenType: Scalars['String']['output'];
};

export type AvailablePlanUpgrade = {
  __typename?: 'AvailablePlanUpgrade';
  plan: PlanObject;
  price: WorkspaceMemberPrice;
};

export type BackgroundImageObject = {
  __typename?: 'BackgroundImageObject';
  fileKey: Scalars['String']['output'];
  preSignedUploadURL: Scalars['String']['output'];
  publicReadURL: Scalars['String']['output'];
};

export type BillingPackage = {
  __typename?: 'BillingPackage';
  /** Get the default active pricing for a billing package. */
  billingPackagePrice?: Maybe<BillingPackagePrice>;
  createdAt: Scalars['DateTime']['output'];
  defaultEntitlements?: Maybe<Array<PlanEntitlement>>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isBillable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  planPosition: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  stripeProductId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BillingPackageConnection = {
  __typename?: 'BillingPackageConnection';
  /** A list edges. */
  edges: Array<BillingPackageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type BillingPackageEdge = {
  __typename?: 'BillingPackageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: BillingPackage;
};

export type BillingPackagePrice = {
  __typename?: 'BillingPackagePrice';
  billingCycle: Scalars['String']['output'];
  billingPackage: BillingPackage;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  endsAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isDefault: Scalars['Boolean']['output'];
  minSeatCount: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  planId: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  startsAt: Scalars['DateTime']['output'];
  stripePriceId: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Blog = {
  __typename?: 'Blog';
  category?: Maybe<BlogCategory>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  link: Scalars['String']['output'];
  postedAt: Scalars['DateTime']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type BlogCategory = {
  __typename?: 'BlogCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type BlogConnection = {
  __typename?: 'BlogConnection';
  /** A list edges. */
  edges: Array<BlogEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type BlogEdge = {
  __typename?: 'BlogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Blog;
};

export type BrandObject = {
  __typename?: 'BrandObject';
  iconFileKey: Scalars['String']['output'];
  iconPublicReadURL: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CancelReason = {
  __typename?: 'CancelReason';
  createdAt: Scalars['DateTime']['output'];
  disabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  order: Scalars['Float']['output'];
  requireReasonText: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type CardMetadata = {
  __typename?: 'CardMetadata';
  brand: Scalars['String']['output'];
  expMonth: Scalars['Float']['output'];
  expYear: Scalars['Float']['output'];
  last4: Scalars['String']['output'];
};

export type CheckoutObject = {
  __typename?: 'CheckoutObject';
  clientSecret: Scalars['String']['output'];
  sessionId: Scalars['String']['output'];
};

export type CollectionAnimationPreview = {
  __typename?: 'CollectionAnimationPreview';
  image: Scalars['String']['output'];
};

/** Collection animation types */
export enum CollectionAnimationType {
  All = 'ALL',
  Animation = 'ANIMATION',
  Sticker = 'STICKER',
}

export type CollectionAnimationTypeInput = {
  animationType?: InputMaybe<CollectionAnimationType>;
};

export type CollectionInput = {
  title: Scalars['String']['input'];
  type?: InputMaybe<CollectionType>;
};

/** Collection types */
export enum CollectionType {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Color = {
  __typename?: 'Color';
  hex: Scalars['String']['output'];
};

export type ColorPalette = {
  __typename?: 'ColorPalette';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  palette: Array<Color>;
};

export type ColorPaletteConnection = {
  __typename?: 'ColorPaletteConnection';
  /** A list edges. */
  edges: Array<ColorPaletteEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ColorPaletteEdge = {
  __typename?: 'ColorPaletteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ColorPalette;
};

/** A comment on an entity */
export type Comment = {
  __typename?: 'Comment';
  attachments?: Maybe<Array<CommentAttachment>>;
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  extra?: Maybe<CommentExtra>;
  guestName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mentions?: Maybe<Array<CommentUserMention>>;
  nodeId: Scalars['Int']['output'];
  /** The parent comment */
  parent?: Maybe<Comment>;
  parentId?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  reactions?: Maybe<Array<CommentReaction>>;
  readReceipts?: Maybe<Array<CommentReadReceipt>>;
  replyCount: Scalars['Float']['output'];
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user who resolved the comment */
  resolvedBy?: Maybe<CommentUser>;
  resolvedById?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** The user who authored the comment */
  user?: Maybe<CommentUser>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** The annotation for a comment */
export type CommentAnnotation = {
  __typename?: 'CommentAnnotation';
  ratio?: Maybe<Array<Scalars['Float']['output']>>;
  type: CommentAnnotationType;
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type CommentAnnotationInput = {
  ratio?: InputMaybe<Array<Scalars['Float']['input']>>;
  type: CommentAnnotationType;
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

/** The annotation type */
export enum CommentAnnotationType {
  Point = 'Point',
}

export type CommentAttachment = {
  __typename?: 'CommentAttachment';
  filename: Scalars['String']['output'];
  key: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  /** A list edges. */
  edges: Array<CommentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type CommentCreateInput = {
  body: Scalars['String']['input'];
  entityId: Scalars['ID']['input'];
  extra?: InputMaybe<CommentExtraInput>;
  /** The name to use if the user is not authenticated. Ignored if user is authenticated. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The entity type */
  type: CommentableEntityType;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Comment;
};

/** Extra properties in a comment */
export type CommentExtra = {
  __typename?: 'CommentExtra';
  annotation?: Maybe<CommentAnnotation>;
  frame: Scalars['Int']['output'];
  type: CommentExtraType;
};

export type CommentExtraInput = {
  annotation?: InputMaybe<CommentAnnotationInput>;
  frame: Scalars['Int']['input'];
  type: CommentExtraType;
};

/** Comment extra type */
export enum CommentExtraType {
  Annotation = 'Annotation',
  Keyframe = 'Keyframe',
}

export type CommentInput = {
  content: Scalars['String']['input'];
  frame: Scalars['Int']['input'];
  marker?: InputMaybe<Scalars['String']['input']>;
};

/** The type of mention */
export enum CommentMentionType {
  UserMention = 'UserMention',
}

export type CommentReaction = {
  __typename?: 'CommentReaction';
  createdAt: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
  /** User who made the reaction */
  user?: Maybe<CommentUser>;
  userId: Scalars['String']['output'];
};

export type CommentReadReceipt = {
  __typename?: 'CommentReadReceipt';
  createdAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type CommentUser = {
  __typename?: 'CommentUser';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** A mentioned user */
export type CommentUserMention = {
  __typename?: 'CommentUserMention';
  /** The mention type: Always UserMention */
  type: CommentMentionType;
  /** The user that was mentioned */
  user?: Maybe<CommentUser>;
  /** The user id */
  userId: Scalars['String']['output'];
};

export enum CommentableEntityType {
  FileVersion = 'FileVersion',
}

/** Complaint types for report animation */
export enum ComplaintType {
  GuidelinesViolation = 'GUIDELINES_VIOLATION',
  Other = 'OTHER',
  Plagiarism = 'PLAGIARISM',
}

/** Contract types for hire requests */
export enum ContractType {
  Freelance = 'FREELANCE',
  Fulltime = 'FULLTIME',
}

export type CreateEditorFileEditCounterInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
};

export type CreateEnterpriseOrganizationInput = {
  domains: Array<Scalars['String']['input']>;
  organizationName: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type CreateFolderInput = {
  folderId?: InputMaybe<Scalars['String']['input']>;
  isFolder?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CreateUploadRequestInput = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['Boolean']['input']>;
  previews?: InputMaybe<Scalars['Boolean']['input']>;
  thumbnails?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  variationType?: InputMaybe<Scalars['String']['input']>;
  versionId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWorkspaceColorPaletteInput = {
  colors: Array<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type DirectoryUser = {
  __typename?: 'DirectoryUser';
  /** The id of the directory user */
  directoryUserId: Scalars['String']['output'];
  /** The email of the directory user */
  email: Scalars['String']['output'];
  /** The Kratos user id of the directory user */
  kratosUserId: Scalars['String']['output'];
  /** The organization id that the directory user belongs to */
  organizationId: Scalars['String']['output'];
};

/** Duration filter types for popular animations */
export enum DurationFilterType {
  AllTime = 'ALL_TIME',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
}

export type EnterpriseOrganization = {
  __typename?: 'EnterpriseOrganization';
  directoryGroupMappings?: Maybe<Array<EnterpriseOrganizationDirectoryMappings>>;
  directorySyncStatus: Scalars['String']['output'];
  domains: Array<EnterpriseOrganizationDomain>;
  id: Scalars['String']['output'];
  internalId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ssoStatus: Scalars['String']['output'];
};

export type EnterpriseOrganizationDirectoryGroupInput = {
  groupMappings?: InputMaybe<Array<EnterpriseOrganizationGroupMapInput>>;
  workspaceId: Scalars['String']['input'];
};

export type EnterpriseOrganizationDirectoryMappings = {
  __typename?: 'EnterpriseOrganizationDirectoryMappings';
  id: Scalars['String']['output'];
  internalName: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type EnterpriseOrganizationDomain = {
  __typename?: 'EnterpriseOrganizationDomain';
  domain: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type EnterpriseOrganizationDomainsInput = {
  domains: Array<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type EnterpriseOrganizationGroupMapInput = {
  id: Scalars['String']['input'];
  internalName: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type EnterpriseOrganizationGroupUser = {
  __typename?: 'EnterpriseOrganizationGroupUser';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type FeatureObject = {
  __typename?: 'FeatureObject';
  currentCount?: Maybe<Scalars['Int']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type File = {
  __typename?: 'File';
  /** Get the permission scopes for animation for the current user */
  animationPermissionScopes: Array<Scalars['String']['output']>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdByUserId: Scalars['String']['output'];
  /** Get the access of the current logged in user */
  currentUserAccess?: Maybe<Scalars['String']['output']>;
  currentVersion: FileVersion;
  currentVersionId?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionModifiedBy?: Maybe<User>;
  descriptionModifiedByUserId?: Maybe<Scalars['String']['output']>;
  descriptionUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  editHash?: Maybe<Scalars['String']['output']>;
  /** Key of featured file */
  featuredFileKey?: Maybe<Scalars['String']['output']>;
  features: Array<FeatureObject>;
  fileObject?: Maybe<FileObject>;
  folder?: Maybe<Folder>;
  folderId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isHidden: Scalars['Boolean']['output'];
  modifiedBy?: Maybe<User>;
  modifiedByUserId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['ID']['output'];
  /** Get the public asset of the file. */
  publicAsset?: Maybe<PublicAsset>;
  showDescOnCollection?: Maybe<Scalars['Boolean']['output']>;
  sourceFileKey?: Maybe<Scalars['String']['output']>;
  sourceFileType?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FileType>;
  updatedAt: Scalars['DateTime']['output'];
  upgradeRequired?: Maybe<Scalars['Boolean']['output']>;
  /** Users with permissions the file has access */
  userResourcePermissions?: Maybe<UserResourcePermission>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  /** A list edges. */
  edges: Array<FileEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type FileCreateFallbackInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  fileKey: Scalars['String']['input'];
  folderId?: InputMaybe<Scalars['String']['input']>;
  handbackId?: InputMaybe<Scalars['String']['input']>;
  isFolder?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  isMyPrivateAnimation?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};

export type FileCreateInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  editorKey?: InputMaybe<Scalars['String']['input']>;
  fileKey: Scalars['String']['input'];
  fileVersionId: Scalars['String']['input'];
  folderId?: InputMaybe<Scalars['String']['input']>;
  handbackId?: InputMaybe<Scalars['String']['input']>;
  isFolder?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  isMyPrivateAnimation?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};

export type FileDescriptionUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  showDescOnCollection: Scalars['Boolean']['input'];
};

export type FileDuplicateInput = {
  folderId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  projectId?: InputMaybe<Scalars['String']['input']>;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: File;
};

export type FileHandback = {
  __typename?: 'FileHandback';
  assetUrl: Scalars['String']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fileId: Scalars['String']['output'];
  fileVersionId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata: Scalars['JSON']['output'];
  newFileId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

/** File */
export type FileObject = {
  __typename?: 'FileObject';
  /** Attributes generated */
  attributes?: Maybe<Attributes>;
  /** Updated Date */
  cleanedAt: Scalars['DateTime']['output'];
  /** Thumbanils generated */
  contents: Scalars['JSON']['output'];
  /** Created Date */
  createdAt: Scalars['DateTime']['output'];
  /** Updated Date */
  deletedAt: Scalars['DateTime']['output'];
  /** File variations */
  fileVariations?: Maybe<Array<FileVariation>>;
  /** Uniquely generated filename */
  filename: Scalars['String']['output'];
  /** Unique file key for a file */
  key: Scalars['String']['output'];
  metadata?: Maybe<Metadata>;
  /** Previews  generated */
  previews?: Maybe<Preview>;
  /** Status of uploaded file */
  status: Scalars['String']['output'];
  /** Subversion ID for a file. If it is a main version (i.e. not a subversion), it will be "0". */
  subVersionId: Scalars['String']['output'];
  thumbnails?: Maybe<Thumbnail>;
  /** Updated Date */
  updatedAt: Scalars['DateTime']['output'];
  /** The url to uploaded  file */
  url: Scalars['String']['output'];
  /** Version ID for a file */
  versionId: Scalars['String']['output'];
};

/** File */
export type FileObjectRegenerate = {
  __typename?: 'FileObjectRegenerate';
  /** Attributes generated */
  attributes?: Maybe<Attributes>;
  /** Updated Date */
  cleanedAt: Scalars['DateTime']['output'];
  /** Thumbanils generated */
  contents: Scalars['JSON']['output'];
  /** Created Date */
  createdAt: Scalars['DateTime']['output'];
  /** Updated Date */
  deletedAt: Scalars['DateTime']['output'];
  /** File variations */
  fileVariations?: Maybe<Array<FileVariation>>;
  /** Uniquely generated filename */
  filename: Scalars['String']['output'];
  /** Unique file key for a file */
  key: Scalars['String']['output'];
  metadata?: Maybe<Metadata>;
  /** Status of uploaded file */
  status: Scalars['String']['output'];
  /** Subversion ID for a file. If it is a main version (i.e. not a subversion), it will be "0". */
  subVersionId: Scalars['String']['output'];
  /** The job id of thumbnails */
  thumbnailJobId?: Maybe<Scalars['String']['output']>;
  /** Updated Date */
  updatedAt: Scalars['DateTime']['output'];
  /** The url to uploaded  file */
  url: Scalars['String']['output'];
  /** Version ID for a file */
  versionId: Scalars['String']['output'];
};

export enum FileOptimizationStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processed = 'PROCESSED',
}

export type FilePreviewGenerate = {
  __typename?: 'FilePreviewGenerate';
  /** Unique ID of file variation */
  id?: Maybe<Scalars['String']['output']>;
  /** Job Id for file preview generation process. */
  jobId?: Maybe<Scalars['String']['output']>;
};

export type FilePreviewGenerateStatus = {
  __typename?: 'FilePreviewGenerateStatus';
  /** File preview generation status */
  status?: Maybe<PreviewGenerationStatus>;
};

export type FileRenameInput = {
  name: Scalars['String']['input'];
};

/** Allowed status for files */
export enum FileStatus {
  Approved = 'Approved',
  InProgress = 'InProgress',
  NeedsReview = 'NeedsReview',
  Shipped = 'Shipped',
}

/** System classified file types */
export enum FileType {
  Animation = 'Animation',
  CreatorFile = 'CreatorFile',
  Folder = 'Folder',
}

export type FileUploadRequest = {
  __typename?: 'FileUploadRequest';
  fields: Scalars['JSON']['output'];
  key: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type FileUploadRequestStatus = {
  __typename?: 'FileUploadRequestStatus';
  estimatedTimeRemaining?: Maybe<Scalars['String']['output']>;
  fields: Scalars['JSON']['output'];
  key: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  progressPercentage?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type FileVariant = {
  __typename?: 'FileVariant';
  contentType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fileKey: Scalars['String']['output'];
  fileObject?: Maybe<FileObject>;
  fileSize: Scalars['Float']['output'];
  fileVariation?: Maybe<FileVariation>;
  fileVariationId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isOptimized: Scalars['Boolean']['output'];
  jobId?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<FileVariantMetadata>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
  workflowFileId: Scalars['String']['output'];
  workflowFileVersionId: Scalars['String']['output'];
};

export type FileVariantInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  format: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  transparency?: InputMaybe<Scalars['Boolean']['input']>;
  width: Scalars['Int']['input'];
};

export type FileVariantMetadata = {
  __typename?: 'FileVariantMetadata';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  fps?: Maybe<Scalars['Int']['output']>;
  height: Scalars['Int']['output'];
  /** @deprecated `backgroundColor` is set to 'transparent' if this variation has transparency */
  transparency?: Maybe<Scalars['Boolean']['output']>;
  width: Scalars['Int']['output'];
};

export type FileVariantUpdateInput = {
  fileSize: Scalars['Float']['input'];
  fileVariationId: Scalars['String']['input'];
};

export type FileVariation = {
  __typename?: 'FileVariation';
  /** Attributes generated */
  attributes?: Maybe<Attributes>;
  /** Created defaultValue */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** File Key for the source file  */
  fileKey?: Maybe<Scalars['String']['output']>;
  /** File Version Id of the source file */
  fileVersionId?: Maybe<Scalars['String']['output']>;
  /** Unique filename of the variantion */
  filename?: Maybe<Scalars['String']['output']>;
  /** Unique ID of file variation */
  id?: Maybe<Scalars['String']['output']>;
  /** Metadata for file variation */
  metadata?: Maybe<VariationMetadata>;
  /** Status of file variation */
  status?: Maybe<Scalars['String']['output']>;
  /** Type of variation. */
  type?: Maybe<Scalars['String']['output']>;
  /** Url of the file variation */
  url?: Maybe<Scalars['String']['output']>;
};

export type FileVersion = {
  __typename?: 'FileVersion';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdByUserId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fileId: Scalars['ID']['output'];
  fileKey: Scalars['String']['output'];
  fileObject?: Maybe<FileObject>;
  fileSystemSubVersionId?: Maybe<Scalars['String']['output']>;
  fileVersionId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String']['output'];
  playSegment: Array<PlaySegment>;
  sourceFileId?: Maybe<Scalars['ID']['output']>;
  subVersionNumber?: Maybe<Scalars['Float']['output']>;
  subVersions: Array<FileVersion>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['DateTime']['output'];
  versionLabel: Scalars['Float']['output'];
  versionNumber: Scalars['Float']['output'];
};

export type FileVersionConnection = {
  __typename?: 'FileVersionConnection';
  /** A list edges. */
  edges: Array<FileVersionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type FileVersionCreateFallbackInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  fileId: Scalars['ID']['input'];
  fileKey: Scalars['String']['input'];
  handbackId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type FileVersionCreateInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  fileId: Scalars['ID']['input'];
  fileKey: Scalars['String']['input'];
  fileSubVersionId?: InputMaybe<Scalars['String']['input']>;
  fileVersionId: Scalars['String']['input'];
  handbackId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FileVersionEdge = {
  __typename?: 'FileVersionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: FileVersion;
};

export type FileVersionOptimizeJob = {
  __typename?: 'FileVersionOptimizeJob';
  id: Scalars['ID']['output'];
  status: Scalars['String']['output'];
};

export type Folder = {
  __typename?: 'Folder';
  /** Get the permission scopes for animation for the current user */
  animationPermissionScopes: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdByUserId: Scalars['String']['output'];
  /** Get the access of the current logged in user */
  currentUserAccess?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedFilesCount?: Maybe<Scalars['Float']['output']>;
  /** Keys of featured files list */
  featuredFileKeys?: Maybe<Array<Scalars['String']['output']>>;
  features: Array<FeatureObject>;
  filesCount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isHidden: Scalars['Boolean']['output'];
  modifiedBy?: Maybe<User>;
  modifiedByUserId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['ID']['output'];
  stats: FolderStats;
  thumbnails?: Maybe<Array<Maybe<FileObject>>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type FolderConnection = {
  __typename?: 'FolderConnection';
  /** A list edges. */
  edges: Array<FolderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type FolderEdge = {
  __typename?: 'FolderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Folder;
};

export type FolderRenameInput = {
  name: Scalars['String']['input'];
};

export type FolderStats = {
  __typename?: 'FolderStats';
  animations: Scalars['Float']['output'];
  creatorFiles: Scalars['Float']['output'];
};

export type Frame = {
  __typename?: 'Frame';
  height: Scalars['Float']['output'];
  width: Scalars['Float']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type FrameInput = {
  height: Scalars['Float']['input'];
  width: Scalars['Float']['input'];
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export type HireRequestInput = {
  brief: Scalars['String']['input'];
  contractType: ContractType;
  deadlineAt: Scalars['DateTime']['input'];
  shouldCopyEmail: Scalars['Boolean']['input'];
  subject: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type HitCountEvent = {
  __typename?: 'HitCountEvent';
  errors: Scalars['String']['output'];
  message: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type HitCountEventInput = {
  ip?: InputMaybe<Scalars['String']['input']>;
  method: Scalars['Int']['input'];
  source?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  visitorId?: InputMaybe<Scalars['ID']['input']>;
};

export type InitialAnimationUploadInput = {
  file: Scalars['String']['input'];
  projectId?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type InvitationRecipient = {
  access?: InputMaybe<Scalars['String']['input']>;
  recipientEmail: Scalars['String']['input'];
};

export type Invoice = {
  __typename?: 'Invoice';
  /** Retrieves the account for the invoice. */
  account: Account;
  additionalFields: Array<InvoiceFieldObject>;
  addressLineOne?: Maybe<Scalars['String']['output']>;
  addressLineTwo?: Maybe<Scalars['String']['output']>;
  /** Retrieves the total amount for the invoice. */
  amount: Scalars['Float']['output'];
  billingEmail?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  items: Array<InvoiceItem>;
  number?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  providerCustomerId: Scalars['String']['output'];
  providerId?: Maybe<Scalars['String']['output']>;
  providerSubscriptionId: Scalars['String']['output'];
  providerType: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  /** Retrieves the subscription for the invoice. */
  subscription: WorkspaceSubscription;
  taxCountry?: Maybe<Scalars['String']['output']>;
  taxId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type InvoiceFieldObject = {
  __typename?: 'InvoiceFieldObject';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type InvoiceItem = {
  __typename?: 'InvoiceItem';
  amount: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  periodEnd: Scalars['DateTime']['output'];
  periodStart: Scalars['DateTime']['output'];
  proration: Scalars['Boolean']['output'];
  quantity: Scalars['Float']['output'];
  subscription: Scalars['String']['output'];
};

export type KeyCount = {
  __typename?: 'KeyCount';
  count: Scalars['Int']['output'];
  key: Scalars['String']['output'];
};

export type Locale = {
  __typename?: 'Locale';
  code: Scalars['String']['output'];
  fallbackCode: Scalars['String']['output'];
};

export type LocaleListing = {
  __typename?: 'LocaleListing';
  locales?: Maybe<Array<Locale>>;
};

export type LoginToken = {
  __typename?: 'LoginToken';
  /** The URL to direct the user to in order to conclude the token login. */
  loginUrl: Scalars['String']['output'];
  /** The token to use with the tokenLogin mutation. */
  token: Scalars['String']['output'];
};

export type LottieJsonOptimizeInput = {
  /** The lottie json payload to optimize */
  fileUrl: Scalars['String']['input'];
  /** If true, will return a dotlottie file instead of a json file */
  returnDotLottie?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LottieMockup = {
  __typename?: 'LottieMockup';
  animation: LottieMockupAnimation;
  animationId: Scalars['ID']['output'];
  assets: Array<LottieMockupAsset>;
  canvas: LottieMockupCanvas;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  playSegmentId: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type LottieMockupAnimation = {
  __typename?: 'LottieMockupAnimation';
  config: LottieMockupAnimationConfig;
  frame: Frame;
  rotation: Scalars['Float']['output'];
};

export type LottieMockupAnimationConfig = {
  __typename?: 'LottieMockupAnimationConfig';
  file: Scalars['String']['output'];
  fileId?: Maybe<Scalars['String']['output']>;
  fileKey?: Maybe<Scalars['String']['output']>;
  loop: Scalars['Boolean']['output'];
  speed: Scalars['Float']['output'];
};

export type LottieMockupAnimationConfigInput = {
  file?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['String']['input']>;
  fileKey?: InputMaybe<Scalars['String']['input']>;
  loop: Scalars['Boolean']['input'];
  speed: Scalars['Float']['input'];
};

export type LottieMockupAnimationInput = {
  config: LottieMockupAnimationConfigInput;
  frame: FrameInput;
  rotation: Scalars['Float']['input'];
};

export type LottieMockupAsset = LottieMockupAssetImage | LottieMockupAssetText;

export type LottieMockupAssetFile = {
  __typename?: 'LottieMockupAssetFile';
  file: Scalars['String']['output'];
  fileId?: Maybe<Scalars['String']['output']>;
  fileKey?: Maybe<Scalars['String']['output']>;
};

export type LottieMockupAssetImage = {
  __typename?: 'LottieMockupAssetImage';
  config: LottieMockupAssetFile;
  frame: Frame;
  identifier: Scalars['String']['output'];
  rotation: Scalars['Float']['output'];
  type: LottieMockupAssetType;
};

export type LottieMockupAssetText = {
  __typename?: 'LottieMockupAssetText';
  config: LottieMockupAssetTextConfig;
  frame: Frame;
  identifier: Scalars['String']['output'];
  rotation: Scalars['Float']['output'];
  type: LottieMockupAssetType;
};

export type LottieMockupAssetTextConfig = {
  __typename?: 'LottieMockupAssetTextConfig';
  alignment: Scalars['String']['output'];
  color: Scalars['String']['output'];
  font: Scalars['String']['output'];
  size: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export enum LottieMockupAssetType {
  Animation = 'animation',
  Image = 'image',
  Text = 'text',
}

export type LottieMockupCanvas = {
  __typename?: 'LottieMockupCanvas';
  background: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  templateSize: TemplateSize;
  width: Scalars['Float']['output'];
};

export type LottieMockupCanvasInput = {
  background: Scalars['String']['input'];
  height: Scalars['Float']['input'];
  templateSize: TemplateSize;
  width: Scalars['Float']['input'];
};

export type LottieMockupConnection = {
  __typename?: 'LottieMockupConnection';
  /** A list edges. */
  edges: Array<LottieMockupEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type LottieMockupCreateInput = {
  animation: LottieMockupAnimationInput;
  animationId: Scalars['String']['input'];
  assets: Array<Scalars['JSON']['input']>;
  canvas: LottieMockupCanvasInput;
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  playSegmentId: Scalars['String']['input'];
  version: Scalars['String']['input'];
};

export type LottieMockupEdge = {
  __typename?: 'LottieMockupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LottieMockup;
};

export type Metadata = {
  __typename?: 'Metadata';
  /** Colors */
  colors?: Maybe<Scalars['JSON']['output']>;
  /** Frame Rate */
  frameRate?: Maybe<Scalars['String']['output']>;
  /** No. of frames */
  frames?: Maybe<Scalars['String']['output']>;
  /** Lottie Generator */
  generator?: Maybe<Scalars['String']['output']>;
  /** Lottie Height */
  height?: Maybe<Scalars['String']['output']>;
  /** Lottie Start Frame */
  inPoint?: Maybe<Scalars['String']['output']>;
  /** No of Layers */
  layers?: Maybe<Scalars['String']['output']>;
  /** Lottie Colors */
  lottieColors?: Maybe<Scalars['JSON']['output']>;
  /** Lottie Outpoint */
  outPoint?: Maybe<Scalars['String']['output']>;
  /** Lottie Version */
  version?: Maybe<Scalars['String']['output']>;
  /** Lottie Width */
  width?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  accountDeleteRequestCreate: Scalars['Boolean']['output'];
  /** Create a stripe session and get the ID of the session */
  accountPaymentProviderCustomerPortalSessionCreate: Scalars['String']['output'];
  /** Update an account by its id. */
  accountUpdate: Account;
  /** Update tax id of account */
  accountUpdateTaxId: Account;
  /** Cancels the ongoing email change process for the user. */
  cancelEmailChange: User;
  /** Update the collection access to workspace. */
  collectionUpdatePermission: WorkspaceCollection;
  /** Add a comment to an animation */
  commentCreate: Comment;
  /** Delete a comment */
  commentDelete: Scalars['Boolean']['output'];
  /** Edit a comment */
  commentEdit: Comment;
  /** Publish an unpublished comment */
  commentPublish: Comment;
  /** React to a comment */
  commentReact: Comment;
  /** Reply to a comment */
  commentReplyCreate: Comment;
  /** Mark a comment as resolved */
  commentResolve: Comment;
  /** Unpublish a comment */
  commentUnpublish: Comment;
  /** Unreact to a comment */
  commentUnreact: Comment;
  /** Mark a resolved comment as unresolved */
  commentUnresolve: Comment;
  /** Completes an email change process. */
  confirmEmailChange: Scalars['Boolean']['output'];
  /** Completes a reset password process. Will also logout the user from all existing sessions. */
  confirmResetPassword: Scalars['Boolean']['output'];
  /** Initiates the long poll token login process. */
  createLoginToken: LoginToken;
  /** Create a new lottie mockup */
  createLottieMockup: LottieMockup;
  /** Delete a lottie mockup using lottie mockup id */
  deleteLottieMockup: Scalars['Boolean']['output'];
  /** Create a draft project if draft workspace does not already exist */
  draftProjectCreate: Project;
  editorFileEditCountIncrement: Scalars['Float']['output'];
  /** Completes the email verification process. */
  emailVerificationConfirm: Scalars['Boolean']['output'];
  /** Links the account for enterprise login (workos provider) and logs user in. */
  enterpriseLinkWithLogin: Authentication;
  /** Completes the Enterprise login process. */
  enterpriseLogin: Authentication;
  /** Create organization for the workspace */
  enterpriseOrganizationCreate: EnterpriseOrganization;
  /** Delete the enterprise organization for the workspace */
  enterpriseOrganizationDelete: Scalars['Boolean']['output'];
  /** Disable DSYNC for the enterprise organization for the workspace */
  enterpriseOrganizationDisableDsync: EnterpriseOrganization;
  /** Disable SSO for the enterprise organization for the workspace */
  enterpriseOrganizationDisableSso: EnterpriseOrganization;
  /** Update directory groups for the enterprise organization for the workspace */
  enterpriseOrganizationUpdateDirectoryGroups: Array<OrganizationDirectoryGroup>;
  /** Add domains for the enterprise organization for the workspace */
  enterpriseOrganizationUpdateDomains: EnterpriseOrganization;
  exportJsonFile: FileVariant;
  /** Create a new file. */
  fileCreate: File;
  /** Fallback mutation to create a new file */
  fileCreateFallback: File;
  /** Delete an existing file by its id. */
  fileDelete: Scalars['Boolean']['output'];
  fileDescriptionUpdate: File;
  /** Duplicate a file. */
  fileDuplicate: File;
  fileNotificationsSubscribe: Scalars['Boolean']['output'];
  fileNotificationsUnsubscribe: Scalars['Boolean']['output'];
  filePreviewCreate: FileVariant;
  /** Update the name of the animation */
  fileRename: File;
  /** Modify an existing file by its id. */
  fileUpdate: File;
  /** Update background color of the file */
  fileUpdateBackgroundColor: File;
  fileUpdateStatus: File;
  fileUploadRequestCreate: FileUploadRequest;
  fileVariantDelete: FileVariant;
  fileVariantFallback: FileVariant;
  fileVariantUpdate: FileVariant;
  fileVariantsSync: Array<FileVariant>;
  /** Create a new version of the file */
  fileVersionCreate: FileVersion;
  /** Fallback to create a new file version */
  fileVersionCreateFallback: FileVersion;
  /** Delete a version from the file */
  fileVersionDelete: Scalars['Boolean']['output'];
  /** Create optimized variants for a FileVersion. Returns a FileVersionOptimizeJob if the job is queued. */
  fileVersionOptimize?: Maybe<FileVersionOptimizeJob>;
  /** @deprecated use fileVariantsSync */
  fileVersionOptimizedVariantsSync: Array<FileVariant>;
  /** Restore the current file to the specific version ( also increment the version ) */
  fileVersionRestore: File;
  /** Update tags for file version */
  fileVersionTagsUpdate: Array<Scalars['String']['output']>;
  /** Delete existing files by their ids, project id or folder id. IDs can optionally be scoped to a project or folder by passing in a projectId or folderId. */
  filesDelete: Scalars['Boolean']['output'];
  /** Move file or folder to a new folder. */
  filesMoveToFolder: Array<File>;
  /** Move file or folder to a new folder. */
  filesMoveToProject: Array<File>;
  filesUpdateStatus: Array<File>;
  /** Create a new folder. */
  folderCreate: Folder;
  /** Delete an existing folder by its id. */
  folderDelete: Scalars['Boolean']['output'];
  /** Rename folder */
  folderRename: Folder;
  /** Get S3 presigned background upload URL */
  getBackgroundUploadPresignedData: BackgroundImageObject;
  /** Get S3 presigned icon upload URL */
  getIconUploadPresignedData: WorkspaceIconUploadObject;
  /** Get user's draft workspace. Create a draft workspace if existing draft workspace doesn't exist. */
  getOrCreateDraftWorkspace: Workspace;
  hireRequestCreate: Scalars['Boolean']['output'];
  hitCountEventCreate: HitCountEvent;
  /** Upload initial animation to the workspace. */
  initialAnimationUpload: Scalars['String']['output'];
  /** Retrieve the download link for an invoice. */
  invoiceDownloadLinkCreate?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the query `isUsernameAvailable` instead of this mutation. */
  isUsernameAvailable: Scalars['Boolean']['output'];
  /** Logouts the current user, "true" if the session is successfully destroyed. */
  logout: Scalars['Boolean']['output'];
  /** Optimize a a given lottie json payload, returns a temporary url for the optimized file */
  lottieJsonOptimize: Scalars['String']['output'];
  /** To be called by an authenticated user. It marks the token for the login token process as valid, and enables the `tokenLogin` mutation to receive a new session based on the token. */
  markLoginTokenValid: Scalars['Boolean']['output'];
  /** Accepts an OAuth consent request for the given consent challenge and selected scopes, and returns the redirect URL. */
  oAuthConsentRequestAccept: Scalars['String']['output'];
  /** Rejects an OAuth consent request for the given consent challenge and selected scopes, and returns the redirect URL. */
  oAuthConsentRequestReject: Scalars['String']['output'];
  /** @deprecated Use `mutation fileVersionOptimize` instead */
  optimizeWorkflowFile?: Maybe<FileVariant>;
  /** Accepts organization invitation. Links directory user to Kratos user. */
  organizationInviteAccept: DirectoryUser;
  /** Updates a user's password. */
  passwordChange: Scalars['Boolean']['output'];
  /** Email/Password user login. */
  passwordLogin: Authentication;
  /** Create a payment intent for new/renew subscription to get the checkout session token */
  paymentIntentCreate: PaymentIntentToken;
  /** Create payment intent for accepting workspace member requests and return the checkout session token */
  paymentIntentCreateForAcceptingMemberRequest: PaymentIntentToken;
  /** Create a payment intent for adding seats for resources like animations */
  paymentIntentCreateForResourceSeats: PaymentIntentToken;
  /** Create a payment intent for adding seats to the workspace to get the checkout session token */
  paymentIntentCreateForSeats: PaymentIntentToken;
  /** remove play segment from file version */
  playSegmentRemove: FileVersion;
  /** add or update play segment to a file version */
  playSegmentUpsert: FileVersion;
  /** clear all play segments from version */
  playSegmentsClear: FileVersion;
  /** copy play segment from one file version to another */
  playSegmentsCopy: FileVersion;
  /** Get S3 presigned icon upload URL */
  portfolioIconUploadPresignedData: PortfolioIconUploadObject;
  /** Get S3 presigned image upload URL */
  portfolioImageUploadPresignedData: PortfolioImageUploadObject;
  portfolioPostCreate: PortfolioPost;
  portfolioPostDelete: Scalars['Boolean']['output'];
  portfolioPostPublish: PortfolioPost;
  portfolioPostUpdate: PortfolioPost;
  premiumAssetGenerateDownloadLink: PremiumAssetDownloadLink;
  privateShareAccept: PrivateShare;
  /** Add user to resource */
  privateShareInviteUser: Array<PrivateShare>;
  /** Re-invite user to private share */
  privateShareReInviteUser: PrivateShare;
  /** Update user access to the shared resource */
  privateShareSetPermission?: Maybe<PrivateShare>;
  /** Finishes the process of uploading a new profile image. Must be called right after finishing PUTing the file to the signed URL provided by the `uploadProfilePhoto` mutation. Will process the uploaded image into different sizes and store them. */
  processUserProfilePhotoUpload: Scalars['Boolean']['output'];
  /** Create a new project. */
  projectCreate: Project;
  /** Delete an existing project by its id. */
  projectDelete: Scalars['Boolean']['output'];
  /** Modify an existing project by its id. */
  projectUpdate: Project;
  /** Update the project access to workspace. */
  projectUpdatePermission: Project;
  publicAnimationCollectionAddAnimation: PublicCollection;
  publicAnimationCollectionCreate: PublicCollection;
  publicAnimationCollectionDelete: Scalars['Boolean']['output'];
  publicAnimationCollectionDeleteAnimations: Scalars['Boolean']['output'];
  publicAnimationCollectionUpdate: PublicCollection;
  publicAnimationCreateComment: PublicComment;
  publicAnimationCreateCommentReply: PublicComment;
  publicAnimationDelete: PublicAnimationDeleteResponse;
  publicAnimationLike: PublicAnimation;
  publicAnimationReport: Scalars['Boolean']['output'];
  publicAnimationResolveComment: PublicComment;
  publicAnimationUnlike: PublicAnimation;
  /** Extend public asset link expiry */
  publicAssetExtendExpiry: PublicAsset;
  /** Re-generate public asset link */
  publicAssetRegenerate: PublicAsset;
  /** Restore public asset link to a different workflow file version */
  publicAssetRestore: Array<PublicAsset>;
  /** Publish public asset link for a workflow file version */
  publicAssetUpdate: Array<PublicAsset>;
  publicShareCreate: PublicShare;
  /** Generate public link for a given file key */
  publicShareCreateForFileKey?: Maybe<PublicShare>;
  /**
   * WARNING: this query/mutation is experimental. Names, fields or types can possibly have breaking changes. ---
   * Converts a previously uploaded raster image to a Lottie animation.
   */
  rasterToLottieConvert: RasterToLottieJob;
  /**
   * WARNING: this query/mutation is experimental. Names, fields or types can possibly have breaking changes. ---
   * Generates a pre-signed URL for uploading a raster image.
   */
  rasterToLottieUpload: RasterToLottieUploadUrl;
  /** Purges the recently deleted entry. */
  recentlyDeletedPurge: Scalars['Boolean']['output'];
  /** Purges all the recently deleted entries for the given workspace. */
  recentlyDeletedPurgeAll: Scalars['Boolean']['output'];
  /** Deletes the recently deleted entry. */
  recentlyDeletedPurgeMultiple: Scalars['Boolean']['output'];
  /** Restores the recently deleted entry. */
  recentlyDeletedRestore: Scalars['Boolean']['output'];
  /** Email/Password user registration. */
  register: Authentication;
  /** Initiates the email change process, will fire an email for the user to conclude the email change process. */
  requestEmailChange: User;
  /** Resends the change email confirmation email message. */
  resendEmailChangeEmail: Scalars['Boolean']['output'];
  /** Resends the verification email for the current logged in user. */
  resendVerificationEmail: Scalars['Boolean']['output'];
  /** Will send a reset password email, if the email belongs to a registered user. */
  resetPassword: Scalars['Boolean']['output'];
  /** Key/value of data associated with the session. Sets a value for a key to the current logged in session. If value is not sent, unsets the given key. */
  sessionSetValue: Scalars['Boolean']['output'];
  /** Initiate a request to clear the sessions for the current user. */
  sessionsClear: Scalars['Boolean']['output'];
  /** Completes a clear sessions process. */
  sessionsConfirmClear: Scalars['Boolean']['output'];
  /** Sets the segments to apply to the current logged in user. */
  setUserSegments: Scalars['Boolean']['output'];
  /** Determine if it's the user's first attempt at login, and if so, set-up the workspace. */
  setupInitialWorkspace: Workspace;
  /** Login with a social provider. Accepted providers: "dribbble", "google", "facebook", "twitter", "apple", "github". */
  socialLogin: Authentication;
  /** Links the account with a social provider. Accepted providers: "dribbble", "google", "facebook", "twitter", "apple", "github", "workos". */
  socialLoginLink: Scalars['Boolean']['output'];
  /** Unlinks the account and a social provider. Accepted providers: "dribbble", "google", "facebook", "twitter", "apple", "github", "workos". */
  socialLoginUnlink: Scalars['Boolean']['output'];
  /** Create a source file */
  sourceFileCreate: SourceFile;
  /** Find source files by file version id */
  sourceFileDelete: Scalars['Boolean']['output'];
  /** Update source file */
  sourceFileUpdate?: Maybe<SourceFile>;
  /** Join a suggested workspace */
  suggestedWorkspaceCancelJoinRequest?: Maybe<SuggestedWorkspace>;
  /** Join a suggested workspace */
  suggestedWorkspaceJoin?: Maybe<SuggestedWorkspace>;
  /** Remove a suggested workspace from the list show to the user */
  suggestedWorkspaceRemove: Scalars['Boolean']['output'];
  /** Checks if the user completed the token login authentication. Will return the accessToken if completed, otherwise it will return an error. */
  tokenLogin: Authentication;
  /** Update the current workspace of the logged in user. If no workspace exists, a new workspace setting will be created. */
  updateCurrentWorkspace: Workspace;
  /** Updates the current user's profile data. */
  updateUser: User;
  /** Update the current onboarding checlist of the logged in user */
  updateUserOnboardingChecklist: OnboardingChecklistObject;
  /** Update the current onboarding of the logged in user */
  updateUserOnboardingStatus: OnboardingObject;
  /** @deprecated Use `mutation fileVersionOptimize` instead */
  uploadDotLottieWorkflowFile: FileVariant;
  /** Starts the upload profile picture process. Returns a signed URL that should be used in a PUT request with the file content. The `processUserProfilePhotoUpload` mutation must be called right after the file upload has finished. */
  uploadProfilePhoto: UserProfilePhotoUpload;
  /** Update the user preferred locale */
  userLocaleUpdate: Scalars['Boolean']['output'];
  /** Request the start of self-service account deletion. */
  userSelfDeleteRequest: Scalars['Boolean']['output'];
  /** Convert video to lottie, return task_id */
  videoToLottie: Scalars['String']['output'];
  /** Get converted lottie (from video) with taskId */
  videoToLottieConverted: FileUploadRequestStatus;
  /** Updates user's notification preference */
  viewerNotificationPreferenceUpdate: ViewerNotificationPreference;
  /** Deletes user's Slack notification webhook integration */
  viewerSlackNotificationWebhookDelete: Scalars['Boolean']['output'];
  /** Sets user's Slack notification webhook integration */
  viewerSlackNotificationWebhookSet: Scalars['Boolean']['output'];
  workflowTempFileUploadRequestCreate: WorkflowTempFilePreSignedUploadRequest;
  /** Add animations to a workspace collection. */
  workspaceCollectionAddFiles: WorkspaceCollection;
  /** Create a new workspace collection. */
  workspaceCollectionCreate: WorkspaceCollection;
  /** Delete an existing workspace collection by its id. */
  workspaceCollectionDelete: Scalars['Boolean']['output'];
  /** Add animations to a workspace collection. */
  workspaceCollectionRemoveFiles: WorkspaceCollection;
  /** Modify an existing collection by its id. */
  workspaceCollectionUpdate: WorkspaceCollection;
  workspaceColorPaletteCreate: WorkspaceColorPalette;
  workspaceColorPaletteDelete: Scalars['Boolean']['output'];
  workspaceColorPaletteUpdate: WorkspaceColorPalette;
  /** Create a new workspace. */
  workspaceCreate: Workspace;
  /** Delete a workspace. This will delete all of the workspace's projects, invitations, and subscriptions. */
  workspaceDelete: Workspace;
  /** Invite user to workspace if the invitation code is valid */
  workspaceInvitationLinkAccept: WorkspaceMember;
  /** Regenerate workspace invitation link */
  workspaceInvitationLinkRegenerate: WorkspaceInvitationLink;
  /** Update workspace invitation link. If not workspace invitation link exists, a new link will be created */
  workspaceInvitationLinkUpdate: WorkspaceInvitationLink;
  /** Approve a membership request */
  workspaceJoinRequestApprove: WorkspaceMember;
  /** Leave a workspace. This will remove all your permissions from the workspace and remove any associated settings. */
  workspaceLeave: Workspace;
  /** Accept invitation to a workspace using the invitation code. */
  workspaceMemberCompleteOnboarding: WorkspaceMember;
  /** Remove workspace member */
  workspaceMemberDelete: Scalars['Boolean']['output'];
  /** Accept invitation to a workspace using the invitation code. */
  workspaceMemberInvitationAccept: WorkspaceMember;
  /** Reinvite user to a workspace. */
  workspaceMemberResendInvite: WorkspaceMember;
  /** Change access of the user to a workspace. */
  workspaceMemberSetPermission: WorkspaceMember;
  /** Invite a multiple users to a workspace. */
  workspaceMembersSendInvites: Array<WorkspaceMember>;
  workspacePortfolioUpdate: WorkspacePortfolio;
  /** Request to join a workspace */
  workspaceRequestJoin?: Maybe<Workspace>;
  /** Cancel request to join a workspace */
  workspaceRequestJoinCancel: Workspace;
  /** Update settings of a workspace */
  workspaceSettingsUpdate: WorkspaceSettings;
  /** Cancels current active subscription of the given workspace. */
  workspaceSubscriptionCancel: Scalars['Boolean']['output'];
  /** Cancel trial plan of the given workspace. */
  workspaceSubscriptionCancelTrial: Scalars['Boolean']['output'];
  /** Marks the subscription active if it is marked for cancellation. */
  workspaceSubscriptionContinue: Scalars['Boolean']['output'];
  /** Create a stripe checkout session to a workspace and returns the session if the payment provider is stripe, for the case of paypal it returns success if the subscription is created. */
  workspaceSubscriptionCreateCheckoutSession: Scalars['String']['output'];
  /** Create a stripe checkout session to a workspace and returns the session. */
  workspaceSubscriptionCreateCheckoutSessionForEmbed: CheckoutObject;
  /** Get the client token for braintree */
  workspaceSubscriptionGetClientToken: Scalars['String']['output'];
  /** Upgrades current active subscription of the given workspace to the next one. */
  workspaceSubscriptionUpgrade: Scalars['Boolean']['output'];
  /** Transfer ownership to new user in the workspace */
  workspaceTransferOwnership: Scalars['Boolean']['output'];
  /** Update workspace settings by ID */
  workspaceUpdate: Workspace;
  zipFileCreate: ZipFile;
};

export type MutationAccountDeleteRequestCreateArgs = {
  requestType: AccountDeleteRequestType;
};

export type MutationAccountPaymentProviderCustomerPortalSessionCreateArgs = {
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationAccountUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AccountInput;
  updateLastInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationAccountUpdateTaxIdArgs = {
  input: AccountTaxInput;
};

export type MutationCollectionUpdatePermissionArgs = {
  id: Scalars['ID']['input'];
  isPrivate: Scalars['Boolean']['input'];
};

export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};

export type MutationCommentDeleteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCommentEditArgs = {
  body: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type MutationCommentPublishArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCommentReactArgs = {
  id: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};

export type MutationCommentReplyCreateArgs = {
  body: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCommentResolveArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCommentUnpublishArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCommentUnreactArgs = {
  id: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};

export type MutationCommentUnresolveArgs = {
  id: Scalars['ID']['input'];
};

export type MutationConfirmEmailChangeArgs = {
  emailChangeToken: Scalars['String']['input'];
};

export type MutationConfirmResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  resetPasswordToken: Scalars['String']['input'];
};

export type MutationCreateLoginTokenArgs = {
  appKey?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateLottieMockupArgs = {
  input: LottieMockupCreateInput;
};

export type MutationDeleteLottieMockupArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDraftProjectCreateArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type MutationEditorFileEditCountIncrementArgs = {
  input: CreateEditorFileEditCounterInput;
};

export type MutationEmailVerificationConfirmArgs = {
  emailVerificationToken: Scalars['String']['input'];
};

export type MutationEnterpriseLinkWithLoginArgs = {
  code: Scalars['String']['input'];
  web: Scalars['Boolean']['input'];
};

export type MutationEnterpriseLoginArgs = {
  code: Scalars['String']['input'];
  loginChallenge?: InputMaybe<Scalars['String']['input']>;
  web?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationEnterpriseOrganizationCreateArgs = {
  input: CreateEnterpriseOrganizationInput;
};

export type MutationEnterpriseOrganizationDeleteArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type MutationEnterpriseOrganizationDisableDsyncArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type MutationEnterpriseOrganizationDisableSsoArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type MutationEnterpriseOrganizationUpdateDirectoryGroupsArgs = {
  input: EnterpriseOrganizationDirectoryGroupInput;
};

export type MutationEnterpriseOrganizationUpdateDomainsArgs = {
  input: EnterpriseOrganizationDomainsInput;
};

export type MutationExportJsonFileArgs = {
  fileVersionId: Scalars['ID']['input'];
};

export type MutationFileCreateArgs = {
  input: FileCreateInput;
};

export type MutationFileCreateFallbackArgs = {
  input: FileCreateFallbackInput;
};

export type MutationFileDeleteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationFileDescriptionUpdateArgs = {
  id: Scalars['ID']['input'];
  input: FileDescriptionUpdateInput;
};

export type MutationFileDuplicateArgs = {
  input: FileDuplicateInput;
};

export type MutationFileNotificationsSubscribeArgs = {
  fileId: Scalars['ID']['input'];
};

export type MutationFileNotificationsUnsubscribeArgs = {
  fileId: Scalars['ID']['input'];
};

export type MutationFilePreviewCreateArgs = {
  fileVersionId: Scalars['ID']['input'];
  input: FileVariantInput;
};

export type MutationFileRenameArgs = {
  id: Scalars['ID']['input'];
  input: FileRenameInput;
};

export type MutationFileUpdateArgs = {
  id: Scalars['String']['input'];
  input: UpdateFileInput;
};

export type MutationFileUpdateBackgroundColorArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type MutationFileUpdateStatusArgs = {
  id: Scalars['ID']['input'];
  status?: InputMaybe<FileStatus>;
};

export type MutationFileUploadRequestCreateArgs = {
  input?: InputMaybe<CreateUploadRequestInput>;
};

export type MutationFileVariantDeleteArgs = {
  fileVariantId: Scalars['ID']['input'];
  fileVersionId: Scalars['ID']['input'];
};

export type MutationFileVariantFallbackArgs = {
  fileVariationId: Scalars['ID']['input'];
};

export type MutationFileVariantUpdateArgs = {
  input: FileVariantUpdateInput;
};

export type MutationFileVariantsSyncArgs = {
  fileVersionId: Scalars['ID']['input'];
};

export type MutationFileVersionCreateArgs = {
  input: FileVersionCreateInput;
};

export type MutationFileVersionCreateFallbackArgs = {
  input: FileVersionCreateFallbackInput;
};

export type MutationFileVersionDeleteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationFileVersionOptimizeArgs = {
  id: Scalars['ID']['input'];
};

export type MutationFileVersionOptimizedVariantsSyncArgs = {
  id: Scalars['ID']['input'];
};

export type MutationFileVersionRestoreArgs = {
  fileId: Scalars['ID']['input'];
  fileVersionId: Scalars['ID']['input'];
};

export type MutationFileVersionTagsUpdateArgs = {
  id: Scalars['ID']['input'];
  tags: Array<Scalars['String']['input']>;
};

export type MutationFilesDeleteArgs = {
  folderId?: InputMaybe<Scalars['ID']['input']>;
  ids: Array<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationFilesMoveToFolderArgs = {
  fileIds: Array<Scalars['ID']['input']>;
  folderId: Scalars['ID']['input'];
};

export type MutationFilesMoveToProjectArgs = {
  fileIds: Array<Scalars['ID']['input']>;
  projectId: Scalars['ID']['input'];
};

export type MutationFilesUpdateStatusArgs = {
  folderId?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<FileStatus>;
};

export type MutationFolderCreateArgs = {
  input: CreateFolderInput;
};

export type MutationFolderDeleteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationFolderRenameArgs = {
  id: Scalars['ID']['input'];
  input: FolderRenameInput;
};

export type MutationGetBackgroundUploadPresignedDataArgs = {
  animationId: Scalars['ID']['input'];
  filename: Scalars['String']['input'];
};

export type MutationGetIconUploadPresignedDataArgs = {
  filename: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type MutationHireRequestCreateArgs = {
  input: HireRequestInput;
};

export type MutationHitCountEventCreateArgs = {
  input: HitCountEventInput;
  resourceId: Scalars['ID']['input'];
};

export type MutationInitialAnimationUploadArgs = {
  input: InitialAnimationUploadInput;
};

export type MutationInvoiceDownloadLinkCreateArgs = {
  id: Scalars['ID']['input'];
};

export type MutationIsUsernameAvailableArgs = {
  username: Scalars['String']['input'];
};

export type MutationLogoutArgs = {
  web?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationLottieJsonOptimizeArgs = {
  input: LottieJsonOptimizeInput;
};

export type MutationMarkLoginTokenValidArgs = {
  token: Scalars['String']['input'];
};

export type MutationOAuthConsentRequestAcceptArgs = {
  consentChallenge: Scalars['String']['input'];
  scopes: Array<Scalars['String']['input']>;
};

export type MutationOAuthConsentRequestRejectArgs = {
  consentChallenge: Scalars['String']['input'];
};

export type MutationOptimizeWorkflowFileArgs = {
  fileVersionId: Scalars['ID']['input'];
};

export type MutationOrganizationInviteAcceptArgs = {
  invitationCode: Scalars['String']['input'];
};

export type MutationPasswordChangeArgs = {
  newPassword: Scalars['String']['input'];
};

export type MutationPasswordLoginArgs = {
  email: Scalars['String']['input'];
  loginChallenge?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  web?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPaymentIntentCreateArgs = {
  input: PaymentIntentInput;
};

export type MutationPaymentIntentCreateForAcceptingMemberRequestArgs = {
  workspaceInvitationId: Scalars['String']['input'];
};

export type MutationPaymentIntentCreateForResourceSeatsArgs = {
  input: PaymentIntentAddSeatsForResourceInput;
};

export type MutationPaymentIntentCreateForSeatsArgs = {
  input: PaymentIntentAddSeatsInput;
};

export type MutationPlaySegmentRemoveArgs = {
  fileVersionId: Scalars['ID']['input'];
  playSegmentId: Scalars['ID']['input'];
};

export type MutationPlaySegmentUpsertArgs = {
  fileVersionId: Scalars['ID']['input'];
  input: PlaySegmentInput;
};

export type MutationPlaySegmentsClearArgs = {
  fileVersionId: Scalars['ID']['input'];
};

export type MutationPlaySegmentsCopyArgs = {
  fromFileVersionId: Scalars['ID']['input'];
  playSegmentId?: InputMaybe<Scalars['ID']['input']>;
  toFileVersionId: Scalars['ID']['input'];
};

export type MutationPortfolioIconUploadPresignedDataArgs = {
  filename: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type MutationPortfolioImageUploadPresignedDataArgs = {
  filename: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type MutationPortfolioPostCreateArgs = {
  input: PortfolioPostInput;
};

export type MutationPortfolioPostDeleteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationPortfolioPostPublishArgs = {
  id: Scalars['ID']['input'];
  isPublished: Scalars['Boolean']['input'];
};

export type MutationPortfolioPostUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PortfolioPostUpdateInput;
};

export type MutationPremiumAssetGenerateDownloadLinkArgs = {
  uuid: Scalars['ID']['input'];
};

export type MutationPrivateShareAcceptArgs = {
  invitationCode: Scalars['String']['input'];
};

export type MutationPrivateShareInviteUserArgs = {
  input: SharedResourceInput;
};

export type MutationPrivateShareReInviteUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationPrivateShareSetPermissionArgs = {
  access: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type MutationProcessUserProfilePhotoUploadArgs = {
  filename: Scalars['String']['input'];
  signedUrl: Scalars['String']['input'];
};

export type MutationProjectCreateArgs = {
  input: ProjectCreateInput;
};

export type MutationProjectDeleteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationProjectUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProjectUpdateInput;
};

export type MutationProjectUpdatePermissionArgs = {
  id: Scalars['ID']['input'];
  isPrivate: Scalars['Boolean']['input'];
};

export type MutationPublicAnimationCollectionAddAnimationArgs = {
  animationId: Scalars['Int']['input'];
  collectionId: Scalars['Int']['input'];
};

export type MutationPublicAnimationCollectionCreateArgs = {
  input: CollectionInput;
};

export type MutationPublicAnimationCollectionDeleteArgs = {
  collectionId: Scalars['Int']['input'];
};

export type MutationPublicAnimationCollectionDeleteAnimationsArgs = {
  animationIds: Array<Scalars['Int']['input']>;
  collectionId: Scalars['Int']['input'];
};

export type MutationPublicAnimationCollectionUpdateArgs = {
  collectionId: Scalars['Int']['input'];
  input: CollectionInput;
};

export type MutationPublicAnimationCreateCommentArgs = {
  animationId: Scalars['Int']['input'];
  input: CommentInput;
};

export type MutationPublicAnimationCreateCommentReplyArgs = {
  commentId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
};

export type MutationPublicAnimationDeleteArgs = {
  id: Scalars['Int']['input'];
};

export type MutationPublicAnimationLikeArgs = {
  id: Scalars['Int']['input'];
};

export type MutationPublicAnimationReportArgs = {
  input: AnimationReportInput;
};

export type MutationPublicAnimationResolveCommentArgs = {
  id: Scalars['Int']['input'];
};

export type MutationPublicAnimationUnlikeArgs = {
  id: Scalars['Int']['input'];
};

export type MutationPublicAssetExtendExpiryArgs = {
  publicAssetId: Scalars['ID']['input'];
};

export type MutationPublicAssetRegenerateArgs = {
  publicAssetId: Scalars['ID']['input'];
};

export type MutationPublicAssetRestoreArgs = {
  input: PublicAssetRestoreInput;
};

export type MutationPublicAssetUpdateArgs = {
  input: PublicAssetUpdateInput;
};

export type MutationPublicShareCreateArgs = {
  access: Scalars['String']['input'];
  input?: InputMaybe<PublicShareCreateInput>;
  resourceId: Scalars['ID']['input'];
  resourceType: PublicShareType;
};

export type MutationPublicShareCreateForFileKeyArgs = {
  fileKey: Scalars['String']['input'];
};

export type MutationRasterToLottieConvertArgs = {
  fileName: Scalars['String']['input'];
  imageId: Scalars['ID']['input'];
  params?: InputMaybe<RasterToLottieJobParams>;
};

export type MutationRasterToLottieUploadArgs = {
  fileName: Scalars['String']['input'];
};

export type MutationRecentlyDeletedPurgeArgs = {
  input: RecentlyDeletedPurgeInput;
};

export type MutationRecentlyDeletedPurgeAllArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type MutationRecentlyDeletedPurgeMultipleArgs = {
  input: RecentlyDeletedPurgeMultipleInput;
};

export type MutationRecentlyDeletedRestoreArgs = {
  input: RecentlyDeletedRestoreInput;
};

export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  loginChallenge?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  web?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationRequestEmailChangeArgs = {
  email: Scalars['String']['input'];
};

export type MutationResetPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationSessionSetValueArgs = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSessionsClearArgs = {
  email: Scalars['String']['input'];
};

export type MutationSessionsConfirmClearArgs = {
  sessionsClearToken: Scalars['String']['input'];
};

export type MutationSetUserSegmentsArgs = {
  segmentIds: Scalars['String']['input'];
  segmentOtherDescription?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSocialLoginArgs = {
  accessSecret?: InputMaybe<Scalars['String']['input']>;
  accessToken?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  loginChallenge?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  web?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationSocialLoginLinkArgs = {
  accessSecret?: InputMaybe<Scalars['String']['input']>;
  accessToken?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
};

export type MutationSocialLoginUnlinkArgs = {
  provider: Scalars['String']['input'];
};

export type MutationSourceFileCreateArgs = {
  input: SourceFileCreateInput;
};

export type MutationSourceFileDeleteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSourceFileUpdateArgs = {
  id: Scalars['ID']['input'];
  input: SourceFileCreateInput;
};

export type MutationSuggestedWorkspaceCancelJoinRequestArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSuggestedWorkspaceJoinArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSuggestedWorkspaceRemoveArgs = {
  id: Scalars['ID']['input'];
};

export type MutationTokenLoginArgs = {
  token: Scalars['String']['input'];
};

export type MutationUpdateCurrentWorkspaceArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type MutationUpdateUserArgs = {
  behanceUsername?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  dribbbleUsername?: InputMaybe<Scalars['String']['input']>;
  enableMarketingEmails?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  instagramUsername?: InputMaybe<Scalars['String']['input']>;
  isHireable?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  linkedinUsername?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateUserOnboardingChecklistArgs = {
  input: UpdateOnboardingChecklistInput;
};

export type MutationUpdateUserOnboardingStatusArgs = {
  input: UpdateOnboardingInput;
};

export type MutationUploadDotLottieWorkflowFileArgs = {
  fileVersionId: Scalars['ID']['input'];
};

export type MutationUploadProfilePhotoArgs = {
  extension: Scalars['String']['input'];
};

export type MutationUserLocaleUpdateArgs = {
  locale: Scalars['String']['input'];
};

export type MutationUserSelfDeleteRequestArgs = {
  offboardingQuestions: Array<OffboardingQuestionInput>;
  reason: Scalars['String']['input'];
};

export type MutationVideoToLottieArgs = {
  key: Scalars['String']['input'];
};

export type MutationVideoToLottieConvertedArgs = {
  input?: InputMaybe<CreateUploadRequestInput>;
  taskId: Scalars['String']['input'];
};

export type MutationViewerNotificationPreferenceUpdateArgs = {
  input: NotificationPreferenceUpdateInput;
};

export type MutationViewerSlackNotificationWebhookSetArgs = {
  code: Scalars['String']['input'];
};

export type MutationWorkflowTempFileUploadRequestCreateArgs = {
  filename: Scalars['String']['input'];
};

export type MutationWorkspaceCollectionAddFilesArgs = {
  fileIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};

export type MutationWorkspaceCollectionCreateArgs = {
  input: WorkspaceCollectionCreateInput;
};

export type MutationWorkspaceCollectionDeleteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationWorkspaceCollectionRemoveFilesArgs = {
  fileIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};

export type MutationWorkspaceCollectionUpdateArgs = {
  id: Scalars['ID']['input'];
  input: WorkspaceCollectionUpdateInput;
};

export type MutationWorkspaceColorPaletteCreateArgs = {
  input: CreateWorkspaceColorPaletteInput;
};

export type MutationWorkspaceColorPaletteDeleteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationWorkspaceColorPaletteUpdateArgs = {
  id: Scalars['ID']['input'];
  input: UpdateWorkspaceColorPaletteInput;
};

export type MutationWorkspaceCreateArgs = {
  icon?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MutationWorkspaceDeleteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationWorkspaceInvitationLinkAcceptArgs = {
  invitationCode: Scalars['String']['input'];
};

export type MutationWorkspaceInvitationLinkRegenerateArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type MutationWorkspaceInvitationLinkUpdateArgs = {
  canInviteMembers: Scalars['Boolean']['input'];
  isActive: Scalars['Boolean']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type MutationWorkspaceJoinRequestApproveArgs = {
  id: Scalars['ID']['input'];
};

export type MutationWorkspaceLeaveArgs = {
  id: Scalars['ID']['input'];
};

export type MutationWorkspaceMemberCompleteOnboardingArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type MutationWorkspaceMemberDeleteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationWorkspaceMemberInvitationAcceptArgs = {
  invitationCode: Scalars['String']['input'];
};

export type MutationWorkspaceMemberResendInviteArgs = {
  id: Scalars['String']['input'];
};

export type MutationWorkspaceMemberSetPermissionArgs = {
  access: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type MutationWorkspaceMembersSendInvitesArgs = {
  input: WorkspaceMemberSendInviteInput;
  workspaceId: Scalars['ID']['input'];
};

export type MutationWorkspacePortfolioUpdateArgs = {
  input: WorkspacePortfolioInput;
};

export type MutationWorkspaceRequestJoinArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type MutationWorkspaceRequestJoinCancelArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type MutationWorkspaceSettingsUpdateArgs = {
  id: Scalars['ID']['input'];
  input: WorkspaceSettingsUpdateInput;
};

export type MutationWorkspaceSubscriptionCancelArgs = {
  input: SubscriptionCancelInput;
};

export type MutationWorkspaceSubscriptionCancelTrialArgs = {
  workspaceId: Scalars['String']['input'];
};

export type MutationWorkspaceSubscriptionContinueArgs = {
  id: Scalars['String']['input'];
};

export type MutationWorkspaceSubscriptionCreateCheckoutSessionArgs = {
  input: WorkspaceSubscriptionCheckoutSessionInput;
};

export type MutationWorkspaceSubscriptionCreateCheckoutSessionForEmbedArgs = {
  input: WorkspaceSubscriptionCheckoutForEmbedInput;
};

export type MutationWorkspaceSubscriptionUpgradeArgs = {
  input: WorkspaceSubscriptionUpgradeInput;
};

export type MutationWorkspaceTransferOwnershipArgs = {
  id: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MutationWorkspaceUpdateArgs = {
  id: Scalars['ID']['input'];
  input: WorkspaceInput;
};

export type MutationZipFileCreateArgs = {
  input: ZipFileCreateInput;
};

export type NextBillingObject = {
  __typename?: 'NextBillingObject';
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  date: Scalars['String']['output'];
};

export type NextPrevAnimation = {
  __typename?: 'NextPrevAnimation';
  nextAnimation?: Maybe<Scalars['String']['output']>;
  prevAnimation?: Maybe<Scalars['String']['output']>;
};

export type Notification = {
  __typename?: 'Notification';
  link?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  theme?: Maybe<Theme>;
};

export type NotificationChannel = {
  __typename?: 'NotificationChannel';
  /** Is chat channel enabled */
  chat?: Maybe<Scalars['Boolean']['output']>;
  /** Is email channel enabled */
  email?: Maybe<Scalars['Boolean']['output']>;
  /** Is inApp channel enabled */
  inApp?: Maybe<Scalars['Boolean']['output']>;
  /** Is push channel enabled */
  push?: Maybe<Scalars['Boolean']['output']>;
  /** Is sms channel enabled */
  sms?: Maybe<Scalars['Boolean']['output']>;
};

export enum NotificationChannelType {
  Chat = 'Chat',
  Email = 'Email',
  InApp = 'InApp',
  Push = 'Push',
  Sms = 'Sms',
}

export type NotificationGroup = {
  __typename?: 'NotificationGroup';
  /** The id of the notification group */
  id: Scalars['String']['output'];
  /** The name of the notification group */
  name: Scalars['String']['output'];
};

export type NotificationPreference = {
  __typename?: 'NotificationPreference';
  /** The specific channels that are enabled or not */
  channels: NotificationChannel;
  /** All channels will be turned off if false, regardless of individual channels options */
  enabled: Scalars['Boolean']['output'];
};

export type NotificationPreferenceUpdateInput = {
  /** The channel to be enabled */
  channel: NotificationChannelType;
  /** To enable notification preference */
  enabled: Scalars['Boolean']['input'];
  /** The ID of the notification template */
  templateId: Scalars['String']['input'];
};

export type NotificationTemplate = {
  __typename?: 'NotificationTemplate';
  /** User will not be able to disable notification if true */
  critical: Scalars['Boolean']['output'];
  /** The description of the notification template */
  description?: Maybe<Scalars['String']['output']>;
  /** The id of the notification template */
  id: Scalars['String']['output'];
  /** The name of the notification template */
  name: Scalars['String']['output'];
  /** The notification template group info */
  notificationGroup: NotificationGroup;
};

export type OAuthConsentRequest = {
  __typename?: 'OAuthConsentRequest';
  /** The name of the OAuth client that's requesting for consent. */
  clientName: Scalars['String']['output'];
  /** If skip is true, the client must redirect to this URL. */
  redirectToURL?: Maybe<Scalars['String']['output']>;
  /** The scopes requested for user consent. Will not be returned if skip is `true`. */
  scopes?: Maybe<Array<OAuthConsentRequestScope>>;
  /** If true, you must redirect to the URL in the `redirectToURL` field. */
  skip: Scalars['Boolean']['output'];
};

export type OAuthConsentRequestScope = {
  __typename?: 'OAuthConsentRequestScope';
  /** The description of the scope. */
  description: Scalars['String']['output'];
  /** The ID of the scope. */
  id: Scalars['ID']['output'];
  /** The OAuth scope. */
  scope: Scalars['String']['output'];
};

export type OAuthLoginRequest = {
  __typename?: 'OAuthLoginRequest';
  /** If skip is true, the client must redirect to this URL. */
  redirectToURL?: Maybe<Scalars['String']['output']>;
  /** If true, you must redirect to the URL in the `redirectToURL` field. */
  skip: Scalars['Boolean']['output'];
};

export type OffboardingQuestionInput = {
  answer: Scalars['String']['input'];
  question: Scalars['String']['input'];
};

export type OnboardingChecklistObject = {
  __typename?: 'OnboardingChecklistObject';
  activeOnboardings?: Maybe<Array<Scalars['String']['output']>>;
  completeSeen?: Maybe<Scalars['Boolean']['output']>;
  dismissSeen?: Maybe<Scalars['Boolean']['output']>;
  doneOnboardings?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  newToOnboarding?: Maybe<Scalars['Boolean']['output']>;
  seen?: Maybe<Scalars['Boolean']['output']>;
  userId: Scalars['ID']['output'];
};

export type OnboardingObject = {
  __typename?: 'OnboardingObject';
  animColorPaletteBtnHotspot?: Maybe<Scalars['Boolean']['output']>;
  animCommentBtnHotspot?: Maybe<Scalars['Boolean']['output']>;
  animDescriptionSequence?: Maybe<Scalars['Boolean']['output']>;
  animPanelBtnHotspot?: Maybe<Scalars['Boolean']['output']>;
  animSegmentBtnHotspot?: Maybe<Scalars['Boolean']['output']>;
  animTitleHotspot?: Maybe<Scalars['Boolean']['output']>;
  animTopbarHotspot?: Maybe<Scalars['Boolean']['output']>;
  animVersionBtnHotspot?: Maybe<Scalars['Boolean']['output']>;
  dashboardAnimUploadHotspot?: Maybe<Scalars['Boolean']['output']>;
  dashboardCollectionHotspot?: Maybe<Scalars['Boolean']['output']>;
  dashboardCollectionViewSequence?: Maybe<Scalars['Boolean']['output']>;
  dashboardCreateAnimationHotspot?: Maybe<Scalars['Boolean']['output']>;
  dashboardOptimizedDotlottieBanner?: Maybe<Scalars['Boolean']['output']>;
  dashboardPageHotspot?: Maybe<Scalars['Boolean']['output']>;
  dashboardPremiumAssetHotspot?: Maybe<Scalars['Boolean']['output']>;
  dashboardPublicProfileHotspot?: Maybe<Scalars['Boolean']['output']>;
  dashboardSlackIntegrationBellIndicator?: Maybe<Scalars['Boolean']['output']>;
  dashboardSlackIntegrationPopup?: Maybe<Scalars['Boolean']['output']>;
  dashboardWelcomeLfModal?: Maybe<Scalars['Boolean']['output']>;
  dashboardWelcomeTeamModal?: Maybe<Scalars['Boolean']['output']>;
  dashboardWelcomeUpgradedModal?: Maybe<Scalars['Boolean']['output']>;
  dashboardWorkspaceCollectionHotspot?: Maybe<Scalars['Boolean']['output']>;
  dashboardWorkspaceHotspot?: Maybe<Scalars['Boolean']['output']>;
  folderCreateAnimationHotspot?: Maybe<Scalars['Boolean']['output']>;
  introAnimSequence?: Maybe<Scalars['Boolean']['output']>;
  introDashboardSequence?: Maybe<Scalars['Boolean']['output']>;
  multiPlayerOnboarding?: Maybe<Scalars['Boolean']['output']>;
  projectCreateAnimationHotspot?: Maybe<Scalars['Boolean']['output']>;
  slackOnboardingForComment?: Maybe<Scalars['Boolean']['output']>;
};

export type Organization = {
  __typename?: 'Organization';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type OrganizationDirectoryGroup = {
  __typename?: 'OrganizationDirectoryGroup';
  id: Scalars['String']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  users: Array<EnterpriseOrganizationGroupUser>;
};

export type OrganizationObject = {
  __typename?: 'OrganizationObject';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type OrganizationSsoLogin = {
  __typename?: 'OrganizationSsoLogin';
  /** The organization name */
  name: Scalars['String']['output'];
  /** The sso login url */
  url: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items?. */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items?. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PayPalMetadata = {
  __typename?: 'PayPalMetadata';
  email: Scalars['String']['output'];
  payerId: Scalars['String']['output'];
};

export type PaymentIntent = {
  __typename?: 'PaymentIntent';
  addedSeats: Array<WorkspaceMember>;
  createdAt: Scalars['String']['output'];
  expiresAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  providerId: Scalars['String']['output'];
  providerType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  successUrl: Scalars['String']['output'];
  type: Scalars['String']['output'];
  workspace: WorkspaceObject;
  workspaceId: Scalars['ID']['output'];
};

export type PaymentIntentAddSeatsForResourceInput = {
  recipients: Array<SharedResourceInvitationRecipient>;
  resourceId: Scalars['ID']['input'];
  resourceType: PrivateShareType;
  workspaceAccess: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type PaymentIntentAddSeatsInput = {
  recipients: Array<InvitationRecipient>;
  workspaceId: Scalars['ID']['input'];
};

export type PaymentIntentCollectionMethod = {
  __typename?: 'PaymentIntentCollectionMethod';
  country: Scalars['String']['output'];
  paymentMethods: Array<PaymentIntentCollectionPaymentMethod>;
};

export type PaymentIntentCollectionPaymentMethod = {
  __typename?: 'PaymentIntentCollectionPaymentMethod';
  displayName: Scalars['String']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type PaymentIntentInput = {
  onBoardAllMembers?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethod: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Float']['input']>;
  ratePlanId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
  workspaceMemberIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PaymentIntentToken = {
  __typename?: 'PaymentIntentToken';
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  customerId: Scalars['String']['output'];
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<PaymentMethodMetadata>;
  provider: PaymentProvider;
  providerPaymentMethodId: Scalars['String']['output'];
  sourceType: Scalars['String']['output'];
};

export type PaymentMethodMetadata = CardMetadata | PayPalMetadata;

/** Payment service provider */
export enum PaymentProvider {
  Stripe = 'Stripe',
}

export type PlanEntitlement = {
  __typename?: 'PlanEntitlement';
  id: Scalars['ID']['output'];
  max?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type PlanObject = {
  __typename?: 'PlanObject';
  defaultEntitlements?: Maybe<Array<PlanEntitlement>>;
  id: Scalars['ID']['output'];
  isBillable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  planPosition: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  stripeProductId: Scalars['String']['output'];
};

export type PlaySegment = {
  __typename?: 'PlaySegment';
  action: PlaySegmentAction;
  endFrame: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  startFrame: Scalars['Float']['output'];
};

export enum PlaySegmentAction {
  Loop = 'Loop',
  PlayOnce = 'PlayOnce',
}

export type PlaySegmentInput = {
  action: PlaySegmentAction;
  endFrame: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  startFrame: Scalars['Float']['input'];
};

export type PortfolioIconUploadObject = {
  __typename?: 'PortfolioIconUploadObject';
  fileKey: Scalars['String']['output'];
  preSignedUploadURL: Scalars['String']['output'];
  publicReadURL: Scalars['String']['output'];
};

export type PortfolioImageUploadObject = {
  __typename?: 'PortfolioImageUploadObject';
  fileKey: Scalars['String']['output'];
  preSignedUploadURL: Scalars['String']['output'];
  publicReadURL: Scalars['String']['output'];
};

export type PortfolioPost = {
  __typename?: 'PortfolioPost';
  content?: Maybe<Scalars['JSON']['output']>;
  contributors: Array<UserObject>;
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  creator: UserObject;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  portfolioId: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  tags: Array<PortfolioTag>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workspaceId: Scalars['String']['output'];
};

export type PortfolioPostConnection = {
  __typename?: 'PortfolioPostConnection';
  /** A list edges. */
  edges: Array<PortfolioPostEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type PortfolioPostEdge = {
  __typename?: 'PortfolioPostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PortfolioPost;
};

export type PortfolioPostInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
  contributors?: InputMaybe<Array<Scalars['String']['input']>>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

/** Portfolio post status */
export enum PortfolioPostStatus {
  Draft = 'Draft',
  Published = 'Published',
}

export type PortfolioPostUpdateInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
  contributors?: InputMaybe<Array<Scalars['String']['input']>>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

export type PortfolioSlugAvailableInput = {
  portfolioId: Scalars['ID']['input'];
  portfolioPostId?: InputMaybe<Scalars['ID']['input']>;
  slug: Scalars['String']['input'];
};

export type PortfolioTag = {
  __typename?: 'PortfolioTag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type PortfolioUrlAvailableInput = {
  url: Scalars['String']['input'];
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

export type PremiumAsset = {
  __typename?: 'PremiumAsset';
  formats: PremiumAssetFormats;
  id: Scalars['Float']['output'];
  metadata: PremiumAssetMetadata;
  name: Scalars['String']['output'];
  pack?: Maybe<PremiumAssetPack>;
  previewImageUrl?: Maybe<Scalars['String']['output']>;
  previewVideoUrl: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  thumbnailVideoUrl: Scalars['String']['output'];
  type: Scalars['String']['output'];
  uuid: Scalars['ID']['output'];
};

export type PremiumAssetConnection = {
  __typename?: 'PremiumAssetConnection';
  /** A list edges. */
  edges: Array<PremiumAssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type PremiumAssetDownloadLink = {
  __typename?: 'PremiumAssetDownloadLink';
  aep: PremiumAssetDownloadLinkData;
  json: PremiumAssetDownloadLinkData;
  lottie: PremiumAssetDownloadLinkData;
};

export type PremiumAssetDownloadLinkData = {
  __typename?: 'PremiumAssetDownloadLinkData';
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type PremiumAssetEdge = {
  __typename?: 'PremiumAssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PremiumAsset;
};

export type PremiumAssetFormats = {
  __typename?: 'PremiumAssetFormats';
  aep?: Maybe<Scalars['Boolean']['output']>;
};

export type PremiumAssetMetadata = {
  __typename?: 'PremiumAssetMetadata';
  duration?: Maybe<Scalars['Float']['output']>;
  fileSize: Scalars['Float']['output'];
  frameRate?: Maybe<Scalars['Float']['output']>;
  frames?: Maybe<Scalars['Float']['output']>;
  height: Scalars['Float']['output'];
  uuid: Scalars['ID']['output'];
  width: Scalars['Float']['output'];
};

export type PremiumAssetPack = {
  __typename?: 'PremiumAssetPack';
  id: Scalars['Float']['output'];
  itemCount: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  thumbnailVideoUrl: Scalars['String']['output'];
};

export type PremiumAssetPackConnection = {
  __typename?: 'PremiumAssetPackConnection';
  /** A list edges. */
  edges: Array<PremiumAssetPackEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type PremiumAssetPackDetailConnection = {
  __typename?: 'PremiumAssetPackDetailConnection';
  description?: Maybe<Scalars['String']['output']>;
  /** A list edges. */
  edges: Array<PremiumAssetEdge>;
  id: Scalars['Float']['output'];
  itemCount: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  slug: Scalars['String']['output'];
  thumbnailVideoUrl: Scalars['String']['output'];
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type PremiumAssetPackEdge = {
  __typename?: 'PremiumAssetPackEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PremiumAssetPack;
};

export type PresignedPost = {
  __typename?: 'PresignedPost';
  /** Form fields used for a presigned s3 post */
  fields: Scalars['JSON']['output'];
  /** Unique key of the file */
  key: Scalars['String']['output'];
  /** Url used for a presigned s3 post */
  url: Scalars['String']['output'];
};

export type Preview = {
  __typename?: 'Preview';
  /** Webp */
  gif?: Maybe<PreviewSize>;
  /** Mp4 */
  mp4?: Maybe<PreviewSize>;
  /** Png */
  webp?: Maybe<PreviewSize>;
};

export type PreviewContent = {
  __typename?: 'PreviewContent';
  /** Content Type */
  contentType?: Maybe<Scalars['String']['output']>;
  /** Url of thumbnail */
  url?: Maybe<Scalars['String']['output']>;
  /** Version Id */
  versionId?: Maybe<Scalars['String']['output']>;
};

export enum PreviewGenerationStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processed = 'PROCESSED',
}

export type PreviewSize = {
  __typename?: 'PreviewSize';
  /** Size large */
  large?: Maybe<PreviewContent>;
  /** Size medium  */
  medium?: Maybe<PreviewContent>;
  /** Size small */
  small?: Maybe<PreviewContent>;
};

export type PrivateShare = {
  __typename?: 'PrivateShare';
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  access: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Checks if the user is not a workspace member */
  hasUnacceptedWorkspaceInvitation?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  invitationCode: Scalars['String']['output'];
  invitedBy: Scalars['ID']['output'];
  isCreator: Scalars['Boolean']['output'];
  /** Checks if the user is not a workspace member */
  isGuest?: Maybe<Scalars['Boolean']['output']>;
  lastSentAt?: Maybe<Scalars['DateTime']['output']>;
  recipientEmail?: Maybe<Scalars['String']['output']>;
  resource: PrivateShareResource;
  resourceId: Scalars['ID']['output'];
  resourceType: PrivateShareType;
  updatedAt: Scalars['DateTime']['output'];
  /** Recipient user of the invitation */
  user?: Maybe<UserObject>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PrivateShareConnection = {
  __typename?: 'PrivateShareConnection';
  /** A list edges. */
  edges: Array<PrivateShareEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type PrivateShareEdge = {
  __typename?: 'PrivateShareEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PrivateShare;
};

export type PrivateShareResource = File | Project | WorkspaceCollection;

export enum PrivateShareType {
  Collection = 'COLLECTION',
  File = 'FILE',
  Project = 'PROJECT',
}

export type Project = {
  __typename?: 'Project';
  /**
   * The animation thumbnail Urls of the last 3 files in the project
   * @deprecated Use `featuredFileKeys` instead
   */
  animationThumbnailUrls?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The file keys for last 3 files in the project */
  featuredFileKeys: Array<Scalars['String']['output']>;
  features: Array<FeatureObject>;
  filesCount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  isCreatorDraft: Scalars['Boolean']['output'];
  isPrivate: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  /** Get the permission scopes for project for the current user */
  projectPermissionScopes: Array<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  /** Stats for the project content */
  stats: ProjectStats;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** Workspace the project belongs to */
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
  /** Total number of workspace members */
  workspaceTeamMembersCount: Scalars['Float']['output'];
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** A list edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type ProjectCreateInput = {
  isOpen?: InputMaybe<Scalars['Boolean']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  shareToken?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Project;
};

export type ProjectFile = File | Folder;

export type ProjectFileConnection = {
  __typename?: 'ProjectFileConnection';
  /** A list edges. */
  edges: Array<ProjectFileEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type ProjectFileEdge = {
  __typename?: 'ProjectFileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProjectFile;
};

export type ProjectStats = {
  __typename?: 'ProjectStats';
  animations: Scalars['Float']['output'];
  creatorFiles: Scalars['Float']['output'];
  folders: Scalars['Float']['output'];
};

export type ProjectUpdateInput = {
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type PublicAnimation = {
  __typename?: 'PublicAnimation';
  bgColor?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<PublicComment>>;
  commentsCount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdByUserId: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  downloads?: Maybe<Scalars['Float']['output']>;
  gifFileSize?: Maybe<Scalars['String']['output']>;
  gifUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  imageFileSize?: Maybe<Scalars['Int']['output']>;
  imageFrame?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isCanvaCompatible?: Maybe<Scalars['Boolean']['output']>;
  isLiked: Scalars['Boolean']['output'];
  jsonUrl?: Maybe<Scalars['String']['output']>;
  likesCount: Scalars['Int']['output'];
  lottieFileSize?: Maybe<Scalars['Int']['output']>;
  lottieFileType?: Maybe<Scalars['String']['output']>;
  lottieUrl?: Maybe<Scalars['String']['output']>;
  lottieVersion?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  sourceFileName?: Maybe<Scalars['String']['output']>;
  sourceFileSize?: Maybe<Scalars['Int']['output']>;
  sourceFileType?: Maybe<Scalars['String']['output']>;
  sourceFileUrl?: Maybe<Scalars['String']['output']>;
  sourceName?: Maybe<Scalars['String']['output']>;
  sourceVersion?: Maybe<Scalars['String']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  videoFileSize?: Maybe<Scalars['Int']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

export type PublicAnimationConnection = {
  __typename?: 'PublicAnimationConnection';
  /** A list edges. */
  edges: Array<PublicAnimationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type PublicAnimationDeleteResponse = {
  __typename?: 'PublicAnimationDeleteResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type PublicAnimationEdge = {
  __typename?: 'PublicAnimationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PublicAnimation;
};

/** Public animation status filter types */
export enum PublicAnimationStatusFilterType {
  All = 'ALL',
  Pending = 'PENDING',
  Published = 'PUBLISHED',
  Rejected = 'REJECTED',
}

export type PublicAnimationStatusFilterTypeInput = {
  statusFilterType?: InputMaybe<PublicAnimationStatusFilterType>;
};

export type PublicAsset = {
  __typename?: 'PublicAsset';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Get the embed url for the public asset */
  embedUrl: Scalars['String']['output'];
  expireAt?: Maybe<Scalars['DateTime']['output']>;
  fileKey: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  fileSize: Scalars['Float']['output'];
  fileVersionId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isOptimized: Scalars['Boolean']['output'];
  metadataVersionId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** Get the public asset url */
  url: Scalars['String']['output'];
  workflowFileId: Scalars['String']['output'];
  workflowFileVersionId: Scalars['String']['output'];
};

export type PublicAssetRestoreInput = {
  fileVersionId: Scalars['ID']['input'];
};

export type PublicAssetUpdateInput = {
  fileId: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
};

export type PublicCollection = {
  __typename?: 'PublicCollection';
  animationType?: Maybe<CollectionAnimationType>;
  animationsCount?: Maybe<Scalars['Int']['output']>;
  collectionAnimationPreviews?: Maybe<Array<CollectionAnimationPreview>>;
  createdBy?: Maybe<User>;
  createdByUserId: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: CollectionType;
  url: Scalars['String']['output'];
};

export type PublicCollectionConnection = {
  __typename?: 'PublicCollectionConnection';
  /** A list edges. */
  edges: Array<PublicCollectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type PublicCollectionEdge = {
  __typename?: 'PublicCollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PublicCollection;
};

export type PublicComment = {
  __typename?: 'PublicComment';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  frame?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  isResolved: Scalars['Boolean']['output'];
  marker?: Maybe<Scalars['Point']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  replies?: Maybe<Array<PublicComment>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
};

export type PublicShare = {
  __typename?: 'PublicShare';
  /** Get the access type of the resource */
  accessLevels?: Maybe<Array<Scalars['String']['output']>>;
  allowGuestView: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expireAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  resource: PublicShareResource;
  resourceId: Scalars['ID']['output'];
  resourceType: PublicShareType;
  shareCode: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workspace: WorkspacePublicInfo;
};

export type PublicShareCreateInput = {
  allowGuestView?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PublicShareResource = File | WorkspaceCollection;

export enum PublicShareType {
  Collection = 'COLLECTION',
  File = 'FILE',
}

export type Query = {
  __typename?: 'Query';
  authVersion: Scalars['String']['output'];
  /** Look up a billing package by its id. */
  billingPackage: BillingPackage;
  /** Get the default user price for team billing packages. */
  billingPackageDefaultPerUserPrice: BillingPackagePrice;
  /** Look up a billing package price by its id. */
  billingPackagePrice: BillingPackagePrice;
  /** Billing package connection. */
  billingPackages: BillingPackageConnection;
  blogs: BlogConnection;
  /** Get brand information using the domain */
  brandInformation: BrandObject;
  /** fetch cancel reasons */
  cancelReasons: Array<CancelReason>;
  colorPalettes: ColorPaletteConnection;
  /** Get users with view access to an Animation */
  commentMentionableUsers: Array<CommentUser>;
  /** Get the replies for a comment */
  commentReplies: CommentConnection;
  /** Get the comments for an entity */
  comments: CommentConnection;
  /** Check if there is a current workspace and return it */
  currentWorkspace?: Maybe<Workspace>;
  /** Look up a deleted animation by its id. */
  deletedFile: File;
  editorFileEditCount: Scalars['Float']['output'];
  /** Initiates the Enterprise Login process. */
  enterpriseLoginAuthorizationUrl: Scalars['String']['output'];
  /** Get the enterprise organization for the workspace */
  enterpriseOrganization?: Maybe<EnterpriseOrganization>;
  /** Get redirect url to setup SSO or DSYNC for workspace */
  enterpriseOrganizationConfigurationLink?: Maybe<Scalars['String']['output']>;
  /** Get the list of organization directory groups for the workspace */
  enterpriseOrganizationDirectoryGroups?: Maybe<Array<OrganizationDirectoryGroup>>;
  /** Initiates the Enterprise Login process using an org internal id. */
  enterpriseOrganizationLogin: OrganizationSsoLogin;
  featuredAnimators: AnimatorConnection;
  featuredCuratedPremiumAssets: PremiumAssetConnection;
  featuredPremiumAssetPacks: PremiumAssetPackConnection;
  featuredPremiumAssets: PremiumAssetConnection;
  featuredPublicAnimations: PublicAnimationConnection;
  /** Look up an animation by its id. */
  file: File;
  /** Look up an animation by its id. */
  fileAboveAndBelowId: NextPrevAnimation;
  /** Count the number of animations in a workspace */
  fileCountByWorkspaceId: Scalars['Int']['output'];
  /** Fetch file handback by id */
  fileHandback: FileHandback;
  /** Eligible file ids for a given workspace. If a file upload limit is set, only those within the limits will be listed. */
  fileIdsWithinLimit: Array<Scalars['String']['output']>;
  /** Get all the users who are subscribed to this animation. */
  fileNotificationSubscribers: UserNotificationSubscriptionConnection;
  /** Check if the user is subscribed to the Animation's feed */
  fileNotificationsIsSubscribed: Scalars['Boolean']['output'];
  fileVariants: Array<FileVariant>;
  /** Fetch file version by id */
  fileVersion: FileVersion;
  fileVersionOptimizeJob: FileVersionOptimizeJob;
  /** Generate tags for file version */
  fileVersionTagsGenerate: Array<Scalars['String']['output']>;
  /** Get all file versions of a file using file ID */
  fileVersions: FileVersionConnection;
  /** Get the last modified files for the user. */
  filesRecentlyModified: Array<File>;
  /** Look up a folder by its id. */
  folder: Folder;
  /** Look up folder subfolders and animations by folder-id. */
  folderFiles: FileConnection;
  /** Fetch folders under a specific project. */
  foldersByProjectId: Array<Folder>;
  /** Get lottie mockups using animation id */
  getLottieMockups: LottieMockupConnection;
  /** Get the current onboarding checklist of the logged in user, create and return if onboarding checklist does not exist yet. */
  getUserOnboardingChecklist: OnboardingChecklistObject;
  /** Get the current onboarding of the logged in user */
  getUserOnboardingStatus: OnboardingObject;
  /** Determine if it's the user's first attempt at login, and if so, set-up the workspace. */
  hasAccessToAWorkspace: Scalars['Boolean']['output'];
  hasAccessToPaidWorkspace: Scalars['Boolean']['output'];
  /** Retrieve an invoice by id. */
  invoice: Invoice;
  /** Get the list of invoices for the workspace. */
  invoices: Array<Invoice>;
  /** Checks if an email address is available for use. */
  isEmailAvailable: Scalars['Boolean']['output'];
  isPaidUser: Scalars['Boolean']['output'];
  /** Checks if a username is available for use. */
  isUsernameAvailable: Scalars['Boolean']['output'];
  jwt?: Maybe<Scalars['String']['output']>;
  legacyVersion: Scalars['String']['output'];
  /** Returns a list of locales available for selection. */
  locales?: Maybe<LocaleListing>;
  notifications?: Maybe<Array<Notification>>;
  /** Get subscriber hash for Novu API */
  novuSubscriberHash: Scalars['String']['output'];
  /** Fetches the consent request for the given consent challenge and returns whether the consent step can be skiped, and the list of requested scopes or redirect URL. */
  oAuthConsentRequest: OAuthConsentRequest;
  /** Fetches the login request for the given login challenge and returns whether the login step can be skiped. */
  oAuthLoginRequest: OAuthLoginRequest;
  /** Get organization workspace based on the domain derived from current user email */
  organizationWorkspace: Workspace;
  /** Get a payment intent by id */
  paymentIntent: PaymentIntent;
  /** Fetch payment collections methods for the user country */
  paymentIntentCollectionMethod?: Maybe<PaymentIntentCollectionMethod>;
  /** Get a payment intent thats processing for workspace id */
  paymentIntentProcessingCheck?: Maybe<PaymentIntent>;
  popularCuratedPremiumAssets: PremiumAssetConnection;
  popularPremiumAssetPacks: PremiumAssetPackConnection;
  popularPremiumAssets: PremiumAssetConnection;
  popularPublicAnimations: PublicAnimationConnection;
  portfolioPost: PortfolioPost;
  portfolioPostIsSlugAvailable: Scalars['Boolean']['output'];
  portfolioPosts: PortfolioPostConnection;
  premiumAsset: PremiumAsset;
  premiumAssetPack: PremiumAssetPackDetailConnection;
  privateShareMembers: Array<PrivateShare>;
  privateShareSuggestedMembers: Array<SuggestedMember>;
  /** Get all shared resources for the logged in user */
  privateShares?: Maybe<PrivateShareConnection>;
  /** Look up a project by its id. */
  project: Project;
  /** Look up project folders and animations by project-id. */
  projectFiles: ProjectFileConnection;
  publicAnimation?: Maybe<PublicAnimation>;
  publicAnimationByHash?: Maybe<PublicAnimation>;
  publicAnimationCollection: PublicCollection;
  publicAnimationCollections: PublicCollectionConnection;
  publicAnimationCollectionsByUser?: Maybe<PublicCollectionConnection>;
  publicAnimationsByUser?: Maybe<PublicAnimationConnection>;
  /** Get all public assets for a given workflow file version */
  publicAssets: Array<PublicAsset>;
  /** Animations of a collection */
  publicCollectionAnimations: PublicAnimationConnection;
  /** Get a public shared resource */
  publicShare?: Maybe<PublicShare>;
  publicShareByCode: PublicShare;
  /**
   * WARNING: this query/mutation is experimental. Names, fields or types can possibly have breaking changes. ---
   * Gets the status of a raster to lottie conversion job.
   */
  rasterToLottieStatus: RasterToLottieJob;
  rasterToLottieVersion: Scalars['String']['output'];
  recentCuratedPremiumAssets: PremiumAssetConnection;
  recentPremiumAssetPacks: PremiumAssetPackConnection;
  recentPremiumAssets: PremiumAssetConnection;
  recentPublicAnimations: PublicAnimationConnection;
  /** Fetch recently deleted files for the workspace. */
  recentlyDeleted: RecentlyDeletedConnection;
  /** Fetch recently deleted files for the workspace. */
  recentlyDeletedChildren: ProjectFileConnection;
  /** Fetch recently deleted resource with the parent. */
  recentlyDeletedResource: RecentlyDeleted;
  /**
   * Search folders inside a specific workspace by it's title.
   * @deprecated Use `searchFolders` instead.
   */
  searchFoldersInWorkspace: Array<Folder>;
  searchMultipleWorkspaces: SearchWorkspaceResponse;
  searchPremiumAssetPacks: PremiumAssetPackConnection;
  searchPremiumAssets: PremiumAssetConnection;
  /**
   * Search projects inside a specific workspace by it's title.
   * @deprecated Use `searchProjects` instead
   */
  searchProjectsInWorkspace: Array<Project>;
  searchPublicAnimations: PublicAnimationConnection;
  searchWorkspace: SearchWorkspaceResponse;
  services: Array<Service>;
  softwareUpdates: SoftwareUpdate;
  /** Find source files by file version id */
  sourceFile?: Maybe<SourceFile>;
  /** Fetch suggested invitees for the authenticated user. */
  suggestedInvitees: SuggestedInviteeConnection;
  /** Suggest organization workspace based on domain name of the user's email address */
  suggestedOrganizationWorkspace: SuggestedWorkspace;
  /** Suggest workspaces based on domain name of the user's email address */
  suggestedWorkspaces: SuggestedWorkspaceConnection;
  /** Get the comments for an entity by frame number */
  timelineCommentsByFrame: CommentConnection;
  /** Get the count of comments for an entity grouped by frame number */
  timelineCommentsCount: Array<KeyCount>;
  trendingSearches: Array<TrendingItem>;
  /** Get a user's public information based on ID. */
  user?: Maybe<User>;
  userAchievements?: Maybe<UserAchievementConnection>;
  /** Get the country of the user */
  userCountry: Scalars['String']['output'];
  userHasCreatorAccess: Scalars['Boolean']['output'];
  /** Returns a list of user segments available for choosing. */
  userSegments?: Maybe<UserSegmentListing>;
  /** Check if self-service account deletion is available for this user. */
  userSelfDeleteAvailable: Scalars['Boolean']['output'];
  userStats?: Maybe<UserStats>;
  /** Batch get users' public information based on ID. */
  users: Array<Maybe<User>>;
  /** Information about who owns the current session. */
  viewer: User;
  /** List of types of credentials enabled for this account. */
  viewerCredentials: Array<ViewerCredential>;
  /** Gets user's notification preferences */
  viewerNotificationPreferences: Array<ViewerNotificationPreference>;
  viewerPublicAnimationDownloads: PublicAnimationConnection;
  viewerPublicAnimationLikes: PublicAnimationConnection;
  workflowVersion: Scalars['String']['output'];
  /** Look up a workspace by its id. */
  workspace?: Maybe<Workspace>;
  /** Check if the workspace can add members */
  workspaceCanAddMoreSeats: Scalars['Boolean']['output'];
  /** Check if the workspace can add members */
  workspaceCanManageMembers: Scalars['Boolean']['output'];
  /** Look up a workflow collection by its id. */
  workspaceCollection: WorkspaceCollection;
  /** Fetch files for a workspace collection. */
  workspaceCollectionFiles: FileConnection;
  /** Fetch workspace collections connection. */
  workspaceCollections: WorkspaceCollectionConnection;
  workspaceColorPalette: WorkspaceColorPalette;
  workspaceColorPalettes: WorkspaceColorPaletteConnection;
  /** get workspace dependencies count, files, projects and members */
  workspaceCounts?: Maybe<WorkspaceCountsObject>;
  /** Fetch draft project for the given workspace. */
  workspaceDraftProject: Project;
  /** Indicates if the user has requested to join the suggested workspace */
  workspaceHasRequestedToJoin: Scalars['Boolean']['output'];
  /** Get workspace invitation link */
  workspaceInvitationLink?: Maybe<WorkspaceInvitationLink>;
  /** Look up membership requests by workspace id */
  workspaceJoinRequests: WorkspaceMemberConnection;
  /** Get the number of members in a workspace */
  workspaceMemberCount: Scalars['Float']['output'];
  /** Look up invitations by workspace id. */
  workspaceMembers: WorkspaceMemberConnection;
  /** Get workspace portfolio */
  workspacePortfolio?: Maybe<WorkspacePortfolio>;
  workspacePortfolioHasEditAccess: Scalars['Boolean']['output'];
  workspacePortfolioIsUrlAvailable: Scalars['Boolean']['output'];
  /** Fetch projects under a specific workspace. */
  workspaceProjects: ProjectConnection;
  workspaceSeatUtilization: WorkspaceSeatUtilization;
  /** Get the settings of a Workspace */
  workspaceSettings: WorkspaceSettings;
  /** Get the plan the workspace subscription can be upgraded to */
  workspaceSubscriptionAvailablePlanUpgrade?: Maybe<AvailablePlanUpgrade>;
  /** Checks if the given checkout session was completed */
  workspaceSubscriptionCheckoutCompleted: WorkspaceSubscriptionCheckoutSessionMetadata;
  /** Get the price of per user for the workspace */
  workspaceUserPrice: WorkspaceMemberPrice;
  /** Fetch all the workspaces that has access to the logged in user */
  workspaces?: Maybe<Array<Workspace>>;
  /** Fetch all workspaces owned by user */
  workspacesOwnedByUser?: Maybe<Array<Workspace>>;
  zipFile: ZipFile;
};

export type QueryBillingPackageArgs = {
  id: Scalars['ID']['input'];
};

export type QueryBillingPackagePriceArgs = {
  id: Scalars['ID']['input'];
};

export type QueryBillingPackagesArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  editorsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type QueryBlogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryBrandInformationArgs = {
  domain: Scalars['String']['input'];
};

export type QueryColorPalettesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryCommentMentionableUsersArgs = {
  id: Scalars['ID']['input'];
};

export type QueryCommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  type: CommentableEntityType;
};

export type QueryDeletedFileArgs = {
  id: Scalars['ID']['input'];
};

export type QueryEnterpriseLoginAuthorizationUrlArgs = {
  email: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
};

export type QueryEnterpriseOrganizationArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type QueryEnterpriseOrganizationConfigurationLinkArgs = {
  type: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type QueryEnterpriseOrganizationDirectoryGroupsArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type QueryEnterpriseOrganizationLoginArgs = {
  orgInternalId: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFeaturedAnimatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryFeaturedCuratedPremiumAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  canvaCompatible?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryFeaturedPremiumAssetPacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryFeaturedPremiumAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  canvaCompatible?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryFeaturedPublicAnimationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<AnimationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryFileArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFileAboveAndBelowIdArgs = {
  folderId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFileCountByWorkspaceIdArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type QueryFileHandbackArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFileIdsWithinLimitArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type QueryFileNotificationSubscribersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryFileNotificationsIsSubscribedArgs = {
  fileId: Scalars['ID']['input'];
};

export type QueryFileVariantsArgs = {
  fileId: Scalars['ID']['input'];
  fileVersionId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryFileVersionArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFileVersionOptimizeJobArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFileVersionTagsGenerateArgs = {
  thumbnailUrl: Scalars['String']['input'];
};

export type QueryFileVersionsArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  editorsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  fileId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Float']['input']>;
  includeSubVersions?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFolderArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFolderFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFoldersByProjectIdArgs = {
  projectId: Scalars['String']['input'];
};

export type QueryGetLottieMockupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  animationId: Scalars['ID']['input'];
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryGetUserOnboardingChecklistArgs = {
  userId: Scalars['ID']['input'];
};

export type QueryInvoiceArgs = {
  id: Scalars['ID']['input'];
};

export type QueryInvoicesArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type QueryIsEmailAvailableArgs = {
  email: Scalars['String']['input'];
};

export type QueryIsUsernameAvailableArgs = {
  username: Scalars['String']['input'];
};

export type QueryOAuthConsentRequestArgs = {
  consentChallenge: Scalars['String']['input'];
};

export type QueryOAuthLoginRequestArgs = {
  loginChallenge: Scalars['String']['input'];
};

export type QueryPaymentIntentArgs = {
  id: Scalars['String']['input'];
};

export type QueryPaymentIntentProcessingCheckArgs = {
  workspaceId: Scalars['String']['input'];
};

export type QueryPopularCuratedPremiumAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  canvaCompatible?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryPopularPremiumAssetPacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryPopularPremiumAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  canvaCompatible?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryPopularPublicAnimationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<AnimationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  sort?: InputMaybe<DurationFilterType>;
};

export type QueryPortfolioPostArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPortfolioPostIsSlugAvailableArgs = {
  input: PortfolioSlugAvailableInput;
};

export type QueryPortfolioPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  portfolioId: Scalars['ID']['input'];
  status?: InputMaybe<PortfolioPostStatus>;
};

export type QueryPremiumAssetArgs = {
  slug: Scalars['String']['input'];
};

export type QueryPremiumAssetPackArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  slug: Scalars['String']['input'];
};

export type QueryPrivateShareMembersArgs = {
  resourceId: Scalars['ID']['input'];
  resourceType: PrivateShareType;
};

export type QueryPrivateShareSuggestedMembersArgs = {
  resourceId: Scalars['ID']['input'];
  resourceType: PrivateShareType;
};

export type QueryPrivateSharesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByType?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryProjectArgs = {
  id: Scalars['ID']['input'];
};

export type QueryProjectFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPublicAnimationArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPublicAnimationByHashArgs = {
  hash: Scalars['String']['input'];
};

export type QueryPublicAnimationCollectionArgs = {
  id: Scalars['String']['input'];
};

export type QueryPublicAnimationCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<CollectionAnimationTypeInput>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPublicAnimationCollectionsByUserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPublicAnimationsByUserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<PublicAnimationStatusFilterTypeInput>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  userId: Scalars['ID']['input'];
};

export type QueryPublicAssetsArgs = {
  fileId: Scalars['ID']['input'];
};

export type QueryPublicCollectionAnimationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  collectionId: Scalars['Float']['input'];
  filters?: InputMaybe<AnimationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryPublicShareArgs = {
  resourceId: Scalars['ID']['input'];
  resourceType: PublicShareType;
};

export type QueryPublicShareByCodeArgs = {
  shareCode: Scalars['String']['input'];
};

export type QueryRasterToLottieStatusArgs = {
  jobId: Scalars['ID']['input'];
};

export type QueryRecentCuratedPremiumAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  canvaCompatible?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryRecentPremiumAssetPacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryRecentPremiumAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  canvaCompatible?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryRecentPublicAnimationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<AnimationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryRecentlyDeletedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type QueryRecentlyDeletedChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  resourceId: Scalars['String']['input'];
};

export type QueryRecentlyDeletedResourceArgs = {
  input: RecentlyDeletedResourceInput;
};

export type QuerySearchFoldersInWorkspaceArgs = {
  query: Scalars['String']['input'];
  workspaceIds: Array<Scalars['ID']['input']>;
};

export type QuerySearchMultipleWorkspacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fileStatus?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  workspaceIds: Array<Scalars['String']['input']>;
};

export type QuerySearchPremiumAssetPacksArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  editorsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySearchPremiumAssetsArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  canvaCompatible?: InputMaybe<Scalars['Boolean']['input']>;
  editorsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySearchProjectsInWorkspaceArgs = {
  query: Scalars['String']['input'];
  workspaceIds: Array<Scalars['ID']['input']>;
};

export type QuerySearchPublicAnimationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<AnimationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  query: Scalars['String']['input'];
  withAep?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerySearchWorkspaceArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fileStatus?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySoftwareUpdatesArgs = {
  app: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySourceFileArgs = {
  fileVersionId: Scalars['ID']['input'];
};

export type QuerySuggestedInviteesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type QuerySuggestedWorkspacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryTimelineCommentsByFrameArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  frame: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  type: CommentableEntityType;
};

export type QueryTimelineCommentsCountArgs = {
  id: Scalars['ID']['input'];
  type: CommentableEntityType;
};

export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type QueryUserAchievementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryUsersArgs = {
  ids: Array<InputMaybe<Scalars['String']['input']>>;
};

export type QueryViewerPublicAnimationDownloadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryViewerPublicAnimationLikesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryWorkspaceArgs = {
  id: Scalars['ID']['input'];
};

export type QueryWorkspaceCanAddMoreSeatsArgs = {
  id: Scalars['ID']['input'];
};

export type QueryWorkspaceCanManageMembersArgs = {
  id: Scalars['ID']['input'];
};

export type QueryWorkspaceCollectionArgs = {
  id: Scalars['ID']['input'];
};

export type QueryWorkspaceCollectionFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
};

export type QueryWorkspaceCollectionsArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  editorsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type QueryWorkspaceColorPaletteArgs = {
  id: Scalars['ID']['input'];
};

export type QueryWorkspaceColorPalettesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type QueryWorkspaceCountsArgs = {
  id: Scalars['String']['input'];
};

export type QueryWorkspaceDraftProjectArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type QueryWorkspaceHasRequestedToJoinArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type QueryWorkspaceInvitationLinkArgs = {
  invitationCode?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryWorkspaceJoinRequestsArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  editorsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type QueryWorkspaceMemberCountArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type QueryWorkspaceMembersArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  editorsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type QueryWorkspacePortfolioArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type QueryWorkspacePortfolioHasEditAccessArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type QueryWorkspacePortfolioIsUrlAvailableArgs = {
  input: PortfolioUrlAvailableInput;
};

export type QueryWorkspaceProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  includeSystemProjects?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['QuerySortOptions']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type QueryWorkspaceSeatUtilizationArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type QueryWorkspaceSettingsArgs = {
  id: Scalars['ID']['input'];
};

export type QueryWorkspaceSubscriptionAvailablePlanUpgradeArgs = {
  subscriptionId: Scalars['ID']['input'];
};

export type QueryWorkspaceSubscriptionCheckoutCompletedArgs = {
  id: Scalars['ID']['input'];
};

export type QueryWorkspaceUserPriceArgs = {
  workspaceId: Scalars['String']['input'];
};

export type QueryWorkspacesOwnedByUserArgs = {
  includeDraft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryZipFileArgs = {
  key: Scalars['String']['input'];
};

/** A raster to lottie conversion job. */
export type RasterToLottieJob = {
  __typename?: 'RasterToLottieJob';
  /** Debug information for the job. */
  debug?: Maybe<Scalars['String']['output']>;
  /** If the job failed, this will contain an error message. */
  failedReason?: Maybe<Scalars['String']['output']>;
  /** The ID of the job. */
  id: Scalars['ID']['output'];
  /** The size of the input file in bytes. */
  inputFileSize?: Maybe<Scalars['Int']['output']>;
  /** The size of the Lottie file in bytes. */
  lottieFileSize?: Maybe<Scalars['Int']['output']>;
  /** The last progress notification of the job. */
  progress?: Maybe<Scalars['String']['output']>;
  /** The start time of the job. */
  startTime?: Maybe<Scalars['Float']['output']>;
  /** The status of the job. */
  status: RasterToLottieJobStatus;
  /** The time taken to complete the job. */
  timeTaken?: Maybe<Scalars['Float']['output']>;
  /** The URL of the Lottie file. */
  url?: Maybe<Scalars['String']['output']>;
};

export type RasterToLottieJobParams = {
  /** Default value: 16. */
  antiAliasKernel?: InputMaybe<Scalars['Int']['input']>;
  /** Default value: 150. */
  cannyHighThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Default value: 50. */
  cannyLowThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Default value: false. */
  convertToShape?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default value: false. */
  debug?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default value: 60. */
  edgePercentage?: InputMaybe<Scalars['Int']['input']>;
  /** Default value: 15. */
  mergingDistanceThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Default value: 1.2. */
  potraceAlphamax?: InputMaybe<Scalars['Float']['input']>;
  /** Default value: true. */
  potraceOpticurve?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default value: 0.2. */
  potraceOpttolerance?: InputMaybe<Scalars['Float']['input']>;
  /** Default value: 5. */
  potraceTurdsize?: InputMaybe<Scalars['Int']['input']>;
  /** Default value: 4. */
  potraceTurnPolicy?: InputMaybe<Scalars['Int']['input']>;
  /** Default value: false. */
  removeBackground?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default value: false. */
  removeHoles?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default value: false. */
  simplify?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default value: 20. */
  threshold?: InputMaybe<Scalars['Int']['input']>;
  /** Default value: 100. */
  thresholdLarge?: InputMaybe<Scalars['Int']['input']>;
  /** Default value: false. */
  upscale?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default value: 1. */
  upscaleFactor?: InputMaybe<Scalars['Int']['input']>;
};

export enum RasterToLottieJobStatus {
  Active = 'active',
  Completed = 'completed',
  Delayed = 'delayed',
  Failed = 'failed',
  Prioritized = 'prioritized',
  Unknown = 'unknown',
  Waiting = 'waiting',
}

export type RasterToLottieUploadUrl = {
  __typename?: 'RasterToLottieUploadUrl';
  /** Additional fields for the raster upload POST request. */
  fields: Scalars['JSON']['output'];
  /** The ID of the image. */
  imageId: Scalars['ID']['output'];
  /** The upload URL to make a POST request with the raster file. */
  url: Scalars['String']['output'];
};

export type RatePlanObject = {
  __typename?: 'RatePlanObject';
  billingCycle: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  endsAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  startsAt: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type RecentlyDeleted = {
  __typename?: 'RecentlyDeleted';
  children: Array<RecentlyDeleted>;
  createdAt: Scalars['DateTime']['output'];
  expireAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  parent?: Maybe<RecentlyDeleted>;
  path: Scalars['String']['output'];
  /** Recently deleted resource */
  resource?: Maybe<RecentlyDeletedResource>;
  resourceId: Scalars['ID']['output'];
  resourceType: RecentlyDeletedResourceType;
  snapshot: Scalars['JSON']['output'];
  status: RecentlyDeletedStatus;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  workspaceId: Scalars['String']['output'];
};

export type RecentlyDeletedConnection = {
  __typename?: 'RecentlyDeletedConnection';
  /** A list edges. */
  edges: Array<RecentlyDeletedEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type RecentlyDeletedEdge = {
  __typename?: 'RecentlyDeletedEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: RecentlyDeleted;
};

export type RecentlyDeletedPurgeInput = {
  resourceId: Scalars['ID']['input'];
  resourceType: RecentlyDeletedResourceType;
};

export type RecentlyDeletedPurgeMultipleInput = {
  resourceIds: Scalars['ID']['input'];
  resourceType: RecentlyDeletedResourceType;
};

export type RecentlyDeletedResource = File | Folder | Project;

export type RecentlyDeletedResourceInput = {
  resourceId: Scalars['ID']['input'];
  resourceType: RecentlyDeletedResourceType;
};

export enum RecentlyDeletedResourceType {
  Collection = 'Collection',
  File = 'File',
  Folder = 'Folder',
  Project = 'Project',
}

export type RecentlyDeletedRestoreInput = {
  location?: InputMaybe<Scalars['ID']['input']>;
  resourceId: Scalars['ID']['input'];
  resourceType: RecentlyDeletedResourceType;
};

export enum RecentlyDeletedStatus {
  Idle = 'Idle',
  Purging = 'Purging',
  Restoring = 'Restoring',
}

export type SearchWorkspaceResponse = {
  __typename?: 'SearchWorkspaceResponse';
  collections?: Maybe<WorkspaceCollectionConnection>;
  files?: Maybe<FileConnection>;
  folders?: Maybe<FolderConnection>;
  projects?: Maybe<ProjectConnection>;
};

export type Service = {
  __typename?: 'Service';
  name: Scalars['String']['output'];
  version: Scalars['String']['output'];
  /** @deprecated No schema version from schema registry */
  versionInGateway?: Maybe<Scalars['String']['output']>;
};

export type SharedResourceInput = {
  inviteToWorkspace?: InputMaybe<Scalars['Boolean']['input']>;
  recipients: Array<SharedResourceInvitationRecipient>;
  resourceId: Scalars['ID']['input'];
  resourceType: PrivateShareType;
  workspaceAccess?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

export type SharedResourceInvitationRecipient = {
  access: Scalars['String']['input'];
  existingMember?: InputMaybe<Scalars['Boolean']['input']>;
  recipientEmail?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SignedUrl = {
  __typename?: 'SignedUrl';
  /** Signed url expiry time */
  expires: Scalars['Float']['output'];
  /** Cloudfront signed url */
  signedUrl: Scalars['String']['output'];
};

export type SoftwareUpdate = {
  __typename?: 'SoftwareUpdate';
  autoUpdate: Scalars['Boolean']['output'];
  changelog?: Maybe<Scalars['String']['output']>;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  forceUpdate: Scalars['Boolean']['output'];
  infoUrl?: Maybe<Scalars['String']['output']>;
  version: Scalars['String']['output'];
};

export type SourceFile = {
  __typename?: 'SourceFile';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fileId: Scalars['String']['output'];
  fileVersionId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sourceFileKey?: Maybe<Scalars['String']['output']>;
  sourceFileName: Scalars['String']['output'];
  sourceFileSize?: Maybe<Scalars['Float']['output']>;
  sourceFileVersionId?: Maybe<Scalars['String']['output']>;
  sourceType: Scalars['String']['output'];
  sourceUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type SourceFileCreateInput = {
  fileId: Scalars['String']['input'];
  fileVersionId: Scalars['String']['input'];
  sourceFileKey?: InputMaybe<Scalars['String']['input']>;
  sourceFileName: Scalars['String']['input'];
  sourceFileSize?: InputMaybe<Scalars['Float']['input']>;
  sourceFileVersionId?: InputMaybe<Scalars['String']['input']>;
  sourceType: Scalars['String']['input'];
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Subscribe to File Update events */
  fileUpdate: FileObject;
  /** Subscribe to File Variation Update events */
  fileVariationUpdate: FileVariation;
  zipFileUpdate: ZipFileObject;
};

export type SubscriptionFileUpdateArgs = {
  key: Scalars['String']['input'];
};

export type SubscriptionFileVariationUpdateArgs = {
  key: Scalars['String']['input'];
};

export type SubscriptionZipFileUpdateArgs = {
  key: Scalars['String']['input'];
};

export type SubscriptionCancelInput = {
  reasonId: Scalars['String']['input'];
  reasonText?: InputMaybe<Scalars['String']['input']>;
  subscriptionId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type SuggestedInvitee = {
  __typename?: 'SuggestedInvitee';
  /** Avatar url fetched from auth service. */
  avatarUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  userEmail: Scalars['String']['output'];
  userName: Scalars['String']['output'];
  viewCount: Scalars['Float']['output'];
  viewerEmail: Scalars['String']['output'];
  viewerName: Scalars['String']['output'];
};

export type SuggestedInviteeConnection = {
  __typename?: 'SuggestedInviteeConnection';
  /** A list edges. */
  edges: Array<SuggestedInviteeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type SuggestedInviteeEdge = {
  __typename?: 'SuggestedInviteeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SuggestedInvitee;
};

export type SuggestedMember = {
  __typename?: 'SuggestedMember';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SuggestedWorkspace = {
  __typename?: 'SuggestedWorkspace';
  /** Indicates if the user has requested to join the suggested workspace */
  hasRequestedToJoin: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Check if user is member of the workspace */
  isMember: Scalars['Boolean']['output'];
  memberIds?: Maybe<Array<Scalars['ID']['output']>>;
  members?: Maybe<Array<Maybe<User>>>;
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
};

export type SuggestedWorkspaceConnection = {
  __typename?: 'SuggestedWorkspaceConnection';
  /** A list edges. */
  edges: Array<SuggestedWorkspaceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type SuggestedWorkspaceEdge = {
  __typename?: 'SuggestedWorkspaceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SuggestedWorkspace;
};

export enum TemplateSize {
  Desktop = 'desktop',
  Mobile = 'mobile',
  Tablet = 'tablet',
}

export type Theme = {
  __typename?: 'Theme';
  dark?: Maybe<ThemeColor>;
  light?: Maybe<ThemeColor>;
};

export type ThemeColor = {
  __typename?: 'ThemeColor';
  bgColor?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  textColor?: Maybe<Scalars['String']['output']>;
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  /** Png */
  png?: Maybe<ThumbnailSize>;
  /** Webp */
  webp?: Maybe<ThumbnailSize>;
};

export type ThumbnailContent = {
  __typename?: 'ThumbnailContent';
  /** Content Type */
  contentType?: Maybe<Scalars['String']['output']>;
  /** Version Id */
  s3VersionId?: Maybe<Scalars['String']['output']>;
  /** Url of thumbnail */
  url?: Maybe<Scalars['String']['output']>;
};

export type ThumbnailSize = {
  __typename?: 'ThumbnailSize';
  /** Size large */
  large?: Maybe<ThumbnailContent>;
  /** Size medium  */
  medium?: Maybe<ThumbnailContent>;
  /** Size small */
  small?: Maybe<ThumbnailContent>;
};

export type TrendingItem = {
  __typename?: 'TrendingItem';
  link: Scalars['String']['output'];
  rank: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type UpdateFileInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sourceFileKey?: InputMaybe<Scalars['String']['input']>;
  sourceFileType?: InputMaybe<Scalars['String']['input']>;
  sourceFilename?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOnboardingChecklistInput = {
  completeSeen?: InputMaybe<Scalars['Boolean']['input']>;
  dismissSeen?: InputMaybe<Scalars['Boolean']['input']>;
  doneOnboardings?: InputMaybe<Array<Scalars['String']['input']>>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateOnboardingInput = {
  animColorPaletteBtnHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  animCommentBtnHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  animDescriptionSequence?: InputMaybe<Scalars['Boolean']['input']>;
  animPanelBtnHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  animSegmentBtnHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  animTitleHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  animTopbarHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  animVersionBtnHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardAnimUploadHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardCollectionHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardCollectionViewSequence?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardCreateAnimationHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardOptimizedDotlottieBanner?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardPageHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardPremiumAssetHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardPublicProfileHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardSlackIntegrationBellIndicator?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardSlackIntegrationPopup?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardWelcomeLfModal?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardWelcomeTeamModal?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardWelcomeUpgradedModal?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardWorkspaceCollectionHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  dashboardWorkspaceHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  folderCreateAnimationHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  introAnimSequence?: InputMaybe<Scalars['Boolean']['input']>;
  introDashboardSequence?: InputMaybe<Scalars['Boolean']['input']>;
  multiPlayerOnboarding?: InputMaybe<Scalars['Boolean']['input']>;
  projectCreateAnimationHotspot?: InputMaybe<Scalars['Boolean']['input']>;
  slackOnboardingForComment?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateWorkspaceColorPaletteInput = {
  colors: Array<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  achievements?: Maybe<UserAchievementConnection>;
  /** The date/time when the user authenticated the current session. */
  authenticatedAt: Scalars['DateTime']['output'];
  /** The user's profile picture. */
  avatarUrl: Scalars['String']['output'];
  /** The user's Behance username. */
  behanceUsername?: Maybe<Scalars['String']['output']>;
  /** The user's short Bio. */
  bio?: Maybe<Scalars['String']['output']>;
  /** The user's City of residence. */
  city?: Maybe<Scalars['String']['output']>;
  /** The user's Country of residence. */
  country?: Maybe<Scalars['String']['output']>;
  /** The date/time of account creation. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user's Dribbble username. */
  dribbbleUsername?: Maybe<Scalars['String']['output']>;
  /** The user's email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** True if the user's current email address has been verified. */
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  /** True if the user has agreed to receive marketing emails. */
  enableMarketingEmails?: Maybe<Scalars['Boolean']['output']>;
  /** The user's first name. */
  firstName: Scalars['String']['output'];
  /** The user's Github username. */
  githubUsername?: Maybe<Scalars['String']['output']>;
  hasSlackNotificationEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** The user's LottieFiles account's unique ID. */
  id: Scalars['String']['output'];
  /** The user's Instagram username. */
  instagramUsername?: Maybe<Scalars['String']['output']>;
  /** True if the user is available for work. */
  isHireable: Scalars['Boolean']['output'];
  /** @deprecated Legacy field, will always return false. */
  isPro: Scalars['Boolean']['output'];
  /** The city where the user last logged in from. */
  lastLoggedInFromCity?: Maybe<Scalars['String']['output']>;
  /** The country where the user last logged in from. */
  lastLoggedInFromCountry?: Maybe<Scalars['String']['output']>;
  /** The timezone where the user last logged in from. */
  lastLoggedInTimezone?: Maybe<Scalars['String']['output']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** For use in the internal migration process. It will contain the ID of the user in the legacy WEB DB if the user is migrated. Otherwise, it will return an INT hashed from the user's Kratos ID. */
  legacyWebUserId: Scalars['Int']['output'];
  /** The user's Linkedin username. */
  linkedinUsername?: Maybe<Scalars['String']['output']>;
  /** The user's locale code. */
  locale?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `city` instead. */
  location?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `firstName` instead. */
  name: Scalars['String']['output'];
  publicAnimations?: Maybe<PublicAnimationConnection>;
  stats?: Maybe<UserStats>;
  /** The user's Twitter username. */
  twitterUsername?: Maybe<Scalars['String']['output']>;
  /** If the user is ongoing an email change process, this is the new email that the user is changing to. Otherwise it will be `null`. */
  unconfirmedNewEmail?: Maybe<Scalars['String']['output']>;
  /** The date/time of last account update. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use `username` instead. */
  url: Scalars['String']['output'];
  /** The segments this user belongs to. */
  userSegments?: Maybe<Array<UserSegment>>;
  /** The user's unique username. */
  username: Scalars['String']['output'];
  /** The user's personal website. */
  website?: Maybe<Scalars['String']['output']>;
};

export type UserAchievementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPublicAnimationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<PublicAnimationStatusFilterTypeInput>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UserAchievement = {
  __typename?: 'UserAchievement';
  completed: Scalars['Boolean']['output'];
  count: Scalars['Int']['output'];
  goal?: Maybe<Scalars['Int']['output']>;
  progressMessage: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type UserAchievementConnection = {
  __typename?: 'UserAchievementConnection';
  /** A list edges. */
  edges: Array<UserAchievementEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type UserAchievementEdge = {
  __typename?: 'UserAchievementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserAchievement;
};

export type UserNotificationSubscription = {
  __typename?: 'UserNotificationSubscription';
  createdAt: Scalars['DateTime']['output'];
  entityId: Scalars['String']['output'];
  entityType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isSubscribed: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserObject;
  userId: Scalars['String']['output'];
};

export type UserNotificationSubscriptionConnection = {
  __typename?: 'UserNotificationSubscriptionConnection';
  /** A list edges. */
  edges: Array<UserNotificationSubscriptionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type UserNotificationSubscriptionEdge = {
  __typename?: 'UserNotificationSubscriptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserNotificationSubscription;
};

export type UserObject = {
  __typename?: 'UserObject';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserProfilePhotoUpload = {
  __typename?: 'UserProfilePhotoUpload';
  filename: Scalars['String']['output'];
  signedUrl: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type UserResourcePermission = {
  __typename?: 'UserResourcePermission';
  access: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  resourceId: Scalars['ID']['output'];
  resourceType: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserSegment = {
  __typename?: 'UserSegment';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type UserSegmentListing = {
  __typename?: 'UserSegmentListing';
  segments?: Maybe<Array<UserSegment>>;
};

export type UserStatGraphData = {
  __typename?: 'UserStatGraphData';
  value: Scalars['Int']['output'];
};

export type UserStats = {
  __typename?: 'UserStats';
  downloadGraph: Array<UserStatGraphData>;
  downloads: Scalars['Int']['output'];
  downloadsLastMonth: Scalars['Int']['output'];
  likeGraph: Array<UserStatGraphData>;
  likes: Scalars['Int']['output'];
  likesLastMonth: Scalars['Int']['output'];
  profileGraph: Array<UserStatGraphData>;
  profileViews: Scalars['Int']['output'];
  profileViewsLastMonth: Scalars['Int']['output'];
};

export type VariationMetadata = {
  __typename?: 'VariationMetadata';
  /** Preview Background Color */
  bgColor?: Maybe<Scalars['String']['output']>;
  /** Previvew Height */
  height?: Maybe<Scalars['Float']['output']>;
  /** Preview Width */
  width?: Maybe<Scalars['Float']['output']>;
};

export type ViewerCredential = {
  __typename?: 'ViewerCredential';
  /** Additional information on the credential. If enterprise sso then it will be the name of the organization */
  description?: Maybe<Scalars['String']['output']>;
  /** Internal ID of the organization for the credential, if available. */
  orgInternalId?: Maybe<Scalars['String']['output']>;
  /** The type of the credential. */
  type: Scalars['String']['output'];
};

export type ViewerNotificationPreference = {
  __typename?: 'ViewerNotificationPreference';
  /** The notification preference configs */
  preference: NotificationPreference;
  /** The notification preference template info */
  template: NotificationTemplate;
};

export type WorkflowTempFilePreSignedUploadRequest = {
  __typename?: 'WorkflowTempFilePreSignedUploadRequest';
  fileKey: Scalars['String']['output'];
  preSignedUploadURL: Scalars['String']['output'];
  publicReadURL: Scalars['String']['output'];
};

export type Workspace = {
  __typename?: 'Workspace';
  account: Account;
  billingAddressLineOne?: Maybe<Scalars['String']['output']>;
  billingAddressLineTwo?: Maybe<Scalars['String']['output']>;
  billingEmail?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  features: Array<FeatureObject>;
  /** The owner this workspace belongs to. */
  hasOwnership?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if the user has requested to join the suggested workspace */
  hasRequestedToJoin: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  indexed: Scalars['Boolean']['output'];
  invitationLink?: Maybe<WorkspaceInvitationLink>;
  /** Check if user is member of the workspace */
  isMember?: Maybe<Scalars['Boolean']['output']>;
  memberIds?: Maybe<Array<Scalars['String']['output']>>;
  members?: Maybe<Array<Maybe<User>>>;
  name: Scalars['String']['output'];
  /** The owner this workspace belongs to. */
  owner?: Maybe<UserObject>;
  /** Permission scopes the current user has on this workspace */
  permissionScopes: Array<Scalars['String']['output']>;
  /** Check if the current user is already on boarded or not. If the user is on boarded return null, otherwise return user access level */
  requiresOnboardingAs?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  /** Fetch the active subscription for this workspace */
  subscription?: Maybe<WorkspaceSubscription>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type WorkspaceCollection = {
  __typename?: 'WorkspaceCollection';
  /** Get the permission scopes for collection for the current user / workspace */
  collectionPermissionScopes: Array<Scalars['String']['output']>;
  /** The thumbnail Urls of the last 3 animation inside a collection */
  collectionThumbnailUrls?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdByUserId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Featured file key for the workspace collection */
  featuredFileKey?: Maybe<Scalars['String']['output']>;
  featuredFileObject?: Maybe<FileObject>;
  files: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workspaceId: Scalars['String']['output'];
};

export type WorkspaceCollectionConnection = {
  __typename?: 'WorkspaceCollectionConnection';
  /** A list edges. */
  edges: Array<WorkspaceCollectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type WorkspaceCollectionCreateInput = {
  files: Scalars['JSON']['input'];
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type WorkspaceCollectionEdge = {
  __typename?: 'WorkspaceCollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WorkspaceCollection;
};

export type WorkspaceCollectionUpdateInput = {
  files?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceColorPalette = {
  __typename?: 'WorkspaceColorPalette';
  colors: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdByUserId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workspaceId: Scalars['ID']['output'];
};

export type WorkspaceColorPaletteConnection = {
  __typename?: 'WorkspaceColorPaletteConnection';
  /** A list edges. */
  edges: Array<WorkspaceColorPaletteEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type WorkspaceColorPaletteEdge = {
  __typename?: 'WorkspaceColorPaletteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WorkspaceColorPalette;
};

export type WorkspaceCountsObject = {
  __typename?: 'WorkspaceCountsObject';
  filesCount: Scalars['Float']['output'];
  membersCount: Scalars['Float']['output'];
  projectsCount: Scalars['Float']['output'];
};

/** The type of access granted to users who wish to join the workspace via discovery */
export enum WorkspaceDiscoveryJoinType {
  Instant = 'INSTANT',
  UponApproval = 'UPON_APPROVAL',
}

export type WorkspaceIconUploadObject = {
  __typename?: 'WorkspaceIconUploadObject';
  fileKey: Scalars['String']['output'];
  preSignedUploadURL: Scalars['String']['output'];
  publicReadURL: Scalars['String']['output'];
};

export type WorkspaceInput = {
  billingAddressLineOne?: InputMaybe<Scalars['String']['input']>;
  billingAddressLineTwo?: InputMaybe<Scalars['String']['input']>;
  billingEmail?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceInvitationLink = {
  __typename?: 'WorkspaceInvitationLink';
  canMembersInvite: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  invitationCode: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  lastUpdatedById: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** Workspace associated with the invitation link */
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type WorkspaceMember = {
  __typename?: 'WorkspaceMember';
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  access: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  invitedBy: Scalars['ID']['output'];
  lastSentAt?: Maybe<Scalars['DateTime']['output']>;
  method: Scalars['String']['output'];
  onboardedAt?: Maybe<Scalars['DateTime']['output']>;
  recipientEmail: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** Recipient user of the invitation */
  user?: Maybe<UserObject>;
  userId?: Maybe<Scalars['String']['output']>;
  /** The workspace this invitation belongs to. */
  workspace: Workspace;
  workspaceId: Scalars['ID']['output'];
};

export type WorkspaceMemberConnection = {
  __typename?: 'WorkspaceMemberConnection';
  /** A list edges. */
  edges: Array<WorkspaceMemberEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Float']['output'];
};

export type WorkspaceMemberEdge = {
  __typename?: 'WorkspaceMemberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WorkspaceMember;
};

export type WorkspaceMemberPrice = {
  __typename?: 'WorkspaceMemberPrice';
  billingCycle: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
};

export type WorkspaceMemberSendInviteInput = {
  recipients: Array<InvitationRecipient>;
  resourceId?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceObject = {
  __typename?: 'WorkspaceObject';
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type WorkspacePortfolio = {
  __typename?: 'WorkspacePortfolio';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isPrivate: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  workspace: Workspace;
};

export type WorkspacePortfolioInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type WorkspacePublicInfo = {
  __typename?: 'WorkspacePublicInfo';
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type WorkspaceSeatUtilization = {
  __typename?: 'WorkspaceSeatUtilization';
  id: Scalars['ID']['output'];
  numberOfContributorSeats: Scalars['Float']['output'];
  numberOfContributorSeatsBalance: Scalars['Float']['output'];
  numberOfContributorSeatsUsed: Scalars['Float']['output'];
  numberOfViewerSeats: Scalars['Float']['output'];
  numberOfViewerSeatsBalance: Scalars['Float']['output'];
  numberOfViewerSeatsUsed: Scalars['Float']['output'];
};

export type WorkspaceSettings = {
  __typename?: 'WorkspaceSettings';
  allowMemberInvites: Scalars['Boolean']['output'];
  defaultRole?: Maybe<Scalars['String']['output']>;
  discoveryJoinType: WorkspaceDiscoveryJoinType;
  isDiscoverable: Scalars['Boolean']['output'];
  workspaceId: Scalars['ID']['output'];
};

export type WorkspaceSettingsUpdateInput = {
  allowMemberInvites?: InputMaybe<Scalars['Boolean']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  discoveryJoinType?: InputMaybe<WorkspaceDiscoveryJoinType>;
  isDiscoverable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkspaceSubscription = {
  __typename?: 'WorkspaceSubscription';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  endsAt: Scalars['DateTime']['output'];
  gracePeriod?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  lastRevisedAt?: Maybe<Scalars['DateTime']['output']>;
  markedForCancellation: Scalars['Boolean']['output'];
  /** Shows the amount of seats already used by the workspace. */
  nextBilling?: Maybe<NextBillingObject>;
  numberOfSeats: Scalars['Float']['output'];
  /** Shows the amount of seats already used by the workspace. */
  numberOfSeatsUsed?: Maybe<Scalars['Float']['output']>;
  organization: OrganizationObject;
  organizationId: Scalars['ID']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  plan: PlanObject;
  planId: Scalars['String']['output'];
  providerCustomerId: Scalars['String']['output'];
  providerId: Scalars['String']['output'];
  providerPriceId: Scalars['String']['output'];
  providerType: Scalars['String']['output'];
  ratePlan: RatePlanObject;
  ratePlanId: Scalars['ID']['output'];
  revisionNumber: Scalars['Float']['output'];
  startsAt: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  viewerNumberOfSeats?: Maybe<Scalars['Float']['output']>;
  viewerProviderPriceId?: Maybe<Scalars['String']['output']>;
  workspace: WorkspaceObject;
  workspaceId: Scalars['ID']['output'];
};

export type WorkspaceSubscriptionCheckoutForEmbedInput = {
  onBoardAllMembers?: InputMaybe<Scalars['Boolean']['input']>;
  paymentProvider?: InputMaybe<Scalars['String']['input']>;
  pricingId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Float']['input']>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  returnTo?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  viewerQuantity?: InputMaybe<Scalars['Float']['input']>;
  workspaceId: Scalars['String']['input'];
  workspaceMemberIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type WorkspaceSubscriptionCheckoutSessionInput = {
  account?: InputMaybe<AccountInput>;
  brainTreeClientToken?: InputMaybe<Scalars['String']['input']>;
  ctaButtonText?: InputMaybe<Scalars['String']['input']>;
  isExtendedTrial?: InputMaybe<Scalars['Boolean']['input']>;
  isPrepayOptional?: InputMaybe<Scalars['Boolean']['input']>;
  isTrial?: InputMaybe<Scalars['Boolean']['input']>;
  onBoardAllMembers?: InputMaybe<Scalars['Boolean']['input']>;
  paymentProvider?: InputMaybe<Scalars['String']['input']>;
  pricingId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Float']['input']>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  returnTo?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  viewerQuantity?: InputMaybe<Scalars['Float']['input']>;
  workspaceId: Scalars['String']['input'];
  workspaceMemberIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type WorkspaceSubscriptionCheckoutSessionMetadata = {
  __typename?: 'WorkspaceSubscriptionCheckoutSessionMetadata';
  amountTotal?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  paymentIntent?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  workspaceId: Scalars['String']['output'];
};

export type WorkspaceSubscriptionUpgradeInput = {
  pricingId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type ZipEntryInput = {
  id: Scalars['String']['input'];
  type?: InputMaybe<ZipEntryType>;
};

/** Zip Entry */
export type ZipEntryObject = {
  __typename?: 'ZipEntryObject';
  /** The file this zip entry is for */
  fileKey: Scalars['String']['output'];
  /** The file variation this zip entry is for */
  fileVariationId?: Maybe<Scalars['String']['output']>;
  /** The file version this zip entry is for */
  fileVersionId: Scalars['String']['output'];
  /** The filename of the zip entry within the zip file. */
  filename?: Maybe<Scalars['String']['output']>;
  /** The current status of the zip entry. */
  status: Scalars['String']['output'];
};

export enum ZipEntryType {
  File = 'FILE',
  Folder = 'FOLDER',
  Project = 'PROJECT',
}

export type ZipFile = {
  __typename?: 'ZipFile';
  filename: Scalars['String']['output'];
  filesize?: Maybe<Scalars['Int']['output']>;
  key: Scalars['String']['output'];
  status: Scalars['String']['output'];
  type?: Maybe<ZipFileType>;
  url: Scalars['String']['output'];
};

export type ZipFileCreateInput = {
  entries: Array<ZipEntryInput>;
  type?: InputMaybe<ZipFileType>;
};

/** Zip File */
export type ZipFileObject = {
  __typename?: 'ZipFileObject';
  /** Attributes generated */
  attributes?: Maybe<Attributes>;
  /** The zip entries for the zip file */
  entries: Array<ZipEntryObject>;
  /** Uniquely generated filename */
  filename: Scalars['String']['output'];
  /** Unique file key for a file */
  key: Scalars['String']['output'];
  /** Status of uploaded file */
  status: Scalars['String']['output'];
  /** The zip file entry type */
  type: Scalars['String']['output'];
  /** The url to uploaded  file */
  url: Scalars['String']['output'];
};

export enum ZipFileType {
  Dotlottie = 'DOTLOTTIE',
  Lottie = 'LOTTIE',
  OptimizedDotlottie = 'OPTIMIZED_DOTLOTTIE',
  OptimizedLottie = 'OPTIMIZED_LOTTIE',
}

export type _FileOptimizationJob = {
  __typename?: '_FileOptimizationJob';
  /** Job ID for optimization process */
  id: Scalars['String']['output'];
  /** Status of the optimization process */
  status: FileOptimizationStatus;
};

export type _ZipEntryInput = {
  fileKey: Scalars['String']['input'];
  fileVersionId: Scalars['String']['input'];
  filename?: InputMaybe<Scalars['String']['input']>;
};

export type _ZipFileCreateInput = {
  entries: Array<_ZipEntryInput>;
  /** Type of variation to download */
  entryType?: InputMaybe<Scalars['String']['input']>;
};

export type FetchFeaturedAnimationsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchFeaturedAnimationsQuery = {
  __typename?: 'Query';
  featuredPublicAnimations: {
    __typename?: 'PublicAnimationConnection';
    edges: Array<{
      __typename?: 'PublicAnimationEdge';
      node: {
        __typename?: 'PublicAnimation';
        id: number;
        jsonUrl?: string | null;
        videoUrl?: string | null;
        downloads?: number | null;
        likesCount: number;
      };
    }>;
  };
};

export const FetchFeaturedAnimationsDocument = gql`
  query FetchFeaturedAnimations {
    featuredPublicAnimations {
      edges {
        node {
          id
          jsonUrl
          videoUrl
          downloads
          likesCount
        }
      }
    }
  }
`;
export type FetchFeaturedAnimationsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    FetchFeaturedAnimationsQuery,
    FetchFeaturedAnimationsQueryVariables
  >;
} & TChildProps;
export function withFetchFeaturedAnimations<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data',
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchFeaturedAnimationsQuery,
    FetchFeaturedAnimationsQueryVariables,
    FetchFeaturedAnimationsProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FetchFeaturedAnimationsQuery,
    FetchFeaturedAnimationsQueryVariables,
    FetchFeaturedAnimationsProps<TChildProps, TDataName>
  >(FetchFeaturedAnimationsDocument, {
    alias: 'fetchFeaturedAnimations',
    ...operationOptions,
  });
}

/**
 * __useFetchFeaturedAnimationsQuery__
 *
 * To run a query within a React component, call `useFetchFeaturedAnimationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchFeaturedAnimationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchFeaturedAnimationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchFeaturedAnimationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchFeaturedAnimationsQuery,
    FetchFeaturedAnimationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchFeaturedAnimationsQuery, FetchFeaturedAnimationsQueryVariables>(
    FetchFeaturedAnimationsDocument,
    options,
  );
}
export function useFetchFeaturedAnimationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchFeaturedAnimationsQuery,
    FetchFeaturedAnimationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchFeaturedAnimationsQuery, FetchFeaturedAnimationsQueryVariables>(
    FetchFeaturedAnimationsDocument,
    options,
  );
}
export function useFetchFeaturedAnimationsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    FetchFeaturedAnimationsQuery,
    FetchFeaturedAnimationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    FetchFeaturedAnimationsQuery,
    FetchFeaturedAnimationsQueryVariables
  >(FetchFeaturedAnimationsDocument, options);
}
export type FetchFeaturedAnimationsQueryHookResult = ReturnType<
  typeof useFetchFeaturedAnimationsQuery
>;
export type FetchFeaturedAnimationsLazyQueryHookResult = ReturnType<
  typeof useFetchFeaturedAnimationsLazyQuery
>;
export type FetchFeaturedAnimationsSuspenseQueryHookResult = ReturnType<
  typeof useFetchFeaturedAnimationsSuspenseQuery
>;
export type FetchFeaturedAnimationsQueryResult = Apollo.QueryResult<
  FetchFeaturedAnimationsQuery,
  FetchFeaturedAnimationsQueryVariables
>;
export const namedOperations = {
  Query: {
    FetchFeaturedAnimations: 'FetchFeaturedAnimations',
  },
};
