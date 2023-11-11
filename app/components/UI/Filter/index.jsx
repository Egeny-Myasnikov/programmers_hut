'use client'
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import s from './style.module.css'
import { MyButton } from '../MyButton'
import { ContextProjectCards } from '@/app/providers/ProjectCardsProvider'


export const Filter = ({ textButton, filterElement }) => {
    const [filteredProjectCards, setFilteredProjectCards] = useContext(ContextProjectCards)

    const filtered = (e) => {
        const btns = e.target.parentElement.parentElement.childNodes
        btns.forEach(btn => {
            btn.firstChild.classList.remove(s.btnFilterActive)
            if (btn.firstChild.textContent === e.target.textContent) {
                btn.firstChild.classList.add(s.btnFilterActive)
            }
        })

        textButton.forEach(text => {
            if (e.target.textContent === text) {
                e.target.classList.add(s.btnFilterActive)
            }
        })
        const newElements = filterElement.filter(el => {
            if (e.target.innerText === textButton[0]) {
                return filterElement
            } else {
                return el.type === e.target.innerText

            }
        })
        setFilteredProjectCards(newElements)
    }


    return (
        <div className={s.filter}>
            <ul className={s.filterLst}>
                {
                    textButton.map(text => (
                        <li key={text} className={s.filterItem}>
                            <MyButton
                                onClick={filtered}
                                className={`${s.btnFilter} `}
                            >
                                {text}
                            </MyButton>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}
