import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoButton from './TodoButton';

const AppUI = ({
    loading,
    error,
    completeTodo,
    totalTodos,
    searchValue,
    setSearchValue,
    searchTodos,
    completeTodos,
    deleteTodo,
}) => {
  return (
    <>
      <div 
        className='w-auto lg:w-2/5 md:w-3/5 container mx-auto mt-10 shadow-sm rounded-lg text-center bg-white relative'>
        <TodoCounter  complete={completeTodos} total={totalTodos}/>
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
        <TodoList>
          {loading && <p>Estamos Cargando...</p>}
          {error && <p>Hubo un Problema!!!</p>}
          {(!loading && searchTodos.length === 0) && <p>¡Crea tu Primer TODO!</p>}
          {searchTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              complete={todo.complete}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
          />
          ))}
        </TodoList>
        <TodoButton />
      </div>
    </>
  )
}

export default AppUI
