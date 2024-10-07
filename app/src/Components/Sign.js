import React from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../Images/logo1.png";

const Sign = () => {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/create-account"); // Navigates to the route defined in App.js
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center"> 
      {/* Logo at the top */}
      <div className="mb-4"> {/* Increased margin below the logo */}
        <img className="h-8" src={logo1} alt="logo" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-black min-h-[200px] p-4"> {/* Increased padding */}
          <h2 className="text-lg font-bold mb-4 text-gray-800">Sign-In</h2> {/* Increased margin below the title */}
          <form>
            <div className="mb-3"> {/* Increased margin-bottom */}
              <label className="block text-[15px] text-black" htmlFor="email">Email</label>
              <input
                className="w-full px-3 py-1.5 border rounded focus:outline-none focus:ring-1 focus:ring-black"
                type="email"
              
                required
              />
            </div>
            <div className="mb-3"> {/* Increased margin-bottom */}
              <label className="block text-[15px] text-black" htmlFor="password">Password</label>
              <input
                className="w-full px-3 py-1.5 border rounded focus:outline-none focus:ring-1 focus:ring-black"
                type="password"
              
                required
              />
              <p className="mt-1 text-slate-400 cursor-pointer text-[15px]">Forget Password</p>
            </div>

            <button
              className="w-full text-[12px] bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 rounded"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="mt-3 p-2 border-t border-gray-300"> {/* Added border and padding */}
            <p className="text-sm text-black">By continuing, you agree to SN Market Conditions of Use and Privacy Notice.</p>
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
