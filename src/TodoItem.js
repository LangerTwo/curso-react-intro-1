// import React from 'react'

const TodoItem = (props) => {
  return (
    <li 
      className="flex gap-4 p-5 
      bg-gray-50 border lg:w-50 md:w-3/5 
      text-wrap rounded-sm shadow-md 
      items-center relative"
    >
      <span 
        className= {
          `${props.complete && "text-green-500"} 
          font-bold text-2xl cursor-pointer`}
          onClick={props.onComplete}
      >V</span>
      <p 
        className={
          `text-xl text-left
           text-gray-500 
           ${props.complete && "line-through decoration-black"
        }`}>{props.text}</p>
      <span 
        className="text-black 
        hover:text-red-500 
        font-bold text-3xl 
        hover:text-4xl cursor-pointer 
        absolute -top-5 right-0"
      >X</span>
    </li>
  )
}

export default TodoItem
