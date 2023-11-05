'use client'
import s from './style.module.css'

export const MyButton = ({ onClick, className, style = null, children }) => {

    return (
        <button
            style={style}
            onClick={onClick}
            className={`${className ? className : ''} ${s.btn} `}>
            {children}
        </button>
    )
}
