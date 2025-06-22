import React from 'react';
import logo from '../assets/Logo.svg';

const Footer = () => (
  <footer className="max-w-7xl mx-auto my-20 rounded-[2.5rem] bg-white/70 shadow-2xl p-12 backdrop-blur-lg">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 border-b border-[#D0DFFC]/60 pb-10 mb-8">
      <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center md:items-start">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Student Portal Logo" className="w-12 h-12 rounded-full shadow-lg p-2 mb-4" />
          <span className="text-2xl font-extrabold text-[#0659FD] tracking-tight">Student Portal</span>
        </div>
        <p className="text-gray-600 max-w-xs mb-4 text-center md:text-left">
          Open source academic collaboration platform. Built by students, for students and educators worldwide.
        </p>
        <div class="flex gap-3 mt-2">
            <a href="https://github.com/StudentPortal-grad" class="bg-[#24292f] text-white rounded-full p-3 hover:bg-[#444c56] transition" title="GitHub"><i class="fab fa-github text-xl"></i></a>
            <a href="#" class="bg-[#1da1f2] text-white rounded-full p-3 hover:bg-[#0d8ddb] transition" title="Twitter"><i class="fab fa-twitter text-xl"></i></a>
            <a href="#" class="bg-[#0077b5] text-white rounded-full p-3 hover:bg-[#005983] transition" title="LinkedIn"><i class="fab fa-linkedin-in text-xl"></i></a>
          </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#0659FD] mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#features" className="text-[#0659FD] hover:underline">About Us</a></li>
          <li><a href="#features" className="text-[#0659FD] hover:underline">Features</a></li>
          <li><a href="#team" className="text-[#0659FD] hover:underline">Team</a></li>
          <li><a href="#technologies" className="text-[#0659FD] hover:underline">Technologies</a></li>
          <li><a href="#technologies" className="text-[#0659FD] hover:underline">Support</a></li>
          <li><a href="#technologies" className="text-[#0659FD] hover:underline">Privacy Policy</a></li>
          <li><a href="#technologies" className="text-[#0659FD] hover:underline">Terms of Service</a></li>
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#0659FD] mb-4">Newsletter</h3>
        <p className="text-gray-600 mb-4">Get updates on new features, releases, and community events.</p>
        <form className="flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 rounded border border-[#D0DFFC] bg-white/80" />
          <button type="submit" className="bg-[#0659FD] text-white px-8 py-3 rounded font-bold hover:bg-blue-700 transition cursor-pointer">Subscribe</button>
        </form>
        <div className="flex gap-3 mt-6">
        <a href="https://github.com/StudentPortal-grad" className="bg-[#24292f] text-white rounded-full px-6 py-3 font-bold flex items-center gap-2 hover:bg-[#444c56] transition">
          <i className="fab fa-github"></i> Contribute
        </a>
        <a href="https://github.com/StudentPortal-grad" className="border-2 border-[#0659FD] text-[#0659FD] px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-[#D0DFFC] transition">
          <i className="fas fa-download"></i> Download
        </a>
      </div>
      </div>
    </div>
    <div className="text-center text-gray-700 pt-6 text-lg font-light">
      &copy; 2025 Student Portal. Open source. All rights reserved.
    </div>
  </footer>
);

export default Footer;
