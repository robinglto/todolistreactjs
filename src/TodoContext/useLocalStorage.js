import React from "react";

export function useLocalStorage(itemName, initialValue){

    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)
  
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parseTodo;
        
          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parseTodo=[];
        
          }else{
            parseTodo = JSON.parse(localStorageItem)
          }
    
          setItem(parseTodo)
          setLoading(false)
          
        }catch(error){
          setError(error)
        }
  
      },2000)
    });
  
  
  
  
    const saveItem = (newTodos)=>{
        try{
          const stringifiar = JSON.stringify(newTodos);
          localStorage.setItem(itemName, stringifiar);
          setItem(newTodos)
        }catch(error){
          setError(error)
        }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
  }
  }