import s from './style.module.css'
import Link from 'next/link'
import { SVGSprite } from '@/UI/SVGSprite'
import { MySlider } from '@/UI/MySlider'
import { formatToRU } from '@/app/helpers/currency.helper'


export const ProjectCard = ({ projectImg, projectTitle, cost, period, description, links }) => {
    return (
        <div className={s.projectCard}>
            <div className={s.imgWrap}>
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
                    <Link href={links.website} target='_blank'><li className={s.iconsItem}><SVGSprite className={`${s.ico} ${s.icoLink}`} id='link' /></li></Link>
                    <Link href={links.github} target='_blank'><li className={s.iconsItem}><SVGSprite className={s.ico} id='github' /></li></Link>

                </ul>



            </div>
        </div>
    )
}
