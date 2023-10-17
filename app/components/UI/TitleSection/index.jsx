'use client'
import s from './style.module.css'

export const TitleSection = ({ className, children }) => {
    return (
        <h1 className={`${s.title} ${className}`}>
            {children}
        </h1>
    )
}
