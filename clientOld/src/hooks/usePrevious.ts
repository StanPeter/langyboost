import { useEffect, useRef } from 'react';
/**
 * Hook which remembers the previous value of generic type
 * @param value Value to remember
 * @returns
 */
export function usePrevious<T>(value: T) {
    const ref = useRef<T | null>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
