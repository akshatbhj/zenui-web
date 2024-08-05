const tabsComponentData = {
  name: "Tabs",
  code: `
import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      {/* Tab Headers */}
      <div className="flex space-x-1 rounded-xl bg-gray-800 p-1 shadow-md">
        <button
          className={\`flex-1 py-2.5 rounded-lg text-sm font-medium focus:outline-none transition-all duration-300 \${activeTab === 'Tab1' ? 'bg-gray-700 text-white' : 'bg-gray-900 text-gray-400'}\`}
          onClick={() => setActiveTab('Tab1')}
        >
          Tab 1
        </button>
        <button
          className={\`flex-1 py-2.5 rounded-lg text-sm font-medium focus:outline-none transition-all duration-300 \${activeTab === 'Tab2' ? 'bg-gray-700 text-white' : 'bg-gray-900 text-gray-400'}\`}
          onClick={() => setActiveTab('Tab2')}
        >
          Tab 2
        </button>
        <button
          className={\`flex-1 py-2.5 rounded-lg text-sm font-medium focus:outline-none transition-all duration-300 \${activeTab === 'Tab3' ? 'bg-gray-700 text-white' : 'bg-gray-900 text-gray-400'}\`}
          onClick={() => setActiveTab('Tab3')}
        >
          Tab 3
        </button>
      </div>

      {/* Tab Content */}
       <div className="mt-6 p-4 rounded-lg bg-gray-800 shadow-md text-gray-100">
        <div
          className={\`transition-opacity duration-300 \${activeTab === 'Tab1' ? 'opacity-100' : 'opacity-0 absolute'}\`}
        >
          {activeTab === 'Tab1' && <div>Content for Tab 1</div>}
        </div>
        <div
          className={\`transition-opacity duration-300 \${activeTab === 'Tab2' ? 'opacity-100' : 'opacity-0 absolute'}\`}
        >
          {activeTab === 'Tab2' && <div>Content for Tab 2</div>}
        </div>
        <div
          className={\`transition-opacity duration-300 \${activeTab === 'Tab3' ? 'opacity-100' : 'opacity-0 absolute'}\`}
        >
          {activeTab === 'Tab3' && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
`,
};

export default tabsComponentData;
