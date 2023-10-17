'use client'
import { MyForm } from '@/app/components/UI/MyForm'
import s from './style.module.css'
import { MyField } from '@/app/components/UI/MyField'
import { CSelect } from '@/app/components/UI/CSelect'
import { MyButton } from '@/app/components/UI/MyButton'


export const HiroBlock = () => {
    const options = ['Лендинг', 'Интернет магазин', 'Каталог', 'Одностраничный сайт']

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

            <MyForm>
                <MyField placeholder='Text' type='text' />
                <MyField placeholder='Text 2' type='text' />
                <CSelect options={options} defaultText='Выбрать' textLabel='Тип сайта' />
                <MyField labelText='Пароль' placeholder='Password' type='password' />
                <MyButton>Кнопка</MyButton>
            </MyForm>

        </section>
    )
}