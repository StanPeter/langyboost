import React, { createContext, Dispatch, SetStateAction, useState } from "react";
export interface IStore {
    token: string | null;
    tokenURL: string;
    language: "cz" | "en";
    prevPath: string; // previous visited route for redirections
    user: null; // logged in user informatio
}

// NOT IMPLEMENTED YET

// Dipsatcher for store
interface IStoreActions {
    setStoreState?: Dispatch<SetStateAction<IStore>>;
}

interface IStoreProps {
    children: React.ReactNode;
}

export type IStoreKeys = keyof IStore;

/* default value of the global Store */
export const defaultStoreState: IStore = {
    token: null,
    user: null,
    tokenURL: "",
    language: "en",
    prevPath: ""
};

/* global store*/
export const Context = createContext<IStore & IStoreActions>(defaultStoreState);

/* main component with Store -> allows to use useContext within childre scope */
const Store = (props: IStoreProps) => {
    const [storeState, setStoreState] = useState<IStore>(defaultStoreState);

    return (
        <Context.Provider
            value={{
                ...storeState,
                setStoreState
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default Store;
