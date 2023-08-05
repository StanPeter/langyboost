import InputWrapper from 'components/hoc/InputWrapper/InputWrapper';
import TranslateText from 'components/hoc/TranslateText';
import React, { SetStateAction, useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import globalClasses from 'styles/globalClasses.module.scss';
import { TInputType, TInputUsecase } from 'ts/types';
import styles from './input.module.scss';

interface IInputProps {
    name?: string;
    text?: string;
    onClick?: () => void;
    styleInput?: object;
    classes?: string;
    value?: any;
    type: TInputType;
    onChange?: (d: any) => SetStateAction<any>;
    placeholder?: string;
    withoutLabel?: boolean;
    register?: UseFormRegisterReturn;
    ref?: HTMLInputElement;
    validationMessage?: string;
    whiteText?: boolean;
    useCase?: TInputUsecase;
}

const Input: React.FC<IInputProps> = ({
    name,
    text,
    styleInput,
    value,
    onChange,
    type,
    placeholder,
    withoutLabel = false,
    register,
    ref,
    classes,
    validationMessage,
    useCase = 'form',
}) => {
    const [isToutched, setIsTouched] = useState(false);

    // whether its been filled/clicked on
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
        <InputWrapper validationMessage={validationMessage} useCase={useCase} classes={classes}>
            {!withoutLabel && (
                <div className={`${useCase === 'form' ? globalClasses.formLabel : globalClasses.filterLabel}`}>
                    <label style={styleInput} htmlFor={register?.name || name}>
                        <TranslateText>{text || ''}</TranslateText>
                    </label>
                </div>
            )}
            <input
                ref={onRef}
                onFocus={onFocus}
                placeholder={placeholder}
                onBlur={onBlur}
                className={`${withoutLabel ? styles.withoutLabel : ''} ${
                    validationMessage ? styles.invalidInput : ''
                } ${isToutched ? styles.touched : ''} `}
                type={type}
                value={value}
                onChange={onChangeHandler}
                name={register?.name || name}
            />
        </InputWrapper>
    );
};

export default Input;
