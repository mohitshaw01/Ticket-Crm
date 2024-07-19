import { useState, useEffect } from 'react';

// Define the custom hook
const UseFilteredTickets = (tickets, search, ticketView) => {
    const [filteredTickets, setFilteredTickets] = useState([]);

    useEffect(() => {
        const filtered = tickets.filter(ticket =>
            ticket.subject.toLowerCase().includes(search.toLowerCase()) &&
            (ticketView === "All" || ticket.view.toLowerCase().includes(ticketView.toLowerCase()))
        );
        setFilteredTickets(filtered);
    }, [tickets, search, ticketView]);

    return filteredTickets;
};

export default UseFilteredTickets;