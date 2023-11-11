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
    }
    useEffect(() => {
        if (headerVisible) {
            if (!socIconsVisible) {
                setSocIconsVisible(true)
            }
        }
        if (!headerVisible) {
            if (socIconsVisible) {
                setSocIconsVisible(false)
            }
        }
        document.addEventListener('click', (e) => {
            if (!e.target.classList.contains(s.socIconsBtn) && !e.target.classList.contains('style_toggleBtn__oUXb6')) setSocIconsVisible(false)
        })
        return () => {
            document.removeEventListener('click', (e) => {
                if (!e.target.classList.contains(s.socIconsBtn) && !e.target.classList.contains('style_toggleBtn__oUXb6')) setSocIconsVisible(false)
            })
        }
    }, [headerVisible])




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
                                        ${socIconsVisible ? s.socIconsLinksActive : ''} linkTitle
                                      `}
                            target='_blank'
                            title={linkName}
                            href={link}
                            key={link}
                        >
                            <SVGSprite
                                className={`${s.icon} 
                                            ${s.socIconsIcon} 
                                            ${socIconsVisible ? s.socIconsIconActive : ''}
                                          `}
                                id={icon} />
                        </Link>
                    ))
                }

            </button>

        </div >
    )
}
