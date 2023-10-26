
/* contains data for select inputs */

export const CARD_STATUS_CHAR_ENUM = [
    { title: 'ACTIVE', value: 'A' },
    { title: 'BLOCKED', value: 'B' },
    { title: 'EXPIRED', value: 'E' },
    { title: 'SUSPENDED_BY_USER', value: 'U' },
    { title: 'SUSPENDED_BY_BANK', value: 'S' },
    { title: 'NOT_ACTIVATED', value: 'X' },
];

export const CARD_STATUS_TEXT_ENUM = [
    { title: 'ACTIVATED', value: 'Activated' },
    { title: 'BLOCKED', value: 'Blocked' },
    { title: 'NOT_ACTIVATED', value: 'NotActivated' },
    { title: 'EXPIRED', value: 'Expired' },
    { title: 'SUSPENDED_BY_BANK', value: 'SuspendedByBank' },
    { title: 'SUSPENDED_BY_USER', value: 'SuspendedByUser' },
];
export const PLUX_CARD_STATUS_TEXT_ENUM = (t: Function) =>  [
    { customProp: 'customProp', label: t('ACTIVATED'), value: 'Activated' },
    { customProp: 'customProp', label: t('BLOCKED'), value: 'Blocked' },
    { customProp: 'customProp', label: t('NOT_ACTIVATED'), value: 'NotActivated' },
    { customProp: 'customProp', label: t('EXPIRED'), value: 'Expired' },
    { customProp: 'customProp', label: t('SUSPENDED_BY_BANK'), value: 'SuspendedByBank' },
    { customProp: 'customProp', label: t('SUSPENDED_BY_USER'), value: 'SuspendedByUser' },
];

export const CARD_ACTION_ENUM = [
    { title: 'ACTIVATE_CARD', value: 'A' },
    { title: 'BLOCK_CARD', value: 'B' },
    { title: 'SUSPEND_BY_BANK', value: 'S' },
    { title: 'SUSPEND_BY_USER', value: 'U' },
];

export const BLOCKING_REASON_ENUM = [
    { title: 'BANK', value: 'BANK' },
    { title: 'COUNTERFEIT', value: 'COUNTERFEIT' },
    { title: 'DAMAGED', value: 'DAMAGED' },
    { title: 'FRAUD', value: 'FRAUD' },
    { title: 'LOST', value: 'LOST' },
    { title: 'NOT_RECEIVED', value: 'NOTRECEIVED' },
    { title: 'STOLEN', value: 'STOLEN' },
];

// export const REQUEST_TYPE_ENUM = [
//     { title: 'REGISTRATION', value: 'RegistrationRequest' },
//     { title: 'CARD_ACTIVATION', value: 'CardActivationRequest' },
//     { title: 'CARD_LOAD_AMOUNT', value: 'CardLoadAmountRequest' },
//     { title: 'SET_CARD_DOMAIN', value: 'SetCardDomainRequest' },
//     { title: 'CARD_FEE_INDEX_CHANGE', value: 'CardFeeIndexChangeRequest' },
//     { title: 'CARD_LIMIT_INDEX_CHANGE', value: 'CardLimitIndexChangeRequest' },
//     { title: 'CARD_REPLACEMENT', value: 'CardReplacementRequest' },
//     { title: 'CARD_RENEWAL', value: 'CardRenewalRequest' },
//     { title: 'CONSUMER_DATA_CHANGE', value: 'ConsumerDataChangeRequest' },
//     { title: 'CARD_STATUS_UPDATE', value: 'CardStatusUpdateRequest' },
//     { title: 'WALLET_POST_FEE', value: 'WalletPostFeeRequest' },
//     { title: 'RESET_CARD_PIN_COUNTER', value: 'ResetCardPinCounterRequest' },
//     { title: 'CARD_STOPLIST_INDEX_CHANGE', value: 'CardStoplistIndexChange' },
//     { title: 'WALLET_STATUS_UPDATE', value: 'WalletStatusUpdateRequest' },
//     { title: 'CARD_CONTRACT_CHANGE', value: 'CardContractChangeRequest' },
// ];

