import { getCategoriesByUserId } from '../daos/category/categoryDao'

export const resolvers = {
  Query: {
    currentUser: (root, args, context) => {
      return context.user
    },
    userData: async (root, { userId }) => {
      return await getCategoriesByUserId(userId)
    },
  },
  Mutation: {
    logout: (root, args, context) => {
      return context.logout
    },
    login: async (root, { email, password }, context) => {
      const { user } = await context.authenticate('graphql-local', { email, password })
      context.login(user)
      return { user }
    },
  },
}
