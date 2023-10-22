'use client'
import { useState } from "react"
import { ContextProjectCards } from "./Context"
import { projects } from '@/LocalStore/projects'

export const MyProvider = ({ children }) => {

    const [projectCards, setProjectCards] = useState(projects)
    return (
        <ContextProjectCards.Provider value={[projectCards, setProjectCards]}>
            {children}
        </ContextProjectCards.Provider>

    )
}
