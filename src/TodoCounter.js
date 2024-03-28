// import './TodoCounter.css'

const TodoCounter = ({ complete, total }) => {
    return (
        <h1 className="py-5 text-3xl font-bold text-indigo-400">
          Has completado <span className="text-red-500"> {complete}</span> de <span className="text-green-500"> {total}</span> TODOS
        </h1>
    )
}

export default TodoCounter
