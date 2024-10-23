import React, { useState } from "react";
import logo1 from "../Images/logo1.png";  
import Footer from './Footer';
import { Link, useNavigate } from "react-router-dom";

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://e-commerce-backend-lc8o.onrender.com/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          address: formData.address,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Account created successfully!');
        navigate('/signin');
      } else {
        alert(data.message || 'Failed to create account');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Link to="/">
        <div className="mb-6">
          <img className="h-8 mx-auto" src={logo1} alt="logo" />
        </div>
      </Link>
      
      <div className="bg-white p-12 rounded-lg border border-black shadow-lg w-full max-w-3xl border-slategray">
        <h2 className="text-3xl font-semibold text-center mb-8">Create New Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                Phone No
              </label>
              <input
                type="text"
                id="phone"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-gray-800 text-white py-3 px-8 rounded w-full hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;
