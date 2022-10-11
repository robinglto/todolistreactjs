import React from "react";
import { TodoContext } from "../TodoContext";


export function TodoForm(){

    const [newTodoValue,setNewTodoValue] = React.useState('')

    const {
        addTodo,
    } = React.useContext(TodoContext)


    const onChange =(e)=>{
        setNewTodoValue(e.target.value.length<=30 && e.target.value.length>=1
            ?e.target.value
            :"")
        
    }

    const onAdd = (e)=>{
        e.preventDefault()
        if(!!newTodoValue){
            addTodo(newTodoValue)
        }else{
            return""
        }
       setNewTodoValue("")
    }


    return(
        <form onSubmit={onAdd}>
            <div className="flex justify-center mt-12 mb-12 -space-x-1 ">
                <textarea value={newTodoValue} onChange={onChange} className="h-1/4 border-2 rounded-lg rounded-r-none outline-0 p-1">          </textarea>
                <button type="submit" className="bg-violet-100   text-violet-700 hover:bg-violet-200  rounded-lg rounded-l-none p-1 " >Crear tarea</button>
        </div>
        </form>
    )
}