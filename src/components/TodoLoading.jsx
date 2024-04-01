import React from 'react'
import { SpinnerDotted } from 'spinners-react';

const TodoLoading = () => {
  return (
    <div>
      <h1 className='my-3'>Cargando...</h1>
      <SpinnerDotted size={100} color='#60a5fa'/>
    </div>
  )
}

export default TodoLoading
