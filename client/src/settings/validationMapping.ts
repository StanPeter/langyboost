import { anyInput, dateInput, onlyStringInput, validateNumInput } from 'utils/validation';

// maps all the validation [nameOfElement]: Function responsible for validating
export const validationMap = {
    clientId: (val: string) => validateNumInput({ valueToParse: val, maxLength: 19 }),
    contractId: (val: string) => validateNumInput({ valueToParse: val, maxLength: 19 }),
    orderId: (val: string) => validateNumInput({ valueToParse: val, maxLength: 19 }),
    cardId: (val: string) => validateNumInput({ valueToParse: val, maxLength: 20 }),
    consumerFirstName: (val: string) => onlyStringInput({ valueToParse: val, maxLength: 50 }),
    consumerLastName: (val: string) => onlyStringInput({ valueToParse: val, maxLength: 50 }),
    reason: (val: string) => anyInput({ valueToParse: val, maxLength: 20 }),
    transactionFrom: (val: string, maxDate: string) => dateInput({ valueToParse: val, maxDate: maxDate }),
    transactionTo: (val: string, minDate: string) => dateInput({ valueToParse: val, minDate: minDate }),
    searchDate: (val: string, maxDate: string) => dateInput({ valueToParse: val, maxDate: maxDate })
};
