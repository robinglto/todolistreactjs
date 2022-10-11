import React from "react";
//import '../App.css'


export function TodoItem(props) {



    return (
        <div className="mb-2">
                 <li className="  flex justify-center   ">
                    <div className="flex sm:-space-x-1 sm:w-1/4   ">
                    <span 
                        onClick={props.onComplete}
                        className="p-1 border-solid border-2 border-r-0 rounded-r-none rounded-lg">
                            <img className="w-7 h-full cursor-pointer	" src="https://img.icons8.com/color/48/000000/checked--v1.png"/>
                    </span>
                   
                    <p  className={`sm:w-3/4 p-1 border-solid border-2  border-l-0 rounded-l-none rounded-r-none border-r-0 rounded-lg subpixel-antialiased  ${props.completed? "line-through":""} w-40`}> {props.text.length?props.text:""}</p> 

                    <span 
                        onClick={props.onDelete}>
                            <img className="p-1 w-10 h-full cursor-pointer border-solid border-2 rounded-l-none border-l-0	 rounded-lg" src="https://img.icons8.com/dotty/80/000000/filled-trash.png"/>
                    </span>   
                    </div>
                 </li>   
        </div>
    )
}
{}