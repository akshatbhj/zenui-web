import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-black border-b border-white/25 px-4 lg:px-6 py-2 shadow-xl">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src="/icon.svg" className="mr-3 h-12" alt="Logo" />
            <h1 className="text-white font-bold text-3xl">Zen</h1>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/components"
              className="text-white bg-gray-700/25 hover:bg-gray-700/75 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started &#8594;
            </Link>
          </div>
          <div className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex justify-center items-center space-x-8 mt-4 font-medium lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-1 px-2 duration-200 ${
                      isActive ? "text-gray-300" : "text-gray-600"
                    } hover:text-gray-300 hover:bg-gray-700/25 rounded-md`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-1 px-2 duration-200 ${
                      isActive ? "text-gray-300" : "text-gray-600"
                    } hover:text-gray-300 hover:bg-gray-700/25 rounded-md `
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/components"
                  className={({ isActive }) =>
                    `block py-1 px-2 duration-200 ${
                      isActive ? "text-gray-300" : "text-gray-600"
                    } hover:text-gray-300 hover:bg-gray-700/25 rounded-md `
                  }
                >
                  Components
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
