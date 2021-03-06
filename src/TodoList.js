import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo"
import "./TodoList.css"

export default function TodoList() {
    const [todos, setTodos] =useState([])

    function addTodo(todo) {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }

    function updateTodo(todoId, newValue) {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    function removeTodo(id) {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    function completeTodo(id) {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <div className="TodoList">
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}