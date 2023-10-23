import { useSelector } from 'react-redux';
import { TRootState } from 'ts/types';

/**
 * Reused hook to not repeat in defining const and putting type to it
 * @returns
 */
export const useSelectorApp = () => {
    const allStates = useSelector((state: TRootState) => state);

    return allStates;
};
