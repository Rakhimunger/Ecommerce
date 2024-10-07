import React, { useState } from 'react';
import Sign from './Sign';
import { Link } from 'react-router-dom';
import User from './User';
import UserProfile from './UserProfile';
import ChangePassword from './ChangePassword';
import DeletAccount from './DeletAccount';
const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>  
      
       <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     <Link to="/Helloguest"> <span className="text-white cursor-pointer">Hello Guest</span></Link>
      
      {isOpen && (
        
        <div className="absolute top-full right-0 bg-slate-800 text-white p-5 shadow-lg w-80 z-20 md:h-96">

          <ul>
            <li className="hover:bg-gray-700 text-[18px] p-2 cursor-pointer">Your Account</li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer" onClick={() => openInNewTab('/profile')}>

              
              <Link to="/UserProfile">Profile</Link>
            
         
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer" onClick={() => openInNewTab('/wishlist')}>
              
              <Link to="/Checkout">Wishlist</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer" onClick={() => openInNewTab('/orders')}>
              Your Orders
              
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer" onClick={() => openInNewTab('/ChangePassword')}>
               <Link to="/ChangePassword">Change Password</Link> 
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer" onClick={() => openInNewTab('/DeletAccount')}>
             <Link to="/DeletAccount"> Delete Your Account</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 cursor-pointer" onClick={() => openInNewTab('/sign-out')}>
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
    </div>
 
  );
};

export default AccountMenu;