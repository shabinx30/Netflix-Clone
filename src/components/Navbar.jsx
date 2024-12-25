import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLanguage } from "react-icons/io5";
import { UserAuth } from "../context/authContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  return (
    <div className="absolute w-full p-1 pl-7 pr-10 flex items-center justify-between z-50">
      <Link to="/">
        <img src="/Netflix_Logo_PMS.png" alt="Logo" className="nav-logo" />
      </Link>

      {user?.email ? (
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

          <button onClick={() => {
            logOut()
            navigate('/')
          }}>Logout</button>

          <Link to="/profile">
            <button className="bg-white px-4 py-1 rounded-3xl cursor-pointer text-black border-2 border-black ">
              {user.email[0].toUpperCase()}
            </button>
          </Link>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Navbar;
