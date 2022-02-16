import React, { useState, useEffect } from "react"
import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"

import "./App.css"

function App({}) {
    const [Todos, setTodos] = useState([])

    useEffect(() => {
        console.log("Initializing Todos...")

        return () => {
            console.log("Saving Todos...")
        }
    }, [])

    useEffect(() => {
        console.log("Updating Todos...")
        console.log("Todos", JSON.stringify(Todos, null, 2))
    }, [Todos])

    const addTodo = (todo, e) => {
        if (todo === "") return

        console.log("Adding Todo:", todo)

        if (Todos.includes(todo)) {
            console.warn("Already in Todos List")
            return
        }

        setTodos([...Todos, todo])
    }

    const deleteTodo = (name, e) => {
        if (!Todos.includes(name)) {
            console.warn(`Todo: ${name} not found`)
            return
        }

        console.log(`Removing todo: '${name}'...`)
        const updatedTodos = [...Todos]
        const todoIdx = updatedTodos.indexOf(name)

        setTodos(updatedTodos.filter((todo) => todo !== name))
    }

    return (
        <div className="flex flex-col items-center bg-gray-800 min-w-screen min-h-screen text-slate-50 overflow-x-hidden">
            <div className="flex flex-col justify-center space-y-8 bg-gray-600 p-16 m-[25vh] rounded-2xl min-h-fit w-[50vw]">
                <AddTodo onSubmit={addTodo} />

                {Todos.map((todo, idx) => (
                    <Todo key={idx} name={todo} onDelete={deleteTodo} />
                ))}
            </div>
        </div>
    )
}

export default App
