'use client'
import { ProjectCard } from './ProjectCard'
import s from './style.module.css'
import nikasonIMG from '@/public/projects/Nikason.png'
import pubgIMG from '@/public/projects/PUBG.png'
import simadaIMG from '@/public/projects/Simada.png'
import todoListIMG from '@/public/projects/TodoList.png'
import zamokServiceAngarskIMG from '@/public/projects/ZamokServiceAngarsk.png'



export const ProjectCards = () => {
    const projects = [
        { projectImg: nikasonIMG, projectTitle: 'Столярная мастерская "Nikason"' },
        { projectImg: pubgIMG, projectTitle: 'Чит коды для игры "PUBG"' },
        { projectImg: simadaIMG, projectTitle: 'Салон красоты "Simada"' },
        { projectImg: todoListIMG, projectTitle: 'Список задач' },
        { projectImg: zamokServiceAngarskIMG, projectTitle: 'Служба вскрытия замков' },
    ]
    return (
        <div className={s.projectCards}>
            {
                projects.map(({ projectImg, projectTitle }) => (
                    <ProjectCard key={projectTitle} projectImg={projectImg} projectTitle={projectTitle} />
                ))
            }
        </div>
    )
}
