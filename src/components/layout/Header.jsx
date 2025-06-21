import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-14 px-6 bg-white shadow flex items-center justify-between">
      <h1 className="text-xl font-bold text-zinc-800">
        Sujal <span className="text-orange-500">Myatra</span>
      </h1>

      <button className="px-3 py-1 bg-gray-200 text-sm rounded-lg hover:bg-gray-300">
        Toggle
      </button>
    </header>
  );
};

export default Header;
