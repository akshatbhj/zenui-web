const cardComponentData = {
  code: `import React from "react";

const Card = () => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden max-w-sm">
      <img
        src="https://via.placeholder.com/400x200"
        alt="Placeholder Image"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-gray-900 text-xl font-semibold mb-2">Card Title</h2>
        <p className="text-gray-700 mb-4">
          This is a brief description of the card content. It provides an
          overview and entices the user to explore further.
        </p>
        <button 
          className="bg-gray-300 text-white text-md font-semibold 
          py-2 px-4 rounded-md shadow-sm hover:bg-gray-400 transition duration-200 ease-in-out">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;

`,
  name: "Card",
};

export default cardComponentData;
