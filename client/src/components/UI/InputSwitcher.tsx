import React, { SetStateAction } from 'react';
import { MultiselectItem } from 'ts/interfaces';
import { InputTypes } from 'ts/types';

interface InputProps {
    name: string;
    type: InputTypes;
    placeholder?: string;
    dataOfMultiselect?: MultiselectItem[];
    useCase?: 'filter' | 'form';
    onClick?: () => void;
    valueOfButton?: string;
    styleInput?: object;
    value?: any;
    onChange?: (d: any) => SetStateAction<any>;
}

const InputSwitcher: React.FC<InputProps> = ({
    name,
    type,
    placeholder,
    dataOfMultiselect = [],
    useCase = 'form',
    onClick = () => console.log('no on clicked was passed!'),
    valueOfButton = ' ',
    styleInput,
    value,
    onChange
}) => {
    //maybe won't be neccesary later on
    // const inputClass = useCase === "form" ? inputStyles.formItem : inputStyles.filterItem;

    switch (type) {
        default:
            alert('No valid type was received');
            return null;
    }
};

export default InputSwitcher;
