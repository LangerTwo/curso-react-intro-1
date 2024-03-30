import { useState } from 'react'
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoButton from './components/TodoButton';
import useLocalStorage from './hooks/localStorage';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', complete: true},
//   { text: 'Tomar el Curso de Intro a Reac.js', complete: false},
//   { text: 'Llorar con la Llorona', complete: false},
//   { text: 'LALALALALA', complete: false},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  const [ todos, saveTodos ] = useLocalStorage('TODOS_V1', []);
  const [ searchValue, setSearchValue ] = useState('');

  const completeTodos = todos.filter( todo => !!todo.complete).length;
  const totalTodos = todos.length;

  const searchTodos = todos.filter(
    (todo) => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
  )

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].complete = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(      
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

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
  );
}

export default App;
