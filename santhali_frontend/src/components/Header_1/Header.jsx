import React from "react";

export default function Header() {
  return (
    <div className="w-full px-4 py-4 flex flex-col items-center gap-4 bg-[rgba(146,178,159,0.54)]">
      {/* <i className="fa-solid fa-bars text-2xl text-[#043624] self-start md:self-center"></i> */}
      <span class="material-symbols-outlined">
density_medium
</span>
      <h1 className="text-[#043624] text-2xl sm:text-3xl md:text-4xl font-semibold text-center font-[Hanken_Grotesk]">
        Santhali Translator
      </h1>

      <div className="flex justify-center items-center gap-8 mt-4 flex-wrap">
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
