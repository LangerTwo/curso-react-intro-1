// import React from 'react'

const TodoList = ({ children }) => {
  return (
    <ul className="container flex flex-col gap-5 items-center py-5">
      {children}
    </ul>
  )
}

export default TodoList
