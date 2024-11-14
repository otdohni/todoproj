import React, { useEffect, useState } from "react";
import { ToDoFrom } from '../components/ToDoForm';
import { ToDoList } from '../components/ToDoList';
import { IToDo } from '../interfaces';

export const TodosPage: React.FC = () => {

    const [todos, setTodos] = useState<IToDo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as IToDo[]
        setTodos(saved)
      }, [])
    
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
      }, [todos])
    
      const addHandler = (title: string) => {
        const newToDo: IToDo = {
          title: title,
          id: Date.now(),
          completed: false,
        }
        // setTodos([newToDo, ...todos])
        setTodos(prev => [newToDo, ...todos])
      }
    
      const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
            console.log(todo.completed)
          }
          return todo
        }))
      }
    
      const removeHandler = (id: number) => {
        const acceptRemove = window.confirm("Хотите удалить дело?")
        if (acceptRemove){
          setTodos(prev => prev.filter(todo => todo.id !== id))
        }
      }
    

    return(
        <>
         <ToDoFrom onAdd={addHandler}/>
         <ToDoList todos = {todos} onToggle = {toggleHandler} onRemove={removeHandler}/>
        </>
    )
}