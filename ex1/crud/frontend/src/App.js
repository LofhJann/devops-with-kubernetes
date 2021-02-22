import React, { useState } from 'react'
import mockData from './mockData.json'

function App () {
  const [todo, setTodo] = useState(mockData)

  return (
    <>
      <img src="https://picsum.photos/1200" alt="example"/>
      <form>
        <input type="text"/>
        <button type="submit">Create TODO</button>
      </form>
      {todo.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </>
  )
}

export default App
