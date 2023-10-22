'use client'
import { useState } from "react"
import { projects } from "../LocalStore/projects"
import { ContextProjectCards } from "./Context"

export const MyProvider = ({ children }) => {

    const [projectCards, setProjectCards] = useState(projects)
    return (
        <ContextProjectCards.Provider value={[projectCards, setProjectCards]}>
            {children}
        </ContextProjectCards.Provider>

    )
}
