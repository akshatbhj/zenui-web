import { useState } from "react";

const Tooltip = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block text-center my-12">
      {/* Tooltip Trigger */}
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="bg-gray-100 text-gray-900 font-medium py-2 px-6 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none transition duration-200 ease-in-out"
      >
        Hover me
      </button>

      {/* Tooltip Content */}
      {visible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-3 py-2 bg-gray-500 text-white text-nowrap text-sm rounded-lg shadow-lg opacity-95 transition-opacity duration-300 ease-in-out">
          This is a Tooltip
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-3 h-3 bg-gray-500 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
