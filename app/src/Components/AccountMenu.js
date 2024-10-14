import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/Helloguest">
          <span className="text-white cursor-pointer">Hello Guest </span>
        </Link>

        {isOpen && (
          <div className="absolute top-full right-0 mt-5  bg-slate-800 text-white p-5 shadow-lg w-64 z-20 md:h-80">
            <ul>
              <li className="hover:bg-gray-700 text-[18px] p-2 cursor-pointer">
                Your Account
              </li>
              <li className="hover:bg-gray-700 p-2 cursor-pointer">
                <Link to="/UserProfile">Profile</Link>
              </li>
              <li className="hover:bg-gray-700 p-2 cursor-pointer">
                <Link to="/Wishlist">Wishlist</Link>
              </li>
              <li className="hover:bg-gray-700 p-2 cursor-pointer">
                <Link to="/Orders">My Orders</Link>
              </li>
              <li className="hover:bg-gray-700 p-2 cursor-pointer">
                <Link to="/ChangePassword">Change Password</Link>
              </li>
              <li className="hover:bg-gray-700 p-2 cursor-pointer">
                <Link to="/DeletAccount">Delete Your Account</Link>
              </li>
              <li className="hover:bg-gray-700 p-2 cursor-pointer">
                <Link to="/sign-out">Sign Out</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountMenu;
