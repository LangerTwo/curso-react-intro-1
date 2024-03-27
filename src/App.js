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
  return (
    <>
    <body className='bg-gray-50'>
      <TodoCounter  complete={5} total={10}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          complete={todo.complete}
        />
        ))}
      </TodoList>

      <TodoButton />
    </body>
    </>
  );
}

export default App;
