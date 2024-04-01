import { useState } from 'react'
import useLocalStorage from './hooks/localStorage';
import AppUI from './components/AppUI';

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar Cebolla', complete: true},
//   { text: 'Tomar el Curso de Intro a Reac.js', complete: false},
//   { text: 'Llorar con la Llorona', complete: false},
//   { text: 'LALALALALA', complete: false},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  const  {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error 
  } = useLocalStorage('TODOS_V1', []);
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
    <AppUI 
    loading={loading}
    error={error}
    completeTodo={completeTodo}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchTodos={searchTodos}
    completeTodos={completeTodos}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
