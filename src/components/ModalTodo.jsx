import React from 'react'
import { createPortal } from 'react-dom'

const ModalTodo = ({ children }) => {
  return createPortal(
    <div className='modal'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export default ModalTodo
