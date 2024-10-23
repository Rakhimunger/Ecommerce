import React, { useState } from 'react';
import Earbudimage from '../Images/Earbudimage.jpg'; // Path to the hero image
import bluetooth1 from '../Images/bluetooth1.jpg'; // Path to local image for Noise Buds N1 Pro
import bluetooth2 from '../Images/bluetooth2.jpg'; // Path to local image for Noise Buds Xero
import bluetooth3 from '../Images/bluetooth3.jpg'; // Path to local image for Noise Buds Xero
import earbuds4 from '../Images/earbuds4.jpg'; // Path to local image for Noise Buds Xero
import earbuds5 from '../Images/earbuds5.jpg'; // Path to local image for Noise Buds Xero
import earbuds6 from '../Images/earbuds6.jpg'; // Path to local image for Noise Buds Xero


// Product Data
const products = [
  {
    id: 1,
    image: earbuds4,
    title: 'Noise Buds X Prime',
    description: 'Truly wireless earbuds with 120 hours of battery life.',
    price: '₹1,399',
    discount: '69% off',
    rating: 3.9,
    reviews: 2573,
    mrp: '₹4,499.00',
    availableColors: ['#FF1493', '#000000', '#C0C0C0'],
    deliveryDate: 'Wednesday 23 October',
  },
  {
    id: 2,
    image: bluetooth3,
    title: 'Noise Newly Launched Buds Verve',
    description: '2-in-Ear Truly Wireless Earbuds.',
    price: '₹1,299',
    discount: '68% off',
    rating: 4.3,
    reviews: 137,
    mrp: '₹3,999.00',
    availableColors: ['#D3D3D3', '#FFC0CB', '#FF1493'],
    deliveryDate: 'Thursday 24 October',
  },
  {
    id: 2,
    image: bluetooth2,
    title: 'Noise Newly Launched Buds Verve',
    description: '2-in-Ear Truly Wireless Earbuds.',
    price: '₹1,299',
    discount: '68% off',
    rating: 4.3,
    reviews: 137,
    mrp: '₹3,999.00',
    availableColors: ['#D3D3D3', '#FFC0CB', '#FF1493'],
    deliveryDate: 'Thursday 24 October',
  },
  {
    id: 2,
    image: earbuds4,
    title: 'Noise Newly Launched Buds Verve',
    description: '2-in-Ear Truly Wireless Earbuds.',
    price: '₹1,299',
    discount: '68% off',
    rating: 4.3,
    reviews: 137,
    mrp: '₹3,999.00',
    availableColors: ['#D3D3D3', '#FFC0CB', '#FF1493'],
    deliveryDate: 'Thursday 24 October',
  },
  {
    id: 2,
    image: earbuds5,
    title: 'Noise Newly Launched Buds Verve',
    description: '2-in-Ear Truly Wireless Earbuds.',
    price: '₹1,299',
    discount: '68% off',
    rating: 4.3,
    reviews: 137,
    mrp: '₹3,999.00',
    availableColors: ['#D3D3D3', '#FFC0CB', '#FF1493'],
    deliveryDate: 'Thursday 24 October',
  },
  {
    id: 2,
    image: earbuds6,
    title: 'Noise Newly Launched Buds Verve',
    description: '2-in-Ear Truly Wireless Earbuds.',
    price: '₹1,299',
    discount: '68% off',
    rating: 4.3,
    reviews: 137,
    mrp: '₹3,999.00',
    availableColors: ['#D3D3D3', '#FFC0CB', '#FF1493'],
    deliveryDate: 'Thursday 24 October',
  },
];