export const PLUX_REQUEST_TYPE_ENUM = (t: Function) => [
    { label: t('REGISTRATION'), value: 'RegistrationRequest' },
    { label: t('CARD_ACTIVATION'), value: 'CardActivationRequest' },
    { label: t('CARD_LOAD_AMOUNT'), value: 'CardLoadAmountRequest' },
    { label: t('SET_CARD_DOMAIN'), value: 'SetCardDomainRequest' },
    { label: t('CARD_FEE_INDEX_CHANGE'), value: 'CardFeeIndexChangeRequest' },
    { label: t('CARD_LIMIT_INDEX_CHANGE'), value: 'CardLimitIndexChangeRequest' },
    { label: t('CARD_REPLACEMENT'), value: 'CardReplacementRequest' },
    { label: t('CARD_RENEWAL'), value: 'CardRenewalRequest' },
    { label: t('CONSUMER_DATA_CHANGE'), value: 'ConsumerDataChangeRequest' },
    { label: t('CARD_STATUS_UPDATE'), value: 'CardStatusUpdateRequest' },
    { label: t('WALLET_POST_FEE'), value: 'WalletPostFeeRequest' },
    { label: t('RESET_CARD_PIN_COUNTER'), value: 'ResetCardPinCounterRequest' },
    { label: t('CARD_STOPLIST_INDEX_CHANGE'), value: 'CardStoplistIndexChange' },
    { label: t('WALLET_STATUS_UPDATE'), value: 'WalletStatusUpdateRequest' },
    { label: t('CARD_CONTRACT_CHANGE'), value: 'CardContractChangeRequest' },
];

export const PLUX_REQUEST_STATUS_ENUM = (t: Function) =>  [
    { label: t('REQUEST_SAVED'), value: 'RequestSaved' },
    { label: t('REQUEST_CONVERTED'), value: 'RequestConverted' },
    { label: t('REQUEST_ERR_PROCESSED'), value: 'RequestErrProcessed' },
    { label: t('RESPONSE_ROW_OK'), value: 'ResponseRowOk' },
    { label: t('INVALID_ROW_STRUCTURE'), value: 'InvalidRowStructure' },
    { label: t('INVALID_WALLET_COUNT'), value: 'InvalidWalletCount' },
    { label: t('INVALID_WALLET_STRUCTURE'), value: 'InvalidWalletStructure' },
    { label: t('INVALID_CARD_STRUCTURE'), value: 'InvalidCardStructure' },
    { label: t('RESPONSE_ERR_PROCESSED'), value: 'ResponseErrProcessed' },
    { label: t('SPL_RESPONSE_EXPIRED'), value: 'SPLResponseExpired' },
];
// export const REQUEST_STATUS_ENUM = [
//     { title: 'REQUEST_SAVED', value: 'RequestSaved' },
//     { title: 'REQUEST_CONVERTED', value: 'RequestConverted' },
//     { title: 'REQUEST_ERR_PROCESSED', value: 'RequestErrProcessed' },
//     { title: 'RESPONSE_ROW_OK', value: 'ResponseRowOk' },
//     { title: 'INVALID_ROW_STRUCTURE', value: 'InvalidRowStructure' },
//     { title: 'INVALID_WALLET_COUNT', value: 'InvalidWalletCount' },
//     { title: 'INVALID_WALLET_STRUCTURE', value: 'InvalidWalletStructure' },
//     { title: 'INVALID_CARD_STRUCTURE', value: 'InvalidCardStructure' },
//     { title: 'RESPONSE_ERR_PROCESSED', value: 'ResponseErrProcessed' },
//     { title: 'SPL_RESPONSE_EXPIRED', value: 'SPLResponseExpired' },
// ];

