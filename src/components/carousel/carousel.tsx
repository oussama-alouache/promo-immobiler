import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "C'est un excellent produit ! J'ai vu une amélioration significative dès le premier jour.",
    author: "Jean Dupont",
    image: 'path/to/image1.jpg', // Remplacez par le chemin réel de l'image
  },
  {
    text: "Le service client est exceptionnel. Je recommande vivement cette entreprise.",
    author: "Marie Curie",
    image: 'path/to/image2.jpg', // Remplacez par le chemin réel de l'image
  },
  {
    text: "Une expérience vraiment positive. Je suis très satisfait de mon achat.",
    author: "Albert Einstein",
    image: 'path/to/image3.jpg', // Remplacez par le chemin réel de l'image
  },
  {
    text: "Un produit innovant et de haute qualité. Je le recommande à tout le monde.",
    author: "Ada Lovelace",
    image: 'path/to/image4.jpg', // Remplacez par le chemin réel de l'image
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto overflow-hidden p-4">
      
      {/* Carousel Container */}
      <div className="relative flex-1 overflow-hidden bg-gray-900 rounded-2xl shadow-2xl">
        <div className="relative flex items-center justify-center p-4 sm:p-6 md:p-8 h-80">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <img
                src={testimonials[currentIndex].image}
                alt={`Image de ${testimonials[currentIndex].author}`}
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-md border-4 border-white"
              />
              <p className="text-lg font-semibold text-white mb-2 text-center">
                {testimonials[currentIndex].text}
              </p>
              <p className="text-base text-gray-300 text-center">
                — {testimonials[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-2">
          <div className="relative h-2 bg-gray-700 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-blue-400 rounded-full"
              style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
      
      {/* Navigation Container */}
      <div className="absolute flex flex-col justify-center items-center md:ml-4 md:space-y-4 bottom-1/2 transform translate-y-1/2">
        <button
          className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center p-2 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none ${
            currentIndex === 0 ? 'bg-gray-300 text-gray-600' : 'bg-white text-gray-800'
          } hover:bg-red-500`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center p-2 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none ${
            currentIndex === testimonials.length - 1 ? 'bg-gray-300 text-gray-600' : 'bg-white text-gray-800'
          } hover:bg-red-500`}
          onClick={handleNext}
          disabled={currentIndex === testimonials.length - 1}
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;






