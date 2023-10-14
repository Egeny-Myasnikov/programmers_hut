'use client'
import { useState, useEffect, useRef } from "react"
import s from "./style.module.css"
import { SVGSprite } from "../SVGSprite"

const OptionEl = (props) => {
    const {
        option: { value, title },
        onClick
    } = props
    const optionRef = useRef(null)

    const handleClick = (clickedValue) => () => {
        onClick(clickedValue)
    }

    useEffect(() => {
        const option = optionRef.current
        if (!option) return
        const handleEnterKeyDown = (event) => {
            if (document.activeElement === option && event.key === "Enter") {
                onClick(value)
            }
        }

        option.addEventListener("keydown", handleEnterKeyDown)
        return () => {
            option.removeEventListener("keydown", handleEnterKeyDown)
        }
    }, [value, onClick])

    return (
        <li
            className={s.option}
            value={value}
            onClick={handleClick(value)}
            tabIndex={0}
            data-testid={`select-option-${value}`}
            ref={optionRef}
        >
            {title}
        </li>
    )
}

export const MySelect = (props) => {
    const {
        mode = "rows",
        options,
        placeholder,
        status = "default",
        selected,
        onChange,
        onClose
    } = props
    const [isOpen, setIsOpen] = useState(false)
    const rootRef = useRef(null)
    const placeholderRef = useRef(null)

    useEffect(() => {
        const handleClick = (event) => {
            const { target } = event
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                isOpen && onClose?.();
                setIsOpen(false);
            }
        }

        window.addEventListener("click", handleClick)

        return () => {
            window.removeEventListener("click", handleClick)
        };
    }, [onClose])

    useEffect(() => {
        const placeholderEl = placeholderRef.current
        if (!placeholderEl) return

        const handleEnterKeyDown = (event) => {
            if (event.key === "Enter") {
                setIsOpen((prev) => !prev)
            }
        }
        placeholderEl.addEventListener("keydown", handleEnterKeyDown);

        return () => {
            placeholderEl.removeEventListener("keydown", handleEnterKeyDown);
        }
    }, [])

    const handleOptionClick = (value) => {
        setIsOpen(false)
        onChange?.(value)
    };
    const handlePlaceHolderClick = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <div
            className={s.selectWrapper}
            ref={rootRef}
            data-is-active={isOpen}
            data-mode={mode}
            data-testid="selectWrapper"
        >
            <div className={s.arrow}>
                <SVGSprite id='arrowDown' />
            </div>
            <div
                className={s.placeholder}
                data-status={status}
                data-selected={!!selected?.value}
                onClick={handlePlaceHolderClick}
                role="button"
                tabIndex={0}
                ref={placeholderRef}
            >
                {selected?.title || placeholder}
            </div>
            {isOpen && (
                <ul className={s.select} data-testid="selectDropdown">
                    {options.map((option) => (
                        <OptionEl
                            key={option.value}
                            option={option}
                            onClick={handleOptionClick}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}