import {createSlice } from "@reduxjs/toolkit";4

const initialState = {
    search: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            console.log(action.payload);
            state.search = action.payload;
        },
    },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;