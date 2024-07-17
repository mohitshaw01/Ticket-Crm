import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-400 h-[100vh] flex flex-col justify-center items-center space-y-10">
      <h1 className="text-4xl">Welcome to the Ticketing System</h1>
      <Link to="/login" className='text-white/80 px-2 py-1 border-2 rounded-lg'>Get Started</Link>
    </div>
  );
}

export default Home;
