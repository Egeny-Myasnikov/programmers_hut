'use client'
import { useContext } from 'react'
import s from './style.module.css'
import { ContextModaWindow } from '@/app/providers/ProjectCardsProvider'
import { MySlider } from '../../UI/MySlider'
export const ModalWindow = () => {
    const TIMING = 1000
    const [ModaWindow, setModaWindow, isOpen, setOpen] = useContext(ContextModaWindow)

    const closeModal = (e) => {
        if (e.target.classList.contains('modalOverlay')) {
            setOpen(false)
            e.stopPropagation()
            e.preventDefault()
        }
    }
    return (
        <>
            {
                isOpen ? (
                    <div
                        onClickCapture={closeModal}
                        className={`${s.overlay} modalOverlay`}>
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
