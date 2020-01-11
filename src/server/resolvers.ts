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
  },
}
