import React from 'react'
import bati from "../../assets/bati.jpg";
export default function Homecard() {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
    <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
      <img className="object-cover"src={bati} alt="product image" />
      <span className="absolute top-0 left-0 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">nouveau</span>
    </a>
    <div className="mt-4 px-5 pb-5">
      <a href="#">
        <h5 className="text-xl tracking-tight  font-bold uppercase text-slate-900">prommotion el djedid</h5>
      </a>
      <a href="#">
        <h5 className="text-l tracking-tight text-slate-900">Vente appartements F3 à Ouled Fayet</h5>
      </a>
      <a href="#">
        <h5 className="text-l tracking-tight text-slate-900">100 logements  - Ouled Fayet, Alger, Algérie</h5>
      </a>
      <div className="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span className="text-3xl font-bold text-slate-900">20M</span>
    
        </p>
       
      </div>
      <a href="#" className="flex items-center justify-center rounded-md bg-red-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
       
       en savoir plus</a>
    </div>
  </div>
  )
}
