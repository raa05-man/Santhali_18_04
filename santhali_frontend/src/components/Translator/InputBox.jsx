import React from "react";

function InputBox({ children, isReadonly, inputRef, placeholder }) {
  return (
    <textarea
      readOnly={isReadonly}
      ref={inputRef}
      className="
        w-full
        min-h-[150px]
        p-4
        rounded-xl
        text-base
        bg-white
        text-gray-800
        placeholder-gray-400
        border
        border-gray-300
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        resize-none
        shadow-sm
        transition
        duration-200
      "
      placeholder={placeholder}
    >

    </textarea>
  );
}

export default InputBox;
