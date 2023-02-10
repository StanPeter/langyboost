import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./settingsSlice";

const reducer = {
    // here will be adding reducers
    reducer: {
        settings: settingsSlice.reducer
    }
};

const store = configureStore(reducer);

export default store;
