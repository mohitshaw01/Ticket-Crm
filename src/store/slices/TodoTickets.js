import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
    tickets : [],
    status : 'loading',
    error : null,
}

export const AddTickets = createAsyncThunk(
    'AddTickets',
    async (ticket, {rejectWithValue}) => {
        try {
            // const response = await axios.post("https://ticket-api-production-0c8e.up.railway.app/tickets", ticket);
            let response = [
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
              ];
            // return response.data;
            console.log(ticket);
            
            response = [ticket, ...response];
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const removeTicket = createAsyncThunk(
    'removeTicket',
    async (id, {rejectWithValue}) => {
        try {
            const response = await axios.delete(`https://ticket-api-production-0c8e.up.railway.app/tickets/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);


export const editTickets = createAsyncThunk(
    'editTickets',
    async (ticket, {rejectWithValue}) => {
        try {
            const response = await axios.put(`https://ticket-api-production-0c8e.up.railway.app/tickets/${ticket.id}`, ticket);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);


const todoSlice = createSlice({
    name : 'todoTicket',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
            .addCase(AddTickets.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(AddTickets.fulfilled, (state, action) => {
                state.status = 'success';
                state.tickets.push(action.payload);
            })
            .addCase(AddTickets.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(removeTicket.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(removeTicket.fulfilled, (state, action) => {
                state.status = 'success';
                state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload.id);
            })
            .addCase(removeTicket.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(editTickets.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editTickets.fulfilled, (state, action) => {
                state.status = 'success';
                state.tickets = state.tickets.map((ticket) => {
                    if(ticket.id === action.payload.id) {
                        return action.payload;
                    }
                    return ticket;
                });
            })
            .addCase(editTickets.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
            
    }
});


export default todoSlice.reducer;