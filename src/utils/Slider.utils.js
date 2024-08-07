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
    <div className="flex items-center justify-center h-[50px]">
      <div className="flex items-center">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-64 h-3 accent-gray-500 rounded-lg cursor-pointer slider-thumb"
        />
        <div className="ml-4 text-gray-800 text-sm font-bold">{value}</div>
      </div>
    </div>
  );
};

export default Slider;

    `,
};

export default sliderComponentData;
