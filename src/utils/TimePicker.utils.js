const timePickerComponentData = {
  name: "TimePicker",
  code: `
import { useState } from "react";

const TimePicker = () => {
  const [time, setTime] = useState({
    hours: "12",
    minutes: "00",
    period: "AM",
  });

  const handleInputChange = (field, value) => {
    if (field === "hours") {
      value = value.replace(/\\D/, ""); // Allow only digits
      if (value > 12) value = "12"; // Restrict hours to 1-12
      if (value < 1 && value !== "") value = "1"; // Restrict hours to be at least 1
    } else if (field === "minutes") {
      value = value.replace(/\\D/, ""); // Allow only digits
      if (value > 59) value = "59"; // Restrict minutes to 0-59
    }

    setTime((prevTime) => ({
      ...prevTime,
      [field]: value,
    }));
  };

  const togglePeriod = () => {
    setTime((prevTime) => ({
      ...prevTime,
      period: prevTime.period === "AM" ? "PM" : "AM",
    }));
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex items-center bg-gray-100 text-gray-800 rounded-lg shadow-lg p-2 space-x-4">
        {/* Hours Input */}
        <input
          type="text"
          value={time.hours}
          onChange={(e) => handleInputChange("hours", e.target.value)}
          className="bg-transparent text-center text-xl w-12 outline-none"
          maxLength={2}
        />
        <span className="text-xl">:</span>
        {/* Minutes Input */}
        <input
          type="text"
          value={time.minutes}
          onChange={(e) => handleInputChange("minutes", e.target.value)}
          className="bg-transparent text-center text-xl w-12 outline-none"
          maxLength={2}
        />
        {/* Period Toggle */}
        <button
          onClick={togglePeriod}
          className="bg-green-500 text-gray-100 px-2 py-2 rounded-lg hover:bg-green-400 transition duration-300"
        >
          {time.period}
        </button>
      </div>
    </div>
  );
};

export default TimePicker;



`,
};

export default timePickerComponentData;
