import React from "react";
import WifiCalling3RoundedIcon from "@mui/icons-material/WifiCalling3Rounded";
import ToggleOffRoundedIcon from "@mui/icons-material/ToggleOffRounded";
import QuickreplySharpIcon from "@mui/icons-material/QuickreplySharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {

  const handleSubmit = () => {
    localStorage.clear();
    window.location.href = "/login";
  }

  const icons = [
    WifiCalling3RoundedIcon,
    ToggleOffRoundedIcon,
    QuickreplySharpIcon,
    AccountCircleIcon,
    ArrowDropDownIcon,
  ];

  return (
    <div
      className=" h-[70px] bg-gray-100 flex items-center justify-between pl-5 pr-5 box-border"
      style={{ width: "100%" }}
    >
      <h1 className="text-2xl font-semibold">Ticket Dashboard</h1>
      <div className="flex items-center space-x-4">
        {icons.map((IconComponent, index) => (
          <div
            key={index}
            className="hover:bg-sky-500 rounded p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
          >
            <IconComponent onClick={handleSubmit} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
