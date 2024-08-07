const menuComponentData = {
  name: "Menu",
  code: `
import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Menu = () => {
  const [active, setActive] = useState('home');

  const menuItems = [
    { name: 'Home', icon: <FaHome />, id: 'home' },
    { name: 'Profile', icon: <FaUser />, id: 'profile' },
    { name: 'Settings', icon: <FaCog />, id: 'settings' },
    { name: 'Logout', icon: <FaSignOutAlt />, id: 'logout' },
  ];

  return (
    <div className="w-full max-w-xs mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={\`flex items-center p-4 cursor-pointer transition-colors duration-200 ease-in-out $\{
              active === item.id
                ? "bg-gray-300 text-gray-600"
                : "text-gray-600 hover:bg-gray-200 hover:text-gray-600"
            }\`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="ml-4 text-lg">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

  `,
};

export default menuComponentData;
