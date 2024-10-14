import React, { useEffect } from 'react';
import WorldMap from '../Images/WorldMap.webp';
import Watch7 from '../Images/Watch7.png';
import Watch6 from '../Images/Watch6.png';
import Watch5 from '../Images/Watch5.png';
import erring2 from '../Images/errings2.jpg';
import erring3 from '../Images/errings3.jpeg';
import erring4 from '../Images/errings4.jpg';
import errings5 from '../Images/errings5.jpg';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Category Card Component
const CategoryCard = ({ title, imgSrc }) => {
  return (
    <div
      data-aos="fade-left" // AOS animation
      className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg"
    >
      <img src={imgSrc} alt={title} className="w-44 h-44 object-cover mb-3" />
      <h3 className="text-center text-[12px]  font-semibold">{title}</h3>
    </div>
  );
};

const Shop = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      {/* World Map Section */}
      <div className="relative bg-aboutprimary flex justify-center items-center h-[500px] w-full">
        {/* Text Layer */}
        <div className="absolute text-center text-white z-10">
          <p className="text-4xl md:text-6xl font-bold mb-4 cursor-pointer">Hello Guest</p>
          <p className="text-2xl md:text-4xl cursor-pointer">How Can I Help You?</p>
        </div>

        {/* World Map Image */}
        <img className="absolute inset-0 object-cover h-full w-full opacity-70" src={WorldMap} alt="World Map" />
      </div>

      {/* Gift Card Solutions Section */}
      <section className="p-4 md:p-8 bg-gray-100">
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">My Global Gift Card Solutions</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Card 1 */}
          <div className="transform transition-transform duration-300 hover:scale-105 bg-white shadow-lg p-4 md:p-6 rounded-lg flex flex-col items-center">
            <img src={Watch7} alt="Watch7" className="mx-auto mb-4 h-32 md:h-48 w-32 md:w-48 object-cover" />
            <h3 className="text-lg md:text-xl font-semibold text-center">Helix by Timex Analog Silver Dial</h3>
            <button className="mt-2 md:mt-4 bg-gray-800 hover:bg-yellow-500 text-white px-4 md:px-6 py-2 rounded-lg">
              Add To Cart
            </button>
          </div>

          {/* Card 2 */}
          <div className="transform transition-transform duration-300 hover:scale-105 bg-white shadow-lg p-4 md:p-6 rounded-lg flex flex-col items-center">
            <img src={Watch6} alt="Watch6" className="mx-auto mb-4 h-32 md:h-48 w-32 md:w-48 object-cover" />
            <h3 className="text-lg md:text-xl font-semibold text-center">Helix by Timex Analog Silver Dial</h3>
            <button className="mt-2 md:mt-4 bg-gray-800 hover:bg-yellow-500 text-white px-4 md:px-6 py-2 rounded-lg">
              Add To Cart
            </button>
          </div>

          {/* Card 3 */}
          <div className="transform transition-transform duration-300 hover:scale-105 bg-white shadow-lg p-4 md:p-6 rounded-lg flex flex-col items-center">
            <img src={Watch5} alt="Watch5" className="mx-auto mb-4 h-32 md:h-48 w-32 md:w-48 object-cover" />
            <h3 className="text-lg md:text-xl font-semibold text-center">Helix by Timex Analog Silver Dial</h3>
            <button className="mt-2 md:mt-4 bg-gray-800 hover:bg-yellow-500 text-white px-4 md:px-6 py-2 rounded-lg">
              Add To Cart
            </button>
          </div>
        </div>
      </section>

      {/* How to Sell Section */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-lg md:max-w-4xl bg-gray-50 rounded-lg shadow-lg p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">Bridal Earrings on Everdeal.in?</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={erring2}
                alt="Step 1 - Register"
                className="w-24 h-24 md:w-32 md:h-32 mb-2 rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <p className="text-black mt-2">Bridal jhumka design simple and beautiful</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={erring3}
                alt="Step 2 - Choose storage & shipping"
                className="w-24 h-24 md:w-32 md:h-32 mb-2 rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <p className="text-black mt-2">Bridal jhumka design simple and beautiful</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={erring4}
                alt="Step 3 - List your products"
                className="w-24 h-24 md:w-32 md:h-32 mb-2 rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <p className="text-black mt-2">Bridal jhumka design simple and beautiful</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={errings5}
                alt="Step 4 - Complete orders & get paid"
                className="w-24 h-24 md:w-32 md:h-32 mb-2 rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <p className="text-black mt-2">Bridal jhumka design simple and beautiful</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-yellow-400 py-4'>
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Check each product page for other buying options
        </h1>
      </div>

      <div className="flex flex-col items-start mt-8 px-4"> {/* Adjusted padding for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <CategoryCard 
            title ="OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, Playback:Upto 38hr case,4-Mic Design, IP55 Rating [Deep Grey]" 
            imgSrc="https://p.globalsources.com/IMAGES/PDT/B1197385574/TWS-earbuds.png" 
            className="mt-4" 
          />
          <CategoryCard 
            title="OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, Playback:Upto 38hr case,4-Mic Design, IP55 Rating [Deep Grey]" 
            imgSrc="https://th.bing.com/th/id/OIP.m0y6N_WOkyfByRuX2MTclQHaHa?w=1600&h=1600&rs=1&pid=ImgDetMain" 
            className="mt-4"
          />
          <CategoryCard 
            title="OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, Playback:Upto 38hr case,4-Mic Design, IP55 Rating [Deep Grey]" 
            imgSrc="https://th.bing.com/th/id/R.8afcba3408c3352d317c3fadab457520?rik=WwruUI8YWuz%2fIQ&riu=http%3a%2f%2finstitute.careerguide.com%2fwp-content%2fuploads%2f2023%2f09%2fTWS_image-1.jpg&ehk=Xd%2f0ApXGSrE8DPIT3qGkTCJKZfs%2bZwlFEW1z%2fjHzLqk%3d&risl=&pid=ImgRaw&r=0" 
            className="mt-4"
          />
          <CategoryCard 
            title="OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, Playback:Upto 38hr case,4-Mic Design, IP55 Rating [Deep Grey]" 
            imgSrc="https://i2.wp.com/www.bhphotovideo.com/images/images2500x2500/skullcandy_s2ssw_m704_indy_true_wireless_earbuds_1509557.jpg" 
            className="mt-4"
          />
          <CategoryCard 
            title="OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, Playback:Upto 38hr case,4-Mic Design, IP55 Rating [Deep Grey]" 
            imgSrc="https://th.bing.com/th/id/OIP.OZmT-e0B4_yu8Viqy0yXDgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.4&pid=1.7" 
            className="mt-4"
          />
          <CategoryCard 
            title="OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, Playback:Upto 38hr case,4-Mic Design, IP55 Rating [Deep Grey]" 
            imgSrc="https://th.bing.com/th/id/OIP.OmiIzD1g5fyF5nSWAkPmdAAAAA?rs=1&pid=ImgDetMain" 
            className="mt-4"
          />
        </div>  
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
