// import { MyForm } from '@/UI/MyForm'
import { MyForm } from '@/app/components/UI/MyForm'
import s from './style.module.css'
import { CSelect } from '@/app/components/UI/CSelect'
import { MyField } from '@/app/components/UI/MyField'
import { MyButton } from '@/app/components/UI/MyButton'
import { typeSites } from '@/app/LocalStore/typeSites'
import { Greeting } from '@/app/components/parts/Greeting'



export const HiroBlock = () => {
    const typeSitesOptions = typeSites

    return (
        <section className={s.hiro}>
            <br />
            <br />
            <br />
            <br />
            <div className={s.title}> Приветствую <Greeting />!</div>

            <br />
            <br />
            <br />
            <br />
            <p className={s.title}>Какой сайт будем делать?</p>


            <br />
            <br />
            <br />
            <br />

            <br />
            <br />
            <br />
            <br />
            <MyForm>
                <CSelect options={typeSitesOptions} defaultText='Выбрать' textLabel='Тип сайта' />
                <MyField placeholder={'Например 10000'} type={'number'} labelText={'Бюджет'} />
                <MyButton>Кнопка</MyButton>
            </MyForm>




        </section>
    )
}