import { configureStore } from "@reduxjs/toolkit";
import TicketSlice from "./slices/TicketSlice";
import TodoSlice from "./slices/TodoTickets.js";

const store = configureStore({
    reducer : {
        // ticket : TicketSlice, 
        todo : TodoSlice,
    },
})

export default store;