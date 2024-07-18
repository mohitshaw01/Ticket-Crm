import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    view: "All",
};

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        setView: (state, action) => {
            // console.log(action.payload)
            state.view = action.payload
        },
    },
});

export const { setView } = viewSlice.actions

export default viewSlice.reducer