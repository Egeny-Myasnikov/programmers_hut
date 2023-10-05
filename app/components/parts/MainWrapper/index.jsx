import s from './style.module.css'

export const MainWrapper = ({ children }) => {
    return (
        <div className={s.mainWrapper}>
            {children}
        </div>
    )
}
