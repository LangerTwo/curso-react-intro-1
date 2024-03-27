// import './TodoCounter.css'

const TodoCounter = ({ complete, total }) => {
    return (
        <h1 className="">
          Has completado {complete} de {total} TODOS
        </h1>
    )
}

export default TodoCounter
