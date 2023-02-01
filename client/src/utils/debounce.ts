/**
 * 
 * @param cb function to be called after the delay
 * @param delay delay to wait for the user to type something and recall the function
 * @returns 
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (cb: (arg: any) => void, delay: number = 500) => {
    let timer: NodeJS.Timeout | null;

    return (...args: [arg: any]) => {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            cb(...args);
        }, delay);
    };
};

/**
 * 
 * @param cb function to be called after the delay
 * @param delay delay after which the cb is called, keep in mind with throttle it gets tiggered always after the delay (intervals)
 * @returns 
 */
export const throttle = (cb: () => void, delay: number = 500) => {
    let shouldWait: boolean = false;
    let waitingArgs: [] | null;

    const timeoutFunc = () => {
        if (waitingArgs === null) shouldWait = false;
        else {
            cb(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    };

    return (...args: []) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }

        cb(...args);
        shouldWait = true;
        setTimeout(timeoutFunc, delay);
    };
};
