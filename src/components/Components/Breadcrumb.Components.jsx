const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-4 text-gray-300">
      <a
        href="#"
        className="text-black font-semibold hover:text-gray-500 transition-colors duration-200"
      >
        Home
      </a>
      <span className="text-gray-800 font-bold ">/</span>
      <a
        href="#"
        className="text-black font-semibold hover:text-gray-500 transition-colors duration-200"
      >
        Category
      </a>
      <span className="text-gray-800 font-bold">/</span>
      <span className="text-black font-semibold hover:text-gray-500 hover:cursor-pointer">Current Page</span>
    </nav>
  );
};

export default Breadcrumb;
