'use client'
import s from './style.module.css'

export const MyButton = ({ className, children }) => {
    return (
        <button className={`${s.btn} ${className}`}>
            {children}
        </button>
    )
}
