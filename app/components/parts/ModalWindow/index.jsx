'use client'
import { useContext } from 'react'
import s from './style.module.css'
import { ContextModaWindow } from '@/app/providers/ProjectCardsProvider'
import { MySlider } from '../../UI/MySlider'
export const ModalWindow = () => {
    const [ModaWindow, setModaWindow, isOpen, setOpen] = useContext(ContextModaWindow)


    const openModal = (e) => {
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
                    <div onClickCapture={openModal} className={`${s.overlay} modalOverlay`}>
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
