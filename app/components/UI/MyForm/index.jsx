'use client'
import { MyField } from '../MyField'
import s from './style.module.css'

export const MyForm = ({ children, legend, className }) => {
    return (
        <>
            {
                legend ?
                    (
                        <form className={`${s.form} ${className}`}>
                            <fieldset className={`${s.fieldset}`}>
                                <legend className={s.legend}>{legend}</legend>
                                {children}
                            </fieldset>
                        </form>
                    ) :
                    (
                        <form className={`${s.form}  ${className}`}>
                            {children}
                        </form>
                    )
            }
        </>






    )
}
