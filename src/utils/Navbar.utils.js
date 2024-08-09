const navbarComponentData = {
  name: "Navbar",
  code: `
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-lg border-b border-gray-200 rounded-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-gray-900 text-xl font-bold">
            MyApp
          </div>
          <div className="hidden md:flex space-x-4 font-semibold">
            <a
              href="#"
              className="text-gray-900 hover:bg-gray-200 py-2 px-3 rounded-md transition duration-200 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900  hover:bg-gray-200 py-2 px-3 rounded-md transition duration-200 ease-in-out"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-900  hover:bg-gray-200 py-2 px-3 rounded-md transition duration-200 ease-in-out"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-900  hover:bg-gray-200 py-2 px-3 rounded-md transition duration-200 ease-in-out"
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
`,
};

export default navbarComponentData;
