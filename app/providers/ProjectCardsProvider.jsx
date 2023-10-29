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
export const ContextModaWindow = createContext()

export const ModaWindowProvider = ({ children }) => {

    const [ModaWindow, setModaWindow] = useState([])
    const [isOpen, setOpen] = useState(false)
    return (
        <ContextModaWindow.Provider value={[ModaWindow, setModaWindow, isOpen, setOpen]}>
            {children}
        </ContextModaWindow.Provider>

    )
}
