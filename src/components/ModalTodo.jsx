import React from 'react'
import { createPortal } from 'react-dom'

const ModalTodo = ({ children }) => {
  return createPortal(
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white p-5 rounded flex flex-col justify-center items-center gap-5'>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default ModalTodo
