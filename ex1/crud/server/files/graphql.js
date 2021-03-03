const {gql} = require('apollo-server-express')

const todoList = [
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
    todos: [Todo]
  }
  type Mutation {
    addTodo(title: String): Todo
  }
`

const resolvers = {
  Query: {
    todos: () => todoList
  },
  Mutation: {
    addTodo: (_, args) => {
      const todo = { title: args.title }
      todoList.push(todo)
      return todo
    }
  }
}

exports.todos = todoList
exports.resolvers = resolvers
exports.typeDefs = typeDefs