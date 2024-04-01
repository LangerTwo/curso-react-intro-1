import React from "react";
import { useState, createContext } from 'react'
import useLocalStorage from '../hooks/localStorage';

const TodoContext = createContext();

function TodoProvider({children}) {
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
        <TodoContext.Provider value={{
            loading,
            error,
            completeTodo,
            totalTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodos,
            deleteTodo,
        }}>
            {children}            
        </TodoContext.Provider>
    )
}

export {
    TodoContext,
    TodoProvider
}