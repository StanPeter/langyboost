import { TCardStatus, TReversalFlag, TSignResponse, TTransactionType, TWalletStatus } from 'ts/types';

/**
 *
 * @param statusSymbol status enum from EA
 * @param blockingReason message returned in case of status symbol B
 * @returns translated status card message according to EA
 */
export const transformStatusCard = (statusSymbol?: TCardStatus, blockingReason?: string) => {
    if (!statusSymbol) return '';

    switch (statusSymbol) {
        case 'A':
            return 'Active';
        case 'B':
            return blockingReason;
        case 'E':
            return 'Expired';
        case 'S':
            return 'Suspended by user';
        case 'U':
            return 'Suspended by bank';
        case 'X':
            return 'Not activated';
        default:
            console.log('Unsupported usecase');
            return '';
    }
};

/**
 *
 * @param statusSymbol status enum from EA
 * @returns translated status wallet message according to EA
 */
export const transformStatusWallet = (statusSymbol?: TWalletStatus) => {
    if (!statusSymbol) return '';

    switch (statusSymbol) {
        case 'N':
            return 'Normal';
        case 'S':
            return 'Suspended';
        case 'C':
            return 'Closed';
        default:
            console.log('Unsupported usecase');
            return '';
    }
};

/**
 *
 * @param statusSymbol status enum from EA
 * @returns translated transaction type message according to EA
 */
export const transformTransactionType = (statusSymbol?: TTransactionType) => {
    if (!statusSymbol) return '';

    switch (statusSymbol) {
        case 'AA':
            return 'Authorization approved';
        case 'AD':
            return 'Authorization declined';
        case 'AC':
            return 'Authorization cleaned';
        case 'O':
            return 'Other';
        case 'TS':
            return 'Transaction settled';
        default:
            console.log('Unsupported usecase');
            return '';
    }
};

/**
 *
 * @param statusSymbol status enum from EA
 * @returns translated reversal flag message according to EA
 */
export const transformReversalFlag = (statusSymbol?: TReversalFlag) => {
    if (!statusSymbol) return '';

    switch (statusSymbol) {
        case 'N':
            return 'Normal';
        case 'R':
            return 'Full reversal';
        case 'P':
            return 'Partial reversal';
        case 'O':
            return 'Other';
        default:
            console.log('Unsupported usecase');
            return '';
    }
};

/**
 *
 * @param statusSymbol status enum from EA
 * @returns translated sign response message according to EA
 */
export const transformSignResponse = (statusSymbol?: TSignResponse) => {
    if (!statusSymbol) return '';

    switch (statusSymbol) {
        case 'D':
            return 'Debit';
        case 'C':
            return 'Credit';
        default:
            console.log('Unsupported usecase');
            return '';
    }
};
