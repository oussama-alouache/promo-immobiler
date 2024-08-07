// CarouselCard.jsx
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const cards = [
  { title: 'Titre pour la Carte 1', description: 'Description pour la Carte 1', image: 'https://via.placeholder.com/300x200?text=Image+1' },
  { title: 'Titre pour la Carte 2', description: 'Description pour la Carte 2', image: 'https://via.placeholder.com/300x200?text=Image+2' },
  { title: 'Titre pour la Carte 3', description: 'Description pour la Carte 3', image: 'https://via.placeholder.com/300x200?text=Image+3' },
  { title: 'Titre pour la Carte 4', description: 'Description pour la Carte 4', image: 'https://via.placeholder.com/300x200?text=Image+4' },
  { title: 'Titre pour la Carte 5', description: 'Description pour la Carte 5', image: 'https://via.placeholder.com/300x200?text=Image+5' },
  { title: 'Titre pour la Carte 6', description: 'Description pour la Carte 6', image: 'https://via.placeholder.com/300x200?text=Image+6' },
  { title: 'Titre pour la Carte 7', description: 'Description pour la Carte 7', image: 'https://via.placeholder.com/300x200?text=Image+7' },
  { title: 'Titre pour la Carte 8', description: 'Description pour la Carte 8', image: 'https://via.placeholder.com/300x200?text=Image+8' },
  { title: 'Titre pour la Carte 9', description: 'Description pour la Carte 9', image: 'https://via.placeholder.com/300x200?text=Image+9' },
  { title: 'Titre pour la Carte 10', description: 'Description pour la Carte 10', image: 'https://via.placeholder.com/300x200?text=Image+10' },
  { title: 'Titre pour la Carte 11', description: 'Description pour la Carte 11', image: 'https://via.placeholder.com/300x200?text=Image+11' },
  { title: 'Titre pour la Carte 12', description: 'Description pour la Carte 12', image: 'https://via.placeholder.com/300x200?text=Image+12' },
];

const carouselVariants = {
  enter: { opacity: 0, x: 50, scale: 0.9 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -50, scale: 0.9 },
};

const CarouselCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex + 2 >= cards.length) {
      setCurrentIndex(0); // Restart from beginning
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 2);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(cards.length - (cards.length % 2)); // Go to the last pair of cards
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 2);
    }
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + 2);
  const progress = ((currentIndex + 2) / cards.length) * 100;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Titre stylisé */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
      Suivez l’actualité de l’immobilier
      </h1>
      <div className="relative w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="relative w-full h-2 bg-gray-300 rounded-full mb-6">
          <div
            className="absolute top-0 left-0 h-full justify-center items-center bg-red-600 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* Conteneur des cartes */}
        <div className="relative flex justify-center gap-6">
          <AnimatePresence>
            {visibleCards.map((card, index) => (
              <motion.div
                key={index}
                className="flex flex-col bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden w-80 sm:w-80"
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
              >
                {/* Image Section */}
                <div className="w-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
                {/* Text Section */}
                <div className="p-4 flex flex-col justify-center bg-white">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h2>
                  <p className="text-gray-700 text-sm">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Navigation */}
        <div className="absolute inset-x-0 bottom-[-100px] flex justify-center px-4 space-x-2">
          <button
            className={`p-2 bg-white text-black rounded-full shadow-lg border border-gray-300 transition duration-300 ease-in-out hover:bg-red-600 hover:text-white ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" stroke="black"/>
            </svg>
          </button>
          <button
            className={`p-2 bg-white text-black rounded-full shadow-lg border border-gray-300 transition duration-300 ease-in-out hover:bg-red-600 hover:text-white ${currentIndex + 2 >= cards.length ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={nextSlide}
            disabled={currentIndex + 2 >= cards.length}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" stroke="black"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;





