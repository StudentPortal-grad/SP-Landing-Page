import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials'
import Team from './components/Team';
import Technologies from './components/Technologies';
import OpenSource from './components/OpenSource';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D0DFFC] via-[#e6eeff] to-[#b3cfff] font-['Inter']">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Team />
      <Technologies />
      <OpenSource />
      <Footer />
    </div>
  );
}

export default App;