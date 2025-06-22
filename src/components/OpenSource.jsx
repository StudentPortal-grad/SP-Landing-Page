import React from 'react';

const OpenSource = () => (
  <section className="max-w-7xl mx-auto my-20 rounded-[2.5rem] bg-white/60 shadow-2xl p-16 backdrop-blur-lg text-center">
    <div className="flex flex-col items-center mb-8">
      <div className="bg-[#0659FD]/10 rounded-full flex items-center justify-center w-20 h-20 mb-6">
        <i className="fab fa-github text-5xl text-[#0659FD]"></i>
      </div>
      <span className="inline-block bg-[#D0DFFC] text-[#0659FD] font-semibold rounded-full px-4 py-1 mb-2">Open Source Project</span>
      <h2 className="text-5xl font-bold text-[#0659FD] mb-2 relative text-center">
        Contribute or Download
        <span className="block h-1 w-24 bg-gradient-to-r from-[#0659FD] to-[#b3cfff] rounded-full mx-auto mt-2"></span>
      </h2>
      <p className="text-2xl text-gray-700 font-light max-w-2xl text-center mb-8">This project is open source! Download, use, or contribute to help us make academic collaboration better for everyone.</p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <a href="https://github.com/StudentPortal-grad" className="bg-[#0659FD] text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-blue-700 transition flex items-center gap-2">
          <i className="fab fa-github"></i> Contribute on GitHub
        </a>
        <a href="https://github.com/StudentPortal-grad" className="border-2 border-[#0659FD] text-[#0659FD] px-10 py-4 rounded-full font-bold text-xl hover:bg-[#D0DFFC] transition flex items-center gap-2">
          <i className="fas fa-download"></i> Download Project
        </a>
      </div>
    </div>
  </section>
);

export default OpenSource;
