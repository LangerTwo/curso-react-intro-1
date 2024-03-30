// import React from 'react'
import { BsXCircleFill, BsCheckCircleFill } from "react-icons/bs";

const TodoItem = (props) => {
  return (
    <li 
      className="flex gap-4 p-5 
      bg-gray-50 border lg:w-50 md:w-3/5 
      text-wrap rounded-sm shadow-md 
      items-center relative"
    >
      <BsCheckCircleFill 
        className={`${props.complete && "text-green-500"} text-2xl cursor-pointer`}
        onClick={props.onComplete}
      />
      <p 
        className={
          `text-xl text-left
           text-gray-500 
           ${props.complete && "line-through decoration-black"
        }`}>{props.text}</p>
        <BsXCircleFill 
          className="text-red-500 text-2xl hover:text-3xl absolute -top-3 -right-3 cursor-pointer"
          onClick={props.onDelete}
        />
    </li>
  )
}

export default TodoItem
