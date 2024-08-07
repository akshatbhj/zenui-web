import { useState } from "react";
import { FiCalendar } from "react-icons/fi";

const DatePicker = () => {
  const [date, setDate] = useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Date Picker Container */}
      <div className="relative w-full max-w-xs">
        {/* Input Field */}
        <input
          type="date"
          value={date}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
        />
        {/* Calendar Icon */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <FiCalendar className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
