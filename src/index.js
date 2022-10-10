import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './App/Index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Index/>
);


// const defaultTodos = JSON.stringify([
//    {text: 'Hacer Ejercicio', completed: false},
//    {text: 'Hacer Tarea', completed: true},
//    {text: 'Hacer La Cena', completed: false},
//  ])
//  localStorage.setItem('todo_v1',defaultTodos)

// function Componente () {
//   const name = "Robin"
//   return (
//     <h1>Hola, {name} espero te encuentres bien el dia de hoy</h1>
//   )
// }