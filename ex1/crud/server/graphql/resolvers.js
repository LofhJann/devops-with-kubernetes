const { todos } = require('./mockData')

const resolvers = {
    Query: {
        todos: () => todos
    }
}

exports.resolvers = resolvers