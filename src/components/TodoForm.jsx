import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoForm = () => {
    const { 
        addTodo,
        setOpenModal
    } = useContext(TodoContext)

    const [ newTodoValue, setNewTodoValue ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }
    
  return (
    <form className='flex flex-col items-center gap-2' onSubmit={onSubmit}>
      <label className='text-2xl font-bold'>Añade Tu Nuevo TODO</label>
      <textarea 
        placeholder='Escribe tu nuevo TODO'
        className='border w-full h-32 shadow py-2 px-5'
        value={newTodoValue}
        onChange={onChange}
      />
      <div className='w-full flex justify-between mt-4'>
        <button 
            className='bg-red-500 hover:bg-red-700 text-white py-3 px-5 rounded' type='button' 
            onClick={onCancel}
        >
            Cancelar
        </button>
        <button 
            className='bg-indigo-500 hover:bg-indigo-700 text-white py-3 px-5 rounded' type='submit'>
            Añadir
        </button>
      </div>
    </form>
  )
}

export default TodoForm
