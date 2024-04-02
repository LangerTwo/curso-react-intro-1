// import React from 'react'
import { BsPlusLg } from "react-icons/bs";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";

const TodoButton = () => {
  const { openModal, setOpenModal } = useContext(TodoContext)
  const abrirModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <button 
      className="px-4 py-4 bg-blue-400 font-bold text-3xl text-white rounded-full hover:bg-blue-500 cursor-pointer absolute -right-4 -bottom-5 transition-transform z-10" 
      onClick={ abrirModal }
    >
      <BsPlusLg />
    </button>
  )
}

export default TodoButton
