import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

  const staticTickets = [
    {
        "id": 1,
        "email": "user1@example.com",
        "subject": "Important Update",
        "flag": "NEW",
        "date": "Jul 12",
        "view": "All Pending"
    },
    {
        "id": 2,
        "email": "user2@example.com",
        "subject": "Meeting Reminder",
        "flag": "READ",
        "date": "Jul 10",
        "view": "All Junk"
    },
    {
        "id": 3,
        "email": "user3@example.com",
        "subject": "Project Proposal",
        "flag": "NEW",
        "date": "Jul 08",
        "view": "Assigned to me"
    },
    {
        "id": 4,
        "email": "user4@example.com",
        "subject": "Invoice Attached",
        "flag": "READ",
        "date": "Jul 05",
        "view": "All Complete"
    },
    {
        "id": 5,
        "email": "user5@example.com",
        "subject": "Feedback Request",
        "flag": "NEW",
        "date": "Jul 03",
        "view": "Unassigned"
    },
    {
        "id": 6,
        "email": "user6@example.com",
        "subject": "LinkedIn - New Connection",
        "flag": "RES",
        "date": "Jun 30",
        "view": "All Complete"
    },
    {
        "id": 7,
        "email": "user7@example.com",
        "subject": "Follow-Up Email",
        "flag": "READ",
        "date": "Jun 25",
        "view": "Completed by me"
    },
    {
        "id": 8,
        "email": "user8@example.com",
        "subject": "Job Application",
        "flag": "NEW",
        "date": "Jun 20",
        "view": "Unassigned"
    },
    {
        "id": 9,
        "email": "user9@example.com",
        "subject": "Newsletter Subscription",
        "flag": "READ",
        "date": "Jun 18",
        "view": "Created by me"
    },
    {
        "id": 10,
        "email": "user10@example.com",
        "subject": "Weekly Report",
        "flag": "NEW",
        "date": "Jun 15",
        "view": "Assigned to me"
    },
    {
        "id": 11,
        "email": "user11@example.com",
        "subject": "Client Feedback",
        "flag": "NEW",
        "date": "Jun 10",
        "view": "All Complete"
    },
    {
        "id": 12,
        "email": "user12@example.com",
        "subject": "Server Downtime Notification",
        "flag": "RES",
        "date": "Jun 05",
        "view": "All Junk"
    },
    {
        "id": 13,
        "email": "user13@example.com",
        "subject": "New Assignment",
        "flag": "READ",
        "date": "Jun 01",
        "view": "Completed by me"
    },
    {
        "id": 14,
        "email": "user14@example.com",
        "subject": "Holiday Plans",
        "flag": "NEW",
        "date": "May 28",
        "view": "All Pending"
    },
    {
        "id": 15,
        "email": "user15@example.com",
        "subject": "Project Update",
        "flag": "READ",
        "date": "May 25",
        "view": "Completed by me"
    },
    {
        "id": 16,
        "email": "user16@example.com",
        "subject": "Birthday Invitation",
        "flag": "NEW",
        "date": "May 20",
        "view": "All Pending"
    },
    {
        "id": 17,
        "email": "user17@example.com",
        "subject": "Monthly Report",
        "flag": "NEW",
        "date": "May 15",
        "view": "Assigned to me"
    },
    {
        "id": 18,
        "email": "user18@example.com",
        "subject": "Congratulations!",
        "flag": "READ",
        "date": "May 10",
        "view": "Unassigned"
    },
    {
        "id": 19,
        "email": "user19@example.com",
        "subject": "Annual Meeting",
        "flag": "NEW",
        "date": "May 05",
        "view": "Unassigned"
    },
    {
        "id": 20,
        "email": "user20@example.com",
        "subject": "Job Offer",
        "flag": "RES",
        "date": "May 01",
        "view": "All Complete"
    },
    {
        "id": 21,
        "email": "user21employeeofkapture@example.com",
        "subject": "Job Offer not granted issue",
        "flag": "RES",
        "date": "July 01",
        "view": "All Junk"
    },
    {
        "id": 22,
        "email": "user22@example.com",
        "subject": "Urgent Task",
        "flag": "NEW",
        "date": "Aug 01",
        "view": "All Pending"
    },
    {
        "id": 23,
        "email": "user23@example.com",
        "subject": "Product Launch Update",
        "flag": "READ",
        "date": "Aug 05",
        "view": "Assigned to me"
    },
    {
      "id": 24,
      "email": "user24@example.com",
      "subject": "Customer Feedback Survey",
      "flag": "NEW",
      "date": "Aug 10",
      "view": "Created by me"
  },
  {
      "id": 25,
      "email": "user25@example.com",
      "subject": "Marketing Campaign Results",
      "flag": "RES",
      "date": "Aug 15",
      "view": "All Complete"
  }
]

const initialState = {
  tickets: [],
  status: "loading",
  error: null,
};

export const fetchTickets = createAsyncThunk(
  "fetchTickets",
  async (_, { rejectWithValue }) => {
    try {
      // const response = await axios.get(
      //   "https://ticket-api-production-0c8e.up.railway.app/tickets"
      // );
      // const tickets = response.data;
      // console.log(tickets);
      // return tickets;
      return staticTickets;
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
      console.log(id);
      return id;
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
        state.tickets = state.tickets.filter(
          (ticket) => ticket.id !== action.payload
        );  
        state.status = "success";
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
