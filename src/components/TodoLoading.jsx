import React from 'react'
import { SpinnerDotted } from 'spinners-react';

const TodoLoading = () => {
  return (
    <div>
      <SpinnerDotted size={100} color='#60a5fa'/>
      <h1 className='my-3 text-3xl text-indigo-500'>Cargando...</h1>
    </div>
  )
}

export default TodoLoading
