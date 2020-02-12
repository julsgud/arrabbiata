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
  id: Scalars['ID'],
  categoryName?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
};

export type Cycle = {
   __typename?: 'Cycle',
  id?: Maybe<Scalars['ID']>,
  lengthInSeconds?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['String']>,
  categoryIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  taskIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  notes?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  login?: Maybe<AuthPayload>,
  logout?: Maybe<Scalars['Boolean']>,
  setCurrentTime?: Maybe<Scalars['Boolean']>,
  toggleIsRunning?: Maybe<Scalars['Boolean']>,
  stopTimer?: Maybe<Scalars['Boolean']>,
  resetCycle?: Maybe<Scalars['Boolean']>,
  saveCategory?: Maybe<Category>,
  saveCycle?: Maybe<Cycle>,
  setTimeLimit?: Maybe<Scalars['Boolean']>,
  setCycleCategory?: Maybe<Scalars['Boolean']>,
  setCycleTask?: Maybe<Scalars['Boolean']>,
  updateNotes?: Maybe<Scalars['Boolean']>,
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSetCurrentTimeArgs = {
  timeInSeconds: Scalars['Int']
};


export type MutationSaveCategoryArgs = {
  categoryName?: Maybe<Scalars['String']>
};


export type MutationSaveCycleArgs = {
  lengthInSeconds: Scalars['Int'],
  createdAt: Scalars['String'],
  categoryIds: Array<Maybe<Scalars['String']>>,
  taskIds: Array<Maybe<Scalars['String']>>,
  notes?: Maybe<Scalars['String']>
};


export type MutationSetTimeLimitArgs = {
  timeLimit: Scalars['Int']
};


export type MutationSetCycleCategoryArgs = {
  categoryId: Scalars['String']
};


export type MutationSetCycleTaskArgs = {
  taskId: Scalars['String']
};


export type MutationUpdateNotesArgs = {
  updatedNotes: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  currentUser?: Maybe<User>,
  userData?: Maybe<User>,
  timer: Timer,
};

export type Task = {
   __typename?: 'Task',
  id: Scalars['ID'],
  taskName?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type Timer = {
   __typename?: 'Timer',
  id: Scalars['ID'],
  isTimerRunning?: Maybe<Scalars['Boolean']>,
  currentTimeInSeconds?: Maybe<Scalars['Int']>,
  timerDirection?: Maybe<TimerDirection>,
  selectedCategoryId?: Maybe<Scalars['String']>,
  selectedTaskId?: Maybe<Scalars['String']>,
  timeLimitInSeconds?: Maybe<Scalars['Int']>,
  notes?: Maybe<Scalars['String']>,
};

export enum TimerDirection {
  Up = 'UP',
  Down = 'DOWN'
}

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  googleId?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  categories?: Maybe<Array<Maybe<Category>>>,
  tasks?: Maybe<Array<Maybe<Task>>>,
};

export type SaveCategoryMutationVariables = {
  categoryName: Scalars['String']
};


export type SaveCategoryMutation = (
  { __typename?: 'Mutation' }
  & { saveCategory: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'categoryName' | 'createdAt' | 'id' | 'userId'>
  )> }
);

export type ResetCycleMutationVariables = {};


export type ResetCycleMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetCycle'>
);

export type SaveCycleMutationVariables = {
  lengthInSeconds: Scalars['Int'],
  createdAt: Scalars['String'],
  categoryIds: Array<Maybe<Scalars['String']>>,
  taskIds: Array<Maybe<Scalars['String']>>,
  notes?: Maybe<Scalars['String']>
};


export type SaveCycleMutation = (
  { __typename?: 'Mutation' }
  & { saveCycle: Maybe<(
    { __typename?: 'Cycle' }
    & Pick<Cycle, 'id'>
  )> }
);

export type SetCurrentTimeMutationVariables = {
  timeInSeconds: Scalars['Int']
};


export type SetCurrentTimeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setCurrentTime'>
);

export type SetCycleCategoryMutationVariables = {
  categoryId: Scalars['String']
};


export type SetCycleCategoryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setCycleCategory'>
);

export type SetCycleTaskMutationVariables = {
  taskId: Scalars['String']
};


export type SetCycleTaskMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setCycleTask'>
);

