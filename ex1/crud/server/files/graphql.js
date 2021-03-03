const {gql} = require('apollo-server-express')

const todos = [
  {
      title: 'Tee läksyt'
  },
  {
      title: 'Mee himaan'
  }
]

const typeDefs = gql`
  type Todo {
    title: String!
  }
  type Query {
    getTodos: [Todo]
  }
  type Mutation {
    addTodo(title: String): Todo
  }
`

const resolvers = {
  Query: {
    getTodos: () => todos
  },
  Mutation: {
    addTodo: (_, args) => {
      const todo = { title: args.title }
      todos.push(todo)
      return todo
    }
  }
}

exports.todos = todos
exports.resolvers = resolvers
exports.typeDefs = typeDefs