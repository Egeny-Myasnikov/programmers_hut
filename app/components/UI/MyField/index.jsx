'use client'
import s from './style.module.css'

export const MyField = ({ labelText, type, className, placeholder }) => {
    return (
        <label className={s.label}>
            {labelText}
            <input className={`${s.field} ${className}`} type={type} placeholder={placeholder} />
        </label>
    )
}
