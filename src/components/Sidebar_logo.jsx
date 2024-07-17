import React from "react";
import { useNavigate } from "react-router-dom";

import {
  AutoAwesomeMosaic as AutoAwesomeMosaicIcon,
  FilterAlt as FilterAltIcon,
  ProductionQuantityLimits as ProductionQuantityLimitsIcon,
  People as PeopleIcon,
  CalendarMonth as CalendarMonthIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
  Settings as SettingsIcon,
  Feed as FeedIcon,
  AccountCircle as AccountCircleIcon,
  SettingsSuggestRounded as SettingsSuggestRoundedIcon,
} from "@mui/icons-material";

function Sidebar_logo() {
  const navigate = useNavigate();

  const handleClick = (path) => () => {
    navigate(path);
  };

  return (
    <div className="  w-16 bg-sky-600 h-[90vh]">
      <div className="flex flex-col justify-between ">
        <div className="flex flex-col gap-2.5 p-4">
          <div className="hover:bg-red-500 rounded-lg p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <AutoAwesomeMosaicIcon onClick={handleClick("/dashboard")} />
          </div>
          <div className="hover:bg-red-500 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <FilterAltIcon onClick={handleClick("/leads")} />
          </div>
          <div className="hover:bg-red-500 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <ProductionQuantityLimitsIcon onClick={handleClick("/orders")} />
          </div>
          <div className="hover:bg-red-500 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <PeopleIcon onClick={handleClick("/customers")} />
          </div>
          <div className="hover:bg-red-500 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <CalendarMonthIcon onClick={handleClick("/calendar")} />
          </div>
          <div className="hover:bg-red-500 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <ConfirmationNumberIcon onClick={handleClick("/tickets")} />
          </div>
          <div className="hover:bg-red-500 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <SettingsIcon onClick={handleClick("/configurations")} />
          </div>
          <div className="hover:bg-red-500 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <FeedIcon onClick={handleClick("/reports")} />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-2.5 ">
            <div className="hover:bg-red-500 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <AccountCircleIcon onClick={handleClick("/support")} />
            </div>
            <div className="hover:bg-red-500 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <SettingsSuggestRoundedIcon
                onClick={handleClick("/quick-settings")}
              />
            </div>
            <div>
              <div className="hover:bg-red-500 rounded p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
                <img
                  src="https://asset.brandfetch.io/id7LUFs7nU/idw6aF7rKu.jpeg"
                  alt="profile"
                  className="rounded-full w-12 h-12"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar_logo;
