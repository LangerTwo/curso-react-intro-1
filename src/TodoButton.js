// import React from 'react'

const TodoButton = () => {
  return (
    <button 
      className="px-5 py-3 bg-blue-400 font-bold text-3xl text-white rounded-full hover:bg-blue-500 cursor-pointer absolute -right-4 -bottom-5 rotate-0 hover:rotate-45 transition-transform" 
      onClick={ 
        (e) => 
        console.log(e.target)
      }
    >
      +
    </button>
  )
}

export default TodoButton
