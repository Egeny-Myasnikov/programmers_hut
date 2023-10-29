'use client'
import { useEffect, useId, useLayoutEffect, useState } from "react";
import { MyField } from "../../UI/MyField";
import { MyButton } from "../../UI/MyButton";
import s from './style.module.css'

export const Greeting = ({ }) => {
    const [value, setValue] = useState('')
    const [name, setName] = useState('')

    const setLocalStorage = () => {
        const ls = localStorage
        const userName = ls.getItem('userName')
        if (userName) {
            setName(userName)
            return
        }
        ls.setItem('userName', name)

    }

    useLayoutEffect(() => {
        const ls = localStorage
        const userName = ls.getItem('userName')
        if (userName) {
            setName(userName)
            return
        }
        ls.setItem('userName', name)

    }, [name])



    return (
        <>
            {
                name !== '' ?
                    name
                    : (
                        <MyField classNameLabel={s.field} value={value} onBlur={() => setName(value)} onChange={(e) => setValue(e.target.value)} placeholder='Введите имя' />
                    )
            }
        </>
    )
}