import React from 'react';
import Header from './components/layout/Header';
import Home from './components/sections/Home';
import Sidebar from './components/layout/SideBar';

function App() {
  return (
    <div className=" min-w-screen min-h-screen flex flex-col border-2 border-amber-300 p-[1rem]">
      <Header />
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar - 30% */}
        <div className="w-[30%] ">
          <Sidebar />
        </div>

        {/* Main Content - 70% */}
        <main className="w-[70%] bg-gray-50 overflow-y-auto ">
          <Home />
        </main>
      </div>
    </div>
  );
}



export default App;
