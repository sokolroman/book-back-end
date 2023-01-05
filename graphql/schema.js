const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

const BookType = require('./types/book');
const UserType = require('./types/user'); // Import the UserType
const books = require('./resolvers/books');
const users = require('./resolvers/users'); // Import the users resolvers

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    register: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        return users.register(args.username, args.email, args.password);
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        return users.login(args.email, args.password);
      },
    },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return books.getBook(args.id);
      },
    },
    searchBooks: {
      type: new GraphQLList(BookType), // Use GraphQLList to wrap the BookType
      args: { query: { type: GraphQLString } },
      resolve(parent, args) {
        return books.searchBooks(args.query);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation, // Add the Mutation type to the schema
});
