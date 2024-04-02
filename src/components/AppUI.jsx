import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoButton from './TodoButton';

import TodoLoading from './TodoLoading';
import TodoError from './TodoError';
import EMptyTodo from './EMptyTodo';

import ModalTodo from './ModalTodo';
import TodoForm from './TodoForm';

import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';


const AppUI = () => {
  const { 
    loading,
    error,
    completeTodo,
    searchTodos,
    deleteTodo,
    openModal,
    // setOpenModal
  } = useContext(TodoContext)
  return (
      <div 
        className='w-auto lg:w-2/5 md:w-3/5 container mx-auto mt-10 shadow-sm rounded-lg text-center bg-white relative'>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {loading && <TodoLoading />}
            {error && <TodoError />}
            {(!loading && searchTodos.length === 0) && <EMptyTodo />}
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

        {openModal && (
          <ModalTodo>
            <TodoForm />
          </ModalTodo>
        )}
      </div>
  )
}

export default AppUI
