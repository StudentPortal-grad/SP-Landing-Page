import React from 'react';

const StepCard = ({ number, title, description, items }) => (
  <div className="group bg-white/40 border border-white/30 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:border-[#0659FD] transition-all h-full">
    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-[#0659FD] to-[#b3cfff] rounded-full mb-6 shadow-lg text-3xl font-bold text-white group-hover:scale-110 transition-transform">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-[#0659FD] mb-2">{title}</h3>
    <p className="text-gray-700 mb-4 font-light text-center">{description}</p>
    <ul className="space-y-2 text-gray-700 text-left">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Simple sign-up process with institutional email verification",
      items: ["Academic interests selection", "Skills and expertise", "Profile completion progress", "Social media integration"]
    },
    {
      number: 2,
      title: "Connect & Collaborate",
      description: "Join relevant groups and start discussions",
      items: ["Smart group recommendations", "Discussion templates", "Resource sharing guidelines", "Collaboration tools"]
    },
    {
      number: 3,
      title: "Stay Organized",
      description: "Track events and manage resources efficiently",
      items: ["Personal dashboard", "Task management", "Progress tracking", "Custom notifications"]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto my-20 rounded-[2.5rem] bg-white/60 shadow-2xl p-16 backdrop-blur-lg">
      <div className="flex flex-col items-center mb-16">
        <div className="bg-[#0659FD]/10 rounded-full flex items-center justify-center w-20 h-20 mb-6">
          <i className="fas fa-route text-4xl text-[#0659FD]"></i>
        </div>
        <span className="inline-block bg-[#D0DFFC] text-[#0659FD] font-semibold rounded-full px-4 py-1 mb-3">How It Works</span>
        <h2 className="text-5xl font-bold text-[#0659FD] mb-2 relative text-center">
          Get Started in 3 Simple Steps
          <span className="block h-1 w-24 bg-gradient-to-r from-[#0659FD] to-[#b3cfff] rounded-full mx-auto mt-2"></span>
        </h2>
        <p className="text-2xl text-gray-700 font-light max-w-2xl text-center">Our platform is designed to make your academic journey seamless and efficient.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-12">
        {steps.map((step, i) => (
          <StepCard key={i} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
