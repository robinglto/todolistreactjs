import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

  const {
    item: todos,
    saveItem: saveTodo,
    loading,
    error
  } = useLocalStorage('todo_v1',[]);
    const [state, setState] = React.useState(''); 
    const [openModal, setOpenModal] = React.useState(false)
    
    const completadas = todos.filter(todo => !!todo.completed).length;
    const totaldetareas = todos.length;

    let searchTodos = []

    if(!state.length >= 1){
      searchTodos = todos;
    }
    else{
      searchTodos = todos.filter(todo => {
          const todotexto = todo.text.toLowerCase();
          const statetexto = state.toLowerCase();
          return todotexto.includes(statetexto);
      })
    }

    const addTodo = (texto) => {

      const newTodos = [...todos];
  
      newTodos.push({
        text:texto,
        completed: false
        
      })
      saveTodo(newTodos)
    }


  const completedTodo = (texto) => {
    const index = todos.findIndex(todo => todo.text === texto);
    const newTodos = [...todos];

    newTodos[index].completed = true
    saveTodo(newTodos)
  }




  const deleteTodo = (texto) => {
    const index = todos.findIndex(todo => todo.text === texto);
    const newTodos = [...todos];

    newTodos.splice(index, 1);
    saveTodo(newTodos)
  }

  // console.log('render antes del use efect')

  // React.useEffect(()=>{
  //   console.log('use effect')
  // },[totaldetareas])

  // console.log('render luego del use effect')


    return(
        <TodoContext.Provider value={{
            error,
            loading,
            completadas,
            totaldetareas,
            state,
            setState,
            searchTodos,
            addTodo,
            completedTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider}