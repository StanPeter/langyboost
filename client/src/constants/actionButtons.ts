import { NavigateFunction, Params } from 'react-router-dom';
import { AnyAction, Dispatch } from 'redux';
import { toggleDialog } from 'store/dialogsSlice';
import { EPermission } from 'ts/enums';

/* action buttons for each page (in case there will be different actions for each page, for now its just page switcher) */

interface ICardDetailActionButton {
    title: string;
    onClick: (dispatch: Dispatch<AnyAction>, navigate: NavigateFunction, navbarDialogsData: Params) => void;
    waitToLoad?: boolean; // whether the component can be called without the main data being load
    permission?: EPermission;
}

export const CARD_DETAIL_BUTTONS: ICardDetailActionButton[] = [
    {
        title: 'CARD_REPLACEMENT',
        onClick: (dispatch, _navigate, data) =>
            dispatch(
                toggleDialog({
                    dialogData: data,
                    dialogState: true,
                    dialogName: 'cardReplacement',
                }),
            ),
        waitToLoad: true,
        permission: EPermission.CARD_REPLACEMENT,
    },
    {
        title: 'WALLET_AMOUNT_DEB',
        onClick: (dispatch, _navigate, data) =>
            dispatch(
                toggleDialog({
                    dialogData: data,
                    dialogState: true,
                    dialogName: 'walletAmountDebit',
                }),
            ),
        waitToLoad: true,
        permission: EPermission.MANUAL_DEBIT,
    },
    {
        title: 'WALLET_TOP_UP',
        onClick: (dispatch, _navigate, data) =>
            dispatch(
                toggleDialog({
                    dialogData: data,
                    dialogState: true,
                    dialogName: 'walletTopUp',
                }),
            ),
        waitToLoad: true,
        permission: EPermission.MANUAL_TOP_UP,
    },
    {
        title: 'WALLET_STATUS_CHANGE',
        onClick: (dispatch, _navigate, data) =>
            dispatch(
                toggleDialog({
                    dialogData: data,
                    dialogState: true,
                    dialogName: 'walletStatus',
                }),
            ),
        waitToLoad: true,
        permission: EPermission.WALLET_STATUS_CHANGE,
    },
    {
        title: 'CARD_STATUS_CHANGE',
        onClick: (dispatch, _navigate, data) =>
            dispatch(
                toggleDialog({
                    dialogData: data,
                    dialogState: true,
                    dialogName: 'cardStatusChange',
                }),
            ),
        waitToLoad: true,
        permission: EPermission.CARD_STATUS_CHANGE,
    },
    {
        title: 'RESET_PIN',
        onClick: (dispatch, _navigate, data) =>
            dispatch(
                toggleDialog({
                    dialogData: data,
                    dialogState: true,
                    dialogName: 'resetPIN',
                }),
            ),
        waitToLoad: true,
        permission: EPermission.RESET_CARD_PIN_ATTEMPT,
    },
    {
        title: 'BACK',
        onClick: (_dispatch, navigate) => {
            navigate(-1);
        },
        waitToLoad: false,
    },
];
