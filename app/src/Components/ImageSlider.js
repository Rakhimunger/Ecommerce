import React, { useState } from 'react';

// Ensure the correct paths and case-sensitive filenames
import watch1 from '../Images/watch1.png'; 
import Watch2 from '../Images/Watch2.png';
import Watch3 from '../Images/Watch3.png';
import Watch4 from '../Images/Watch4.png';
import Watch5 from '../Images/Watch5.png';
import Watch6 from '../Images/Watch6.png';
import Watch7 from '../Images/Watch7.png';
import Watch8 from '../Images/Watch8.png';
import Watch9 from '../Images/Watch9.png';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, title: 'Helix by Timex Analog Silver Dial', price: 2795, image: watch1, rating: 1 },
    { id: 2, title: 'Helix Analog Silver Dial Men’s Watch', price: 2395, image: Watch2, rating: 2 },
    { id: 3, title: 'Helix TW052HL02 Women’s Watch', price: 2995, image: Watch3, rating: 3 },
    { id: 4, title: 'Timex Digital Watch', price: 1995, image: Watch4, rating: 4 },
    { id: 5, title: 'Helix Analog Gold Dial Watch', price: 3495, image: Watch5, rating: 5 },
    { id: 6, title: 'Timex Sports Watch', price: 1595, image: Watch6, rating: 3 },
    { id: 7, title: 'Helix Smart Analog Watch', price: 3995, image: Watch7, rating: 4 },
    { id: 8, title: 'Timex Silver Dial Women’ Watch', price: 2595, image: Watch8, rating: 2 },
    { id: 9, title: 'Timex Silver Dial Women’ Watch', price: 2595, image: Watch9, rating: 2 },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 >= items.length ? 0 : prevIndex + 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 < 0 ? items.length - 3 : prevIndex - 3));
  };

  const displayedItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative w-full bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedItems.map((item) => (
          <div key={item.id} className="border bg-white border-gray-300 rounded-lg shadow-md p-4 text-center">
            <h3 className="text-[16px] text-left font-semibold mb-2">{item.title}</h3>
            <p className="text-[18px] text-left font-bold mb-2">₹{item.price}</p>
            <img src={item.image} alt={item.title} className="h-32 mx-auto mb-4 object-cover" />
            <div className="flex justify-center mb-4">
              {[...Array(item.rating)].map((_, index) => (
                <span key={index} className="text-yellow-500">★</span>
              ))}
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-2 md:left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded hover:bg-yellow-500 w-10 h-10 flex items-center justify-center"
        onClick={prevSlide}
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-2 md:right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded hover:bg-yellow-500 w-10 h-10 flex items-center justify-center"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
