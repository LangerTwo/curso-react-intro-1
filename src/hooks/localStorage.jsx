import { useState,useEffect } from 'react'

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
          }
          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
          setError(true)
        }
      }, 2000);
  }, [itemName, initialValue])
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }
  return {
    item,
    saveItem,
    loading,
    error
  };
}

export default useLocalStorage

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar Cebolla', complete: true},
//   { text: 'Tomar el Curso de Intro a Reac.js', complete: false},
//   { text: 'Llorar con la Llorona', complete: false},
//   { text: 'LALALALALA', complete: false},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));