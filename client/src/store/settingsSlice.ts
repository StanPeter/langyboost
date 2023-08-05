// TS and eslint are not accurate with state parameter, therefore I disabled them for Slice files
// @ts-nocheck
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// typescript
export interface IGlobalSettingsProps {
    language: string;
}

// used for global settings such as language or themes
const slice = createSlice({
    name: 'settings',
    initialState: {
        language: 'en',
    },
    reducers: {
        changeState: (state, action: PayloadAction<IGlobalSettingsProps>) => {
            const newData = { ...state, ...action.payload };

            return newData;
        },
    },
});

// actions
export const { changeState } = slice.actions;

export default slice;
