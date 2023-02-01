import { configureStore } from '@reduxjs/toolkit';
import chosenCardSlice from './chosenCardSlice';
import dialogsSlice from './dialogsSlice';
import headerSlice from './headerSlice';
import settingsSlice from './settingsSlice';

const reducer = {
    // here we will be adding reducers
    reducer: {
        dialogs: dialogsSlice.reducer,
        header: headerSlice.reducer,
        chosenCard: chosenCardSlice.reducer,
        settings: settingsSlice.reducer
    }
};

const store = configureStore(reducer);

export default store;
