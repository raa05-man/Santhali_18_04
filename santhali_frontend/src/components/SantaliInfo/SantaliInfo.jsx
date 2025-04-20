
import React from 'react';

export default function SantaliPage() {
  return (
    <div className="bg-[rgba(146,178,159,0.54)] p-4 md:p-8 font-sans min-h-screen w-full box-border overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center text-black drop-shadow-[2px_4px_6px_rgba(0,0,0,0.4)]">
        Santali (संताली / ᱥᱟᱱᱛᱟᱞᱤ)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <div className="bg-[rgba(146,178,159,0.45)] rounded-2xl p-6 md:p-8 relative shadow-md border-l-6 border-l-4 border-amber-700">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5 pl-2 text-gray-800">
            Santali language
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg pl-2">
            Santali is a Kherwarian Munda language spoken by the Santal people across eastern India and neighboring countries. With ~7.6 million speakers, it's the most widely spoken Munda language and officially recognized in India. It uses the Ol Chiki script, developed in 1925 by Raghunath Murmu.
          </p>
        </div>

        <div className="bg-[rgba(146,178,159,0.45)] rounded-2xl p-6 md:p-8 relative shadow-md border-l-6 border-l-4 border-amber-700">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5 pl-2 text-gray-800">
            History
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg pl-2">
            Santali, originally an oral language, was first documented in the 19th century using Bengali, Odia, and Roman scripts by European scholars. The Ol Chiki script was developed by Raghunath Murmu in 1925 and is now the official script in parts of India. In 2013, Santali was included in India's National Eligibility Test, boosting its academic recognition.
          </p>
        </div>

        <div className="bg-[rgba(146,178,159,0.45)] rounded-2xl p-6 md:p-8 relative shadow-md border-l-6 border-l-4 border-amber-700">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5 pl-2 text-gray-800">
            Geographic distribution
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg pl-2">
            Santali is spoken by over 7 million people across India, Bangladesh, Bhutan, and Nepal, with the highest concentrations in Jharkhand, West Bengal, and Odisha. Smaller speaker communities are spread across Assam, Bihar, and northeastern states, with pockets in Bangladesh and Nepal.
          </p>
        </div>

        <div className="bg-[rgba(146,178,159,0.45)] rounded-2xl p-6 md:p-8 relative shadow-md border-l-6 border-l-4 border-amber-700">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5 pl-2 text-gray-800">
            Written Santali
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg pl-2">
            There are ways to write Santali with the Odia, Bengali, Devanagari and Latin alphabets. It also has its own native script known as Ol Chiki. The Devanagari alphabet is used in Nepal. The Latin alphabet for Santali was devised by by Paul Olaf Bodding (1865-1938)
          </p>
        </div>
      </div>
    </div>
  );
}