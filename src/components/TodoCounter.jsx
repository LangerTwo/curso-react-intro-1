import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

const TodoCounter = () => {
    const { 
      completeTodos,
      totalTodos,
    } = useContext(TodoContext)
    return (
        <h1 className="py-5 text-3xl font-bold text-indigo-400">
          Has completado <span className="text-red-500"> {completeTodos}</span> de <span className="text-green-500"> {totalTodos}</span> TODOS
        </h1>
    )
}

export default TodoCounter
