// TS and eslint are not accurate with state parameter, therefore I disabled them for Slice files
// @ts-nocheck
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DialogNames } from 'ts/types';

interface ToggleDialogProps {
    dialogName: DialogNames;
    dialogState: boolean;
    dialogData: {};
}
// readyonly union mode -> unable to use array methods on it
// const options = ['walletStatus', 'cardReplacement'] as const;

// used for global dialog controlling -> menu dialogs and error
const slice = createSlice({
    name: 'dialog',
    initialState: {
        walletStatus: { isOpened: false, data: {} },
        walletTopUp: { isOpened: false, data: {} },
        walletAmountDebit: { isOpened: false, data: {} },
        cardReplacement: { isOpened: false, data: {} },
        resetPIN: { isOpened: false, data: {} },
        cardStatusChange: { isOpened: false, data: {} },
        errorDialog: { isOpened: false, data: {} }
    },
    reducers: {
        toggleDialog: (state, action: PayloadAction<ToggleDialogProps>) => {
            state[action.payload.dialogName] = {
                ...slice.getInitialState()[action.payload.dialogName],
                isOpened: action.payload.dialogState,
                data: action.payload.dialogData
            };
        },
        closeAllDialogs: state => {
            state = slice.getInitialState();
        }
    }
});

// actions
export const { toggleDialog } = slice.actions;

export default slice;
