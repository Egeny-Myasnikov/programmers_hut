'use client'

import { useEffect, useState } from "react"
import { MyField } from "../MyField"

export const InputPhoneMask = ({ setErrorPhone, phone, setPhone, labelText, placeholder }) => {
    const ERROR_MESSAGE = "Мало цифр..."
    const [value, setValue] = useState('')

    useEffect(() => {
        if (phone === '') setValue('')
    }, [phone])


    const getInputValues = input => input.value.replace(/\D/g, "")

    const onPhoneInput = (e) => {
        let input = e.target,
            inputNumbersValue = getInputValues(input),
            formatedInputValue = "",
            selectionStart = input.selectionStart;
        if (!inputNumbersValue) {
            return (input.value = "")
        }
        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue
            }
            return
        }
        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            //russian
            if (inputNumbersValue[0] === "9") {
                inputNumbersValue = "7" + inputNumbersValue
            }
            let firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
            formatedInputValue = firstSymbols + " "
            if (inputNumbersValue.length > 1) {
                formatedInputValue += "(" + inputNumbersValue.substring(1, 4)
            }
            if (inputNumbersValue.length >= 5) {
                formatedInputValue += ") " + inputNumbersValue.substring(4, 7)
            }
            if (inputNumbersValue.length >= 8) {
                formatedInputValue += "-" + inputNumbersValue.substring(7, 9)
            }
            if (inputNumbersValue.length >= 10) {
                formatedInputValue += "-" + inputNumbersValue.substring(9, 11)
            }
        } else {
            //not russian
            formatedInputValue = "+7" + inputNumbersValue.substring(0, 0)
        }
        input.value = formatedInputValue
    }

    const onPhoneKeyDown = (e) => {
        const input = e.target
        if (e.key === 'Backspace' && getInputValues(input).length == 1) {
            input.value = ""
        }
    }
    const onPhonePaste = (e) => {
        const pasted = e.clipboardData || window.clipboardData
        const input = e.target
        const inputNumbersValue = getInputValues(input)
        if (pasted) {
            const pastedText = pasted.getData("Text")
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue
            }
        }
    }
    const validate = () => {

        if ((value[0] === "+" || value.length < 17) && (value[0] === "8" || value.length < 18)) {
            setPhone(ERROR_MESSAGE)
            setErrorPhone(true)
        } else {
            setPhone(value)
            setErrorPhone(false)
        }
    }

    return (
        <MyField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={validate}
            onInput={onPhoneInput}
            onKeyDown={onPhoneKeyDown}
            onPaste={onPhonePaste}
            labelText={labelText}
            placeholder={placeholder}
        />
    )

}