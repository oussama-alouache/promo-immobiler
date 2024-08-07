import React from 'react'
import bati from "../assets/bati.jpg";
import Homecard from '../components/home/Homecard';
import Service from '../components/home/Service';

import VerticalAccordion from '../components/carousel/Testimonial';

import SimpleContactForm from './contact';
import Carousel from '../components/carousel/carousel';
import CarouselCard from '../components/carousel/carousel-card';
import AppCard from '../components/mobile/mobileapp';



export default function Home() {
  return (
    <div className=''>
                <div  className=' f h-96 w-full relative'>
                    <img src={bati} alt="logo" className=" absolute  h-[700px] w-full object-cove" />
                    
                    <div className="absolute inset-0  mt-40 flex flex-col space-y-12 items-center ">
                        <h1 className=' text-6xl text-white font-bold  uppercase'> découvrez notre nouvelle promotion </h1>
                        <h2 className=' text-xl text-white font-bold  uppercase'> Appartement traversant à partir de </h2>
                        <h2 className=' text-2xl text-white font-bold  uppercase'> 22 M DA </h2>
                        
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"> en savoir plus </button>
                
                    </div>



                        
                </div>

                <div className=' flex flex-col font-bold uppercase justify-center items-center mt-96 lg:mt-11'>
                    <h1 className=' font-bold uppercase justify-center items-center text-xl'> decouvers nos nouveau projets</h1>
            
                     <div className=' mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4  items-center justify-center  '>
                                <Homecard/>
                                <Homecard/>
                                <Homecard/>

                     </div>
                     <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"> decouvrir plus de propriters </button>

                                
                </div>
              <div className=' bg-gray-200 p-24'>
                <div>
              <div className=' flex flex-col font-bold uppercase justify-center items-center  '>
                    <h1 className=' font-bold uppercase justify-center items-center text-xl'> decouvers nos nouveau projets</h1>
            
                </div>

                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3   '>
                    
                    <Service />
                    <Service />
                    <Service />
         
                 </div>
              </div>
              </div>
              <div className=' '>
              <VerticalAccordion />
         
              </div>
              <div className=' '>
              <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Témoignages
      </h1>
              <Carousel />
         
              </div>
              <div className=' '>
              <CarouselCard />
         
              </div>
              <div className=' '>
              <SimpleContactForm />
         
              </div>
              <div className=' '>
              <AppCard />
         
              </div>
             
         </div>
         

  )



}
