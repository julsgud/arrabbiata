import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  user?: Maybe<User>,
};

export type Category = {
   __typename?: 'Category',
  id?: Maybe<Scalars['ID']>,
  categoryName?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  login?: Maybe<AuthPayload>,
  logout?: Maybe<Scalars['Boolean']>,
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  currentUser?: Maybe<User>,
  getUserData: Array<Maybe<Category>>,
};


export type QueryGetUserDataArgs = {
  userId?: Maybe<Scalars['ID']>
};

export type Timer = {
   __typename?: 'Timer',
  id?: Maybe<Scalars['ID']>,
  isRunning?: Maybe<Scalars['Boolean']>,
  currentTimeInSeconds?: Maybe<Scalars['Int']>,
};

export type User = {
   __typename?: 'User',
  id?: Maybe<Scalars['ID']>,
  googleId?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
};

export type CurrentUserQueryQueryVariables = {};


export type CurrentUserQueryQuery = (
  { __typename?: 'Query' }
  & { currentUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
  )> }
);

export type GetUserDataQueryVariables = {
  userId: Scalars['ID']
};


export type GetUserDataQuery = (
  { __typename?: 'Query' }
  & { getUserData: Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'categoryName' | 'createdAt' | 'description'>
  )>> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<User>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Category: ResolverTypeWrapper<Category>,
  Mutation: ResolverTypeWrapper<{}>,
  AuthPayload: ResolverTypeWrapper<AuthPayload>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Timer: ResolverTypeWrapper<Timer>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Category: Category,
  Mutation: {},
  AuthPayload: AuthPayload,
  Boolean: Scalars['Boolean'],
  Timer: Timer,
  Int: Scalars['Int'],
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  categoryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>,
  logout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  getUserData?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType, QueryGetUserDataArgs>,
};

export type TimerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Timer'] = ResolversParentTypes['Timer']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  isRunning?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  currentTimeInSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  googleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>,
  Category?: CategoryResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Timer?: TimerResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const CurrentUserQueryDocument = gql`
    query CurrentUserQuery {
  currentUser {
    id
    firstName
    lastName
    email
  }
}
    `;

/**
 * __useCurrentUserQueryQuery__
 *
 * To run a query within a React component, call `useCurrentUserQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>(CurrentUserQueryDocument, baseOptions);
      }
export function useCurrentUserQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>(CurrentUserQueryDocument, baseOptions);
        }
export type CurrentUserQueryQueryHookResult = ReturnType<typeof useCurrentUserQueryQuery>;
export type CurrentUserQueryLazyQueryHookResult = ReturnType<typeof useCurrentUserQueryLazyQuery>;
export type CurrentUserQueryQueryResult = ApolloReactCommon.QueryResult<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>;
export const GetUserDataDocument = gql`
    query GetUserData($userId: ID!) {
  getUserData(userId: $userId) {
    id
    categoryName
    createdAt
    description
  }
}
    `;

/**
 * __useGetUserDataQuery__
 *
 * To run a query within a React component, call `useGetUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDataQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, baseOptions);
      }
export function useGetUserDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, baseOptions);
        }
export type GetUserDataQueryHookResult = ReturnType<typeof useGetUserDataQuery>;
export type GetUserDataLazyQueryHookResult = ReturnType<typeof useGetUserDataLazyQuery>;
export type GetUserDataQueryResult = ApolloReactCommon.QueryResult<GetUserDataQuery, GetUserDataQueryVariables>;