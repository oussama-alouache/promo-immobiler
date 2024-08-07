// App.js
import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';


const Carouseldispaly = () => {
  const testimonials = [
    {
      message: 'This product is amazing! It has changed my life for the better.',
      name: 'Jane Doe',
      role: 'Software Engineer',
      image: 'https://via.placeholder.com/48'
    },
    {
      message: 'I can’t imagine going back to my old workflow. This tool is a game changer.',
      name: 'John Smith',
      role: 'Project Manager',
      image: 'https://via.placeholder.com/48'
    },
    {
      message: 'Fantastic! It’s intuitive and easy to use. Highly recommend.',
      name: 'Sara Wilson',
      role: 'Designer',
      image: 'https://via.placeholder.com/48'
    },
  ];

  return (
    <div className="flex flex-col  min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <h1 className="text-4xl font-bold text-white text-center my-8">Testimonials</h1>
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
};

export default Carouseldispaly;
