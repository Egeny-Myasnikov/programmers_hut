'use client'
import s from './style.module.css'

export const MyForm = ({ children, legend, className, onClick }) => {
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
                            className={`${s.form} ${className}`}>
                            <fieldset className={`${s.fieldset}`}>
                                <legend className={s.legend}>{legend}</legend>
                                {children}
                            </fieldset>
                        </form>
                    ) :
                    (
                        <form
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
}
