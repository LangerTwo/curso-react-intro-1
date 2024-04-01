import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

const TodoSearch = () => {
  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext)
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
