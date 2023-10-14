'use client'
import gsap from 'gsap'
import { SVGSprite } from '../SVGSprite'
import s from './style.module.css'
import { useEffect, useLayoutEffect, useRef } from 'react'

export const Logo = ({ className }) => {
    const logoRef = useRef();
    useEffect(() => {
        gsap.fromTo(logoRef.current, {
            opacity: 0
        }, {
            opacity: 1
        })
    }, [])
    return (
        <div style={{ opacity: 0 }} ref={logoRef} className={`${s.logoWrap}`}>
            <SVGSprite className={s.logo} id='logo' />
            <div className={`${s.titleBlock} ${className}`}>
                <strong className={s.title}>Хижина</strong>
                <strong className={s.title}>программиста</strong>
            </div>
        </div>
    )
}