export type SetTimeLimitMutationVariables = {
  timeLimit: Scalars['Int']
};


export type SetTimeLimitMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setTimeLimit'>
);

export type StopTimerMutationVariables = {};


export type StopTimerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'stopTimer'>
);

export type ToggleIsRunningMutationVariables = {};


export type ToggleIsRunningMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'toggleIsRunning'>
);

export type UpdateNotesMutationVariables = {
  updatedNotes: Scalars['String']
};


export type UpdateNotesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateNotes'>
);

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
  )> }
);

export type TimerQueryVariables = {};


export type TimerQuery = (
  { __typename?: 'Query' }
  & { timer: (
    { __typename?: 'Timer' }
    & Pick<Timer, 'id' | 'isTimerRunning' | 'currentTimeInSeconds' | 'timerDirection' | 'selectedCategoryId' | 'selectedTaskId' | 'notes' | 'timeLimitInSeconds'>
  ) }
);

export type UserDataQueryVariables = {};


export type UserDataQuery = (
  { __typename?: 'Query' }
  & { userData: Maybe<(
    { __typename?: 'User' }
    & { categories: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'categoryName' | 'createdAt'>
    )>>>, tasks: Maybe<Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'taskName' | 'createdAt' | 'description'>
    )>>> }
  )> }
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
  Task: ResolverTypeWrapper<Task>,
  Timer: ResolverTypeWrapper<Timer>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  TimerDirection: TimerDirection,
  Mutation: ResolverTypeWrapper<{}>,
  AuthPayload: ResolverTypeWrapper<AuthPayload>,
  Cycle: ResolverTypeWrapper<Cycle>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Category: Category,
  Task: Task,
  Timer: Timer,
  Boolean: Scalars['Boolean'],
  Int: Scalars['Int'],
  TimerDirection: TimerDirection,
  Mutation: {},
  AuthPayload: AuthPayload,
  Cycle: Cycle,
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  categoryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type CycleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cycle'] = ResolversParentTypes['Cycle']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  lengthInSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  categoryIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  taskIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>,
  logout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  setCurrentTime?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSetCurrentTimeArgs, 'timeInSeconds'>>,
  toggleIsRunning?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  stopTimer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  resetCycle?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  saveCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, MutationSaveCategoryArgs>,
  saveCycle?: Resolver<Maybe<ResolversTypes['Cycle']>, ParentType, ContextType, RequireFields<MutationSaveCycleArgs, 'lengthInSeconds' | 'createdAt' | 'categoryIds' | 'taskIds'>>,
  setTimeLimit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSetTimeLimitArgs, 'timeLimit'>>,
  setCycleCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSetCycleCategoryArgs, 'categoryId'>>,
  setCycleTask?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSetCycleTaskArgs, 'taskId'>>,
  updateNotes?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUpdateNotesArgs, 'updatedNotes'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  userData?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  timer?: Resolver<ResolversTypes['Timer'], ParentType, ContextType>,
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  taskName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type TimerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Timer'] = ResolversParentTypes['Timer']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  isTimerRunning?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  currentTimeInSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  timerDirection?: Resolver<Maybe<ResolversTypes['TimerDirection']>, ParentType, ContextType>,
  selectedCategoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  selectedTaskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  timeLimitInSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  googleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>,
  tasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Task']>>>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>,
  Category?: CategoryResolvers<ContextType>,
  Cycle?: CycleResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Task?: TaskResolvers<ContextType>,
  Timer?: TimerResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const SaveCategoryDocument = gql`
    mutation SaveCategory($categoryName: String!) {
  saveCategory(categoryName: $categoryName) {
    categoryName
    createdAt
    id
    userId
  }
}
    `;
export type SaveCategoryMutationFn = ApolloReactCommon.MutationFunction<SaveCategoryMutation, SaveCategoryMutationVariables>;

/**
 * __useSaveCategoryMutation__
 *
 * To run a mutation, you first call `useSaveCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveCategoryMutation, { data, loading, error }] = useSaveCategoryMutation({
 *   variables: {
 *      categoryName: // value for 'categoryName'
 *   },
 * });
 */
export function useSaveCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveCategoryMutation, SaveCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveCategoryMutation, SaveCategoryMutationVariables>(SaveCategoryDocument, baseOptions);
      }
