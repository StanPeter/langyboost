import { NavigateFunction, Params } from 'react-router-dom';
import { SignResponse } from 'ts/graphql/generated/apiCAM';
import { IHeaderItem } from 'ts/interfaces';
import Formatter from 'utils/formatter';
import Transformer from 'utils/transformer';
import { ROUTES } from './routeMap';

/* contains template for each table withint the app */

export const CARD_SEARCH_TABLE = (navigate: NavigateFunction) => [
    {
        headerName: 'CARD_ID',
        key: 'cardId',
        underlined: true,
        onFormat: (uniqueCardId: string) => Formatter.convertUniqueCartId(uniqueCardId, 'intoShort'),
        onClick: (_data: string, rowData: Params) => navigate(ROUTES.cardDetail(rowData.uniqueCardId || ''))
    },
    {
        headerName: 'CARD_STATUS',
        key: 'cardStatus'
    },
    {
        headerName: 'STATUS_UPDATED',
        key: 'dateTimeOfStatusUpdate',
        onFormat: (value: string) => (value ? Formatter.apiDateTimeToDateTime(value) : '')
    },
    {
        headerName: 'LAST_FOUR_DIGITS',
        key: 'lastFourDigits'
    },
    {
        headerName: 'CARD_EXPIRY_DATE',
        key: 'expiryDate',
        onFormat: (value: string) => Formatter.convertFourDigitsDate(value)
    },
    {
        headerName: 'HISTORY_OF_REQUESTS',
        key: 'historyOfRequests',
        defaultValue: 'request history',
        underlined: true,
        onClick: (_data: string, rowData: Params) => navigate(ROUTES.cardRequestHistory(rowData.uniqueCardId || ''))
    }
];

export const CARD_TRANSACTION_TABLE = (navigate: NavigateFunction): IHeaderItem[] => [
    {
        headerName: 'TRANSACTION_ID',
        key: 'uniqueTransactionId',
        underlined: true,
        onClick: (transactionId: string, rowData) =>
            navigate(ROUTES.cardTransactionDetail(rowData.uniqueCardId, transactionId))
    },
    {
        headerName: 'TRANSACTION_TYPE',
        key: 'transactionType',
        onFormat: value => Transformer.transform('transactionType', value, true)
    },
    {
        headerName: 'TRANSACTON_CODE',
        key: 'transactionCode'
    },
    {
        headerName: 'AMOUNT',
        key: 'transactionAmount',
        onFormat: (value, rowData) =>
            Formatter.getAmountBalance(
                'signAtBeginning',
                value,
                rowData.transactionCurrency,
                rowData.transactionExponent,
                rowData.transactionSign as SignResponse
            )
    },
    {
        headerName: 'OPERATION',
        key: 'transactionSign',
        onFormat: value => (value === 'C' ? 'Credit' : value === 'D' ? 'Debit' : '')
    },
    {
        headerName: 'MCC',
        key: 'merchantCategoryCode'
    },
    {
        headerName: 'MERCHANT_NAME',
        key: 'merchantName'
    },
    {
        headerName: 'MERCHANT_CITY',
        key: 'merchantCity'
    },
    {
        headerName: 'MERCHANT_COUNTRY',
        key: 'merchantCountry'
    },
    {
        headerName: 'AUTHORIZATION_DATE',
        key: 'authorizationDate',
        onFormat: (value: string) => (value ? Formatter.apiDateTimeToDateTime(value) : '')
    }
];

export const CARD_REQUEST_HISTORY_TABLE = (navigate: NavigateFunction, cardId: string, from: string) => [
    {
        headerName: 'REQUEST_ID',
        key: 'requestId',
        underlined: true,
        onClick: (historyId: string) => {
            return navigate(ROUTES.cardRequestHistoryDetail(cardId, historyId, `?from=${from}`)!);
        }
    },
    {
        headerName: 'REQUEST_TYPE',
        key: 'requestType'
    },
    {
        headerName: 'REQUEST_STATUS',
        key: 'requestStatus'
    },
    {
        headerName: 'REQUEST_CREATION',
        key: 'requestDateTimeCreated',
        onFormat: (value: string) => Formatter.apiDateTimeToDateTime(value)
    },
    {
        headerName: 'REQUEST_SEND',
        key: 'requestDateTimeSent',
        onFormat: (value: string) => Formatter.apiDateTimeToDateTime(value)
    },
    {
        headerName: 'REQUEST_RECEIVED',
        key: 'responseDateTimeReceived',
        onFormat: (value: string) => Formatter.apiDateTimeToDateTime(value)
    }
];

export const REQUEST_OPERATION_DETAIL_TABLE = () => [
    {
        headerName: 'FIELD_NAME',
        key: 'fieldName'
    },
    {
        headerName: 'FIELD_VALUE',
        key: 'fieldValue'
    }
];
