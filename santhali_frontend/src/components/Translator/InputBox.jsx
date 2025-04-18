import React from "react";

function InputBox({ isReadonly, inputRef, placeholder, translated, light }) {
  return (
    <textarea
      readOnly={isReadonly}
      ref={inputRef}
      className={`
        w-full
        min-h-[200px]
        p-4
        rounded-xl
        text-base
        resize-none
        focus:outline-none
        transition
        duration-200
        shadow-md
        placeholder-gray-500
        ${translated ? "bg-[#b2a78d] text-gray-800" : ""}
        ${light ? "bg-white text-gray-900" : ""}
      `}
      placeholder={placeholder}
    />
  );
}

export default InputBox;
