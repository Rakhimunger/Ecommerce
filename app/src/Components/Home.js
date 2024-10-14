import React from "react";
import MyCarousel from "./MyCarousel";
import Watch1 from "../Images/watch1.png";
import Watch2 from "../Images/Watch2.png";
import P from "../Images/P.jpg";
import P2 from "../Images/P2.jpg";
import Oven from "../Images/oven.png";
import vivo from "../Images/vivo.webp";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/Shop");
  }
  return (
    
    <div className="bg-gray-100 min-h-screen"> 
    
      <MyCarousel />

 
      <div className="flex flex-col md:flex-row md:justify-between h-auto" onClick={handleClick}>
        <div className="box-content md:w-1/2 mx-4 sm:mx-4 mt-6 bg-white p-4 sm:p-6 rounded-md shadow-md overflow-hidden">
          <p className="text-sm sm:text-base mb-4 truncate" >
            Helix Smart Metal fit 3.0 Smartwatch, Continuous Heart Rate Monitor,
            SPO2 Monitor, Activity tracking and sleep tracking, Bluetooth
            Calling, Temperature sensor (Pink)
          </p>
          <p className="font-bold text-lg sm:text-xl mb-4">Rs. 3995</p>
          <div className="flex justify-center">
            <img className="h-36 sm:h-48 object-contain" src={Watch1} alt="Smartwatch1" />
          </div>
          <div className="flex justify-center mt-6">
  <button
    type="button"
    className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
  >
    Add to Cart
  </button>
</div>
        </div>

        <div className="box-content md:w-1/2 mx-4 sm:mx-6 mt-6 bg-white p-4 sm:p-6 rounded-md shadow-md overflow-hidden">
          <p className="text-sm sm:text-base mb-4 truncate">
            Helix METALFIT 2.0 Smart Watch, Bluetooth Calling, 1.5HD IPS
            Full-Touch Display, SPO2, Body Temperature & BP Measurement, 20
            Sports Modes and Unlimited Watch Faces.
          </p>
          <p className="font-bold text-lg sm:text-xl mb-4">Rs. 5999</p>
          <div className="flex justify-center">
            <img className="h-36 sm:h-48 object-contain" src={Watch2} alt="Smartwatch2" />
          </div>
          <div className="flex justify-center mt-6">
  <button
    type="button"
    className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
  >
    Add to Cart
  </button>
</div>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row md:justify-between h-auto mt-6">
        <div className="box-content md:w-1/3 mx-4 sm:mx-6 mt-6 bg-white p-4 sm:p-6 rounded-md shadow-md">
          <p className="text-sm sm:text-base mb-4">
            Philips SpeedPro Cordless Stick vacuum cleaner - FC6723/01 Cordless
            Vacuum Cleaner (Star White)
          </p>
          <p className="font-bold text-lg sm:text-xl mb-4">Rs. 3995</p>
          <div className="flex justify-center">
            <img className="h-36 sm:h-48" src={P} alt="Vacuum1" />
          </div>
          <div className="flex justify-center mt-10">
  <button
    type="button"
    className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
  >
    Add to Cart
  </button>
</div>
        </div>

        <div className="box-content md:w-1/3 mx-4 sm:mx-6 mt-6 bg-white p-4 sm:p-6 rounded-md shadow-md">
          <p className="text-sm sm:text-base mb-4">
            Philips SpeedPro Aqua Cordless Vacuum Cleaner FC6728/01 with Vacuum
            and mop System Denim Blue Metallic
          </p>
          <p className="font-bold text-lg sm:text-xl mb-4">Rs. 39995</p>
          <div className="flex justify-center">
            <img className="h-36 sm:h-48" src={P2} alt="Vacuum2" />
          </div>
          <div className="flex justify-center mt-10">
  <button
    type="button"
    className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
  >
    Add to Cart
  </button>
</div>
        </div>

        <div className="box-content md:w-1/3 mx-4 sm:mx-6 mt-6 bg-white p-4 sm:p-6 rounded-md shadow-md">
          <p className="text-sm sm:text-base mb-4">
            Philips Digital Oven Toaster Grill 55 Litre 2000W, with Opti Temp
            Technology, Temperature control, Convection Mode, Chamber light and
            11 pre-set menus, Inner Lamp
          </p>
          <p className="font-bold text-lg sm:text-xl mb-4">Rs. 39995</p>
          <div className="flex justify-center">
            <img className="h-36 sm:h-48" src={Oven} alt="Oven" />
          </div>
          <div className="flex justify-center mt-6">
  <button
    type="button"
    className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
  >
    Add to Cart
  </button>
</div>
        </div>
      </div>

    
      <div className="flex flex-col items-center mt-6">
        <div className="bg-white h-auto sm:w-4/5 p-6 rounded-md shadow-md">
          <p className="text-sm sm:text-base mb-4">
            ASUS Vivobook Go 14, AMD Ryzen 3 7320U, 14 (35.56 cm) FHD, Thin and
            Light Laptop (8 GB RAM/512GB SSD/Win11/Office 2021/42WHr /Black/1.38
            kg), E1404FA-NK325WS
          </p>
          <div className="flex justify-center">
            <img className="h-36 sm:h-48" src={vivo} alt="vivo" />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      
      <ImageSlider />

      <div className="flex flex-col items-center mt-6">
        <div className="bg-white h-auto sm:w-4/5 p-6 rounded-md shadow-md">
          <p className="text-sm font-medium sm:text-base mb-4">
            ASUS Vivobook Go 14, AMD Ryzen 3 7320U, 14 (35.56 cm) FHD, Thin and
            Light Laptop (8 GB RAM/512GB SSD/Win11/Office 2021/42WHr /Black/1.38
            kg), E1404FA-NK325WS
          </p>
          <div className="flex justify-center">
            <img className="h-36 sm:h-48" src={vivo} alt="vivo" />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 h-16 flex items-center justify-center">
        <button
          onClick={scrollToTop} 
          className="text-white text-[15px] focus:outline-none"
        >
          Back To Top
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
