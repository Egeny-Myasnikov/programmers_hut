'use client'
import { formatToRU } from '@/app/helpers/currency.helper'
import { MySlider } from '../../MySlider'
import { SVGSprite } from '../../SVGSprite'
import s from './style.module.css'
import Link from 'next/link'
import { useContext, useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ContextModaWindow } from '@/app/providers/ProjectCardsProvider'


export const ProjectCard = ({ projectImg, projectTitle, cost, period, description, links }) => {
    const [ModaWindow, setModaWindow, isOpen, setOpen] = useContext(ContextModaWindow)
    const cardRef = useRef()
    const setImagesToModalWindow = () => {
        setModaWindow(projectImg)
        setOpen(true)
    }
    useEffect(() => {
        gsap.fromTo(cardRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            ease: 'sine',
        })
    })

    return (
        <div className={`${s.projectCard}`} ref={cardRef} >

            <div className={`${s.imgWrap} imgWrap`} >
                <SVGSprite
                    onClick={setImagesToModalWindow}
                    id='fullscreen'
                    className={`${s.ico} ${s.openWindow} linkTitle`}
                    title='Открыть'
                />
                <MySlider images={projectImg} />
            </div>
            <div className={s.info}>
                <h2 className={s.projectTitle}> {projectTitle}</h2>
                <ul className={s.list}>
                    <li className={s.item}><span className={s.itemOptions}>Цена:</span> <span>{formatToRU.format(cost)}</span></li>
                    <li className={s.item}><span className={s.itemOptions}>Срок разработки:</span> <span>{period}</span></li>
                    <li className={s.item}><span className={s.itemOptions}>Описание:</span> <span>{description}
                    </span></li>
                </ul>
                <ul className={`${s.list} ${s.icons}`}>
                    <Link href={links.website} target='_blank' className='linkTitle' title='Открыть сайт'><li className={s.iconsItem}><SVGSprite className={`${s.ico}`} id='link' /></li></Link>
                    <Link href={links.github} target='_blank' className='linkTitle' title='Смотреть код проекта'><li className={s.iconsItem}><SVGSprite className={s.ico} id='github' /></li></Link>

                </ul>



            </div>
        </div>
    )
}
