import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Add the carousel styles

const MyCarousel = () => {
  return (
    <div className=' py-4  '>
    <Carousel 
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}  
      swipeable={true} 
      emulateTouch={true}
      
    >
      {/* Slide 1 */}
      <div className=' sm:h-80 md:h-[400px] mx-2 sm:mx-4 md:mx-8 mt-4  '>
        <img src={require('../Images/banner3.png')} alt="Slide 3" className="object-fit h-full w-full  " />
      </div>
      
      {/* Slide 2 */}
      <div className=' sm:h-80 md:h-[400px] mx-2 sm:mx-4 md:mx-8 mt-4'>
        <img src={require('../Images/banner1.png.jpg')} alt="Slide 1" className="object-fit h-full w-full" />
      </div>
      
      {/* Slide 3 */}
      <div className=' sm:h-80 md:h-[400px] mx-2 sm:mx-4 md:mx-8 mt-4'>
        <img src={require('../Images/banner2.png.jpg')} alt="Slide 2" className="object-fit h-full w-full" />
      </div>

      {/* Slide 4 */}
      <div className=' sm:h-80 md:h-[400px] mx-2 sm:mx-4 md:mx-8 mt-4'>
        <img src={require('../Images/banner4.jpg')} alt="Slide 4" className="object-fit h-full w-full" />
      </div>

      {/* Slide 5 */}
      <div className=' sm:h-80 md:h-[400px] mx-2 sm:mx-4 md:mx-8 mt-4'>
        <img src={require('../Images/banner5.png')} alt="Slide 5" className="object-fit h-full w-full" />
      </div>

      {/* Slide 6 */}
      <div className=' sm:h-80 md:h-[400px] mx-2 sm:mx-4 md:mx-8 mt-4'>
        <img src={require('../Images/banner6.png')} alt="Slide 6" className="object-fit h-full w-full" />
      </div>
    </Carousel>
    </div>
  );
};

export default MyCarousel;
