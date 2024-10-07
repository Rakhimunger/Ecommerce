import React from 'react';
import logo from "../Images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Get to Know Us */}
            <div>
              <h5 className="font-bold mb-4">Get to Know Us</h5>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Press Releases</a></li>
              </ul>
            </div>

            {/* Connect with Us */}
            <div>
              <h5 className="font-bold mb-4">Connect with Us</h5>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
              </ul>
            </div>

            {/* Make Money with Us */}
            <div>
              <h5 className="font-bold mb-4">Make Money with Us</h5>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">Sell on SN Market</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">SN Market Accelerator</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Global Selling</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Become an Affiliate</a></li>
                <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
              </ul>
            </div>

            {/* Let Us Help You */}
            <div>
              <h5 className="font-bold mb-4">Let Us Help You</h5>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">COVID-19 and SN Market</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Your Account</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Returns Centre</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">100% Purchase Protection</a></li>
                <li><a href="#" className="hover:underline">Help</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <img className="h-8 mx-auto md:mx-0" src={logo} alt="Logo" />
            </div>

            {/* Language and Country Selectors */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <select className="bg-gray-600 text-gray-300 border-none outline-none focus:ring-2 focus:ring-yellow-500 font-medium rounded-lg text-sm px-4 py-2">
                <option>English</option>
                <option>Hindi</option>
              </select>
              <select className="bg-gray-600 text-gray-300 border-none outline-none focus:ring-2 focus:ring-yellow-500 font-medium rounded-lg text-sm px-4 py-2">
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
