import React, { useState, useEffect } from "react"
import AddTodo from "./AddTodo"
import Todo from "./Todo"

export default function TodosTracker({ listName }) {
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
        <div className="flex flex-col justify-center space-y-8 bg-gray-600 p-16 m-[25vh] rounded-2xl min-h-fit w-[50vw]">
            <h1 className="font-bold text-4xl text-center">{listName}</h1>

            <AddTodo onSubmit={addTodo} />

            {Todos.map((todo, idx) => (
                <Todo key={idx} name={todo} onDelete={deleteTodo} />
            ))}
        </div>
    )
}
