import React, { useState } from "react";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import { useNavigate } from "react-router-dom";
import { setView } from "../store/slices/setView";
import { useDispatch } from "react-redux";

function Ticket_sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const views = [
    "Unassigned",
    "All pending",
    "All Complete",
    "All Junk",
    "Assigned to me",
    "Created by me",
    "Completed by me",
  ];

  const [selectedView, setSelectedView] = useState("All");

  const handleClick = (view) => {
    dispatch(setView(view));
    setSelectedView(view);
  };

  return (
    <div className="bg-gray-100  inline-flex h-[90vh] items-start  w-[12rem]">
      <div className="sidebar border-1 p-2">
        <div className="p-2 flex items-center">
          <h3 className="mr-2">Views</h3>
          <div className="flex p-5">
            <FolderCopyOutlinedIcon className="mr-5" />

            <NoteAddOutlinedIcon
              className="mr-2 cursor-pointer hover:bg-red-300 rounded hover:scale-110 transition duration-700 ease-in"
              onClick={() => navigate("/addTicket")}
            />
          </div>
        </div>
        <div>
          {views.map((view) => (
            <div
              key={view}
              className={`cursor-pointer p-2 my-2 transition duration-150 ease-in-out ${
                selectedView === view
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-black"
              } hover:scale-105 hover:bg-blue-500 hover:text-white`}
              onClick={() => handleClick(view)}
            >
              {view}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ticket_sidebar;