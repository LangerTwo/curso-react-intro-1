import AppUI from './components/AppUI';
import { TodoProvider } from './context/TodoContext';

function App() {  
  return (
    <TodoProvider>
      <AppUI 
        // loading={loading}
        // error={error}
        // completeTodo={completeTodo}
        // totalTodos={totalTodos}
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
        // searchTodos={searchTodos}
        // completeTodos={completeTodos}
        // deleteTodo={deleteTodo}
      />
    </TodoProvider>
  );
}

export default App;
