const alertComponentData = {
  name: "Alert",
  code: `
import React from 'react';

const Alert = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-md flex items-center">
        <div className="flex-1 text-gray-100">
          <span className="text-sm font-semibold">Success!</span>
          <p className="mt-1 text-xs text-gray-300">
            Your action was successfully completed.
          </p>
        </div>
        <div className="ml-4">
          <button className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;

    `,
};

export default alertComponentData;