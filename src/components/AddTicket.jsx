import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddTickets } from "../store/slices/TodoTickets.js";

function AddTicket() {
    // Initialize state variables
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
        // Print the input values
        console.log({   email, status, subject, flag, date });
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-4xl">Add Ticket</h1>
                <div className="flex justify-center items-center h-screen">
                    <form className="flex flex-row" onSubmit={handleSubmit}>
                    <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="p-2 m-2 border-2 border-gray-200 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            name="status"
                            placeholder="status"
                            className="p-2 m-2 border-2 border-gray-200 rounded-md"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                        
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="p-2 m-2 border-2 border-gray-200 rounded-md"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <input
                            type="text"
                            name="flag"
                            placeholder="Flag"
                            className="p-2 m-2 border-2 border-gray-200 rounded-md"
                            value={flag}
                            onChange={(e) => setFlag(e.target.value)}
                        />
                        <input
                            type="text"
                            name="date"
                            placeholder="date"
                            className="p-2 m-2 border-2 border-gray-200 rounded-md"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="p-2 m-2 border-2 border-gray-200 rounded-md bg-blue-500 text-white"
                        >
                            Add Ticket
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddTicket;