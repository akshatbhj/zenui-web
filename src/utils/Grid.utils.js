const gridComponentData = {
    name: "Grid",
    code: `
import React from 'react';

const Grid = () => {
  return (
    <div className="p-4 bg-transparent min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={\`https://via.placeholder.com/400x300?text=Item+$\{index + 1}\`}
              alt={\`Item $\{index + 1}\`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-600 mb-2">
                Item {index + 1}
              </h3>
              <p className="text-gray-500 text-sm font-semibold">
                This is a description of item {index + 1}. It provides some
                additional details about this item.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

    `
}

export default gridComponentData