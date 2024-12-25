import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3f9d8832-8290-4ada-8bff-1e193e590c96/web_tall_panel/IN-en-20241216-TRIFECTA-perspective_b9e31aa0-20e4-4848-956f-30354cfaa83e_large.jpg"
          alt=""
        />

        <div className="bg-gradient-to-br from-black fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-nsans-bold">Sign Up</h1>

              <form className="w-full flex flex-col py-4 ">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                />

                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                />

                <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">
                  Sign Up
                </button>

                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2"/>Remember me 
                  </p>

                  <p>Need Help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">Already subscribed to Netflix?</span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
