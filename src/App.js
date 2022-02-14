import React, { useState } from "react"
import Todo from "./components/Todo"

import "./App.css"

function App({}) {
    const [Todos, setTodos] = useState([])

    const [todoName, setTodoName] = useState("")

    const addTodo = (todo, e) => {
        e.preventDefault()
        if (todo === "") return

        console.log("Adding Todo:", todo)

        if (Todos.includes(todo)) {
            console.log("Already in Todos List")
        } else {
            setTodos([...Todos, todo])
            console.log("Todos", JSON.stringify(Todos, null, 2))
        }

        setTodoName("")
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-800 w-screen h-screen text-slate-50">
            <div className="flex flex-col items-center justify-center space-y-8 bg-gray-600 p-16 rounded-2xl max-h-screen">
                <form
                    onSubmit={(e) => addTodo(todoName, e)}
                    className="flex flex-col items-center p-8 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl space-y-6"
                >
                    <h1 className="text-4xl font-bold">Add a Todo</h1>
                    <div className="flex space-x-3">
                        <input
                            type="text"
                            className="text-gray-700 p-2 rounded-md w-[50vh]"
                            value={todoName}
                            onChange={(e) => {
                                setTodoName(e.target.value)
                            }}
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-gradient-to-br from-sky-600 to-sky-500 rounded-xl hover:scale-105 active:scale-95 transition-all duration-200"
                        >
                            Add Todo
                        </button>
                    </div>
                </form>
                <Todo name="Sample Todo" />

                <div className="overflow-y-clip overflow-x-hidden h-1/2 w-full space-y-8 p-0">
                    {Todos.map((todo) => (
                        <Todo name={todo} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
