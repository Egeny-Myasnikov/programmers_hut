import { Logo } from '@/UI/Logo'
import s from './style.module.css'
export const Footer = () => {
    return (
        <footer className={s.footer}>
            <Logo className={s.logoTitle} />
        </footer>
    )
}