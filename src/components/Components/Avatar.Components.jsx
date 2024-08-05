const Avatar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center py-4 px-6 bg-gray-100 rounded-md shadow-md" >
        <div className="relative w-24 h-24">
          <img
            src="https://via.placeholder.com/150"
            alt="Avatar"
            className="w-full h-full rounded-full border-4 border-gray-700 bg-gray-700 shadow-md object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-full rounded-full border-4 border-gray-900 opacity-25"></div>
        </div>
        <div className="ml-4 text-left">
          <h3 className="text-xl font-semibold text-black">John Doe</h3>
          <p className="text-sm text-gray-800">iOS Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