// Reusable Card Component
const Card = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);


  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out p-4" >
      {/* Product Image */}
      <img className="w-full h-52 object-contain" src={product.image} alt={product.title} />

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>

        {/* Color Options (Circle Dots) */}
        <div className="flex space-x-2 mt-2">
          {product.availableColors.map((color, index) => (
            <div
              key={index}
              className={`w-5 h-5 rounded-full cursor-pointer border border-gray-300 ${
                selectedColor === color ? 'ring-2 ring-blue-400' : ''
              }`} // Add ring only to selected color circle
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        {/* Price and Discount */}
        <div className="flex items-baseline justify-between mt-3">
          <div>
            <span className="text-lg font-bold text-gray-800">{product.price}</span>
            <span className="text-sm text-red-600 ml-2">{product.discount}</span>
          </div>
          <div className="text-sm text-gray-500 line-through">{product.mrp}</div>
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center mt-1 text-yellow-500 ">
          {Array(Math.floor(product.rating))
            .fill()
            .map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927a1 1 0 011.902 0l1.364 3.798a1 1 0 00.95.69h3.96a1 1 0 01.584 1.81l-3.086 2.23a1 1 0 00-.36 1.118l1.364 3.798a1 1 0 01-1.54 1.119L10 13.673l-3.227 2.338a1 1 0 01-1.54-1.119l1.364-3.798a1 1 0 00-.36-1.118L3.21 8.225a1 1 0 01.584-1.81h3.96a1 1 0 00.95-.69l1.364-3.798z" />
              </svg>
            ))}
          <span className="ml-2 text-gray-600">{product.reviews} reviews</span>
        </div>

        {/* Prime Badge and Delivery Info */}
        <div className="flex items-center mt-2 text-gray-600">
          <span className="text-sm">{`Get it by ${product.deliveryDate}`}</span>
        </div>
      </div>
    </div>
  );
};

// Main Earbud Component
const Earbud = () => {
  
  return (
    <div>
      {/* Hero Image Section */}
      <div className="h-96">
        <img src={Earbudimage} alt="Earbudimage" className="w-full h-full object-cover" />

        {/* Navigation and Search Section */}
        <div className="h-20 bg-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-black">Noise</h1>
            <button className="ml-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500">+Follow</button>
          </div>
         < svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 20" >
         <g fill="currentColor"><path d="M9 3a1 1 0 0 1 2 0v10.5a1 1 0 1 1-2 0V3Z"></path><path d="M10.64 2.768a1 1 0 1 0-1.28-1.536l-3 2.5a1 1 0 0 0 1.28 1.536l3-2.5Z"></path><path d="M9.36 2.768a1 1 0 1 1 1.28-1.536l3 2.5a1 1 0 1 1-1.28 1.536l-3-2.5ZM13 9a1 1 0 1 1 0-2h1c1.623 0 3 1.165 3 2.692v7.616C17 18.835 15.623 20 14 20H6c-1.623 0-3-1.165-3-2.692V9.692C3 8.165 4.377 7 6 7h1a1 1 0 0 1 0 2H6c-.586 0-1 .35-1 .692v7.616c0 .342.414.692 1 .692h8c.586 0 1-.35 1-.692V9.692C15 9.35 14.586 9 14 9h-1Z"></path></g></svg>


          <ul className="flex space-x-6 items-center text-black">
            <li className="hover:underline cursor-pointer">HOME</li>
            <li className="hover:underline cursor-pointer font-semibold">AUDIO TOP PICKS</li>
            <li className="hover:underline cursor-pointer">BLUETOOTH EARBUDS</li>
            <li className="hover:underline cursor-pointer">SMARTWATCHES</li>
            <li className="hover:underline cursor-pointer">MORE</li>
          </ul>

          {/* Search Bar aligned to the right */}
          <div className="flex items-center w-1/4 h-10 bg-white rounded border border-gray-300">
            <input
              type="text"
              className="flex-grow px-4 py-1 outline-none rounded-l"
              placeholder="Search all Noise"
            />
            <button className="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="p-6 bg-gray-100 mt-20">
        <h2 className="text-3xl font-bold text-center mb-6">Our Featured Earbuds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dynamically Generate Cards */}
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Earbud;
