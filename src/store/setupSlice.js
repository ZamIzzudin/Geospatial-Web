import { createSlice } from '@reduxjs/toolkit';
import setup from '../utils/setup.json'

const initialState = {
    setup: setup,
    center: setup.middle.cordinate,
    zoom: setup.zoom_default,
};

const setupSlice = createSlice({
    name: 'setup',
    initialState,
    reducers: {
        setSetup: (state, action) => {
            state.setup = action.payload;
        },
        setCenter: (state, action) => {
            state.center = action.payload
        },
        setZoom: (state, action) => {
            state.zoom = action.payload
        }
    },
});

export const { setSetup, setCenter, setZoom } = setupSlice.actions;

export default setupSlice.reducer;
