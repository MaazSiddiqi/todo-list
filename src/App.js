import React, { useState, useEffect } from "react"
import TodosTracker from "./components/TodosTracker"

import "./App.css"

function App({}) {
    return (
        <div className="flex flex-col items-center bg-gray-800 min-w-screen min-h-screen text-slate-50 overflow-x-hidden">
            <TodosTracker listName="General Todos" />
        </div>
    )
}

export default App
