import React from "react";
import { Link } from "react-router-dom";
import { IoLanguage } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="absolute w-full p-1 pl-7 pr-10 flex items-center justify-between z-50">
      <Link to="/">
        <img src="/Netflix_Logo_PMS.png" alt="Logo" className="nav-logo" />
      </Link>

      <div>
        <div className="language">
          <IoLanguage></IoLanguage>
          <select className="language-dropdown">
            <option defaultValue="english" value="english">
              English
            </option>
            <option value="hindi">हिन्दी</option>
          </select>
        </div>

        <Link to="/login">
          <button className="bg-white px-4 py-1 rounded-3xl cursor-pointer text-black">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
