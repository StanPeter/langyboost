import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { useEventCallback, useEventListener } from 'usehooks-ts';

declare global {
    interface WindowEventMap {
        'session-storage': CustomEvent;
        'local-storage': CustomEvent;
    }
}

type SetValue<T> = Dispatch<SetStateAction<T>>;

// can be also imported directly from usehooks, but I will customize it
function useStorage<T>(key: string, initialValue: T, useCase: 'session' | 'local' = 'session'): [T, SetValue<T>] {
    // Get from session storage then
    // parse stored json or return initialValue
    const readValue = useCallback((): T => {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = useCase === 'local' ? window.localStorage.getItem(key) : window.sessionStorage.getItem(key);
            return item ? (parseJSON(item) as T) : initialValue;
        } catch (error) {
            console.warn(`Error reading ${useCase} storage key “${key}”:`, error);
            return initialValue;
        }
    }, [initialValue, key]);

    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<T>(readValue);

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to sessionStorage.
    // @ts-ignore
    const setValue: SetValue<T> = useEventCallback((value) => {
        // Prevent build error "window is undefined" but keeps working
        if (typeof window == 'undefined') {
            console.warn(`Tried setting ${useCase} storage key “${key}” even though environment is not a client`);
        }

        try {
            // Allow value to be a function so we have the same API as useState
            const newValue = value instanceof Function ? value(storedValue) : value;

            // Save to session storage
            if (useCase === 'local') window.localStorage.setItem(key, JSON.stringify(newValue));
            else window.sessionStorage.setItem(key, JSON.stringify(newValue));

            // Save state
            setStoredValue(newValue);

            // We dispatch a custom event so every useSessionStorage hook are notified
            window.dispatchEvent(new Event('session-storage'));
        } catch (error) {
            console.warn(`Error setting ${useCase} storage key “${key}”:`, error);
        }
    });

    useEffect(() => {
        setStoredValue(readValue());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleStorageChange = useCallback(
        (event: StorageEvent | CustomEvent) => {
            if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
                return;
            }
            setStoredValue(readValue());
        },
        [key, readValue]
    );

    // this only works for other documents, not the current one
    useEventListener('storage', handleStorageChange);

    // this is a custom event, triggered in writeValueTosessionStorage
    // See: useSessionStorage() | useLocalStorage()
    if (useCase === 'local') useEventListener('local-storage', handleStorageChange);
    else useEventListener('session-storage', handleStorageChange);

    return [storedValue, setValue];
}

export default useStorage;

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
    try {
        return value === 'undefined' ? undefined : JSON.parse(value ?? '');
    } catch {
        console.log('parsing error on', { value });
        return undefined;
    }
}
