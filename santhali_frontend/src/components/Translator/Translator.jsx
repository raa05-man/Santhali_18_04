import React, {useState, useRef} from "react";
import InputBox from "./InputBox";

//TODO:

// 1. Add the logic for the translate button
// 2. Add the icons for switch and reset buttons
// 3. Add the styling on the Santhali and English text to make the box of same size irrespectiv of the text

function Translator() {

  const [defaultValue, setDefaultValue] = useState(true);

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const handleSwitch = () => {
    setDefaultValue((prev) => !prev);
  };

  const resetTextArea = () => {
    firstInputRef.current.value = "";
    secondInputRef.current.value = "";
  };

  const handleTranslate = () => {
    //! Enter the code that handles the translate button logic
  };

  return (
    <div className="min-h-screen bg-[rgba(146,178,159,0.54)] flex flex-col items-center justify-center px-4 py-8">
      <div className="flex items-center justify-center gap-8 mb-6">
        <span className="bg-[#b2a78d] px-6 py-2 rounded-full text-sm text-black">
          {defaultValue ? "Santhali" : "English"}
        </span>

{/*//todo: Here goees the icon for switch */}
        <button onClick={handleSwitch} className="text-xl">
          ↔️
        </button>

        <span className="bg-[#b2a78d] px-6 py-2 rounded-full text-sm text-black">
          {!defaultValue ? "Santhali" : "English"}
        </span>
      </div>

      <div className="flex gap-6 w-full max-w-4xl">
        <div className="relative w-1/2">
          <InputBox
            isReadonly={false}
            inputRef={firstInputRef}
            placeholder="Write text here..."
            light
          />

          {/* //todo: here goes the icon for reset */}
          <button
            onClick={resetTextArea}
            className="absolute bottom-3 left-3 text-gray-500 hover:text-black transition"
          >
            🔄
          </button>
        </div>

        <div className="w-1/2">
          <InputBox
            isReadonly={true}
            inputRef={secondInputRef}
            placeholder="Translated"
            translated
          />
        </div>
      </div>

      <button
        onClick={handleTranslate}
        className="mt-6 bg-[#91a5d8] text-black px-6 py-2 rounded-lg hover:bg-[#7a92d0] transition"
      >
        Translate
      </button>

      <p className="p-5">An initiative by Jharkhand government in collaboration with Web Team, NIT Jamshedpur</p>
    </div>
  );
}

export default Translator;
