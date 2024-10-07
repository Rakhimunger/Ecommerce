import React, { useState } from "react";
import vivo from "../Images/vivo.webp"; // Correct image import
import Amazon from "../Images/Amazon.jpg"; // Correct image import

const Wishlist = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "ASUS Vivobook Go 14, AMD Ryzen 3 7320U, 14 (35.56 cm) FHD, Thin and Light Laptop (8 GB RAM/512GB SSD/Win11/Office 2021/42WHr /Black/1.38 kg), E1404FA-NK325WS Operating System: Windows 11 Home | Special Feature: Anti Glare Coating | Connectivity: Bluetooth; Ethernet; HDMI; USB; Wi-Fi",
      image: vivo, // Use the imported image correctly
      price: 600.7,
      rating: 5,
    },
    // You can add more items similarly
  ]);

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  // Render a single cart item
  const renderCartItem = (item) => (
    <div key={item.id} className="flex flex-col md:flex-row items-start mb-4 p-4 border-b">
      <img src={item.image} alt={item.name} className="h-16  object-cover mb-2 md:mb-0 md:mr-4" />
      <div className="flex-grow">
        <h3 className="text-[15px] ">{item.name}</h3>
        <p className="text-sm md:text-base">₹{item.price.toFixed(2)}</p>
        <div className="flex items-center">
          {[...Array(item.rating)].map((_, i) => (
            <span key={i} className="text-yellow-500">★</span>
          ))}
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="mt-2 text-sm md:text-base px-4 py-2 bg-yellow-500 text-black rounded"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="Amazon bg-gray-100 min-h-screen">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start mx-4 md:mx-10">
        <img className="h-16 mt-4" src={Amazon} alt="Amazon" />
        <div className="border-2 bg-white mt-4 rounded-lg p-4 shadow-md w-full md:w-1/4">
          <div className="text-lg font-semibold">Subtotal ({cartItems.length} items): ₹{subtotal.toFixed(2)}</div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="gift-checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <label htmlFor="gift-checkbox" className="ml-2 text-gray-700 text-sm md:text-base">This Order Contains a gift</label>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 text-sm rounded w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className="text-2xl font-bold mx-4">
        <span className="mx-2">Your Cart Items</span>
      </div>
      <div className="border-b pb-4 mx-4"></div>
      <div className="p-4 max-w-6xl mx-auto">
        {/* Flex column for cart items to stack vertically on mobile */}
        <div className="flex flex-col space-y-4">
          {cartItems.map(renderCartItem)}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
