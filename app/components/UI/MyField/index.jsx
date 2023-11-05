'use client'
import s from './style.module.css'

export const MyField = ({ style, value, onPaste, onKeyDown, onBlur, onChange, onInput, onFocus, labelText, type, className = '', classNameLabel = '', placeholder }) => {
    return (
        <label className={`${s.label} ${classNameLabel}`}>
            {labelText}
            <input
                onInput={onInput}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onPaste={onPaste}
                value={value}
                type={type}
                placeholder={placeholder}
                className={`${s.field} ${className}`}
                style={style}
            />
        </label>
    )
}
