import Image from 'next/image'
import s from './style.module.css'
import Link from 'next/link'
import { SVGSprite } from '../../SVGSprite'


export const ProjectCard = ({ projectImg, projectTitle }) => {
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
                    <li className={s.item}><span>Цена:</span> <span>10000 руб.</span></li>
                    <li className={s.item}><span>Срок разработки:</span> <span>4 дня</span></li>
                    <li className={s.item}><span>Что-нибудь ещё:</span> <span>Что-нибудь ещё</span></li>
                </ul>
                <ul className={`${s.list} ${s.icons}`}>
                    <Link href='/'><li className={s.item}><SVGSprite className={s.ico} id='target' /></li></Link>
                    <Link href='/'><li className={s.item}><SVGSprite className={s.ico} id='target' /></li></Link>
                    <Link href='/'><li className={s.item}><SVGSprite className={s.ico} id='target' /></li></Link>

                </ul>

            </div>
        </div>
    )
}
