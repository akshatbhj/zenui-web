const checkboxComponentData = {
  name: "Checkbox",
  code: `
import React, { useState } from 'react';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="flex items-center cursor-pointer space-x-3">
      {/* Hidden Checkbox */}
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={handleChange}
      />
      
      {/* Toggle Switch */}
      <div
        className={\`relative w-12 h-6 bg-gray-600 rounded-full transition-colors duration-300 ease-in-out \${checked ? "bg-green-400" : "bg-gray-300"}\`}
      >
        <div
          className={\`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out \${checked ? 'translate-x-6' : 'translate-x-0'}\`}
        />
      </div>
      
      {/* Label */}
      <span className="text-gray-800 font-semibold">{checked ? 'Enabled' : 'Disabled'}</span>
    </label>
  );
};

export default Checkbox;


    `,
};

export default checkboxComponentData;
