import React from "react";

export default function Header() {
  return (
    <div className="w-full px-4 py-4 flex flex-col items-center gap-4 bg-[rgba(146,178,159,0.54)]">
      <span className="material-symbols-outlined absolute top-2 right-2 text-xl cursor-pointer">
    density_medium
  </span>
      <h1 className="text-[#000000]/40% text-2xl sm:text-3xl md:text-4xl font-semibold text-center font-[Hanken_Grotesk] absolute top-20">
        Santhali Translator
      </h1>

      <div className="flex justify-center items-center gap-8 mt-4 flex-wrap absolute top-30">
        <img
          src="src/assets/jharkhand_logo.png"
          alt="Jharkhand Logo"
          className="h-16 w-auto"

        />
        <img
          src="src/assets/nit_logo.png"
          alt="NIT Logo"
          className="h-16 w-auto"
        />
      </div>
    </div>
  );
}
