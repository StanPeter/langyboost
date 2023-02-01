/**
 *
 * @param date datetime received from BE which should be transformed e.g. 2022-11-25T09:32:43.854Z
 * @returns formatted datetime in Client format e.g. 25.11.2022 10:32:43
 */
export const apiDateTimeToDateTime = (date: string) => {
    if (!date) return '';

    const out = new Date(date);

    if (out instanceof Date) {
        const format = (val: number) => (val?.toString().length === 2 ? val?.toString() : '0' + val?.toString());
        const hours = format(out.getHours());
        const minutes = format(out.getMinutes());
        const seconds = format(out.getSeconds());
        const date2 = format(out.getDate());
        const month = format(out.getMonth() + 1);

        return `${date2}.${month}.${out.getFullYear()} ${hours}:${minutes}:${seconds}`;
    }

    return '';
};

/**
 *
 * @param date date received from BE which should be transformed e.g. 2022-11-25Z
 * @returns formatted date in Client format e.g. 25.11.2022
 */
export const apiDateToDate = (date: string) => {
    if (!date || !date.endsWith('Z')) return '';

    const out = new Date(`${date.slice(0, date.length - 1)}T00:00:00.000Z`);

    const format = (val: number) => (val?.toString().length === 2 ? val?.toString() : '0' + val?.toString());
    const date2 = format(out.getDate());
    const month = format(out.getMonth() + 1);

    if (out instanceof Date) return `${date2}.${month}.${out.getFullYear()}`;

    return '';
};

export const sliceString = (value: string, numberToSlice: number) => {
    if (value && value.length > numberToSlice) return value.slice(0, numberToSlice) + '...';

    return value;
};

/**
 *
 * @param name name of the person
 * @param surname surname of the person
 * @param title title of the person
 * @returns `Ing. James Steve`
 */
export const formatName = (name: string = '', surname: string = '', title: string = '') => {
    return `${title ? `${title}.` : ''} ${name} ${surname}`;
};

/**
 *
 * @param value valu to be formatted
 * @returns formatted value 'va***e'
 */
export const hideLetters = (value: string) => {
    const out = [...value];

    if (value.length > 3) out[3] = '*';
    if (value.length > 4) out[4] = '*';
    if (value.length > 5) out[5] = '*';

    return out.join('');
};

/**
 *
 * @param amount amount of currecy
 * @param currency type of currency
 * @returns joined amount + code converted currency
 */
export const getAccountBalance = (amount: number, currency: string) => {
    if (!amount?.toString() || !currency) return '';
    return amount?.toString() + (currency === '985' ? ' PLN' : ' EUR');
};
