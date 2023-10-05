'use client'
import Link from 'next/link'
import s from './style.module.css'
import { SVGSprite } from '../../UI/SVGSprite'
import { useState } from 'react'
export const Socbar = () => {


    const [socbarVisible, setSocbarVisible] = useState(false)
    const links = [
        { link: 'https://vk.com/fljenya', linkName: 'Я в VK', icon: 'vk' },
        { link: 'https://api.whatsapp.com/send?phone=79501081773', linkName: 'Мой WatsApp', icon: 'whatsapp' },
        { link: 'https://t.me/fljenya', linkName: 'Мой Телеграм', icon: 'telegram' },
    ]

    const openSocbar = () => {
        setSocbarVisible(!socbarVisible)
    }

    return (
        <div className={s.socbarWrap}>
            <Link className={`${s.icoBtn} ${s.icoTitle}`} title='Позвонить' href='tel:+79501081773' >
                <SVGSprite className={s.ico} id='phone' />
            </Link>


            <div className={`${s.socbar} ${socbarVisible ? s.visible : ''} `}>
                {
                    links.map(({ icon, link, linkName }) => (
                        <Link className={`${s.icoBtn}  ${s.icoTitle}`} title={linkName} href={link} >
                            <SVGSprite className={s.ico} id={icon} />
                        </Link>
                    ))
                }
            </div>
            <button
                onClick={openSocbar}
                className={`${s.icoBtn} ${s.socbarBtn} `}>
                {/* <SVGSprite className={s.ico} id='share' /> */}
            </button>
        </div>
    )
}
