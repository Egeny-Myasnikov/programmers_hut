'use client'
import s from './style.module.css'


export const HiroBlock = () => {
    return (
        <section className={s.hiro}>
            <p className={s.title}>Привет!</p>
            <p className={s.title}>Меня зовут Евгений</p>
            <div className={s.title}>Я
                <h3 className={s.title}> фрилансер</h3>
                <h2 className={s.title}> веб разработчик</h2>
            </div>
            <h1 className={s.title}>Делаю сайты</h1>
            <p className={s.title}>Какой сайт будем делать?</p>
        </section>
    )
}