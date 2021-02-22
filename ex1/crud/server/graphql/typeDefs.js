const { gql } = require('apollo-server')

const typeDefs = gql`
  input TodoInput {
    title: String
  }

  type Todo {
    title: String
  }

  type Query {
    todos: [Todo]
  }
`

exports.typeDefs = typeDefs