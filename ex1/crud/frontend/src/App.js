import React, { useEffect, useState } from 'react'
import mockData from './mockData.json'
import { gql, useQuery } from '@apollo/client'

function App () {
  const GET_TODOS = gql`
    query getTodos{
      todos {
        title
      }
    }
  `

  const { loading, error, data } = useQuery(GET_TODOS);


  const [todo, setTodo] = useState(mockData)

  const listItems = todo.map((todo, index) => {
    return <li key={index}>{todo.title}</li>
  })

  useEffect(() => {
    console.log(data)
    if(data && data.todos) {
      setTodo(data.todos)
    }
  }, [data])

  return (
    <>
      <img src="https://picsum.photos/1200" alt="example"/>
      <form>
        <input type="text"/>
        <button type="submit">Create TODO</button>
      </form>
      <ul>
      {listItems}
      </ul>
    </>
  )
}

export default App
