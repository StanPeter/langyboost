import { Box, styled } from '@mui/material';
import React from 'react';
import { TInputUsecase } from 'ts/types';

const StyledInputWrapper = styled(Box)<{ $isInvalid: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.8rem 0;
    min-height: 2.5rem;
    border-radius: 1rem;
    width: 100%;
    margin-bottom: ${({ $isInvalid }) => ($isInvalid ? '0' : '0.8rem')};
`;

const StyledInput = styled(Box)<{ $isFormInput: boolean }>`
    width: ${({ $isFormInput }) => ($isFormInput ? '100%' : '70%')};
    display: ${({ $isFormInput }) => ($isFormInput ? 'flex' : 'unset')};
`;

interface IInputWrapper {
    children: React.ReactNode;
    validationMessage?: string;
    classes?: string;
    useCase?: TInputUsecase;
}

const InputWrapper: React.FC<IInputWrapper> = ({ children, validationMessage, classes, useCase = 'form' }) => {
    return (
        <StyledInputWrapper $isInvalid={validationMessage ? true : false}>
            <StyledInput $isFormInput={useCase === 'form'}>{children}</StyledInput>
            {validationMessage ? <p className={'validationMessage'}>{validationMessage}</p> : null}
        </StyledInputWrapper>
    );
};

export default InputWrapper;
