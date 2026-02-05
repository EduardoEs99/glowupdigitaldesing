import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-fuchsia-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;
