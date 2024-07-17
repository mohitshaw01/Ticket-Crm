import React from "react";
import Sidebar_logo from "../Sidebar_logo";
import Header from "../Header";
import Ticket_sidebar from "../Ticket_sidebar";
import ViewTicket from "../ViewTicket.jsx";

function TicketDashboard() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar_logo />
        <Ticket_sidebar />
        <ViewTicket />
      </div>
    </div>
  );
}

export default TicketDashboard;
