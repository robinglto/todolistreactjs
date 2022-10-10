import React from "react";
import { TodoContext } from "../TodoContext";


export function TodoForm(){

    const [newTodoValue,setNewTodoValue] = React.useState('')

    const {
        addTodo,
    } = React.useContext(TodoContext)

    const onCancel= ()=>{}

    const onChange =(e)=>{
        setNewTodoValue(e.target.value)
    }

    const onAdd = (e)=>{
        e.preventDefault()
        addTodo(newTodoValue)
    }

    return(
        <form onSubmit={onAdd}>
            <div><label>Ingresa la actividad</label></div>
            <div><textarea value={newTodoValue} onChange={onChange} placeholder="Levantarme temprano para estudiar react"></textarea></div>

            <div>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <br/>
                <button type="submit" >Crear</button>
            </div>
        </form>
    )
}