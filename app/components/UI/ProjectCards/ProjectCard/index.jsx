import Image from 'next/image'
import s from './style.module.css'
import Link from 'next/link'
import { SVGSprite } from '../../SVGSprite'


export const ProjectCard = ({ projectImg, projectTitle, cost, period, description, links }) => {
    return (
        <div className={s.projectCard}>
            <div className={s.imgWrap}>
                <Image
                    className={s.img}
                    src={projectImg}
                    alt={projectTitle}
                />
            </div>
            <div className={s.info}>
                <h2> {projectTitle}</h2>
                <ul className={s.list}>
                    <li className={s.item}><span className={s.itemOptions}>Цена:</span> <span>{cost}</span></li>
                    <li className={s.item}><span className={s.itemOptions}>Срок разработки:</span> <span>{period}</span></li>
                    <li className={s.item}><span className={s.itemOptions}>Описание:</span> <span>{description}
                    </span></li>
                </ul>
                <ul className={`${s.list} ${s.icons}`}>
                    <Link href={links.website}><li className={s.iconsItem}><SVGSprite className={`${s.ico} ${s.icoLink}`} id='link' /></li></Link>
                    <Link href={links.github}><li className={s.iconsItem}><SVGSprite className={s.ico} id='github' /></li></Link>
                    <Link href={links.more}><li className={s.iconsItem}><SVGSprite className={s.ico} id='more' /></li></Link>

                </ul>

            </div>
        </div>
    )
}
