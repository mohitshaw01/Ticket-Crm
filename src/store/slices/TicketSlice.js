import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define initialState
const initialState = {
  tickets: [],
  status: 'loading',
  error: null,
};


export const fetchTickets = createAsyncThunk(
  'fetchTickets',
  async (_, { rejectWithValue }) => {
    try {
      // const response = await axios.get("https://mohit.free.beeceptor.com/tickets");
      const response = [
        {
          email: "somnath678@gmail.com",
          status: "INBOX",
          subject: "Linkedin-Mihul Singh Sol...",
          flag: "RES",
          date: "Jun 20",
        },
        {
          email: "himanshu.gupta@kapture...",
          status: "INBOX",
          subject: "Re:Test Email",
          flag: "RES",
          date: "Jul 05",
        },
        {
          email: "Priya Saxena",
          status: "INBOX",
          subject: "Raised a concern",
          flag: "RES",
          date: "Jul 03",
        },
        {
          email: "somnath678@gmail.com",
          status: "INBOX",
          subject: "Linkedin-Mihul Singh Sol...",
          flag: "RES",
          date: "Jun 20",
        },
        {
          email: "himanshu.gupta@kapture...",
          status: "INBOX",
          subject: "Re:Test Email",
          flag: "RES",
          date: "Jul 05",
        },
        {
          email: "Priya Saxena",
          status: "INBOX",
          subject: "Raised a concern",
          flag: "RES",
          date: "Jul 03",
        },
        {
          email: "somnath678@gmail.com",
          status: "INBOX",
          subject: "Linkedin-Mihul Singh Sol...",
          flag: "RES",
          date: "Jun 20",
        },
        {
          email: "himanshu.gupta@kapture...",
          status: "INBOX",
          subject: "Re:Test Email",
          flag: "RES",
          date: "Jul 05",
        },
        {
          email: "Priya Saxena",
          status: "INBOX",
          subject: "Raised a concern",
          flag: "RES",
          date: "Jul 03",
        },
        {
          email: "somnath678@gmail.com",
          status: "INBOX",
          subject: "Linkedin-Mihul Singh Sol...",
          flag: "RES",
          date: "Jun 20",
        },
        {
          email: "himanshu.gupta@kapture...",
          status: "INBOX",
          subject: "Re:Test Email",
          flag: "RES",
          date: "Jul 05",
        },
        {
          email: "Priya Saxena",
          status: "INBOX",
          subject: "Raised a concern",
          flag: "RES",
          date: "Jul 03",
        },
        {
          email: "somnath678@gmail.com",
          status: "INBOX",
          subject: "Linkedin-Mihul Singh Sol...",
          flag: "RES",
          date: "Jun 20",
        },
        {
          email: "himanshu.gupta@kapture...",
          status: "INBOX",
          subject: "Re:Test Email",
          flag: "RES",
          date: "Jul 05",
        },
        {
          email: "Priya Saxena",
          status: "INBOX",
          subject: "Raised a concern",
          flag: "RES",
          date: "Jul 03",
        },
      ]
      console.log(response);
      return response;
      // return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

// Define the TicketSlice
const TicketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'success';
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default TicketSlice.reducer;