'use client'
import s from './style.module.css'

export const MyForm = () => {
    return (
        <form className={`${s.form}`}>
            <label className={s.label}>
                text
                <input className={s.field} type="text" placeholder='text' />
            </label>

            <label className={s.label}>
                number
                <input className={s.field} type="number" placeholder='number' />
            </label>

            <label className={s.label}>
                select
                <input className={s.field} type="text" placeholder='select' />
            </label>

        </form>
    )
}
