const sliderComponentData = {
  name: "Slider",
  code: `
import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-md mx-auto px-4">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
        />
        <div className="text-gray-100 text-center mt-2">{value}</div>
      </div>
    </div>
  );
};

export default Slider;

    `,
};

export default sliderComponentData;
