import InputWrapper from "components/hoc/InputWrapper/InputWrapper";
import React, { SetStateAction, useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./input.module.scss";

interface IInputProps {
    name?: string;
    onClick?: () => void;
    styleInput?: object;
    value?: any;
    type: "text" | "date" | "email" | "password";
    onChange?: (d: any) => SetStateAction<any>;
    placeholder?: string;
    withoutLabel?: boolean;
    register?: UseFormRegisterReturn;
    ref?: HTMLInputElement;
    validationMessage?: string;
    whiteText?: boolean;
}

const Input: React.FC<IInputProps> = ({
    name,
    styleInput,
    value,
    onChange,
    type,
    placeholder,
    withoutLabel = false,
    register,
    ref,
    validationMessage
}) => {
    const [isToutched, setIsTouched] = useState(false);

    useEffect(() => {
        if (!isToutched && (validationMessage || value)) setIsTouched(true);
    }, [validationMessage, value, isToutched]);

    // handlers
    const onFocus = () => {
        setIsTouched(true);
    };
    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (register) register.onBlur(e);
    };
    const onRef = (el: HTMLInputElement) => {
        if (register) register.ref(el);
        if (ref) ref = el;
    };
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (register) register.onChange(e);
        if (onChange) onChange(e.target.value);
    };

    return (
        <InputWrapper validationMessage={validationMessage}>
            {!withoutLabel && (
                <div className={styles.formLabel}>
                    <label style={styleInput} htmlFor={name}>
                        {name}
                    </label>
                </div>
            )}
            <input
                ref={onRef}
                onFocus={onFocus}
                placeholder={placeholder}
                onBlur={onBlur}
                className={`${withoutLabel ? styles.withoutLabel : ""} ${
                    validationMessage ? styles.invalidInput : ""
                } ${isToutched ? styles.touched : ""} `}
                type={type}
                value={value}
                onChange={onChangeHandler}
                name={register?.name || name}
            />
        </InputWrapper>
    );
};

export default Input;
