import React from 'react';
import { TInputUsecase } from 'ts/types';
import styles from './inputWrapper.module.scss';


interface IInputWrapper {
    children: React.ReactNode;
    validationMessage?: string;
    classes?: string;
    useCase?: TInputUsecase;
}

const InputWrapper: React.FC<IInputWrapper> = ({ children, validationMessage, classes, useCase = 'form' }) => {
    return (
        <div className={`${styles.wrapper} ${validationMessage ? styles.invalid : ''}`}>
            <div className={`${classes} ${useCase === 'form' ? styles.formItem : styles.filterItem}`}>{children}</div>
            {validationMessage ? <p className={'validationMessage'}>{validationMessage}</p> : null}
        </div>
    );
};

export default InputWrapper;
