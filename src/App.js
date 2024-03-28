import { useState } from 'react'
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoButton from './TodoButton';

const defaultTodos = [
  { text: 'Cortar Cebolla', complete: true},
  { text: 'Tomar el Curso de Intro a Reac.js', complete: false},
  { text: 'Llorar con la Llorona', complete: false},
  { text: 'LALALALALA', complete: false},
]

function App() {
  const [ todos, setTodos ] = useState(defaultTodos);
  const [ searchValue, setSearchValue ] = useState('');

  const completeTodos = todos.filter( todo => !!todo.complete).length;
  const totalTodos = todos.length;

  const searchTodos = todos.filter(
    (todo) => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
  )

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
          />
          ))}
        </TodoList>

        <TodoButton />
      </div>
    </>
  );
}

export default App;
