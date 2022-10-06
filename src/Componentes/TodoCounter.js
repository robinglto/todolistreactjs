import React from "react";


export function TodoCounter({completadas, totaldetareas}){
    return (
        <div className="grid justify-items-center">
            <h1 className="text-xl mt-32 subpixel-antialiased text-indigo-500 ">Nice to meet you Robin, try scrolling down! </h1>
            <h3 className="text-indigo-900 subpixel-antialiased mb-6">Completed {completadas} to {totaldetareas} </h3>
        </div>
    )
}