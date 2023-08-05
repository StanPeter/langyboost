import InputWrapper from 'components/hoc/InputWrapper/InputWrapper';
import TranslateText from 'components/hoc/TranslateText';
import React, { SetStateAction, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import globalClasses from 'styles/globalClasses.module.scss';
import { MultiselectItem } from 'ts/interfaces';
import { TInputUsecase } from 'ts/types';
import styles from './select.module.scss';

interface MultiselectProps {
    text: string;
    data: MultiselectItem[];
    value: string[];
    useCase: TInputUsecase; //whether is used inside a filter or a form
    type: 'multiselect' | 'singleselect';
    styleInput?: object;
    onChange?: (d: any) => SetStateAction<any>;
    withoutLabel?: boolean;
}

const Select: React.FC<MultiselectProps> = ({
    data,
    text,
    useCase,
    styleInput,
    value,
    type,
    onChange = () => {},
    withoutLabel
}) => {
    /* HOOKS */
    const [multiselectValue, setMultiselectValue] = useState<string[]>([]);
    const [dropdownHidden, setDropdownHidden] = useState(true); // whther its hidden or not

    /* set initial value */
    useEffect(() => {
        if (value) setMultiselectValue(value);
    }, [value]);

    /* HANDLERS */
    const addItemHandler = (itemVal: string) => {
        if (multiselectValue.includes(itemVal)) return;

        if (type === 'multiselect') {
            const newValue = [...multiselectValue, itemVal];
            setMultiselectValue(newValue);
            onChange(newValue);
        } else {
            setMultiselectValue([itemVal]);
            onChange(itemVal);
        }
    };

    const deleteItemHandler = (itemVal: string) => {
        if (type === 'multiselect') {
            const newValue = multiselectValue.filter(value => value !== itemVal);
            setMultiselectValue(newValue);
            onChange(newValue);
        } else {
            setMultiselectValue([]);
            onChange(null);
        }
    };

    /* ADDING STYLES */
    const addTypeClass = (inputClass: string) =>
        `${inputClass} ${useCase === 'form' ? styles.formType : styles.filterType}`;

    // const inputBorderRadius = () => {
    //     if (dropdownHidden) return "0 5px 5px 0"; //dropdown not shown
    //     else if (useCase === "filter") return "5px 5px 0 0"; //dropdown hidden and filter case
    //     return "0 5px 5px 0"; //dropdown hidden and form case
    // };

    const valueBuilder = (el: MultiselectItem) => {
        if (el.imgSrc && type === 'singleselect')
            return (
                <React.Fragment>
                    {el.name} <img src={el.imgSrc} alt="" />
                </React.Fragment>
            );
        else if (el.imgSrc) return <img src={el.imgSrc} alt="" />;
        return el.name;
    };

    return (
        <InputWrapper validationMessage="" useCase={useCase}>
            <div className={styles.container}>
                <div
                    className={styles.inputWrapper}
                    // style={{ background: !dropdownHidden && useCase === "form" ? "#daffe9" : undefined }}
                >
                    {!withoutLabel && (
                        <label
                            style={styleInput}
                            className={`${
                                useCase === 'filter' ? globalClasses.filterLabel : globalClasses.formLabel
                            } ${addTypeClass('')}`}
                            htmlFor=""
                        >
                            <TranslateText>{text}</TranslateText>
                        </label>
                    )}
                    <div
                        // onClick={() => setDropdownHidden(!dropdownHidden)}
                        // style={{ borderRadius: inputBorderRadius() }}
                        className={`${addTypeClass(styles.input)} ${!dropdownHidden ? styles.dropdownShown : ''}`}
                    >
                        <div className={styles.valueWrapper}>
                            {data
                                .filter(el => multiselectValue.includes(el.value))
                                .map((el, i) => (
                                    <div
                                        className={styles.value}
                                        key={i}
                                        id={el.value}
                                        onClick={e => deleteItemHandler(e.currentTarget.id)}
                                    >
                                        {valueBuilder(el)}
                                    </div>
                                ))}
                        </div>
                        <div className={styles.dropdownIcon} onClick={() => setDropdownHidden(!dropdownHidden)}>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>
                <div className={`${styles.dropdown} ${addTypeClass('')} ${!dropdownHidden ? styles.dropdownOpen : ''}`}>
                    {data.map((el, i) => {
                        if (!el.name && !el.imgSrc) {
                            console.log('No parameter for multiselect was passed!');
                            return null;
                        }

                        return (
                            <div
                                key={i}
                                onClick={d => {
                                    if (type === 'singleselect') setDropdownHidden(true);
                                    addItemHandler(d.currentTarget.id);
                                }}
                                className={styles.dropdownItemWrapper}
                                id={el.value}
                            >
                                <li className={styles.dropdownItem}>
                                    <div>
                                        {el.imgSrc ? <img src={el.imgSrc} alt="" /> : null}
                                        {el.name ? <p>{el.name}</p> : null}
                                    </div>
                                </li>
                            </div>
                        );
                    })}
                </div>
            </div>
        </InputWrapper>
    );
};

export default Select;
