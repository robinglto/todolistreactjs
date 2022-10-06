import React from "react";
import { TodoCounter } from "./Componentes/TodoCounter";
import { TodoItem } from "./Componentes/TodoItem";
import { TodoList } from "./Componentes/TodoList";
import { TodoSearch } from "./Componentes/TodoSearch";
import {CreateTodoButton} from "./Componentes/CreateTodoButton"
//import './App.css';

const defaultTodos = [
  {text: 'Hacer Ejercicio', completed: false},
  {text: 'Hacer Tarea', completed: true},
  {text: 'Hacer La Cena', completed: false},
]
// react.fragment es un componente que devuelve una etiqueta
// vacia evitando tener tantos div y ese tipo
function App() {

  const [todos, setTodos] = React.useState(defaultTodos)
  const [state, setState] = React.useState(''); 
  
  const completadas = todos.filter(todo => !!todo.completed).length;
  const totaldetareas = todos.length;

  let searchTodos = []

  if(!state.length >= 1){
    searchTodos = todos;
  }else{
    searchTodos = todos.filter(todo => {
      const todotexto = todo.text.toLowerCase();
      const statetexto = state.toLowerCase();

      return todotexto.includes(statetexto);
    })
  }


  const completedTodo = (texto) => {
    const index = todos.findIndex(todo => todo.text === texto);
    const newTodos = [...todos];

    newTodos[index].completed = true
    setTodos(newTodos)
  }
  const deleteTodo = (texto) => {
    const index = todos.findIndex(todo => todo.text === texto);
    const newTodos = [...todos];

    newTodos.splice(index, 1);
    setTodos(newTodos)
  }




  return (
    <React.Fragment>
      <div className="grid  ">
        <TodoCounter
        completadas = {completadas}
        totaldetareas = {totaldetareas}
        /> 
          <TodoSearch
          state = {state}
          setState={setState}
          />

          <TodoList>
            {searchTodos.map(todo=> (
            <TodoItem 
            completed = {todo.completed} 
            key={todo.text} 
            text={todo.text}
            onComplete = {()=>completedTodo(todo.text)}
            onDelete = {()=>deleteTodo(todo.text)}
            />
          
            ))}
          </TodoList>

          <CreateTodoButton/>

      </div>

    </React.Fragment>

  );
}

export default App;
