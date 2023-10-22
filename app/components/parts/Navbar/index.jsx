'use client'
import Link from 'next/link'
import s from './style.module.css'
import { SVGSprite } from '../../UI/SVGSprite'
export const Navbar = () => {
    const links = [
        { link: '/', linkName: 'Главная', icon: 'home' },
        { link: '/projects', linkName: 'Проекты', icon: 'projects' },
        { link: '/about', linkName: 'Кто я?', icon: 'about' },

    ]
    return (
        <nav className={s.navbar}>
            {
                links.map(({ link, linkName, icon }) => {
                    return (

                        <Link className={s.navLink} key={linkName} href={link} title={linkName}>
                            <div className={s.icoWrap}>
                                <SVGSprite className={s.ico} id={icon} />
                            </div>
                            <p className={s.linkName}>{linkName}</p>
                        </Link>

                    )
                })
            }

        </nav>
    )
}
