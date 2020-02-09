import { saveCycle } from '../daos/cycle/cycleDao'
import { getUserCollectionByUserId } from '../daos/user/userDao'

export const resolvers = {
  Query: {
    currentUser: (root, args, context) => context.user,
    userData: async (root, args, context) => {
      return {
        categories: await getUserCollectionByUserId('categories', context.user.id.toString()),
        tasks: await getUserCollectionByUserId('tasks', context.user.id.toString()),
      }
    },
  },
  Mutation: {
    logout: (root, args, context) => context.logout,
    login: async (root, { email, password }, context) => {
      const { user } = await context.authenticate('graphql-local', { email, password })
      context.login(user)
      return { user }
    },
    saveCycle: async (
      root,
      { lengthInSeconds, createdAt, categoryIds, taskIds, notes },
      context
    ) => {
      return await saveCycle(
        context.user.id.toString(),
        lengthInSeconds,
        createdAt,
        categoryIds,
        taskIds,
        notes
      )
    },
  },
}
