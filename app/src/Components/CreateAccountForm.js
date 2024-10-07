import React from "react";
import logo1 from "../Images/logo1.png"; // Make sure this path is correct
import Footer from './Footer'

const CreateAccountForm = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between"> {/* Set flex direction to column */}
      <div className="flex-grow flex items-center justify-center"> {/* Allow this div to grow and center content */}
        {/* Form Container with black border outside */}
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-sm sm:max-w-2xl mx-auto bg-slate-50 rounded-xl shadow-lg overflow-hidden">
            {/* Center the logo above the form */}
            <div className="flex justify-center py-4"> 
              <img className="h-8" src={logo1} alt="logo" /> {/* Increased logo size for visibility */}
            </div>

            <div className="border border-black p-6"> {/* Added border outside of the form */}
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Create New Account
              </h2>
              <form action="#">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="text-black text-sm font-semibold"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="border border-gray-300 rounded-md py-2 px-4 mt-1 w-full focus:outline-none focus:ring-1 focus:ring-black"
                      type="text"
                      id="firstName"
                     
                    />
                  </div>

                  <div>
                    <label
                      className="text-black text-sm font-semibold"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="border border-gray-300 rounded-md py-2 px-4 mt-1 w-full focus:outline-none focus:ring-1 focus:ring-black"
                      type="text"
                      id="lastName"
                    
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    className="text-black text-sm font-semibold"
                    htmlFor="phone"
                  >
                    Phone No
                  </label>
                  <input
                    className="border border-gray-300 rounded-md py-2 px-4 mt-1 w-full focus:outline-none focus:ring-1 focus:ring-black"
                    type="number"
                    id="phone"
                 
                  />
                </div>

                <div className="mt-5">
                  <label
                    className="text-black text-sm font-semibold"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="border border-gray-300 rounded-md py-2 px-4 mt-1 w-full focus:outline-none focus:ring-1 focus:ring-black"
                    type="text"
                    id="address"
                   
                  />
                </div>

                <div className="mt-5">
                  <label
                    className="text-black text-sm font-semibold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="border border-gray-300 rounded-md py-2 px-4 mt-1 w-full focus:outline-none focus:ring-1 focus:ring-black"
                    type="email"
                    id="email"
                  
                  />
                </div>

                <div className="mt-5">
                  <label
                    className="text-black text-sm font-semibold"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="border border-gray-300 rounded-md py-2 px-4 mt-1 w-full focus:outline-none focus:ring-1 focus:ring-black"
                    type="password"
                    id="password"
                   
                  />
                </div>

                <button
                  className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 rounded-md mt-6 transition duration-300 ease-in-out"
                  type="button"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CreateAccountForm;
