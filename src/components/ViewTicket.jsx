// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTickets } from "../store/slices/TodoTickets.js";
// import Ticket from "./Ticket.jsx";

// function FetchTicketRedux() {
//   const dispatch = useDispatch();
//   const tickets = useSelector((state) => state.todo.tickets);

//   const ticketView = useSelector((state) => state.view.view);


//   useEffect(() => {
//     if (tickets.length === 0) dispatch(fetchTickets());
//   }, []); 

//   return (
//     <div className=" h-[90vh] w-full overflow-scroll overflow-x-hidden ">
//       <div className=" bg-white rounded-lg shadow-lg ">
//         <div className="bg-gray-100 rounded flex flex-col  cursor-pointer">
//           {tickets.map((ticket, index) => (
//             <Ticket ticket={ticket} key={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FetchTicketRedux;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from '../store/slices/TodoTickets.js';
import Ticket from './Ticket.jsx';

function FetchTicketRedux() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.todo.tickets);
  const ticketView = useSelector((state) => state.view.view);

  useEffect(() => {
    if (tickets.length === 0) dispatch(fetchTickets());
  }, [dispatch, tickets.length]);

  // Filter data on the basis of ticketviews
  const filterTickets = (view) => {
    switch (view) {
      case 'Unassigned':
        return tickets.filter(ticket => ticket.view === 'Unassigned');
      case 'All pending':
        return tickets.filter(ticket => ticket.view === 'All Pending');
      case 'All Complete':
        return tickets.filter(ticket => ticket.view === 'All Complete');
      case 'All Junk':
        return tickets.filter(ticket => ticket.view === 'All Junk');
      case 'Assigned to me':
        return tickets.filter(ticket => ticket.view === 'Assigned to me');
      case 'Created by me':
        return tickets.filter(ticket => ticket.view === 'Created by me');
      case 'Completed by me':
        return tickets.filter(ticket => ticket.view === 'Completed by me');
      default:
        return tickets;
    }
  };

  // filtered tickets based on ticketView
  const filteredTickets = filterTickets(ticketView);

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
