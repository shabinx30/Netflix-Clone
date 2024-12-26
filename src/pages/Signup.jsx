import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";

const Signup = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  // if(user){
  //   navigate('/')
  // }

  const handleFormSubmition = (e) => {
    e.preventDefault()

    try {
      signUp(email, password)
      navigate('/')
    } catch (error) {
      console.log(error);
      
    }
    
  }

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
          alt=""
        />

        <div className="bg-black/50 fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-nsans-bold">Sign Up</h1>

              <form className="w-full flex flex-col py-4" onSubmit={handleFormSubmition}>
              <input
                    className="p-4 my-2 bg-white/5 rounded border border-white/30"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
  
                  <input
                    className="p-4 my-2 bg-white/5 rounded border border-white/30"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
  
                  <button className="bg-red-600 py-2 my-2 mb-10 rounded font-nsans-regular hover:bg-red-700 duration-300">
                    Sign Up
                  </button>

                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={rememberLogin}
                      onChange={(e) => setRememberLogin(!rememberLogin)}
                    />
                    Remember me
                  </p>

                  <p className="hover:text-white duration-300 cursor-pointer">Need Help?</p>
                </div>
                <p className="my-4 hover:underline">
                  <span className="text-gray-600 mr-2">
                    Already subscribed to Netflix?
                  </span>
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
