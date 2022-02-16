import { useState } from "react"

export default function AddTodo({ onSubmit }) {
    const [todoName, setTodoName] = useState("")

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit(todoName, e)
                setTodoName("")
            }}
            className="flex flex-col items-center p-8 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl space-y-6 w-full"
        >
            <h1 className="text-xl font-bold">Add a Todo</h1>
            <div className="flex space-x-3 w-full justify-around">
                <input
                    type="text"
                    className="text-gray-700 p-2 rounded-md grow"
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
    )
}
