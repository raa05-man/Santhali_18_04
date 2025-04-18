import React from "react";
import InputBox from "./InputBox";

function Translator() {
  //if default value, then Santhali will occur first, else English will occur first
  const [defaultValue, setDefaultValue] = React.useState(true);

  const firstInputRef = React.useRef(null);
  const secondInputRef = React.useRef(null);

  const handleSwitch = () => {
    setDefaultValue((prev) => !prev);
  };

  const resetTextArea = () => {
    firstInputRef.current.value = "";
    secondInputRef.current.value = "";
  };

  //   TODO
  const handleTranslate = () => {
    //! Enter the code that handles the translate button logic
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4 bg-white shadow-lg rounded-xl border border-gray-200">
      {/* //TODO: insert icon */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleSwitch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          icon_for_switch
        </button>
        <p className="text-lg font-medium text-gray-800">
          {defaultValue ? "Santhali" : "English"}
        </p>
      </div>

      <InputBox isReadonly={false} inputRef={firstInputRef} placeholder="Enter text here..." />

      <p className="text-lg font-medium text-gray-800">
          {!defaultValue ? "Santhali" : "English"}
        </p>

      <InputBox isReadonly={true} inputRef={secondInputRef} placeholder="Translated text here..." />
  

      <div className="flex justify-end gap-4">
   
        <button
          onClick={resetTextArea}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
   icon_for_reset
        </button>
        <button
          onClick={handleTranslate}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Translate
        </button>
      </div>
    </div>
  );
}
export default Translator;
