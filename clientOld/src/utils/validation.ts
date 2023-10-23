import Formatter from './formatter';

interface INumInput {
    valueToParse: string;
    max?: number;
    min?: number;
    maxLength?: number;
}

// simple method to validate number inputs
export const validateNumInput = ({ valueToParse, max, min = 0, maxLength }: INumInput) => {
    const reg = new RegExp(/^\d+$/);

    if (valueToParse && !reg.test(valueToParse)) return 'Value is not a number!';
    if (max && +valueToParse > max) return 'Maximum value of ' + max?.toString() + ' was exceeded!';
    if (min && +valueToParse < min) return 'Minimum value of ' + min?.toString() + ' was exceeded!';
    if (maxLength && valueToParse.length > maxLength)
        return 'Maximum length of ' + maxLength?.toString() + ' was exceeded!';

    return '';
};

interface IStringInput {
    valueToParse: string;
    maxLength?: number;
}

// validate string inputs
export const onlyStringInput = ({ valueToParse, maxLength }: IStringInput) => {
    const reg = new RegExp(/^[a-zA-Z]+$/);

    if (valueToParse && !reg.test(valueToParse)) return 'Only letters are allowed!';
    if (maxLength && valueToParse.length > maxLength)
        return 'Maximum length of ' + maxLength?.toString() + ' was exceeded!';

    return '';
};

interface IAnyInput {
    valueToParse: string;
    maxLength?: number;
}

// validate string inputs
export const anyInput = ({ valueToParse, maxLength }: IAnyInput) => {
    if (maxLength && valueToParse.length > maxLength)
        return 'Maximum length of ' + maxLength?.toString() + ' was exceeded!';

    return '';
};

interface IDateInput {
    valueToParse: string;
    useCase?: 'datetime' | 'time';
    minDate?: string;
    maxDate?: string;
}

// validate date inputs
export const dateInput = ({ valueToParse, maxDate, minDate, useCase = 'datetime' }: IDateInput) => {
    const currentDate = new Date(valueToParse);

    // if (!currentDate instanceof Date) {
    //     console.log('Not a date');
    //     return '';
    // }

    if (!minDate && !maxDate) return '';

    if (useCase === 'datetime') {
        if (maxDate && currentDate > new Date(maxDate))
            return 'Date cannot be greater than ' + Formatter.apiDateTimeToDateTime(maxDate) + '!';
        if (minDate && currentDate < new Date(minDate))
            return 'Date cannot be lesser than ' + Formatter.apiDateTimeToDateTime(minDate) + '!';

        return '';
    }

    return '';
};
