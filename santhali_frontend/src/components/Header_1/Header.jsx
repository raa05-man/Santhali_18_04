import React from "react";

export default function Header() {
  return (
    <div className="w-full px-4 py-4 flex flex-col items-center gap-4 bg-[rgba(146,178,159,0.54)]">
      <span className="material-symbols-outlined absolute top-2 right-2 text-xl cursor-pointer">
    density_medium
  </span>

<h1 className="text-[#000000]/70 text-4xl sm:text-5xl md:text-6xl font-semibold text-center font-[Hanken_Grotesk] absolute top-15 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.6)]">
  Santali Translator
</h1>


      

      <div className="flex justify-center items-center gap-8 mt-4 flex-wrap absolute top-25 ">
        <img
          src="src/assets/logos.SVG"
          alt="NIT Logo"
          className="h-40 w-auto "
        />
      </div>
    </div>
  );
}
