import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../store/slices/TicketSlice.js";
import Ticket from "./Ticket.jsx";

function FetchTicketRedux() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticket.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);


  return (
    <div className=" h-[90vh] w-full overflow-scroll overflow-x-hidden ">
      <div className=" bg-white rounded-lg shadow-lg ">
        <div className="bg-gray-100 rounded flex flex-col  cursor-pointer">
          {tickets.map((ticket, index) => (
            <Ticket ticket={ticket} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FetchTicketRedux;
