
const Alert = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <div className="bg-gray-100 rounded-lg p-4 shadow-md flex items-center">
        <div className="flex-1 text-black">
          <span className="text-md font-bold">Success!</span>
          <p className="mt-1 text-sm font-semibold text-gray-600">
            Your action was successfully completed.
          </p>
        </div>
        <div className="ml-4">
          <button className="text-gray-800 text-xl hover:text-gray-500 transition-colors duration-200">
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
