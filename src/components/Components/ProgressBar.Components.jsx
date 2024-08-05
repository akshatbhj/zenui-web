const ProgressBar = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-lg font-semibold inline-block text-black">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-gray-800">
              70%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-300">
          <div
            style={{ width: "70%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 transition-width duration-300 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
