import React, { useState } from 'react';

const Categories = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <section className="bg-gray-800 text-white py-8 w-full h-[60vh] flex items-center fixed left-0 top-16 z-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 w-full gap-8">
            {/* Watches */}
            <div>
              <h3 className="font-bold text-lg mb-4">Watches</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Digital Watches</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Analog Watches</a>
                </li>
              </ul>
            </div>

            {/* Home Appliances */}
            <div>
              <h3 className="font-bold text-lg mb-4">Home Appliances</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Mixer</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Microwave</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Vacuum Cleaner</a>
                </li>
              </ul>
            </div>

            {/* Consumer Electronics */}
            <div>
              <h3 className="font-bold text-lg mb-4">Consumer Electronics</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Watches</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Vacuum Cleaner</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Television</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Microwave</a>
                </li>
              </ul>
            </div>

            {/* Bottles and Cookware */}
            <div>
              <h3 className="font-bold text-lg mb-4">Bottles and Cookware</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Bottles - Single Wall</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Bottles - Double Wall</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Vacuum Mug Series</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Triply Non Stick Cookware</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
      Your Product
    </div>
  );
};

export default Categories;
