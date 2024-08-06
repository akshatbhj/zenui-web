const progessBarComponentData = {
  name: "ProgressBar",
  code: `import React from 'react';

const Progress = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-lg font-semibold inline-block text-gray-100">Progress</span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-gray-400">70%</span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
          <div
            style={{ width: '70%' }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-green-500 transition-width duration-300 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
`,
};

export default progessBarComponentData;
