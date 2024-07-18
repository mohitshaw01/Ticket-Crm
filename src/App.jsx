import { Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login.jsx";
import Signup from "./components/Authentication/Signup.jsx";
import TicketDashboard from "../src/components/pages/TicketDashboard.jsx";
import ViewTicket from './components/ViewTicket.jsx';
import Home from "./components/pages/Home.jsx";
import AddTicket from "./components/AddTicket.jsx";
function App() {
  return (
    <>
       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sidebar" element={<TicketDashboard/>}/>
        <Route path="/tickets" element={<ViewTicket />} />
        <Route path="/addTicket" element={<AddTicket/>} />
        <Route path="/" element={<Home />} />
        {/* <Route path='/ticket/:id' element={<TicketDetail />} /> */}
      </Routes>
    </>
  );
}

export default App;