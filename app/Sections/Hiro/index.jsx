// import { MyForm } from '@/UI/MyForm'
import { MyForm } from '@/app/components/UI/MyForm'
import s from './style.module.css'
import { CSelect } from '@/app/components/UI/CSelect'
import { MyField } from '@/app/components/UI/MyField'
import { MyButton } from '@/app/components/UI/MyButton'
import { typeSites } from '@/app/LocalStore/typeSites'



export const HiroBlock = () => {
    const typeSitesOptions = typeSites

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
                <CSelect options={typeSitesOptions} defaultText='Выбрать' textLabel='Тип сайта' />
                <MyField placeholder={'Например 10000'} type={'number'} labelText={'Бюджет'} />
                <MyButton>Кнопка</MyButton>
            </MyForm>




        </section>
    )
}