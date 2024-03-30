import { useState } from 'react'

const TodoSearch = ({searchValue, setSearchValue}) => {
  return (
    <input 
      className="border-2 p-2 w-4/5 placeholdergray-400 rounded-md shadow-md"
      placeholder="Cortar Cebollar" 
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value)
      }}
    />
  )
}

export default TodoSearch
