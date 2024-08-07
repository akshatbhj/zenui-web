import { useState } from "react";

const Radio = () => {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="flex flex-col space-y-4">
      <label className="flex items-center cursor-pointer">
        {/* Radio Button */}
        <div className="relative">
          <input
            type="radio"
            className="sr-only"
            checked={selected === "option1"}
            onChange={() => setSelected("option1")}
          />
          <div
            className={`w-6 h-6 border-2 rounded-full transition duration-300 ease-in-out ${
              selected === "option1" ? "border-gray-800" : "border-gray-500"
            }`}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center`}
            >
              <div
                className={`w-3 h-3 bg-black rounded-full transition-transform duration-300 ease-in-out transform ${
                  selected === "option1" ? "scale-100" : "scale-0"
                }`}
              />
            </div>
          </div>
        </div>
        <span
          className={`ml-3 font-semibold ${
            selected === "option1" ? "text-black" : "text-gray-600"
          }`}
        >
          Option 1
        </span>
      </label>

      <label className="flex items-center cursor-pointer">
        {/* Radio Button */}
        <div className="relative">
          <input
            type="radio"
            className="sr-only"
            checked={selected === "option2"}
            onChange={() => setSelected("option2")}
          />
          <div
            className={`w-6 h-6 border-2 rounded-full transition duration-300 ease-in-out ${
              selected === "option2" ? "border-gray-800" : "border-gray-500"
            }`}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center`}
            >
              <div
                className={`w-3 h-3 bg-black rounded-full transition-transform duration-300 ease-in-out transform ${
                  selected === "option2" ? "scale-100" : "scale-0"
                }`}
              />
            </div>
          </div>
        </div>
        <span
          className={`ml-3 font-semibold ${
            selected === "option2" ? "text-black" : "text-gray-600"
          }`}
        >
          Option 2
        </span>
      </label>
    </div>
  );
};

export default Radio;
