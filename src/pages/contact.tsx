import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SimpleContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        countryCode: '+213'
      });
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [countryCodes, setCountryCodes] = useState([]);
    
      useEffect(() => {
        // Requête pour obtenir les indicatifs des pays
        const fetchCountryCodes = async () => {
          try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const codes = response.data.map(country => ({
              name: country.name.common,
              code: `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}`
            }));
            setCountryCodes(codes);
          } catch (error) {
            console.error('Erreur lors de la récupération des indicatifs des pays', error);
          }
        };
    
        fetchCountryCodes();
      }, []);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Ajouter la logique de soumission du formulaire ici
        setIsSubmitted(true);
        console.log(formData);
      };
    
      return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contactez-nous</h2>
          {isSubmitted && (
            <p className="mb-4 text-green-500 font-medium">Votre message a été envoyé avec succès !</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700">Indicatif du pays</label>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={`${formData.countryCode} 5 55 55 55 55`}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Envoyer
            </button>
          </form>
        </div>
      );
    };
export default SimpleContactForm;
