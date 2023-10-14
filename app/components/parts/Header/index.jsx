'use client'
import { useState } from 'react'
import s from './style.module.css'
import { Logo } from '../../UI/Logo'
import { Navbar } from '../Navbar'
import { SVGSprite } from '../../UI/SVGSprite'
import { Socbar } from '../Socbar'

export const Header = () => {
    const [visible, setVisible] = useState(false)
    return (
        <header className={`${s.header}`}>
            <div className={`${s.wrapper} ${visible ? s.expanded : ''}`}>
                <button
                    onClick={() => setVisible(!visible)}
                    className={s.toggleBtn}
                >
                </button>
                <Logo className={s.titleBlock} />
                <Socbar />
                <Navbar />
            </div>
        </header>
    )
}
