import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoButton from './TodoButton';

const defaultTodos = [
  { text: 'Cortar Cebolla', complete: true},
  { text: 'Tomar el Curso de Intro a Reac.js', complete: false},
  { text: 'Llorar con la Llorona', complete: false},
  { text: 'LALALALALA', complete: true},
]

function App() {
  return (
    <>
      <div className='w-auto lg:w-2/5 md:w-3/5 container mx-auto mt-10 shadow-sm rounded-lg text-center bg-white relative'>
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
      </div>
    </>
  );
}

export default App;
