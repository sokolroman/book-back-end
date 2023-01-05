const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    publisher: String
  }

  input BookInput {
    title: String!
    author: String!
    publisher: String
  }

  type Query {
    book(id: ID!): Book
    books: [Book]
  }

  type Mutation {
    createBook(input: BookInput!): Book
    updateBook(id: ID!, input: BookInput!): Book
    deleteBook(id: ID!): Book
  }
`;

module.exports = typeDefs;
