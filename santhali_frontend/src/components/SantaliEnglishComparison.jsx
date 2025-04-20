import React from 'react';

export default function SantaliEnglishComparison() {
  return (
    <div className="bg-[rgba(146,178,159,0.54)] min-h-screen w-full p-4 md:p-8 flex flex-col items-center ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">
        Explore Santali to English Language Pair Information
      </h1>
      
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4 md:gap-16 justify-center">

        <div className="bg-[#48454566] p-6 rounded-lg text-black shadow-md w-full md:w-1/2 border-t-4 border-t-[#9D6C46]/80">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Santali</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-gray-700 mr-3">★</span>
              <span>Austroasiatic language family</span>
            </div>
            
            <div className="flex items-start">
              <span className="text-gray-700 mr-3">★</span>
              <span>Primary country - India</span>
            </div>
            
            <div className="flex items-start">
              <span className="text-gray-700 mr-3">★</span>
              <span>Spoken in 4 countries</span>
            </div>
            
            <div className="flex items-start">
              <span className="text-gray-700 mr-3">★</span>
              <span>7.6 million speakers worldwide</span>
            </div>
          </div>
        </div>
        
        <div className="bg-[#48454566] p-6 rounded-lg text-black shadow-md w-full md:w-1/2 border-t-4 border-t-[#9D6C46]/80">
          <h2 className="text-xl md:text-2xl font-bold mb-4">English</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-gray-700 mr-3">★</span>
              <span>Indo-European language family</span>
            </div>
            
            <div className="flex items-start">
              <span className="text-gray-700 mr-3">★</span>
              <span>Primary country - India</span>
            </div>
            
            <div className="flex items-start">
              <span className="text-gray-700 mr-3">★</span>
              <span>Spoken in 137 countries</span>
            </div>
            
            <div className="flex items-start">
              <span className="text-gray-700 mr-3">★</span>
              <span>1.5 billion speakers worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}