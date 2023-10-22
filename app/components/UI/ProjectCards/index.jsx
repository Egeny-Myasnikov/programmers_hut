'use client'
import { ProjectCard } from './ProjectCard'
import s from './style.module.css'

export const ProjectCards = ({ filteredProjectCards }) => {
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

    return (
        <div className={s.projectCards}>
            <span className={s.countCards}>
                {filteredProjectCards.length !== 0 && filteredProjectCards.length} {countCards()}
            </span>
            {
                filteredProjectCards.map(({ projectImg, projectTitle, cost, period, description, links }) => (
                    <ProjectCard key={projectTitle} projectImg={projectImg} projectTitle={projectTitle} cost={cost} period={period} description={description} links={links} />
                ))
            }
        </div>
    )
}
