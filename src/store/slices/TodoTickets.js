import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  tickets: [],
  status: "loading",
  error: null,
};

export const fetchTickets = createAsyncThunk(
  "fetchTickets",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://ticket-api-production-0c8e.up.railway.app/tickets"
      );
      const tickets = response.data;
      console.log(tickets);
      return tickets;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const AddTickets = createAsyncThunk(
  "AddTickets",
  async (ticket, { rejectWithValue }) => {
    try {
      // const response = await axios.post("https://ticket-api-production-0c8e.up.railway.app/tickets", ticket);
      // return response.data;
      // const response = [ticket, ...initialState.tickets];
      ticket.id = initialState.tickets.length + 1;
      return ticket;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const removeTicket = createAsyncThunk(
  "removeTicket",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://ticket-api-production-0c8e.up.railway.app/tickets/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todoTicket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddTickets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddTickets.fulfilled, (state, action) => {
        state.status = "success";
        state.tickets.push(action.payload);
      })
      .addCase(AddTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeTicket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeTicket.fulfilled, (state, action) => {
        state.status = "success";
        state.tickets = state.tickets.filter(
          (ticket) => ticket.id !== action.payload.id
        );
      })
      .addCase(removeTicket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTickets.pending, (state, action) => {
        state.status = "success";
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = "success";
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