export type SaveCategoryMutationHookResult = ReturnType<typeof useSaveCategoryMutation>;
export type SaveCategoryMutationResult = ApolloReactCommon.MutationResult<SaveCategoryMutation>;
export type SaveCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveCategoryMutation, SaveCategoryMutationVariables>;
export const ResetCycleDocument = gql`
    mutation ResetCycle {
  resetCycle @client
}
    `;
export type ResetCycleMutationFn = ApolloReactCommon.MutationFunction<ResetCycleMutation, ResetCycleMutationVariables>;

/**
 * __useResetCycleMutation__
 *
 * To run a mutation, you first call `useResetCycleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetCycleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetCycleMutation, { data, loading, error }] = useResetCycleMutation({
 *   variables: {
 *   },
 * });
 */
export function useResetCycleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetCycleMutation, ResetCycleMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetCycleMutation, ResetCycleMutationVariables>(ResetCycleDocument, baseOptions);
      }
export type ResetCycleMutationHookResult = ReturnType<typeof useResetCycleMutation>;
export type ResetCycleMutationResult = ApolloReactCommon.MutationResult<ResetCycleMutation>;
export type ResetCycleMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetCycleMutation, ResetCycleMutationVariables>;
export const SaveCycleDocument = gql`
    mutation SaveCycle($lengthInSeconds: Int!, $createdAt: String!, $categoryIds: [String]!, $taskIds: [String]!, $notes: String) {
  saveCycle(lengthInSeconds: $lengthInSeconds, createdAt: $createdAt, categoryIds: $categoryIds, taskIds: $taskIds, notes: $notes) {
    id
  }
}
    `;
export type SaveCycleMutationFn = ApolloReactCommon.MutationFunction<SaveCycleMutation, SaveCycleMutationVariables>;

/**
 * __useSaveCycleMutation__
 *
 * To run a mutation, you first call `useSaveCycleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveCycleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveCycleMutation, { data, loading, error }] = useSaveCycleMutation({
 *   variables: {
 *      lengthInSeconds: // value for 'lengthInSeconds'
 *      createdAt: // value for 'createdAt'
 *      categoryIds: // value for 'categoryIds'
 *      taskIds: // value for 'taskIds'
 *      notes: // value for 'notes'
 *   },
 * });
 */
export function useSaveCycleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveCycleMutation, SaveCycleMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveCycleMutation, SaveCycleMutationVariables>(SaveCycleDocument, baseOptions);
      }
export type SaveCycleMutationHookResult = ReturnType<typeof useSaveCycleMutation>;
export type SaveCycleMutationResult = ApolloReactCommon.MutationResult<SaveCycleMutation>;
export type SaveCycleMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveCycleMutation, SaveCycleMutationVariables>;
export const SetCurrentTimeDocument = gql`
    mutation SetCurrentTime($timeInSeconds: Int!) {
  setCurrentTime(timeInSeconds: $timeInSeconds) @client
}
    `;
export type SetCurrentTimeMutationFn = ApolloReactCommon.MutationFunction<SetCurrentTimeMutation, SetCurrentTimeMutationVariables>;

/**
 * __useSetCurrentTimeMutation__
 *
 * To run a mutation, you first call `useSetCurrentTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCurrentTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCurrentTimeMutation, { data, loading, error }] = useSetCurrentTimeMutation({
 *   variables: {
 *      timeInSeconds: // value for 'timeInSeconds'
 *   },
 * });
 */
export function useSetCurrentTimeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetCurrentTimeMutation, SetCurrentTimeMutationVariables>) {
        return ApolloReactHooks.useMutation<SetCurrentTimeMutation, SetCurrentTimeMutationVariables>(SetCurrentTimeDocument, baseOptions);
      }
export type SetCurrentTimeMutationHookResult = ReturnType<typeof useSetCurrentTimeMutation>;
export type SetCurrentTimeMutationResult = ApolloReactCommon.MutationResult<SetCurrentTimeMutation>;
export type SetCurrentTimeMutationOptions = ApolloReactCommon.BaseMutationOptions<SetCurrentTimeMutation, SetCurrentTimeMutationVariables>;
export const SetCycleCategoryDocument = gql`
    mutation SetCycleCategory($categoryId: String!) {
  setCycleCategory(categoryId: $categoryId) @client
}
    `;
