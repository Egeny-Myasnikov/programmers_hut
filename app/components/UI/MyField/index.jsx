'use client'
import s from './style.module.css'

export const MyField = ({ style, value, onBlur, onChange, onInput, onFocus, labelText, type, className, classNameLabel, placeholder }) => {
    return (
        <label className={`${s.label} ${classNameLabel}`}>
            {labelText}
            <input value={value} onInput={onInput} style={style} onBlur={onBlur} onFocus={onFocus} onChange={onChange} className={`${s.field} ${className}`} type={type} placeholder={placeholder} />
        </label>
    )
}