export const LOAD_CHANNEL_ENUM = [
    // { title: 'BRANCH', value: 'BRANCH', sign: 'C' },
    // { title: 'AGAINST_ANOTHER_CARD', value: 'CREDIT', sign: 'C' },
    // { title: 'WIRE_TRANSFER', value: 'WIRETR', sign: 'C' },
    // { title: 'CORPORATE_PORTAL', value: 'PORTAL', sign: 'C' },
    { title: 'LOCAL_BACK_OFFICE', value: 'BACKOF', sign: 'C' },
    // { title: 'BY_CORPORATE_COMPANY', value: 'CORPOR', sign: 'C' },
    { title: 'BY_CONSUMER', value: 'CONSUM', sign: 'C' },
    // { title: 'OTHER', value: 'OTHER', sign: 'C' }
];

export const PLUX_TRANSACTION_CODE_ENUM = (t: Function) =>  [
    { label: t('PURCHASE'), value: 'Purchase' },
    { label: t('GLOBAL_LIMIT'), value: 'GlobalLimit' },
    { label: t('CASH_WITHDRAWAL'), value: 'CashWithdrawal' },
    { label: t('QUASICASH'), value: 'QUASICASH' },
    { label: t('CASH_ADVANCE'), value: 'CashAdvance' },
    { label: t('LOAD'), value: 'Load' },
    { label: t('EXPIRED_LOAD'), value: 'ExpiredLoad' },
    { label: t('REFUND'), value: 'Refund' },
    { label: t('TRANSFER'), value: 'Transfer' },
    { label: t('FEE'), value: 'Fee' },
    { label: t('DISPUTE_CYCLE'), value: 'DisputeCycle' },
    { label: t('CASH_BACK'), value: 'CashBack' },
    { label: t('OTHER'), value: 'Other' },
    { label: t('ECOMMERCE'), value: 'ECommerce' },
];
export const TRANSACTION_CODE_ENUM = [
    { title: 'PURCHASE', value: 'Purchase' },
    { title: 'GLOBAL_LIMIT', value: 'GlobalLimit' },
    { title: 'CASH_WITHDRAWAL', value: 'CashWithdrawal' },
    { title: 'QUASICASH', value: 'QUASICASH' },
    { title: 'CASH_ADVANCE', value: 'CashAdvance' },
    { title: 'LOAD', value: 'Load' },
    { title: 'EXPIRED_LOAD', value: 'ExpiredLoad' },
    { title: 'REFUND', value: 'Refund' },
    { title: 'TRANSFER', value: 'Transfer' },
    { title: 'FEE', value: 'Fee' },
    { title: 'DISPUTE_CYCLE', value: 'DisputeCycle' },
    { title: 'CASH_BACK', value: 'CashBack' },
    { title: 'OTHER', value: 'Other' },
    { title: 'ECOMMERCE', value: 'ECommerce' },
];

export const PLUX_TRANSACTION_TYPE_ENUM = (t: Function) => [
    {
        label: t('AUTHORIZATION_APPROVED'),
        value: 'AA',
        defaultTitle: 'Authorization approved',
    },
    {
        label: t('AUTHORIZATION_DECLINED'),
        value: 'AD',
        defaultTitle: 'Authorization declined',
    },
    {
        label: t('AUTHORIZATION_CLEANED'),
        value: 'AC',
        defaultTitle: 'Authorization cleaned',
    },
    { label: t('OTHER'), value: 'O', defaultTitle: 'Other' },
    {
        label: t('TRANSACTION_SETTLED'),
        value: 'TS',
        defaultTitle: 'Transaction settled',
    },
];

