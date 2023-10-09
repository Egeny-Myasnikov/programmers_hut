'use client'
import { SVGSprite } from '../SVGSprite'
import s from './style.module.css'

export const Logo = ({ className }) => {
    return (
        <div className={`${s.logoWrap}`}>
            <SVGSprite className={s.logo} id='logo' />
            <div className={`${s.titleBlock} ${className}`}>
                <strong className={s.title}>Хижина</strong>
                <strong className={s.title}>программиста</strong>
            </div>
        </div>
    )
}
