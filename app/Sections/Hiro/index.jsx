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
import { InputPhoneMask } from '@/app/components/UI/InputPhoneMask'



export const HiroBlock = () => {
    const [message, setMessage] = useState('')
    const [value, setValue] = useState('')
    const [currency, setCurrency] = useState('')
    const [phone, setPhone] = useState('')
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
                {/* тип сайта */}
                <CSelect options={typeSitesOptions} setOption={setTypeSite} defaultText='Выбрать' textLabel='Тип сайта' />
                {/* бюджет */}
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

                {/* номер телефона */}


                <InputPhoneMask
                    placeholder={'89501081773'}
                    labelText={"Ваш номер телефона"}
                    setPhone={setPhone}
                />




                {/* кнопка */}
                <MyButton
                    onClick={() => {
                        setMessage(`Данные отправлены`)
                        setTimeout(() => {
                            setCurrency('')
                            setPhone('')
                            setTypeSite('')
                            setMessage('')
                        }, 3000)

                    }}>Отправить</MyButton>

                {/* все данные */}

                {
                    !message ?
                        (currency || typeSite || phone) && (
                            <div style={{ width: '100%' }}>
                                <br />
                                <div>Тип сайта: <span>{typeSite || 'Не выбран'}</span></div>
                                <br />
                                <div>Бюджет: <span>{currency || 0}</span></div>
                                <br />
                                <div>Телефон: <span>{phone || "Нет телефона"}</span></div>

                            </div>
                        ) :
                        <span>{message}</span>


                }
            </MyForm>




        </section>
    )
}