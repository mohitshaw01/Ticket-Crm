import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from '../store/slices/TodoTickets.js';
import Ticket from './Ticket.jsx';

function FetchTicketRedux() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.todo.tickets);
  const ticketView = useSelector((state) => state.view.view);
  const search = useSelector((state) => state.search.search);
  // console.log(search);

  useEffect(() => {
    if (tickets.length === 0) dispatch(fetchTickets());
  }, [dispatch, tickets.length]);

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(search.toLowerCase()) &&
    (ticketView === "All" || ticket.view.toLowerCase().includes(ticketView.toLowerCase()))
  );

  return (
    <div className="h-[90vh] w-full overflow-scroll overflow-x-hidden">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="bg-gray-100 rounded flex flex-col cursor-pointer">
          {filteredTickets?.map((ticket, index) => (
            <Ticket ticket={ticket} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FetchTicketRedux;
