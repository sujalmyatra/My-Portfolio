import React from 'react';
import Navigation from '../layout/Navigation';

const Home = () => {
  return (
    <div>
      <Navigation />

      <section className="my-6">
        <h2 className="text-2xl font-bold mb-2">ABOUT ME</h2>
        <p className="text-sm leading-relaxed max-w-2xl">
          Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer...
        </p>
      </section>

      <section className="my-8">
        <h3 className="text-xl font-semibold mb-4">What I do!</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-orange-100 p-4 rounded-xl shadow">
            <h4 className="font-bold mb-1">Web Development</h4>
            <p className="text-sm">Building fast, scalable apps with React/Next.js</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl shadow">
            <h4 className="font-bold mb-1">App Development</h4>
            <p className="text-sm">Mobile-first applications with intuitive UI</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl shadow">
            <h4 className="font-bold mb-1">UI/UX Design</h4>
            <p className="text-sm">Creating elegant and user-friendly interfaces</p>
          </div>
          <div className="bg-rose-100 p-4 rounded-xl shadow">
            <h4 className="font-bold mb-1">Mentorship</h4>
            <p className="text-sm">Guiding others through tech and growth</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
