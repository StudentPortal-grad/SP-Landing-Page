import React from 'react';

const logos = [
  "html5", "css3", "javascript", "typescript", "nodejs",
  "express", "mongodb", "socketio", "firebase", "github",
  "react","nextjs", "tailwindcss", "flutter", "dart", "python",
  "pytorch", "flask", "jupyter"
];

const Technologies = () => (
  <section className="max-w-7xl mx-auto my-20 rounded-[2.5rem] bg-white/60 shadow-2xl p-16 backdrop-blur-lg">
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4">
        <div className="bg-[#0659FD]/10 rounded-full p-4">
          <i className="fas fa-tools text-4xl text-[#0659FD]"></i>
        </div>
      </div>
      <span className="inline-block bg-[#D0DDFC] text-[#0659FD] font-semibold rounded-full px-4 py-1 mb-2">Technologies Used</span>
      <h2 className="text-5xl font-bold text-[#0659FD] mb-2 relative text-center">
        Built With Modern Tools
        <span className="block h-1 w-24 bg-gradient-to-r from-[#0659FD] to-[#b3cfff] rounded-full mx-auto mt-2"></span>
      </h2>
      <p className="text-2xl text-gray-700 font-light max-w-2xl mx-auto">Our platform leverages the latest technologies for performance, security, and scalability.</p>
    </div>
    <div className="flex flex-wrap justify-center gap-10 items-center">
      {logos.map((tech, i) => (
        <img key={i} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`} alt={tech} className="w-16 h-16" />
      ))}
    </div>
  </section>
);

export default Technologies;
