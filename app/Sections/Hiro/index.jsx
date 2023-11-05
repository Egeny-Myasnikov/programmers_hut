// import { MyForm } from '@/UI/MyForm'
'use client'
import { MyForm } from '@/app/components/UI/MyForm'
import s from './style.module.css'
import { CSelect } from '@/app/components/UI/CSelect'
import { MyField } from '@/app/components/UI/MyField'
import { MyButton } from '@/app/components/UI/MyButton'
import { typeSites } from '@/app/LocalStore/typeSites'
import { Greeting } from '@/app/components/parts/Greeting'
import { formatToRU } from '@/app/helpers/currency.helper'
import { useState } from 'react'



export const HiroBlock = () => {
    const [value, setValue] = useState('')
    const [currency, setCurrency] = useState('')
    const [typeSite, setTypeSite] = useState('')
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
                <CSelect options={typeSitesOptions} setOption={setTypeSite} defaultText='Выбрать' textLabel='Тип сайта' />
                <MyField
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onBlur={() => {
                        setValue(formatToRU.format(value))
                        setCurrency(formatToRU.format(value))
                    }}
                    onFocus={() => {
                        setValue('')
                    }}
                    placeholder={`Например ${formatToRU.format('10000')}`}
                    type={'text'}
                    labelText={'Бюджет'}
                />
                {
                    (currency || typeSite) && (
                        <div>
                            <br />
                            <div>Тип сайта: {typeSite || 'Не выбран'}</div>
                            <br />
                            <div>Бюджет: {currency || 0}</div>
                            <br />
                            <br />
                        </div>
                    )

                }
                <MyButton onClick={() => {

                    setTypeSite(typeSite)
                }}>Отправить</MyButton>


            </MyForm>




        </section>
    )
}