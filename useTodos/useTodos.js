import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
  // la primera vez que carga puede ser nulo
  return JSON.parse(localStorage.getItem("todos")) || [];
};


 export const useTodos = () => {
 
       const [todos, dispatch] = useReducer(todoReducer, initialState, init);

       useEffect(() => {
         localStorage.setItem("todos", JSON.stringify(todos));
         //  console.log(todos)
       }, [todos]);

       //
       const handleNewTodo = (todo) => {
         const action = {
           type: "[TODO] Add todo",
           payload: todo,
         };
         dispatch(action);
       };

       const handleDeleteTodo = (id) => {
         dispatch({
           type: "[TODO] Remove Todo",
           payload: id,
         });
       };

       const handleToggleTodo = (id) => {
         dispatch({
           type: "[TODO] Toggle Todo",
           payload: id,
         });
       };

     const pendingTodosCount = (todos.filter((todo) => !todo.done).length)


 return {
   todos,
   handleDeleteTodo,
   handleToggleTodo,
   handleNewTodo,
   todosCount: todos.length,
   pendingTodosCount,
 };
}

