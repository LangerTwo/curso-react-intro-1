// import React from 'react'
import { BsPlusLg } from "react-icons/bs";

const TodoButton = () => {
  return (
    <button 
      className="px-4 py-4 bg-blue-400 font-bold text-3xl text-white rounded-full hover:bg-blue-500 cursor-pointer absolute -right-4 -bottom-5 transition-transform" 
      onClick={ 
        (e) => 
        console.log(e.target)
      }
    >
      <BsPlusLg className=""/>
    </button>
  )
}

export default TodoButton