export type SetCycleCategoryMutationFn = ApolloReactCommon.MutationFunction<SetCycleCategoryMutation, SetCycleCategoryMutationVariables>;

/**
 * __useSetCycleCategoryMutation__
 *
 * To run a mutation, you first call `useSetCycleCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCycleCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCycleCategoryMutation, { data, loading, error }] = useSetCycleCategoryMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useSetCycleCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetCycleCategoryMutation, SetCycleCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<SetCycleCategoryMutation, SetCycleCategoryMutationVariables>(SetCycleCategoryDocument, baseOptions);
      }
export type SetCycleCategoryMutationHookResult = ReturnType<typeof useSetCycleCategoryMutation>;
export type SetCycleCategoryMutationResult = ApolloReactCommon.MutationResult<SetCycleCategoryMutation>;
export type SetCycleCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<SetCycleCategoryMutation, SetCycleCategoryMutationVariables>;
export const SetCycleTaskDocument = gql`
    mutation SetCycleTask($taskId: String!) {
  setCycleTask(taskId: $taskId) @client
}
    `;
export type SetCycleTaskMutationFn = ApolloReactCommon.MutationFunction<SetCycleTaskMutation, SetCycleTaskMutationVariables>;

/**
 * __useSetCycleTaskMutation__
 *
 * To run a mutation, you first call `useSetCycleTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCycleTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCycleTaskMutation, { data, loading, error }] = useSetCycleTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useSetCycleTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetCycleTaskMutation, SetCycleTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<SetCycleTaskMutation, SetCycleTaskMutationVariables>(SetCycleTaskDocument, baseOptions);
      }
export type SetCycleTaskMutationHookResult = ReturnType<typeof useSetCycleTaskMutation>;
export type SetCycleTaskMutationResult = ApolloReactCommon.MutationResult<SetCycleTaskMutation>;
export type SetCycleTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<SetCycleTaskMutation, SetCycleTaskMutationVariables>;
export const SetTimeLimitDocument = gql`
    mutation SetTimeLimit($timeLimit: Int!) {
  setTimeLimit(timeLimit: $timeLimit) @client
}
    `;
export type SetTimeLimitMutationFn = ApolloReactCommon.MutationFunction<SetTimeLimitMutation, SetTimeLimitMutationVariables>;

/**
 * __useSetTimeLimitMutation__
 *
 * To run a mutation, you first call `useSetTimeLimitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetTimeLimitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setTimeLimitMutation, { data, loading, error }] = useSetTimeLimitMutation({
 *   variables: {
 *      timeLimit: // value for 'timeLimit'
 *   },
 * });
 */
export function useSetTimeLimitMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetTimeLimitMutation, SetTimeLimitMutationVariables>) {
        return ApolloReactHooks.useMutation<SetTimeLimitMutation, SetTimeLimitMutationVariables>(SetTimeLimitDocument, baseOptions);
      }
export type SetTimeLimitMutationHookResult = ReturnType<typeof useSetTimeLimitMutation>;
export type SetTimeLimitMutationResult = ApolloReactCommon.MutationResult<SetTimeLimitMutation>;
export type SetTimeLimitMutationOptions = ApolloReactCommon.BaseMutationOptions<SetTimeLimitMutation, SetTimeLimitMutationVariables>;
export const StopTimerDocument = gql`
    mutation StopTimer {
  stopTimer @client
}
    `;
export type StopTimerMutationFn = ApolloReactCommon.MutationFunction<StopTimerMutation, StopTimerMutationVariables>;

/**
 * __useStopTimerMutation__
 *
 * To run a mutation, you first call `useStopTimerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopTimerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopTimerMutation, { data, loading, error }] = useStopTimerMutation({
 *   variables: {
 *   },
 * });
 */
export function useStopTimerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StopTimerMutation, StopTimerMutationVariables>) {
        return ApolloReactHooks.useMutation<StopTimerMutation, StopTimerMutationVariables>(StopTimerDocument, baseOptions);
      }
