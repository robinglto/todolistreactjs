import React from "react";
import { TodoContext } from "../TodoContext";


export function TodoCounter(){

    const {completadas, totaldetareas} = React.useContext(TodoContext)

    return (
        <div className="grid justify-items-center">
            <h1 className="text-xl mt-32 subpixel-antialiased ">Nice to meet you Robin, try scrolling down! </h1>
            <h3 className=" subpixel-antialiased mb-6 text-violet-700">Completed {completadas} to {totaldetareas} </h3>
        </div>
    )
}