import React from "react";


export function TodoSearch({state, setState}){


    const onSearchValueChange = (event)=>{
        console.log(event.target.value)
        setState(event.target.value)
    }


    
    return(
    <div className=" grid justify-items-center">
       <div className="flex mb-8 -space-x-2">
            <input 
            value={state}
            onChange={onSearchValueChange}
            className="p-1 rounded-r-none border-r-0 border-2 border-solid rounded-lg  text-start outline-0"  
            placeholder="search..."/>
            <img className="h-11 w-10 p-1 rounded-l-none rounded-lg border-2 border-solid border-l-0" src="https://img.icons8.com/pastel-glyph/64/7950F2/search--v2.png"/>
        
       </div>

        
    </div>

    )
}