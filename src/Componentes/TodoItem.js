import React from "react";
import '../App.css'


export function TodoItem(props) {

function onDelete (){
    alert("eliminado")
}

    return (
        <div className="mb-2">
                 <li className=" -space-x-28  grid justify-items-center">
                    <div className="flex w-1/4">
                    <span 
                        onClick={props.onComplete}
                        className="p-1 border-solid border-2 border-r-0 rounded-r-none rounded-lg">
                            <img className="w-7 h-7 cursor-pointer	" src="https://img.icons8.com/ios-filled/50/7950F2/do-not-drop.png"/>
                    </span>
                   
                    <p  className="w-3/4 p-1 border-solid border-2  border-l-0 rounded-l-none rounded-r-none border-r-0 rounded-lg subpixel-antialiased "> {props.text}</p> 

                    <span 
                        onClick={props.onDelete}>
                            <img className="p-1 w-8 h-10 cursor-pointer border-solid border-2 rounded-l-none border-l-0	 rounded-lg" src="https://img.icons8.com/fluency-systems-filled/48/7950F2/filled-trash.png"/>
                    </span>   
                    </div>
                 </li>   
        </div>
    )
}
































                 {/* <li className="flex -space-x-28  grid grid-cols-8  ">
                    <span 
                        onClick={props.onComplete}
                        className="p-1 border-solid border-2 border-r-0 rounded-r-none rounded-lg col-start-4 col-end-5">
                            <img className="w-7 h-7 cursor-pointer	" src="https://img.icons8.com/ios-filled/50/7950F2/do-not-drop.png"/>
                    </span>
                   
                    <p  className=" p-1 border-solid border-2  border-l-0 rounded-l-none rounded-lg col-start-5 col-end-6 subpixel-antialiased "> {props.text}</p> 

                    <span 
                        onClick={props.onDelete}
                        className="p-1  col-start-6 col-end-7">
                            <img className="w-7 h-7 ml-16 cursor-pointer	" src="https://img.icons8.com/fluency-systems-filled/48/7950F2/filled-trash.png"/>
                    </span>   
</li>   */}