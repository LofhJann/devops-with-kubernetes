const express = require('express')
const app = express();
const port = 3001

const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./files/graphql')

app.listen(port, function() {
  console.log('Server started in port', port)
  console.log(`${server.graphqlPath}`)
})

app.get('/', function (req, res) {
  res.send("Hello World!")
})

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });