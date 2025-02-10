import { Input as MuiInput, styled } from '@mui/material';
import InputWrapper from 'components/hoc/InputWrapper/InputWrapper';
import TranslateText from 'components/hoc/TranslateText';
import React, { useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { TInputType, TInputUsecase } from 'ts/types';

const StyledMuiInput = styled(MuiInput)<{ isTouched: boolean; isInvalid: boolean }>`
    width: 100%;
    border-right-width: 0;
    border: 2px solid ${({ isInvalid }) => (isInvalid ? 'var(--color-invalid-dark)' : 'var(--color-dark-accent)')};
    background-color: ${({ isTouched, isInvalid }) =>
        isInvalid ? (isTouched ? 'var(--color-invalid-light)' : 'unset') : 'var(--color-light-accent)'};
    font-style: normal;
    outline: none;
`;

interface IInputProps {
    name?: string;
    text?: string;
    onClick?: () => void;
    styleInput?: object;
    classes?: string;
    value?: any;
    type: TInputType;
    onChange?: (d: any) => void;
    placeholder?: string;
    withoutLabel?: boolean;
    register?: UseFormRegisterReturn;
    validationMessage?: string;
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
    classes,
    validationMessage,
    useCase = 'form',
}) => {
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        if (!isTouched && (validationMessage || value)) setIsTouched(true);
    }, [validationMessage, value, isTouched]);

    const onFocus = () => setIsTouched(true);

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        register?.onBlur(e);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        register?.onChange(e);
        onChange?.(e.target.value);
    };

    return (
        <InputWrapper validationMessage={validationMessage} useCase={useCase} classes={classes}>
            {!withoutLabel && (
                <div className={`${useCase === 'form' ? 'formLabel' : 'filterLabel'}`}>
                    <label style={styleInput} htmlFor={register?.name || name}>
                        <TranslateText>{text || ''}</TranslateText>
                    </label>
                </div>
            )}

            <StyledMuiInput
                onFocus={onFocus}
                placeholder={placeholder}
                onBlur={onBlur}
                isTouched={isTouched}
                isInvalid={!!validationMessage}
                type={type}
                value={value}
                onChange={onChangeHandler}
                name={register?.name || name}
            />
        </InputWrapper>
    );
};

export default Input;
