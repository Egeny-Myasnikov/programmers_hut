'use client'
import { forwardRef } from 'react'
import s from './style.module.css'

const MyForm = forwardRef(function MyForm({ children, legend, className = '', onClick }, ref) {
    return (
        <div>
            {
                legend ?
                    (
                        <form
                            onClick={(e) => {
                                e.preventDefault()
                                onClick && onClick()
                            }}
                            className={`${s.form} ${className}`}
                        >
                            <fieldset className={`${s.fieldset}`}>
                                <legend className={s.legend}>{legend}</legend>
                                {children}
                            </fieldset>
                        </form>
                    ) :
                    (
                        <form
                            ref={ref}
                            onClick={(e) => {
                                e.preventDefault()
                                onClick && onClick()
                            }}
                            className={`${s.form}  ${className}`}>
                            {children}
                        </form>
                    )
            }
        </div>
    )
})
export default MyForm