export type StopTimerMutationHookResult = ReturnType<typeof useStopTimerMutation>;
export type StopTimerMutationResult = ApolloReactCommon.MutationResult<StopTimerMutation>;
export type StopTimerMutationOptions = ApolloReactCommon.BaseMutationOptions<StopTimerMutation, StopTimerMutationVariables>;
export const ToggleIsRunningDocument = gql`
    mutation ToggleIsRunning {
  toggleIsRunning @client
}
    `;
export type ToggleIsRunningMutationFn = ApolloReactCommon.MutationFunction<ToggleIsRunningMutation, ToggleIsRunningMutationVariables>;

/**
 * __useToggleIsRunningMutation__
 *
 * To run a mutation, you first call `useToggleIsRunningMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleIsRunningMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleIsRunningMutation, { data, loading, error }] = useToggleIsRunningMutation({
 *   variables: {
 *   },
 * });
 */
export function useToggleIsRunningMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleIsRunningMutation, ToggleIsRunningMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleIsRunningMutation, ToggleIsRunningMutationVariables>(ToggleIsRunningDocument, baseOptions);
      }
export type ToggleIsRunningMutationHookResult = ReturnType<typeof useToggleIsRunningMutation>;
export type ToggleIsRunningMutationResult = ApolloReactCommon.MutationResult<ToggleIsRunningMutation>;
export type ToggleIsRunningMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleIsRunningMutation, ToggleIsRunningMutationVariables>;
export const UpdateNotesDocument = gql`
    mutation UpdateNotes($updatedNotes: String!) {
  updateNotes(updatedNotes: $updatedNotes) @client
}
    `;
export type UpdateNotesMutationFn = ApolloReactCommon.MutationFunction<UpdateNotesMutation, UpdateNotesMutationVariables>;

/**
 * __useUpdateNotesMutation__
 *
 * To run a mutation, you first call `useUpdateNotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNotesMutation, { data, loading, error }] = useUpdateNotesMutation({
 *   variables: {
 *      updatedNotes: // value for 'updatedNotes'
 *   },
 * });
 */
export function useUpdateNotesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNotesMutation, UpdateNotesMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateNotesMutation, UpdateNotesMutationVariables>(UpdateNotesDocument, baseOptions);
      }
export type UpdateNotesMutationHookResult = ReturnType<typeof useUpdateNotesMutation>;
export type UpdateNotesMutationResult = ApolloReactCommon.MutationResult<UpdateNotesMutation>;
export type UpdateNotesMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateNotesMutation, UpdateNotesMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    firstName
    lastName
    email
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const TimerDocument = gql`
    query Timer {
  timer @client {
    id
    isTimerRunning
    currentTimeInSeconds
    timerDirection
    selectedCategoryId
    selectedTaskId
    notes
    timeLimitInSeconds
  }
}
    `;

/**
 * __useTimerQuery__
 *
 * To run a query within a React component, call `useTimerQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimerQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimerQuery({
 *   variables: {
 *   },
 * });
 */
export function useTimerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TimerQuery, TimerQueryVariables>) {
        return ApolloReactHooks.useQuery<TimerQuery, TimerQueryVariables>(TimerDocument, baseOptions);
      }
export function useTimerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TimerQuery, TimerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TimerQuery, TimerQueryVariables>(TimerDocument, baseOptions);
        }
export type TimerQueryHookResult = ReturnType<typeof useTimerQuery>;
export type TimerLazyQueryHookResult = ReturnType<typeof useTimerLazyQuery>;
export type TimerQueryResult = ApolloReactCommon.QueryResult<TimerQuery, TimerQueryVariables>;
export const UserDataDocument = gql`
    query UserData {
  userData {
    categories {
      id
      categoryName
      createdAt
    }
    tasks {
      id
      taskName
      createdAt
      description
    }
  }
}
    `;

/**
 * __useUserDataQuery__
 *
 * To run a query within a React component, call `useUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
        return ApolloReactHooks.useQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, baseOptions);
      }
export function useUserDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, baseOptions);
        }
export type UserDataQueryHookResult = ReturnType<typeof useUserDataQuery>;
export type UserDataLazyQueryHookResult = ReturnType<typeof useUserDataLazyQuery>;
export type UserDataQueryResult = ApolloReactCommon.QueryResult<UserDataQuery, UserDataQueryVariables>;