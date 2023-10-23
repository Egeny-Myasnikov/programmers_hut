'use client'
import { ContextProjectCards } from '@/app/providers/ProjectCardsProvider'
import s from './style.module.css'
import { useContext } from 'react'
import { Filter } from '@/app/components/UI/Filter'
import { ProjectCards } from '@/app/components/UI/ProjectCards'
import { projects } from '@/app/LocalStore/projects'
import { typeSites } from '@/app/LocalStore/typeSites'



export const HiroBlock = () => {
    const [filteredProjectCards, setFilteredProjectCards] = useContext(ContextProjectCards)

    return (
        <section className={s.hiro}>
            <Filter textButton={typeSites} filterElement={projects} />
            <ProjectCards filteredProjectCards={filteredProjectCards} />
        </section>
    )
}