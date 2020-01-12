export const resolvers = {
  Query: {
    currentUser: (parent, args, context) => {
      return context.user
    },
  },
  Mutation: {
    logout: (parent, args, context) => {
      return context.logout
    },
    login: async (parent, { email, password }, context) => {
      const { user } = await context.authenticate('graphql-local', { email, password })
      context.login(user)
      return { user }
    },
  },
}
