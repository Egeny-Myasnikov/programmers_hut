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
        {
            projectImg: nikasonIMG,
            projectTitle: 'Столярная мастерская "Nikason"',
            cost: '14000 руб.',
            period: '10 дней',
            description: 'Многостраничный сайт столярной мастерской. Сайт сделан на Reactjs',
            links: {
                website: 'https://s517462.ha003.t.justns.ru/',
                github: 'https://github.com/Egeny-Myasnikov/nikason',
                more: '/',
            },

        },
        {
            projectImg: pubgIMG,
            projectTitle: 'Чит коды для игры "PUBG"',
            cost: '10000 руб.',
            period: '5 дней',
            description: 'Лендинг.',
            links: {
                website: 'https://egeny-myasnikov.github.io/pubg/',
                github: 'https://github.com/Egeny-Myasnikov/pubg',
                more: '/',
            },
        },
        {
            projectImg: simadaIMG,
            projectTitle: 'Салон красоты "Simada"',
            cost: '15000 руб.',
            period: '12 дней',
            description: 'Многостраничный сайт салона красоты. Сделан на нативном HTML, SCSS, нативном JavaScript (ES > 6)',
            links: {
                website: 'https://egeny-myasnikov.github.io/simada/',
                github: 'https://github.com/Egeny-Myasnikov/simada',
                more: '/',
            },
        },
        {
            projectImg: todoListIMG,
            projectTitle: 'Список задач',
            cost: ' - ',
            period: '5 дней',
            description: 'Моё виденье списка задач. Сделан на нативном HTML, SCSS, нативном JavaScript (ES > 6). Данные сохраняются в LocalStorage',
            links: {
                website: 'https://egeny-myasnikov.github.io/todo-List-NativeJS/',
                github: 'https://github.com/Egeny-Myasnikov/todo-List-NativeJS',
                more: '/',
            },
        },
        {
            projectImg: zamokServiceAngarskIMG,
            projectTitle: 'Служба вскрытия замков',
            cost: '4000 руб.',
            period: '4 дня',
            description: 'Одностраничный сайт с перечнем услуг. Сделан на нативном HTML, Less',
            links: {
                website: 'https://egeny-myasnikov.github.io/zamokservis-angarsk.ru/',
                github: 'https://github.com/Egeny-Myasnikov/zamokservis-angarsk.ru',
                more: '/',
            },
        },
    ]
    return (
        <div className={s.projectCards}>
            {
                projects.map(({ projectImg, projectTitle, cost, period, description, links }) => (
                    <ProjectCard key={projectTitle} projectImg={projectImg} projectTitle={projectTitle} cost={cost} period={period} description={description} links={links} />
                ))
            }
        </div>
    )
}
