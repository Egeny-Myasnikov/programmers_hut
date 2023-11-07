'use client'
import { useEffect, useRef } from 'react'
import { ProjectCard } from './ProjectCard'
import s from './style.module.css'
import gsap from 'gsap'

export const ProjectCards = ({ filteredProjectCards }) => {
    const countRef = useRef()

    const countCards = () => {
        switch (filteredProjectCards.length) {
            case 0:
                return 'Нет проектов'

            case 1:
                return 'проект'

            case 2:
            case 3:
            case 4:
                return 'проекта'

            default:
                return 'проектов'
        }
    }

    useEffect(() => {
        gsap.fromTo(countRef.current, {
            scale: 0,
        }, {
            scale: 1,
            duration: .2,
            ease: 'sine',
        })


    }, [filteredProjectCards])



    return (
        <div className={`${s.projectCards} portfolioCard`}>
            <span ref={countRef} className={s.countCards}>
                {filteredProjectCards.length !== 0 && filteredProjectCards.length} {countCards()}
            </span>

            {
                filteredProjectCards.map(({ type, id, projectImg, projectTitle, cost, period, description, links, }) => (

                    <ProjectCard key={id} type={type} projectImg={projectImg} projectTitle={projectTitle} cost={cost} period={period} description={description} links={links} />
                ))
            }
        </div>
    )
}
