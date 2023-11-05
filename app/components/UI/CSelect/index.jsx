'use client'

import { useEffect, useRef, useState } from 'react'
import s from './style.module.css'

export const CSelect = ({ options, setOption, defaultText = 'Выберете', textLabel }) => {
    const optionsRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [selectTitle, setSelectTitle] = useState(defaultText)

    const optionText = (e) => {
        setSelectTitle(e.target.textContent)
        setIsOpen(!isOpen)
        setOption(e.target.textContent)
    }
    useEffect(() => {
        const handelClick = (e) => {
            if (!e.target.classList.contains('cSelect')) {
                setIsOpen(false)
            }
        }
        window.addEventListener('click', handelClick)
        return () => {
            window.removeEventListener('click', handelClick)

        }
    }, [isOpen])

    return (
        <label className={s.label}>
            {textLabel}
            <div onClick={() => setIsOpen(!isOpen)} className={`cSelect ${s.cSelect} ${isOpen ? s.open : ''}`}>
                <span className={`cSelect ${s.title}`} >
                    {selectTitle}
                </span>
                <ul ref={optionsRef} className={`${s.options} `}>
                    {
                        options.map((option, idx) => (
                            <li className={`${s.item}`} key={idx} onClick={(e) => {
                                optionText(e)

                            }}>{option}</li>
                        ))
                    }
                </ul>
            </div>
        </label>
    )
}
