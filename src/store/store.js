import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/TodoTickets.js";
import setViews from "./slices/setView.js";

const store = configureStore({
  reducer: {
    todo: TodoSlice,
    view: setViews,
  },
});

export default store;
