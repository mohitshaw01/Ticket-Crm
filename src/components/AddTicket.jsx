import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddTickets } from "../store/slices/TodoTickets.js";
import { useNavigate } from "react-router-dom";

function AddTicket() {
    // Initialize state variables
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');
    const [subject, setSubject] = useState('');
    const [flag, setFlag] = useState('');
    const [email, setEmail] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddTickets({ email, status, subject, flag, date }));
        navigate("/sidebar");
        // Print the input values
        // console.log({   email, status, subject, flag, date });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-slate-800">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-4xl text-center mb-6">Add Ticket</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="status"
                placeholder="Status"
                className="p-3 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="p-3 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <input
                type="text"
                name="flag"
                placeholder="Flag"
                className="p-3 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={flag}
                onChange={(e) => setFlag(e.target.value)}
              />
              <input
                type="text"
                name="date"
                placeholder="Date"
                className="p-3 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <button
                type="submit"
                className="p-3 mt-4 border-2 border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600"
              >
                Add Ticket
              </button>
            </form>
          </div>
        </div>
      );
}

export default AddTicket;