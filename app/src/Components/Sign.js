// 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../Images/logo1.png";
import axios from "axios"

const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/create-account");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://e-commerce-backend-lc8o.onrender.com/users/login",payload
      );

      if (response.data.message === "Loggedin Successfully") {
        navigate("/"); 
      } else {
        setError(response.data.message || "Login failed. Please check your credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
    
      <div className="mb-4">
        <img className="h-8" src={logo1} alt="logo" />
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-black min-h-[200px] p-4">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Sign-In</h2>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-[15px] text-black" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-1.5 border rounded focus:outline-none focus:ring-1 focus:ring-black"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-[15px] text-black" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-1.5 border rounded focus:outline-none focus:ring-1 focus:ring-black"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="mt-1 text-slate-400 cursor-pointer text-[15px]">
                Forget Password
              </p>
            </div>

            <button
              className="w-full text-[12px] bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 rounded"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="mt-3 p-2 border-t border-gray-300">
            <p className="text-sm text-black">
              By continuing, you agree to SN Market Conditions of Use and Privacy Notice.
            </p>
          </div>
          <button
            onClick={handleCreateAccountClick}
            className="mt-3 w-full bg-yellow-500 text-[12px] hover:bg-yellow-600 text-black font-semibold py-2 rounded"
          >
            Create a New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sign;
