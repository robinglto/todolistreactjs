import React from "react";
import {TodoContext} from "../TodoContext"
import { TodoCounter } from "../Componentes/TodoCounter";
import { TodoItem } from "../Componentes/TodoItem";
import { TodoList } from "../Componentes/TodoList";
import { TodoSearch } from "../Componentes/TodoSearch";
import {CreateTodoButton} from "../Componentes/CreateTodoButton"
import { Modal } from "../Modal/Modal";

 function UI (){

    const {
      error,
      loading,
      completedTodo,
      deleteTodo,
      searchTodos,
     openModal,
     setOpenModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
        <div className="grid  ">
          <TodoCounter/> 
            <TodoSearch/>
             
                <TodoList>
                  {error && <p>Desespérate, hubo un error...</p>}
                  {loading && <p>Estamos cargando, no desesperes...</p>}
                  {(!loading && !searchTodos.length) && <p>¡Crea tu primer TODO!</p>}
    
                  {searchTodos.map(todo=> (
                  <TodoItem  
                    completed = {todo.completed} 
                    key={todo.text}
                    text={todo.text}
                    onComplete = {()=>completedTodo(todo.text)}
                    onDelete = {()=>deleteTodo(todo.text)}/>  ))}
                </TodoList>


                    {
                      !!openModal&&(
                        <Modal>
                        <p>owjqojeiojeoijojqjo</p>
                      </Modal>
                      )
                    }
    
            <CreateTodoButton setOpenModal={setOpenModal}/>
        </div>
      </React.Fragment>
    )
}

export {UI}