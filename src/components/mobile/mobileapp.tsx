import React from 'react';

const AppCard = ({ phoneImage, appImage, title, subtitle, description, ctaText, ctaLink }) => {
  return (
    <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Phone Frame Image */}
      <img src={phoneImage} alt="Phone Frame" className="absolute inset-0 w-full h-full object-cover z-0" />

      {/* App Screenshot */}
      <div className="relative z-10 flex justify-center mt-12">
        <img src={appImage} alt="App Screenshot" className="w-4/5 h-auto object-cover rounded-xl border-4 border-gray-200 shadow-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 bg-gradient-to-t from-white to-transparent">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-3">{title}</h2>
        <p className="text-xl text-gray-600 mb-4">{subtitle}</p>
        <p className="text-gray-700 mb-6">{description}</p>
        <a href={ctaLink} className="block text-center bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors">
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default AppCard;
