/**
 *
 * @param date datetime received from BE which should be transformed e.g. 2022-11-25T09:32:43.854Z
 * @returns formatted datetime in Client format e.g. 25.11.2022 10:32:43
 */
export const apiDateTimeToDateTime = (date: string) => {
    if (!date) return "";

    const out = new Date(date);

    if (out instanceof Date) {
        const format = (val: number) => (val?.toString().length === 2 ? val?.toString() : "0" + val?.toString());
        const hours = format(out.getHours());
        const minutes = format(out.getMinutes());
        const seconds = format(out.getSeconds());
        const date2 = format(out.getDate());
        const month = format(out.getMonth() + 1);

        return `${date2}.${month}.${out.getFullYear()} ${hours}:${minutes}:${seconds}`;
    }

    return "";
};
