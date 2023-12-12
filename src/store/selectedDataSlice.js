import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataSelected: null,
};

const selectedDataSlice = createSlice({
    name: 'selectedData',
    initialState,
    reducers: {
        setDataSelected: (state, action) => {
            state.dataSelected = action.payload
        }
    },
});

export const { setDataSelected } = selectedDataSlice.actions;

export default selectedDataSlice.reducer;
