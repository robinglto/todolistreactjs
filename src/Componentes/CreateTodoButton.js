import React from "react";

export function CreateTodoButton (){
    return(
        <div className="grid grid-cols-11 mt-12">
                <input className="outline-0 border-2  col-start-5 col-end-7 rounded-lg rounded-r-none p-1" placeholder="Going to bed..." />
                <button 
                 onClick={()=> console.log('Hiciste click en el boton')}
                 className="grid col-start-7 col-end-8 p-1 justify-items-center p-1  text-white bg-indigo-600 rounded-lg rounded-l-none">Create task
                 </button>
        </div>

    )
}