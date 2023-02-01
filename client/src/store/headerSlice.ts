// TS and eslint are not accurate with state parameter, therefore I disabled them for Slice files
// @ts-nocheck
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HeaderStateProps {
    cardExpiryDate: number;
    clientId: string;
    cardId: string;
    clientName: string;
    productName: string;
    domainRestrictions: string[];
    cardStatus: 'A' | 'B' | 'E' | 'S' | 'U' | 'X';
    accountBalance: string;
    blockingReason: string;
}

// header slice is use mainly within the header section
const slice = createSlice({
    name: 'header',
    initialState: {
        cardExpiryDate: '',
        clientId: '',
        cardId: '',
        clientName: '',
        productName: '',
        domainRestrictions: '',
        cardStatus: '' as 'A' | 'B' | 'E' | 'S' | 'U' | 'X',
        accountBalance: '',
        blockingReason: ''
    },
    reducers: {
        changeState: (state, action: PayloadAction<HeaderStateProps>) => {
            const newData = { ...state, ...action.payload };

            if (action.payload.cardExpiryDate) {
                newData.cardExpiryDate =
                    newData.cardExpiryDate?.toString().slice(0, 2) + '/' + newData.cardExpiryDate?.toString().slice(2);
            }

            if (action.payload.domainRestrictions) newData.domainRestrictions = newData.domainRestrictions.join(', ');

            if (action.payload.cardStatus)
                newData.cardStatus = newData.cardStatus.slice(newData.cardStatus.search(':') + 1);

            return newData;
        }
    }
});

// actions
export const { changeState } = slice.actions;

export default slice;
