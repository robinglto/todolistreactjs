import React from "react";
import {TodoContext} from "../TodoContext"
import { TodoCounter } from "../Componentes/TodoCounter";
import { TodoItem } from "../Componentes/TodoItem";
import { TodoList } from "../Componentes/TodoList";
import { TodoSearch } from "../Componentes/TodoSearch";
import {CreateTodoButton} from "../Componentes/CreateTodoButton"
import { TodoForm } from "../TodoForm";


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
        <div className="grid 50	 ">
          <TodoCounter/> 
            <TodoSearch/>
             
                <TodoList>
                  {error && <center>
                      <img src="https://img.icons8.com/pastel-glyph/64/7950F2/nft-error.png" className="mt-20 "/>
                      <h2 className="subpixel-antialiased text-2xl">We're sorry...</h2>
                      <p className="mb-20">An error ocurred while loading your todos...</p></center>  }
 
                  {loading &&    
                  <center>
                
                    <div className="flex justify-center">
                    <img className="rounded-full animate-bounce delay-150 duration-300 h-12 w-12 mt-12 shadow-lg shadow-slate-500/50" src="https://img.icons8.com/ios-glyphs/60/FFFFFF/filled-circle.png"/>
                    <img className="animate-bounce delay-300 duration-300 h-12 w-12 mt-12 rounded-full shadow-lg shadow-slate-500/50" src="https://img.icons8.com/ios-glyphs/60/FFFFFF/filled-circle.png"/>
                    <img className="animate-bounce delay-700 duration-300 h-12 w-12 mt-12 rounded-full shadow-lg shadow-slate-500/50" src="https://img.icons8.com/ios-glyphs/60/FFFFFF/filled-circle.png"/>
                    </div>
                    <p className="mb-20 mt-6 subpixel-antialiased text-xl">We are uploading your data...</p>
                  </center>
                  }
                  {(!loading && !searchTodos.length) &&
                  <div>
              
                    <div className="flex justify-center">
                      <img className="mt-20 h-20 w-20" src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/000000/external-task-better-focus-inipagistudio-lineal-color-inipagistudio.png"/>
                    </div>

                    <div className="flex justify-center">
                        <p className="mb-20 mt-6 subpixel-antialiased 
                        text-xl">Add your first task...</p>
                    </div>
                 
                  </div>}
    
                  {searchTodos.map(todo=> (
                  <TodoItem  
                    completed = {todo.completed} 
                    key={todo.text}
                    text={todo.text}
                    onComplete = {()=>completedTodo(todo.text)}
                    onDelete = {()=>deleteTodo(todo.text)}/>  ))}
                </TodoList>

            <TodoForm/>
        </div>
      </React.Fragment>
    )
}

export {UI}