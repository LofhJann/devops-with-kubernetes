const express = require('express')
const app = express();
const port = 3001

const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./graphql/typeDefs')
const { resolvers } = require('./graphql/resolvers')
const server = new ApolloServer({ typeDefs, resolvers });


app.listen(port, function() {
  console.log('Server started in port', port)
})

app.get('/', function (req, res) {
  res.send("Hello World!")
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});