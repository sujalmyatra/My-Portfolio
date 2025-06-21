import React from 'react';
import { Home, FileText, Briefcase, Mail } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="flex justify-center gap-6 my-4 bg-white dark:bg-zinc-900 p-2 rounded-xl shadow">
      <button className="flex items-center gap-1 px-4 py-2 text-white bg-gradient-to-r from-orange-400 to-red-500 rounded-lg">
        <Home size={18} /> Home
      </button>
      <button className="flex items-center gap-1 px-4 py-2 hover:text-orange-500">
        <FileText size={18} /> Resume
      </button>
      <button className="flex items-center gap-1 px-4 py-2 hover:text-orange-500">
        <Briefcase size={18} /> Work
      </button>
      <button className="flex items-center gap-1 px-4 py-2 hover:text-orange-500">
        <Mail size={18} /> Contact
      </button>
    </nav>
  );
};

export default Navigation;
