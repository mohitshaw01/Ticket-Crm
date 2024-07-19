import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from '../store/slices/TodoTickets.js';
import Ticket from './Ticket.jsx';
import UseFilteredTickets from '../Hooks/UseFilteredTickets.jsx';
import HomeSkeleton from './HomeSkeleton.jsx';

function FetchTicketRedux() {
  const dispatch = useDispatch();
  // tickets is selectiong all the tikets form the todo store.
  const tickets = useSelector((state) => state.todo.tickets);
  // ticketView is selecting the view from the view store. like all , unassigned.
  const ticketView = useSelector((state) => state.view.view);
  // search is just dipathcing datat to search store and selecting the search from the search store. // not really needed.
  const search = useSelector((state) => state.search.search);
  // console.log(search);

  // laoding is not coming from the redux store.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tickets.length === 0) {
      dispatch(fetchTickets());
    }
  }, [dispatch, tickets.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    if (tickets.length === 0) dispatch(fetchTickets());
  }, [dispatch, tickets.length]);

  // this is now on Hooks folder and is made a custome hook that fileter tiket based on search and ticketView
  // const filteredTickets = tickets.filter(ticket =>
  //   ticket.subject.toLowerCase().includes(search.toLowerCase()) &&
  //   (ticketView === "All" || ticket.view.toLowerCase().includes(ticketView.toLowerCase()))
  // );

  const filteredTickets = UseFilteredTickets(tickets, search, ticketView);

  if (loading) {
    return <HomeSkeleton />;
  }


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
