import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

function UserProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
  });

  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://e-commerce-backend-lc8o.onrender.com/users/profile/6718adbb077cfeae2579ae30"
      );
      const userProfile = response.data.data;
      setFormData({
        name: userProfile.name,
        lastName: userProfile.lastname,
        phone: userProfile.phone,
        address: userProfile.address,
        email: userProfile.email,
      });
    } catch (error) {
      console.error("There was an error fetching the data!", error);
      setError("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="mx-4 my-10">
      <div className="user-profile p-6 ring-offset-gray-600 bg-white ring-inset rounded w-full shadow-md">
        <h1 className="text-2xl font-bold mb-6">User Profile</h1>

        <div className="space-y-4 text-left">
          <p className="flex space-x-4">
            <span className="font-bold w-1/3">First Name:</span>
            <span>{formData.name}</span>
          </p>
          <p className="flex space-x-4">
            <span className="font-bold w-1/3">Last Name:</span>
            <span>{formData.lastName}</span>
          </p>
          <p className="flex space-x-4">
            <span className="font-bold w-1/3">Phone:</span>
            <span>{formData.phone}</span>
          </p>
          <p className="flex space-x-4">
            <span className="font-bold w-1/3">Address:</span>
            <span>{formData.address}</span>
          </p>
          <p className="flex space-x-4">
            <span className="font-bold w-1/3">Email:</span>
            <span>{formData.email}</span>
          </p>

          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleProfileClick}
          >
            Edit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
