import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { MdEmail, MdFlag } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function TicketDetails() {
    const tickets = useSelector(state => state.todo.tickets);
    const { id } = useParams();
    const ticket = tickets.find(t => t.id == id);

    if (!ticket) {
        return <div className="h-screen flex justify-center items-center">Ticket not found</div>;
    }

    const { email, status, subject, flag, date } = ticket;

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-300 to-purple-400">
            <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">{subject}</h2>
                    <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">{status}</span>
                </div>
                <div className="flex items-center mb-4">
                    <MdEmail className="text-gray-700 mr-2" size="24" />
                    <span className="text-gray-800">{email}</span>
                </div>
                <div className="flex items-center mb-4">
                    <BiCalendar className="text-gray-700 mr-2" size="24" />
                    <span className="text-gray-800">{date}</span>
                </div>
                <div className="flex items-center mb-6">
                    <MdFlag className="text-red-600 mr-2" size="24" />
                    <span className="text-red-600">{flag}</span>
                </div>
                <hr className="my-6" />
            </div>
        </div>
    );
}

export default TicketDetails;