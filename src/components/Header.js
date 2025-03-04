import React from "react";
import "../index.css";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
const Header = () => {
  const [btnRes, setbtnRes] = useState("Login");
  const onlineStatus = useUserStatus();
  return (
    <div className="header">
      <div className="logo">
        <img alt="" src={LOGO_URL} className="w-24" />
      </div>
      <div className="">
        <ul className="flex p-10">
          <li>Online Status: {onlineStatus ? "Online" : "Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            onClick={() => {
              setbtnRes("Logout");
            }}
          >
            {btnRes}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
