import { getCategoriesByUserId } from '../daos/category/categoryDao'

export const resolvers = {
  Query: {
    currentUser: (root, args, context) => context.user,
    userData: async (root, { userId }) => await getCategoriesByUserId(userId),
  },
  Mutation: {
    logout: (root, args, context) => context.logout,
    login: async (root, { email, password }, context) => {
      const { user } = await context.authenticate('graphql-local', { email, password })
      console.log(user)
      context.login(user)
      return { user }
    },
  },
}