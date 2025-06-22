import React, { useEffect } from 'react';
import logo from '../assets/Logo.svg';

const Hero = () => {
  useEffect(() => {
    // Floating animation for badges
    const animateBadges = () => {
      const students = document.getElementById('badge-students');
      const resources = document.getElementById('badge-resources');
      const success = document.getElementById('badge-success');
      if (!(students && resources && success)) return;

      function animate() {
        const t = performance.now() / 1000;
        const x1 = Math.sin(t * 1.5) * 1.2;
        const y1 = Math.cos(t * 1.7) * 1.2;
        const x2 = Math.sin(t * 1.7 + 1) * 1.1;
        const y2 = Math.cos(t * 1.3 + 1) * 1.1;
        const x3 = Math.sin(t * 1.3 + 2) * 1.3;
        const y3 = Math.cos(t * 1.5 + 2) * 1.3;

        students.style.transform = `translate(${x1 * 22}px, ${y1 * 14}px) scale(${1 + y1 * 0.05}) rotate(${x1 * 6}deg)`;
        resources.style.transform = `translate(${x2 * 16}px, ${y2 * 20}px) scale(${1 + x2 * 0.04}) rotate(${y2 * 5}deg)`;
        success.style.transform = `translate(${x3 * 28}px, ${y3 * 16}px) scale(${1 + y3 * 0.04}) rotate(${x3 * -5}deg)`;

        requestAnimationFrame(animate);
      }
      animate();
    };

    animateBadges();
  }, []);

  return (
    <section className="max-w-7xl mx-auto my-20 rounded-[2.5rem] bg-white/60 shadow-2xl p-16 pb-36 flex flex-col md:flex-row items-center backdrop-blur-lg relative">
      {/* Logo */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 w-full pointer-events-none select-none">
        <img src={logo} alt="Student Portal Logo" className="w-20 h-20 rounded-full shadow-lg bg-white/80 p-2 mb-4 pointer-events-auto animate-bounce" />
      </div>
      
      {/* Left Content */}
      <div className="flex-1 z-10">
        <div className="flex items-center mb-4 text-[#0659FD] font-semibold">
          <span className="mr-2">⭐</span> New Feature: AI-Powered Study Assistant
        </div>
        <h1 className="text-6xl font-extrabold text-[#0659FD] mb-6 tracking-tight">Your All-in-One Academic Hub</h1>
        <p className="text-2xl text-gray-700 mb-8 font-light">Connect, Collaborate, and Excel in Your Academic Journey</p>
        <div className="flex gap-4 mb-8 flex-wrap">
          <a href="https://github.com/StudentPortal-grad" className="bg-[#24292f] text-white px-8 py-4 rounded-full font-bold text-xl flex items-center gap-2 shadow-lg hover:bg-[#444c56] transition"><i className="fab fa-github"></i> Contribute</a>
          <a href="https://github.com/StudentPortal-grad" className="border-2 border-[#0659FD] text-[#0659FD] px-8 py-4 rounded-full font-bold text-xl flex items-center gap-2 hover:bg-[#D0DFFC] transition"><i className="fas fa-download"></i> Download</a>
        </div>
        <div className="flex gap-8 text-[#0659FD] font-medium flex-wrap">
          <span className="flex items-center gap-2"><i className="fas fa-check-circle"></i> Free for Students</span>
          <span className="flex items-center gap-2"><i className="fas fa-check-circle"></i> 24/7 Support</span>
          <span className="flex items-center gap-2"><i className="fas fa-check-circle"></i> Secure Platform</span>
        </div>
      </div>
      
      {/* Right Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0 relative">
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="Students collaborating" className="rounded-2xl w-full max-w-md shadow-xl -mr-12" />
        <div id="badge-students" className="absolute top-4 left-0 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow text-[#0659FD] font-semibold text-sm transition-transform duration-300 will-change-transform"><i className="fas fa-users"></i> 10,000+ Active Students</div>
        <div id="badge-resources" className="absolute bottom-4 left-0 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow text-[#0659FD] font-semibold text-sm transition-transform duration-300 will-change-transform"><i className="fas fa-book"></i> 5,000+ Resources</div>
        <div id="badge-success" className="absolute bottom-4 right-0 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow text-[#0659FD] font-semibold text-sm transition-transform duration-300 will-change-transform"><i className="fas fa-graduation-cap"></i> 98% Success Rate</div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hidden md:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 bottom-0 z-20 w-auto pointer-events-none select-none">
        <div className="bg-white/90 border-2 border-transparent bg-clip-padding backdrop-blur-xl rounded-2xl px-8 py-4 shadow-xl flex flex-col items-center animate-fade-in-up relative" style={{boxShadow: '0 8px 32px 0 rgba(6,89,253,0.10)'}}>
          <div className="rounded-full p-2 mb-2 shadow-lg animate-pulse flex items-center justify-center">
              <i className="fas fa-graduation-cap text-2xl bg-gradient-to-tr from-[#0659FD] to-[#b3cfff] bg-clip-text text-transparent"></i>
          </div>
          <span className="text-[#0659FD] text-xl font-bold tracking-wide drop-shadow animate-pulse">Scroll to Explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;