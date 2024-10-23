// import React, { useState } from "react";
// import Watch1 from './Images/watch1.png';  // Correct your image paths
// import Watch2 from './Images/Watch2.png';
// import Watch3 from './Images/Watch3.png';
// import Watch4 from './Images/Watch4.png';

// const images = [
//   { id: 1, src: watch1, alt: "Front View" },
//   { id: 2, src: Watch2, alt: "Side View" },
//   { id: 3, src: Watch3, alt: "Back View" },
//   { id: 4, src: Watch4, alt: "On Hand View" },
// ];

// function ImageGallery() {
//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   return (
//     <div>
//       {/* Main Image Display */}
//       <div className="main-image">
//         <img src={selectedImage.src} alt={selectedImage.alt} style={{ width: '400px', height: '400px' }} />
//       </div>

//       {/* Thumbnails */}
//       <div className="thumbnails" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
//         {images.map((image) => (
//           <img
//             key={image.id}
//             src={image.src}
//             alt={image.alt}
//             onClick={() => setSelectedImage(image)}
//             style={{
//               width: '100px',
//               height: '100px',
//               cursor: 'pointer',
//               border: selectedImage.id === image.id ? '2px solid teal' : '2px solid transparent',
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ImageGallery;
