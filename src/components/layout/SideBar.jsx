import React from 'react';
import { Github, Linkedin, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import profile from '../../assets/react.svg';

const Sidebar = () => {
  return (
    <aside className="w-full bg-white shadow-md h-full p-6 flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center mb-6">
          <img src={profile} alt="Profile" className="w-28 h-28 rounded-2xl object-cover" />
          <h1 className="text-xl font-bold mt-4 text-zinc-800">Sujal Myatra</h1>
          <p className="text-sm text-gray-600">FullStack Developer</p>
        </div>

        <div className="flex justify-center gap-4 my-4">
          <a href="#"><Facebook className="text-blue-600" /></a>
          <a href="#"><Linkedin className="text-blue-500" /></a>
          <a href="#"><Github className="text-black" /></a>
        </div>

        <div className="bg-zinc-100 rounded-xl p-4 space-y-3 text-sm text-zinc-700">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-500" />
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-500" />
            <span>sujalmyatra@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span>Ahmedabad, India</span>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90">
            Download Resume
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
