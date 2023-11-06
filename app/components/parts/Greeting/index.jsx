'use client'
import { useLayoutEffect, useState } from "react"
import { MyField } from "../../UI/MyField"
import s from './style.module.css'
import { SVGSprite } from "../../UI/SVGSprite"

export const Greeting = ({ }) => {
    const [value, setValue] = useState('')
    const [name, setName] = useState('')
    const removeNameFromLS = () => {
        const ls = localStorage
        ls.removeItem('userName')
        setName('')
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
                name !== '' ? (
                    <>
                        <p className={s.name}>
                            {name}
                            <button title="Изменить имя" className={`${s.editBtn} linkTitle`} onClick={removeNameFromLS}>
                                <SVGSprite className={s.editIcon} id={'edit'} />
                            </button>
                        </p>
                    </>
                )
                    : (
                        <MyField
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={() => setName(value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setName(value)
                                }
                            }}
                            value={value}
                            classNameLabel={s.field}
                            placeholder='Введите имя'
                        />
                    )
            }
        </>
    )
}