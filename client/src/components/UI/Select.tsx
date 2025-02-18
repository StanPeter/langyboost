import { Box, Chip, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import InputWrapper from 'components/hoc/InputWrapper';
import TranslateText from 'components/hoc/TranslateText';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MultiselectItem } from 'ts/interfaces';
import { TInputUsecase } from 'ts/types';

/* Component Props */
interface MultiselectProps {
    text: string;
    data: MultiselectItem[];
    value: string[];
    useCase: TInputUsecase;
    type: 'multiselect' | 'singleselect';
    styleInput?: object;
    onChange?: (d: any) => void;
    withoutLabel?: boolean;
}

const SelectComponent: React.FC<MultiselectProps> = ({
    data,
    text,
    useCase,
    value,
    type,
    onChange = () => {},
    withoutLabel,
}) => {
    const [selectedValue, setSelectedValue] = useState<string[]>(value || []);

    useEffect(() => {
        setSelectedValue(value || []);
    }, [value]);

    const handleSelectChange = (event: any) => {
        const selected = event.target.value;
        if (type === 'multiselect') {
            setSelectedValue(selected);
            onChange(selected);
        } else {
            setSelectedValue([selected]);
            onChange(selected);
        }
    };

    const handleDeleteItem = (itemVal: string) => {
        const newValue = type === 'multiselect' ? selectedValue.filter(val => val !== itemVal) : [];
        setSelectedValue(newValue);
        onChange(type === 'singleselect' ? null : newValue);
    };

    return (
        <InputWrapper validationMessage="" useCase={useCase}>
            <FormControl fullWidth variant="outlined" sx={{ mt: 1 }}>
                {!withoutLabel && <InputLabel>{<TranslateText>{text}</TranslateText>}</InputLabel>}
                <Select
                    multiple={type === 'multiselect'}
                    value={type === 'multiselect' ? selectedValue : selectedValue[0] || ''}
                    onChange={handleSelectChange}
                    label={withoutLabel ? undefined : <TranslateText>{text}</TranslateText>}
                    renderValue={selected => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {(Array.isArray(selected) ? selected : [selected]).map(val => {
                                const item = data.find(el => el.value === val);
                                return (
                                    <Chip
                                        key={val}
                                        label={item ? item.name : val}
                                        onDelete={() => handleDeleteItem(val)}
                                        sx={{ margin: '2px' }}
                                    />
                                );
                            })}
                        </Box>
                    )}
                    sx={{
                        backgroundColor: useCase === 'filter' ? 'lightgray' : 'white',
                        borderRadius: 2,
                    }}
                    IconComponent={() => <IoIosArrowDown size={20} style={{ marginRight: 10 }} />}
                >
                    {data.map(el => (
                        <MenuItem key={el.value} value={el.value}>
                            {el.imgSrc && (
                                <Image
                                    src={el.imgSrc}
                                    alt=""
                                    style={{ marginRight: 10, width: 24, height: 24 }}
                                    width={24}
                                    height={24}
                                />
                            )}
                            <Typography>{el.name}</Typography>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </InputWrapper>
    );
};

export default SelectComponent;
