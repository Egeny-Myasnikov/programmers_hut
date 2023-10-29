'use client'
import { ContextModaWindow, ContextProjectCards } from '@/app/providers/ProjectCardsProvider'
import s from './style.module.css'
import { useContext } from 'react'
import { Filter } from '@/app/components/UI/Filter'
import { ProjectCards } from '@/app/components/UI/ProjectCards'
import { projects } from '@/app/LocalStore/projects'
import { typeSites } from '@/app/LocalStore/typeSites'
import { ModalWindow } from '@/app/components/parts/ModalWindow'



export const HiroBlock = () => {
    const [filteredProjectCards, setFilteredProjectCards] = useContext(ContextProjectCards)

    return (
        <section className={s.hiro}>
            <ModalWindow />
            <Filter textButton={typeSites} filterElement={projects} />
            <ProjectCards filteredProjectCards={filteredProjectCards} />
        </section>
    )
}