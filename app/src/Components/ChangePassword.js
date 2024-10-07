import React, { useState } from "react";
import logo1 from "../Images/logo1.png";

const ChangePassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality for sending email to reset password
    alert(`Password reset instructions sent to: ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <img className="h-8 mb-6 -mt-16" src={logo1} alt="logo" /> {/* Adjusted margins */}
      
      <div className="bg-slate-50 p-8 rounded-lg shadow-lg w-full max-w-sm border border-black">
        <h3 className="text-xl font-semibold text-center mb-6">Change Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <p className="text-sm text-black mb-4">
            Please check your email for instructions on resetting your password.
          </p>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-yellow-400 transition"
          >
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
