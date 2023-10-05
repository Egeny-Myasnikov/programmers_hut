'use client'
import { useState } from 'react'
import s from './style.module.css'
import { Logo } from '../../UI/Logo'
import { Navbar } from '../Navbar'

export const Header = () => {
    const [visible, setVisible] = useState(false)
    return (
        <header className={`${s.header} ${!visible ? s.hide : ''}`}>
            <div className={`${s.wrapper} `}>
                <button
                    onClick={() => setVisible(!visible)}
                    className={s.toggleBtn}
                >=--</button>
                <Logo />
                <Navbar />
                {/* <Socbar/> */}
            </div>
        </header>
    )
}
