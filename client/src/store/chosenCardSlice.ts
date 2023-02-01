// TS and eslint are not accurate with state parameter, therefore I disabled them for Slice files
// @ts-nocheck
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChosenCardProps {
    uniqueCardId: string;
    uniqueWalletId: string;
    uniqueAccountId: string;
    uniqueConsumerId: string;
}

// used for global searched card data storage
const slice = createSlice({
    name: 'header',
    initialState: {
        uniqueCardId: '',
        uniqueWalletId: '',
        uniqueAccountId: '',
        uniqueConsumerId: ''
    },
    reducers: {
        changeState: (state, action: PayloadAction<ChosenCardProps>) => {
            const newData = { ...state, ...action.payload };

            return newData;
        }
    }
});

// actions
export const { changeState } = slice.actions;

export default slice;
