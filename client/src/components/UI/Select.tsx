import { styled } from '@mui/material/styles';
import InputWrapper from 'components/hoc/InputWrapper';
import TranslateText from 'components/hoc/TranslateText';
import React, { SetStateAction, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MultiselectItem } from 'ts/interfaces';
import { TInputUsecase } from 'ts/types';

/* Styled Components */
const Container = styled('div')`
    width: 100%;
    &::after {
        clear: both;
        content: '';
        display: table;
    }
`;

const InputWrapperStyled = styled('div')`
    position: relative;
    display: flex;
    width: 100%;
    height: 2.5rem;
`;

const Input = styled('div')<{ useCase: TInputUsecase; dropdownHidden: boolean }>`
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    background: ${({ useCase }) => (useCase === 'filter' ? 'var(--color-light-accent)' : 'none')};
    border: ${({ useCase }) =>
        useCase === 'form' ? '1px solid var(--color-dark-accent)' : '2px solid var(--color-dark-accent)'};
    width: ${({ useCase }) => (useCase === 'form' ? '78%' : '70%')};
    max-width: ${({ useCase }) => (useCase === 'form' ? '78%' : '70%')};
    min-width: ${({ useCase }) => (useCase === 'form' ? '78%' : '70%')};
    border-radius: ${({ dropdownHidden }) =>
        dropdownHidden ? 'var(--margin-input)' : 'var(--margin-input) var(--margin-input) 0 0'};
    text-align: center;
`;

const ValueWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Value = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    cursor: pointer;

    img {
        margin-left: 0.5rem;
    }
`;

const DropdownIcon = styled('div')`
    position: absolute;
    right: 0;
    top: 0;
    padding: 1rem;
    cursor: pointer;
`;

const Dropdown = styled('div')<{ useCase: TInputUsecase; dropdownHidden: boolean }>`
    display: ${({ dropdownHidden }) => (dropdownHidden ? 'none' : 'flex')};
    opacity: ${({ dropdownHidden }) => (dropdownHidden ? '0' : '1')};
    flex-direction: column;
    background: var(--color-light-accent);
    border: 1px solid var(--color-dark-accent);
    border-radius: 0px 0px 2.3rem 2.3rem;
    align-items: center;
    max-height: 12rem;
    overflow-y: auto;
    width: ${({ useCase }) => (useCase === 'form' ? '78%' : '70%')};

    animation: ${({ dropdownHidden }) => (dropdownHidden ? 'none' : 'scaleZ 300ms ease-in-out forwards')};
    transform-origin: top center;

    @keyframes scaleZ {
        0% {
            transform: scaleY(0);
        }
        80% {
            transform: scaleY(1.2);
        }
        100% {
            transform: scaleY(1);
        }
    }
`;

const DropdownItemWrapper = styled('div')`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        color: #4f555a;
        font-size: 1.05rem;
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-dark-accent);
    }
`;

const DropdownItem = styled('li')`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 4px 12px;
    margin: 0px 4rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.3rem 0;
    }

    img {
        margin-right: 1rem;
        width: 1.8rem;
        height: 1.8rem;
    }
`;

/* Component Props */
interface MultiselectProps {
    text: string;
    data: MultiselectItem[];
    value: string[];
    useCase: TInputUsecase;
    type: 'multiselect' | 'singleselect';
    styleInput?: object;
    onChange?: (d: any) => SetStateAction<any>;
    withoutLabel?: boolean;
}

/* Component */
const Select: React.FC<MultiselectProps> = ({
    data,
    text,
    useCase,
    styleInput,
    value,
    type,
    onChange = () => {},
    withoutLabel,
}) => {
    /* HOOKS */
    const [multiselectValue, setMultiselectValue] = useState<string[]>([]);
    const [dropdownHidden, setDropdownHidden] = useState(true);

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
        const newValue = type === 'multiselect' ? multiselectValue.filter(val => val !== itemVal) : [];
        setMultiselectValue(newValue);
        onChange(type === 'singleselect' ? null : newValue);
    };

    const valueBuilder = (el: MultiselectItem) => (
        <>
            {el.name} {el.imgSrc && <img src={el.imgSrc} alt="" />}
        </>
    );

    return (
        <InputWrapper validationMessage="" useCase={useCase}>
            <Container>
                <InputWrapperStyled>
                    {!withoutLabel && (
                        <label style={styleInput} className={useCase === 'filter' ? 'filterLabel' : 'formLabel'}>
                            <TranslateText>{text}</TranslateText>
                        </label>
                    )}
                    <Input useCase={useCase} dropdownHidden={dropdownHidden}>
                        <ValueWrapper>
                            {data
                                .filter(el => multiselectValue.includes(el.value))
                                .map((el, i) => (
                                    <Value key={i} id={el.value} onClick={e => deleteItemHandler(e.currentTarget.id)}>
                                        {valueBuilder(el)}
                                    </Value>
                                ))}
                        </ValueWrapper>
                        <DropdownIcon onClick={() => setDropdownHidden(!dropdownHidden)}>
                            <IoIosArrowDown />
                        </DropdownIcon>
                    </Input>
                </InputWrapperStyled>
                <Dropdown useCase={useCase} dropdownHidden={dropdownHidden}>
                    {data.map((el, i) => (
                        <DropdownItemWrapper key={i} id={el.value} onClick={e => addItemHandler(e.currentTarget.id)}>
                            <DropdownItem>
                                {el.imgSrc && <img src={el.imgSrc} alt="" />}
                                {el.name && <p>{el.name}</p>}
                            </DropdownItem>
                        </DropdownItemWrapper>
                    ))}
                </Dropdown>
            </Container>
        </InputWrapper>
    );
};

export default Select;
