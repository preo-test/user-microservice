import Repository from '../repository/repository';

export default{
  Query: {
    getUser: (parent, { id }, context) => Repository.getUser({ id }),
    allUsers: (parent, args, context) => Repository.allUsers(),
  },

  Mutation: {
    createUser: (parent, args, { models }) => Repository.createUser(args),
    deleteUser: (parent, { id }, { models }) => Repository.deleteUser({ id }),
  },
};