export const TRANSACTION_TYPE_ENUM = [
    {
        title: 'AUTHORIZATION_APPROVED',
        value: 'AA',
        defaultTitle: 'Authorization approved',
    },
    {
        title: 'AUTHORIZATION_DECLINED',
        value: 'AD',
        defaultTitle: 'Authorization declined',
    },
    {
        title: 'AUTHORIZATION_CLEANED',
        value: 'AC',
        defaultTitle: 'Authorization cleaned',
    },
    { title: 'OTHER', value: 'O', defaultTitle: 'Other' },
    {
        title: 'TRANSACTION_SETTLED',
        value: 'TS',
        defaultTitle: 'Transaction settled',
    },
];

export const WALLET_STATUS_CHANGE_ENUM = [
    { title: 'ACTIVATE_RE_ACTIVATE_WALLET', value: 'N' },
    { title: 'SUSPENDED', value: 'S' },
    { title: 'CLOSED', value: 'C' },
];

export const FEE_TYPE_ENUM = [
    { title: 'FEE_HANDLING_FUNDS', value: 'PL0001', sign: 'D' },
    { title: 'FEE_FOR_REPLACEMENT', value: 'PL0002', sign: 'D' },
    { title: 'FEE_FOR_PROCESSING', value: 'PL0003', sign: 'D' },
    { title: 'PIN_CHANGE_AT_MOBILE', value: 'PL0004', sign: 'D' },
    { title: 'CASHBACK', value: 'PL0005', sign: 'C' },
    { title: 'CLAIM_RECOGNITION', value: 'PL0006', sign: 'C' },
    { title: 'CARD_REPLACEMENT_ON_CARD', value: '100129', sign: 'D' },
    // { title: 'PIN_CHANGE_AT_ATM', value: 'PL0004', sign: 'D' },
    // { title: 'BALANCE_CHECK_ATM', value: 'PL0005', sign: 'C' },
    // { title: 'TOP_UP', value: 'PL0006', sign: 'C' },
];

export const ADDRESS_TYPE_ENUM = [
    { title: 'DELIVERY_ADDRESS', value: 'DA' },
    { title: 'REPLACEMENT_ADDRESS', value: 'RP' },
    { title: 'RENEWAL_ADDRESS', value: 'RE' },
    { title: 'PIN_DELIVERY_ADDRESS', value: 'PA' },
    { title: 'TEMPORARY_ADDRESS', value: 'TM' },
    { title: 'OFFLINE_ADDRESS', value: 'OA' },
];

export const REPLACEMENT_REASON_ENUM = [
    { title: 'STOLEN', value: 'STOLEN' },
    { title: 'BANK', value: 'BANK' },
    { title: 'DAMAGED', value: 'DAMAGED' },
    { title: 'CHANGE_CARD_TYPE', value: 'CHANGECARDTYPE' },
    { title: 'NOT_RECEIVED', value: 'NOTRECEIVED' },
    { title: 'LOST', value: 'LOST' },
    { title: 'COUNTERFEIT', value: 'COUNTERFEIT' },
    { title: 'Fraud', value: 'FRAUD' },
];

export const LANGUAGE_SETTING_ENUM = [
    { title: 'PL', value: 'pl' },
    { title: 'EN', value: 'en' },
    { title: 'FR', value: 'fr' },
];

export type TEnumUseCase =
    | 'blockingReason'
    | 'transactionType'
    | 'transactionCode'
    | 'loadChannel'
    | 'cardAction'
    | 'feeType';

export type TEnumDefaultValuePair = {
    title: string;
    value: string;
    defaultTitle?: string;
};

// card status is missing, since is a bit unique
export default {
    blockingReason: BLOCKING_REASON_ENUM,
    transactionType: TRANSACTION_TYPE_ENUM,
    transactionCode: TRANSACTION_CODE_ENUM,
    loadChannel: LOAD_CHANNEL_ENUM,
    cardAction: CARD_ACTION_ENUM,
    feeType: FEE_TYPE_ENUM,
    addressType: ADDRESS_TYPE_ENUM,
    replacementReason: REPLACEMENT_REASON_ENUM,
};
