import InputWrapper from 'components/hoc/InputWrapper';
import TranslateText from 'components/hoc/TranslateText';
import React, { FormEvent } from 'react';
import { TInputUsecase } from 'ts/types';
import Button from '../Button';
import styles from './buttonSelect.module.scss';

interface ButtonSelectProps {
    text: string;
    type: 'button' | 'image';
    value: string; //title for the button or the image src name
    onClick?: Function;
    styleInput?: object;
    useCase?: TInputUsecase;
    withoutLabel?: boolean;
}

const ButtonSelect: React.FC<ButtonSelectProps> = ({
    value,
    text,
    type,
    onClick,
    styleInput,
    useCase,
    withoutLabel
}) => {
    const finalValue =
        type === 'button' ? (
            <Button
                useCase="small"
                text={value}
                onClick={(e: FormEvent) => {
                    e.preventDefault();
                    if (onClick) onClick();
                }}
            />
        ) : (
            <div>
                <img alt="" src={value} />
            </div>
        );

    return (
        <InputWrapper classes={styles.wrapper} useCase={useCase}>
            {!withoutLabel && (
                <label className="formLabel" htmlFor="">
                    <TranslateText>{text}</TranslateText>
                </label>
            )}

            <div className={`${styles.multiselectInput} ${styles.formType} ${styles.valueWrapper}`}>{finalValue}</div>
        </InputWrapper>
    );
};

export default ButtonSelect;
