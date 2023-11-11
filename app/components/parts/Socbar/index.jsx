'use client'
import Link from 'next/link'
import s from './style.module.css'
import { useEffect, useState } from 'react'
import { SVGSprite } from '../../UI/SVGSprite'


export const Socbar = ({ headerVisible }) => {
    const [socIconsVisible, setSocIconsVisible] = useState(false)
    const links = [
        { link: 'https://vk.com/fljenya', linkName: 'Я в VK', icon: 'vk' },
        { link: 'https://api.whatsapp.com/send?phone=79501081773', linkName: 'Мой WatsApp', icon: 'whatsapp' },
        { link: 'https://t.me/fljenya', linkName: 'Мой Телеграм', icon: 'telegram' },
    ]

    const toggleSocIcons = () => {
        setSocIconsVisible(!socIconsVisible)

        console.log(headerVisible)
    }



    return (
        <div className={s.socbarWrap}>
            <Link className={`${s.btn} ${!headerVisible ? 'linkTitle' : ''} `} title='Позвонить' href='tel:+79501081773' >
                <SVGSprite className={s.icon} id='phone' />
                <span className={`${s.phoneText} ${headerVisible ? s.phoneTextVisible : s.phoneTextHidden}`}>Позвонить мне</span>
            </Link>

            <button
                onClick={toggleSocIcons}
                className={`${s.btn} ${s.socIconsBtn} ${socIconsVisible ? s.socIconsBtnActive : ''}`}
            >
                {
                    links.map(({ icon, link, linkName }) => (
                        <Link
                            className={` ${s.btn}
                ${s.socIconsLinks}
                ${socIconsVisible ? s.socIconsLinksActive : ''} linkTitle`}
                            title={linkName}
                            href={link}
                            key={link}
                        >
                            <SVGSprite
                                className={`${s.icon} 
                                ${s.socIconsIcon} 
                                ${socIconsVisible ? s.socIconsIconActive : ''}`}
                                id={icon} />
                        </Link>
                    ))
                }

            </button>

        </div >
    )
}
