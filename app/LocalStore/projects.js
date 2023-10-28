'use client'
import nikasonIMG from '@/public/projects/Nikason/Nikason.png'
import nikasonIMG2 from '@/public/projects/Nikason/Nikason2.png'
import nikasonIMG3 from '@/public/projects/Nikason/Nikason3.png'
import nikasonIMG4 from '@/public/projects/Nikason/Nikason4.png'
import nikasonIMG5 from '@/public/projects/Nikason/Nikason5.png'
import pubgIMG from '@/public/projects/PUBG/PUBG.png'
import pubgIMG2 from '@/public/projects/PUBG/PUBG2.png'
import pubgIMG3 from '@/public/projects/PUBG/PUBG3.png'
import pubgIMG4 from '@/public/projects/PUBG/PUBG4.png'
import pubgIMG5 from '@/public/projects/PUBG/PUBG5.png'
import pubgIMG6 from '@/public/projects/PUBG/PUBG6.png'
import simadaIMG from '@/public/projects/Simada/Simada.png'
import simadaIMG2 from '@/public/projects/Simada/Simada2.png'
import simadaIMG3 from '@/public/projects/Simada/Simada3.png'
import simadaIMG4 from '@/public/projects/Simada/Simada4.png'
import simadaIMG5 from '@/public/projects/Simada/Simada5.png'
import simadaIMG6 from '@/public/projects/Simada/Simada6.png'
import simadaIMG7 from '@/public/projects/Simada/Simada7.png'
import todoListIMG from '@/public/projects/TodoList/TodoList.png'
import todoListIMG2 from '@/public/projects/TodoList/TodoList2.png'
import todoListIMG3 from '@/public/projects/TodoList/TodoList3.png'
import todoListIMG4 from '@/public/projects/TodoList/TodoList4.png'
import todoListIMG5 from '@/public/projects/TodoList/TodoList5.png'
import zamokServiceAngarskIMG from '@/public/projects/ZamokServiceAngarsk/ZamokServiceAngarsk.png'
import zamokServiceAngarskIMG2 from '@/public/projects/ZamokServiceAngarsk/ZamokServiceAngarsk2.png'
import zamokServiceAngarskIMG3 from '@/public/projects/ZamokServiceAngarsk/ZamokServiceAngarsk3.png'
import zamokServiceAngarskIMG4 from '@/public/projects/ZamokServiceAngarsk/ZamokServiceAngarsk4.png'
import zamokServiceAngarskIMG5 from '@/public/projects/ZamokServiceAngarsk/ZamokServiceAngarsk5.png'
import { typeSites } from './typeSites'




export const projects = [
    {
        id: 1,
        projectImg: [nikasonIMG, nikasonIMG2, nikasonIMG3, nikasonIMG4, nikasonIMG5],
        projectTitle: 'Столярная мастерская "Nikason"',
        cost: 14000,
        period: '10 дней',
        description: 'Многостраничный сайт столярной мастерской. Сайт сделан на Reactjs',
        links: {
            website: 'https://s517462.ha003.t.justns.ru/',
            github: 'https://github.com/Egeny-Myasnikov/nikason',
        },
        type: typeSites[3],

    },
    {
        id: 2,
        projectImg: [pubgIMG, pubgIMG2, pubgIMG3, pubgIMG4, pubgIMG5, pubgIMG6],
        projectTitle: 'Чит коды для игры "PUBG"',
        cost: 10000,
        period: '5 дней',
        description: 'Лендинг.',
        links: {
            website: 'https://egeny-myasnikov.github.io/pubg/',
            github: 'https://github.com/Egeny-Myasnikov/pubg',
        },
        type: typeSites[1],
    },
    {
        id: 3,
        projectImg: [simadaIMG, simadaIMG2, simadaIMG3, simadaIMG4, simadaIMG5, simadaIMG6, simadaIMG7],
        projectTitle: 'Салон красоты "Simada"',
        cost: 15000,
        period: '12 дней',
        description: 'Многостраничный сайт салона красоты. Сделан на нативном HTML, SCSS, нативном JavaScript (ES > 6)',
        links: {
            website: 'https://egeny-myasnikov.github.io/simada/',
            github: 'https://github.com/Egeny-Myasnikov/simada',
        },
        type: typeSites[3],
    },
    {
        id: 4,
        projectImg: [todoListIMG, todoListIMG2, todoListIMG3, todoListIMG4, todoListIMG5],
        projectTitle: 'Список задач',
        cost: null,
        period: '5 дней',
        description: 'Моё виденье списка задач. Сделан на нативном HTML, SCSS, нативном JavaScript (ES > 6). Данные сохраняются в LocalStorage',
        links: {
            website: 'https://egeny-myasnikov.github.io/todo-List-NativeJS/',
            github: 'https://github.com/Egeny-Myasnikov/todo-List-NativeJS',
        },
        type: null,
    },
    {
        id: 5,
        projectImg: [zamokServiceAngarskIMG, zamokServiceAngarskIMG2, zamokServiceAngarskIMG3, zamokServiceAngarskIMG4, zamokServiceAngarskIMG5],
        projectTitle: 'Служба вскрытия замков',
        cost: 4000,
        period: '4 дня',
        description: 'Одностраничный сайт с перечнем услуг. Сделан на нативном HTML, Less',
        links: {
            website: 'https://egeny-myasnikov.github.io/zamokservis-angarsk.ru/',
            github: 'https://github.com/Egeny-Myasnikov/zamokservis-angarsk.ru',
        },
        type: typeSites[2],
    },
]