import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure to import useNavigate
import WorldMap from '../Images/WorldMap.webp';
import Watch2 from '../Images/Watch2.png';
import Watch3 from '../Images/Watch3.png';
import Watch5 from '../Images/Watch5.png';
import Watch6 from '../Images/Watch6.png';
import Watch7 from '../Images/Watch7.png';
import erring2 from '../Images/errings2.jpg';
import erring3 from '../Images/errings3.jpeg';
import erring4 from '../Images/errings4.jpg';
import errings5 from '../Images/errings5.jpg';
import bluetooth2 from '../Images/bluetooth2.jpg'; 
import bluetooth3 from '../Images/bluetooth3.jpg'; 
import earbuds4 from '../Images/earbuds4.jpg'; 
import earbuds5 from '../Images/earbuds5.jpg'; 
import earbuds6 from '../Images/earbuds6.jpg'; 
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductSection = ({ images, selectedImage, setSelectedImage, productDetails, onBuyNow }) => {
  return (
    <section className="p-4 md:p-8 bg-gray-100">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Thumbnails */}
        <div className="flex flex-row md:flex-col items-center gap-2 md:gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-16 h-12 md:w-20 md:h-16 cursor-pointer object-cover border rounded transition-all duration-300 ease-in-out hover:border-2 hover:border-pink-600"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* Main Product Image */}
        <div className="flex flex-col items-center">
          <img src={selectedImage} alt="Selected Product" className="h-80 object-cover" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col p-4 md:p-6">
          <h1 className="text-lg md:text-xl font-bold">{productDetails.title}</h1>
          <p className="text-gray-600 text-[10px] md:text-[12px] mt-4">{productDetails.description}</p>
          <div className="text-[10px] md:text-[12px] text-gray-900 mt-4">
            <p>Rating: ⭐ {productDetails.rating}</p>
          </div>
          <div className="bg-red-100 text-red-600 text-[8px] md:text-[12px] font-bold p-2 rounded-md mt-4">
            {productDetails.offer}
          </div>
          <div className="text-lg md:text-xl text-gray-900 mt-4">
            {productDetails.price} <span className="text-gray-500 line-through">{productDetails.originalPrice}</span>
          </div>
          <p className="text-gray-600 text-sm mt-2">Inclusive of all taxes</p>

          {/* Offers */}
          <div className="bg-gray-50 p-4 rounded-md shadow mt-4">
            <h2 className="font-semibold text-[10px] md:text-[12px] mb-2">Offers</h2>
            {productDetails.offers.map((offer, index) => (
              <p key={index} className="text-gray-600 text-[10px] md:text-[12px]">{offer}</p>
            ))}
          </div>
        </div>

        {/* Buy/Cart Actions */}
        <div className="flex flex-col items-center md:items-end p-4 md:p-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full">
            <div className="text-lg md:text-xl font-bold text-gray-900 mb-4">{productDetails.price}</div>
            <p className="text-gray-600 mb-2 text-[10px] md:text-[12px]">Free delivery by {productDetails.deliveryDate}</p>
            <p className="text-gray-600 mb-4 text-[10px] md:text-[12px]">Arrives before {productDetails.arrivalEvent}</p>

            {/* Quantity Selector */}
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-gray-600 mb-2 text-[10px] md:text-[12px]">Quantity</label>
              <select
                id="quantity"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-[10px] md:text-[12px]"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num}>{num}</option>
                ))}
              </select>
            </div>

            {/* Action Buttons */}
            <button className="w-full bg-yellow-400 text-black py-2 px-4 text-[10px] md:text-[12px] rounded-md hover:bg-yellow-500 mb-2">
              Add to Cart
            </button>
            <button 
              className="w-full bg-orange-600 text-white py-2 px-4 text-[10px] md:text-[12px] rounded-md hover:bg-orange-700" 
              onClick={onBuyNow} // Handle Buy Now click
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Shop = () => {
  const navigate = useNavigate();
  const [selectedWatchImage, setSelectedWatchImage] = useState(Watch5);
  const [selectedEarbudsImage, setSelectedEarbudsImage] = useState(earbuds4);
  const [selectedEarringImage, setSelectedEarringImage] = useState(erring2);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const watchImages = [Watch2, Watch3, Watch5, Watch6, Watch7];
  const earbudsImages = [bluetooth2, bluetooth3, earbuds4, earbuds5, earbuds6];
  const earringImages = [erring2, erring3, erring4, errings5];

  const productDetails = {
    title: 'Apple Watch SE (2nd Gen, 2023) [GPS 44mm]',
    description: 'Smartwatch with Silver Aluminum Case with Storm Blue Sport Band M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display.',
    rating: '4.4 (175 ratings)',
    offer: 'Great Indian Festival - 15% off',
    price: '₹27,900',
    originalPrice: '₹32,900',
    deliveryDate: '26th October',
    arrivalEvent: 'Diwali',
    offers: [
      'Bank Offer: Up to ₹1,500 discount on select cards.',
      'No Cost EMI: Starting at ₹1,353/month.',
    ],
  };

  const earbudsDetails = {
    title: 'Bluetooth Earbuds with Noise Cancellation',
    description: 'Wireless earbuds with a comfortable fit and long battery life. Perfect for music lovers and active lifestyles.',
    rating: '4.6 (250 ratings)',
    offer: 'Limited Time Offer - 10% off',
    price: '₹4,999',
    originalPrice: '₹5,499',
    deliveryDate: '30th October',
    arrivalEvent: 'Halloween',
    
    offers: [
      'Exclusive Offer: Get 10% off on first purchase.',
      'Free shipping on orders over ₹500.',
    ],
  };

  // Bridal Earrings Details
  const bridalEarringDetails = {
    title: 'Traditional Bridal Earrings',
    description: 'Exquisite traditional bridal earrings, embellished with intricate designs and shimmering stones. Perfect for any wedding or special occasion.',
    rating: '4.8 (120 ratings)',
    offer: 'Exclusive Wedding Collection - 20% off',
    price: '₹3,499',
    originalPrice: '₹4,399',
    deliveryDate: '29th October',
    arrivalEvent: 'Wedding Day',
    offers: [
      'Get additional 5% off on your first order.',
      'Free returns within 30 days.',
    ],
  };

  const handleEarbudClick = () => {
    navigate("/earbud"); // Navigate to earbud page
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-aboutprimary flex justify-center items-center h-[350px] md:h-[500px] w-full">
        <div className="absolute text-center text-white z-10">
          <p className="text-2xl md:text-6xl font-bold mb-4 cursor-pointer">Hello Guest</p>
          <p className="text-xl md:text-4xl cursor-pointer">How Can I Help You?</p>
        </div>
        <img className="absolute inset-0 object-cover h-full w-full opacity-70" src={WorldMap} alt="World Map" />
      </div>

      {/* Product Sections */}
      <ProductSection 
        images={watchImages} 
        selectedImage={selectedWatchImage} 
        setSelectedImage={setSelectedWatchImage} 
        productDetails={productDetails} 
      />

      <ProductSection 
        images={earbudsImages} 
        selectedImage={selectedEarbudsImage} 
        setSelectedImage={setSelectedEarbudsImage} 
        productDetails={earbudsDetails} 
        onBuyNow={handleEarbudClick} // Pass the click handler to ProductSection
      />

      <ProductSection 
        images={earringImages} 
        selectedImage={selectedEarringImage} 
        setSelectedImage={setSelectedEarringImage} 
        productDetails={bridalEarringDetails} 
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Shop;
