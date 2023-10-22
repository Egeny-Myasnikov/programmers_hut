'use client'
import s from './style.module.css'
import { ProjectCards } from '@/UI/ProjectCards'
import { Filter } from '@/UI/Filter'
import { typeSites } from '@/app/LocalStore/typeSites'
import { projects } from '@/LocalStore/projects'
import { useContext } from 'react'
import { ContextProjectCards } from '../../../components/Context'



export const HiroBlock = () => {
    const [filteredProjectCards, setFilteredProjectCards] = useContext(ContextProjectCards)

    return (
        <section className={s.hiro}>
            <Filter textButton={typeSites} filterElement={projects} />
            <ProjectCards filteredProjectCards={filteredProjectCards} />
        </section>
    )
}