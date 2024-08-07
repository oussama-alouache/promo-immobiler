import { motion } from 'framer-motion';
import React, { useState } from 'react';

const images = [
    {
      src: 'https://via.placeholder.com/800?text=Image+1',
      title: 'Texte pour l\'Image 1',
    },
    {
      src: 'https://via.placeholder.com/800?text=Image+2',
      title: 'Texte pour l\'Image 2',
    },
    {
      src: 'https://via.placeholder.com/800?text=Image+3',
      title: 'Texte pour l\'Image 3',
    },
  ];

const VerticalAccordion = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    
  
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          {/* Titre stylisé */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Nos Résidences
          </h1>
          <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Conteneur de l'image */}
            <div className="relative flex-1">
              <motion.img
                src={currentImage.src}
                alt="Current"
                className="w-full h-full object-cover rounded-lg"
                whileHover={{ scale: 1.05 }} // Agrandir légèrement l'image lors du survol
                transition={{ duration: 0.3 }}
              />
              {/* Texte avec animation framer-motion */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-xl font-bold rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {currentImage.title}
              </motion.div>
            </div>
            {/* Conteneur du texte à côté de l'image */}
            <div className="flex flex-col justify-start p-4 md:p-8 bg-gray-50 w-full md:w-[320px]">
              <div className="flex flex-col justify-start h-full space-y-4">
                {images.map((img, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentImage(img)}
                    className={`cursor-pointer text-base md:text-lg font-semibold transition-all duration-500 ease-in-out transform hover:scale-110 hover:text-blue-800 ${
                      currentImage === img ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {img.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      
  );
    }

export default VerticalAccordion;



