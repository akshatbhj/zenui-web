const dropdownComponentData = {
  name: "Dropdown",
  code: `
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full max-w-xs mx-auto relative">
      {/* Dropdown Header */}
      <div
        className="flex justify-between items-center px-4 py-3 bg-gray-800 text-gray-100 rounded-lg border border-gray-600 shadow-md cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>Choose an option</span>
        <FaChevronDown
          className={\`transform transition-transform \${isOpen ? 'rotate-180' : ''}\`}
        />
      </div>

      {/* Dropdown Items */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-gray-800 border border-gray-600 rounded-lg shadow-lg overflow-hidden z-10">
          <ul className="text-gray-100">
            <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer transition duration-150 ease-in-out">
              Option 1
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer transition duration-150 ease-in-out">
              Option 2
            </li>
            <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer transition duration-150 ease-in-out">
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
;`,
};

export default dropdownComponentData;
