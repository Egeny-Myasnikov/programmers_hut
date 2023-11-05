'use client'
import s from './style.module.css'

export const MyButton = ({ onClick, className, children }) => {

    return (
        <button
            onClick={onClick}
            className={`${className} ${s.btn} }`}>
            {children}
        </button>
    )
}
