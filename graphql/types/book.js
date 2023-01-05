const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
  }),
});

module.exports = BookType;
