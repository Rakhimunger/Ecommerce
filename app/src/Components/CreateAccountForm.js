import React, { useState } from "react";
import logo1 from "../Images/logo1.png";  
import Footer from './Footer';

const CreateAccountForm = () => {
  // State variables to manage form inputs
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Create a payload object
    const payload = {
      firstName,
      lastName,
      phone,
      address,
      email,
      password,
    };

    try {
      // Send a POST request to the registration endpoint
      const response = await fetch("https://e-commerce-backend-lc8o.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Registration was successful
        console.log("User registered successfully");
        // Optionally, redirect to a different page or display a success message
      } else {
        // Handle server errors
        const errorData = await response.json();
        setError(errorData.message || "Registration failed");
      }
    } catch (err) {
      // Handle client-side errors
      console.error("Error registering user:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-80 bg-white flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-sm sm:max-w-2xl mx-auto bg-slate-50 rounded-xl shadow-lg overflow-hidden">
            <div className="flex justify-center py-4">
              <img className="h-8" src={logo1} alt="logo" />
            </div>
            <div className="border border-black p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Create New Account
              </h2>
              {error && <p className="text-red-500 mb-3">{error}</p>}
              <form onSubmit={handleSubmit}>
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
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
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
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
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
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 rounded-md mt-6 transition duration-300 ease-in-out"
                  type="submit"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default CreateAccountForm;
