import { styled } from '@mui/material';
import React from 'react';
import { TSeparatorUseCase } from 'ts/types';

const StyledSeparator = styled('hr')(() => ({
    width: '80%',
    margin: '2rem 0',
    border: '1px solid var(--color-dark-accent)',
}));

interface ISeparator {
    style?: object;
    useCase: TSeparatorUseCase;
    classes?: string;
}

const Separator: React.FC<ISeparator> = ({ style, useCase }) => {
    return <StyledSeparator style={style} />;
};

export default Separator;
