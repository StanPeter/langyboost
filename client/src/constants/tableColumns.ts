import { NavigateFunction } from 'react-router-dom';
import { SignResponse } from 'ts/generated/apiCAM';
import { IHeaderItem } from 'ts/interfaces';
import Formatter from 'utils/formatter';
import Transformer from 'utils/transformer';
import { ROUTES } from '../utils/routeMap';

/* contains template for each table withint the app */

export const CARD_SEARCH_TABLE: IHeaderItem[] = [
    {
        header: 'CARD_ID',
        size: 120,
        id: 'cardId',
        accessorKey: 'cardId',
        underlined: true,
        onFormat: ({ getValue }) => Formatter.convertUniqueCartId(getValue() as string, 'intoShort'),
        onClick: ({ getValue }, navigate) => {
            navigate(ROUTES.cardDetail((getValue() as string) || ''));
        },
    },
    {
        header: 'CARD_STATUS',
        size: 120,
        id: 'cardStatus',
        accessorKey: 'cardStatus',
    },
    {
        header: 'STATUS_UPDATED',
        size: 120,
        id: 'dateTimeOfStatusUpdate',
        accessorKey: 'dateTimeOfStatusUpdate',
        onFormat: ({ getValue }) => (getValue() ? Formatter.apiDateTimeToDateTime(getValue() as string) : ''),
    },
    {
        header: 'LAST_FOUR_DIGITS',
        size: 120,
        id: 'lastFourDigits',
        accessorKey: 'lastFourDigits',
    },
    {
        header: 'CARD_EXPIRY_DATE',
        size: 120,
        id: 'expiryDate',
        accessorKey: 'expiryDate',
        onFormat: ({ getValue }) => Formatter.convertFourDigitsDate(getValue() as string),
    },
    {
        header: 'HISTORY_OF_REQUESTS',
        size: 120,
        id: 'historyOfRequests',
        accessorKey: 'historyOfRequests',
        defaultValue: 'request history',
        underlined: true,
        onClick: ({ getValue }, navigate) => navigate(ROUTES.cardRequestHistory((getValue() as string) || '')),
    },
];

export const CARD_TRANSACTION_TABLE = (uniqueCardId: string): IHeaderItem[] => [
    {
        header: 'TRANSACTION_ID',
        size: 50,
        id: 'uniqueTransactionId',
        accessorKey: 'uniqueTransactionId',
        underlined: true,
        onClick: ({ getValue }, navigate) => {
            // uniqueCardId has to be added from the BE! with Pluxee table is not possible to access it
            navigate(ROUTES.cardTransactionDetail(uniqueCardId, getValue() as string));
        },
    },
    {
        header: 'TRANSACTION_TYPE',
        size: 120,
        id: 'transactionType',
        accessorKey: 'transactionType',
        onFormat: ({ getValue }) => Transformer.transform('transactionType', getValue() as string, true),
    },
    {
        header: 'TRANSACTON_CODE',
        size: 120,
        id: 'transactionCode',
        accessorKey: 'transactionCode',
    },
    {
        header: 'AMOUNT',
        size: 120,
        id: 'transactionAmount',
        accessorKey: 'transactionAmount',
        onFormat: ({ row }) =>
            Formatter.getAmountBalance(
                'signAtBeginning',
                row.getValue('transactionAmount'),
                row.getValue('transactionCurrency'),
                row.getValue('transactionExponent'),
                row.getValue('transactionSign') as SignResponse,
            ),
    },
    {
        header: 'OPERATION',
        size: 120,
        id: 'transactionSign',
        accessorKey: 'transactionSign',
        onFormat: ({ getValue }) => (getValue() === 'C' ? 'Credit' : getValue() === 'D' ? 'Debit' : ''),
    },
    {
        header: 'MCC',
        size: 120,
        id: 'merchantCategoryCode',
        accessorKey: 'merchantCategoryCode',
    },
    {
        header: 'MERCHANT_NAME',
        size: 120,
        id: 'merchantName',
        accessorKey: 'merchantName',
    },
    {
        header: 'MERCHANT_CITY',
        size: 120,
        id: 'merchantCity',
        accessorKey: 'merchantCity',
    },
    {
        header: 'MERCHANT_COUNTRY',
        size: 120,
        id: 'merchantCountry',
        accessorKey: 'merchantCountry',
    },
    {
        header: 'AUTHORIZATION_DATE',
        size: 120,
        id: 'authorizationDate',
        accessorKey: 'authorizationDate',
        onFormat: ({ getValue }) => (getValue() ? Formatter.apiDateTimeToDateTime(getValue() as string) : ''),
    },
];

export const CARD_REQUEST_HISTORY_TABLE = (navigate: NavigateFunction, cardId: string, from: string): IHeaderItem[] => [
    {
        header: 'REQUEST_ID',
        id: 'requestId',
        accessorKey: 'requestId',
        underlined: true,
        onClick: ({ getValue }) => {
            return navigate(ROUTES.cardRequestHistoryDetail(cardId, getValue() as string, `?from=${from}`)!);
        },
    },
    {
        header: 'REQUEST_TYPE',
        id: 'requestType',
        accessorKey: 'requestType',
    },
    {
        header: 'REQUEST_STATUS',
        id: 'requestStatus',
        accessorKey: 'requestStatus',
    },
    {
        header: 'REQUEST_CREATION',
        id: 'requestDateTimeCreated',
        accessorKey: 'requestDateTimeCreated',
        onFormat: ({ getValue }) => Formatter.apiDateTimeToDateTime(getValue() as string),
    },
    {
        header: 'REQUEST_SEND',
        id: 'requestDateTimeSent',
        accessorKey: 'requestDateTimeSent',
        onFormat: ({ getValue }) => Formatter.apiDateTimeToDateTime(getValue() as string),
    },
    {
        header: 'REQUEST_RECEIVED',
        id: 'responseDateTimeReceived',
        accessorKey: 'responseDateTimeReceived',
        onFormat: ({ getValue }) => Formatter.apiDateTimeToDateTime(getValue() as string),
    },
];

export const REQUEST_OPERATION_DETAIL_TABLE = () => [
    {
        header: 'FIELD_NAME',
        id: 'fieldName',
        accessorKey: 'fieldName',
    },
    {
        header: 'FIELD_VALUE',
        id: 'fieldValue',
        accessorKey: 'fieldValue',
    },
];
