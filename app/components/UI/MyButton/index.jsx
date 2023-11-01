'use client'
import s from './style.module.css'

export const MyButton = ({ onClick, className, children }) => {
    const click = (e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick && onClick()
    }
    return (
        <button
            onClick={click}
            className={`${className} ${s.btn} }`}>
            {children}
        </button>
    )
}
