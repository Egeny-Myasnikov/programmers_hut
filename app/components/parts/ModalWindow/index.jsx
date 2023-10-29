'use client'
import { useContext, useEffect, useRef, useState } from 'react'
import s from './style.module.css'
import { ContextModaWindow } from '@/app/providers/ProjectCardsProvider'
import Image from 'next/image'
import { MySlider } from '../../UI/MySlider'
export const ModalWindow = () => {
    const overlayRef = useRef()
    const [ModaWindow, setModaWindow, isOpen, setOpen] = useContext(ContextModaWindow)
    const closePopup = (e) => {
        if (e.target.classList.contains('modalOverlay')) {
            setOpen(false)
        }
    }


    return (
        <>
            {
                isOpen ? (
                    <div onClick={(e) => closePopup(e)} className={`${s.overlay} modalOverlay`}>
                        <div className={s.popup}>
                            <div className={s.popupContent}>
                                <MySlider images={ModaWindow} />
                            </div>
                        </div>
                    </div>
                ) :
                    null
            }
        </>
    )
}
