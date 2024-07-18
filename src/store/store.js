import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/TodoTickets.js";
import setViews from "./slices/setView.js";
import search from './slices/Search.js'

const store = configureStore({
  reducer: {
    todo: TodoSlice,
    view: setViews,
    search: search,
  },
});

export default store;
