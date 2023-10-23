'use client'
import { useState } from "react"
import { projects } from "../LocalStore/projects"
import { createContext } from "react";

export const ContextProjectCards = createContext()

export const ProjectCardsProvider = ({ children }) => {

    const [projectCards, setProjectCards] = useState(projects)
    return (
        <ContextProjectCards.Provider value={[projectCards, setProjectCards]}>
            {children}
        </ContextProjectCards.Provider>

    )
}
