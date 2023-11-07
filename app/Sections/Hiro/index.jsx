// import { MyForm } from '@/UI/MyForm'
'use client'
import MyForm from '@/app/components/UI/MyForm'
import s from './style.module.css'
import { CSelect } from '@/app/components/UI/CSelect'
import { MyField } from '@/app/components/UI/MyField'
import { MyButton } from '@/app/components/UI/MyButton'
import { typeSites } from '@/app/LocalStore/typeSites'
import { Greeting } from '@/app/components/parts/Greeting'
import { formatToRU } from '@/app/helpers/currency.helper'
import { useRef, useState } from 'react'
import { InputPhoneMask } from '@/app/components/UI/InputPhoneMask'



export const HiroBlock = () => {
    const TIMING = 3000
    const formRef = useRef(null)
    const [message, setMessage] = useState('')
    const [isErrorMessage, setIsErrorMessage] = useState(true)
    const [value, setValue] = useState('')
    const [currency, setCurrency] = useState('')
    const [phone, setPhone] = useState('')
    const [errorPhone, setErrorPhone] = useState(false)
    const [typeSite, setTypeSite] = useState('')
    const typeSitesOptions = typeSites

    const sendData = () => {

        if (typeSite === '') {
            setMessage('Выберете тип сайта!')
            setTimeout(() => {
                setMessage('')
            }, TIMING)
            return
        }
        if (currency === '' || currency === 'не число ₽') {
            setMessage('Укажите бюджет!')
            setTimeout(() => {
                setMessage('')
            }, TIMING)
            return
        }
        if (phone === '' || errorPhone) {
            setMessage('Укажите номер телефона!')
            setTimeout(() => {
                setMessage('')
            }, TIMING)
            return
        }
        setIsErrorMessage(false)
        setMessage('Данные отправлены! Ожидайте звонка.')

        setTimeout(() => {
            setTypeSite('')
            setCurrency('')
            setValue('')
            setPhone('')
            setMessage('')
            setIsErrorMessage(true)
        }, TIMING)
    }

    return (
        <section className={s.hiro}>

            <div className={s.title}> Приветствую <Greeting />!</div>

            <p className={s.title}>Какой сайт будем делать?</p>

            <MyForm ref={formRef}>
                {/* тип сайта */}
                <CSelect options={typeSitesOptions} typeSite={typeSite} setOption={setTypeSite} defaultText='Выбрать' textLabel='Тип сайта' />
                {/* бюджет */}
                <MyField
                    value={value}
                    onChange={e => setValue(e.target.value.replace(/\D/g, ""))}
                    onBlur={() => {
                        setValue(formatToRU.format(value))
                        setCurrency(formatToRU.format(value))
                    }}
                    onFocus={() => {
                        setValue('')
                    }}
                    placeholder={`Например 10000`}
                    type={'text'}
                    labelText={'Бюджет'}
                />

                {/* номер телефона */}


                <InputPhoneMask
                    placeholder={'89501081773'}
                    labelText={"Ваш номер телефона"}
                    setPhone={setPhone}
                    phone={phone}
                    setErrorPhone={setErrorPhone}
                />

                {/* кнопка */}
                <MyButton
                    onClick={sendData}>Отправить</MyButton>

                {/* все данные */}

                {
                    !message ?
                        (currency || typeSite || phone) && (
                            <div style={{ width: '100%' }}>
                                <br />
                                <div>Тип сайта: <span className={s.options}>{typeSite || 'Не выбран'}</span></div>
                                <br />
                                <div>Бюджет: <span className={s.options}>{currency || 0}</span></div>
                                <br />
                                <div>Телефон: <span className={s.options}>{phone || "Нет телефона"}</span></div>
                            </div>
                        ) :
                        <span style={{ '--timing': `${TIMING}ms` }} className={`${s.message} ${isErrorMessage ? s.messageError : s.messageAllowed} `}>{message}</span>


                }
            </MyForm>



        </section>
    )
}