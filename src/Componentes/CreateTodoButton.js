import React from "react";

export function CreateTodoButton (props){

    function onClickButton(){
        props.setOpenModal(true)
    }


    return(
        <div className="grid justify-items-center mt-12">
                <button 
                 onClick={onClickButton}
                 className=" p-1 bg-teal-500  text-black  rounded-lg ">Create task
                 </button>
        </div>

    )
}