import { useState, useEffect } from 'react';

//custom hook to filter tickets on the basis of tickets, search and ticketView.
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