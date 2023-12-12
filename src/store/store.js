import { configureStore } from '@reduxjs/toolkit';
import setupReducer from './setupSlice';
import selectedDataReducer from './selectedDataSlice';

const store = configureStore({
    reducer: {
        setup: setupReducer,
        selectedData: selectedDataReducer
    },
});

export default store;