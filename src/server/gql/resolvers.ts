import { getCategoriesByUserId } from '../daos/category/categoryDao'
import { createCycle } from '../daos/cycle/cycleDao'

export const resolvers = {
  Query: {
    currentUser: (root, args, context) => context.user,
    userData: async (root, { userId }) => {
      return {
        categories: await getCategoriesByUserId(userId),
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
      { id, lengthInSeconds, userId, createdAt, categoryIds, taskIds },
      context
    ) => {
      return await createCycle(id, lengthInSeconds, userId, createdAt, categoryIds, taskIds)
    },
  },
}
