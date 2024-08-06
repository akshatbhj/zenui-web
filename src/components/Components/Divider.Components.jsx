const Divider = () => {
  return (
    <div className="relative w-full flex items-center my-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-600"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-3 py-2 bg-gray-900 rounded-md text-gray-100 text-sm">or</span>
      </div>
    </div>
  );
};

export default Divider;
