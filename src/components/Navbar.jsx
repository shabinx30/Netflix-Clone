import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLanguage } from "react-icons/io5";
import { UserAuth } from "../context/authContext";

const Navbar = () => {
  const { user } = UserAuth();

  return (
    <div className="fixed w-full p-1 pl-7 pr-10 flex items-center justify-between z-50 bg-gradient-to-b from-black/80 to-transparent">
      <Link to="/">
        <img src="/Netflix_Logo_PMS.png" alt="Logo" className="nav-logo" />
      </Link>

      {user?.email ? (
        <div>
          <div className="language">
            <IoLanguage />
            <select className="language-dropdown">
              <option defaultValue="english" value="english">
                English
              </option>
              <option value="hindi">हिन्दी</option>
            </select>
          </div>

          <Link to="/profile">
            <button className="bg-white px-4 py-1 rounded-3xl cursor-pointer text-black border-2 border-black hover:bg-gray-700 hover:text-white duration-300">
              {user.email[0].toUpperCase()}
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="language">
            <IoLanguage />
            <select className="language-dropdown">
              <option defaultValue="english" value="english">
                English
              </option>
              <option value="hindi">हिन्दी</option>
            </select>
          </div>

          <Link to="/login">
            <button className="bg-white px-4 py-1 rounded-3xl cursor-pointer text-black hover:bg-gray-700 hover:text-white duration-300">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
