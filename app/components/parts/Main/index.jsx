import s from './style.module.css'

export const Main = ({ children }) => {
    return (
        <main className={s.main}>
            {children}
        </main>
    )
}
