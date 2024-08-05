
const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-gray-900 text-xl font-semibold">
            MyApp
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
