const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const connectDB = require('./utils/db');
connectDB();

// GraphQL
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./resolvers');
const resolvers = require('./graphql/types');
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
