import React, { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useOutsideAlerter(ref: React.MutableRefObject<any | null>, cb: () => void, delay: number = 0) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                setTimeout(() => {
                    cb();
                }, delay);
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, cb]);
}

export default useOutsideAlerter;
