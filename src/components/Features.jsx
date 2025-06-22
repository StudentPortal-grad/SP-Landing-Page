import React from 'react';

const FeatureCard = ({ icon, title, description, features }) => (
  <div className="group bg-white/40 border border-white/30 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-start hover:scale-105 hover:shadow-2xl hover:border-[#0659FD] transition-all h-full">
    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-[#0659FD] to-[#b3cfff] rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform">
      <i className={`fas ${icon} text-white text-3xl`}></i>
    </div>
    <h3 className="text-2xl font-bold text-[#0659FD] mb-2">{title}</h3>
    <p className="text-gray-700 mb-4 font-light">{description}</p>
    <ul className="space-y-2 text-gray-700">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2">
          <i className={`fas ${feature.icon} text-[#0659FD]`}></i> {feature.text}
        </li>
      ))}
    </ul>
  </div>
);

const Features = () => {
  const featuresData = [
    {
      icon: "fa-comments",
      title: "Smart Communication",
      description: "Connect with peers and faculty through direct messaging and group chats",
      features: [
        { icon: "fa-bell", text: "Real-time notifications" },
        { icon: "fa-file-upload", text: "File sharing capabilities" },
        { icon: "fa-search", text: "Message search functionality" },
        { icon: "fa-check-double", text: "Read receipts" },
      ]
    },
    {
      icon: "fa-book",
      title: "Academic Resources",
      description: "Access and share academic materials, study resources, and course content",
      features: [
        { icon: "fa-filter", text: "Advanced search filters" },
        { icon: "fa-folder", text: "Resource categorization" },
        { icon: "fa-code-branch", text: "Version control" },
        { icon: "fa-chart-line", text: "Download tracking" },
      ]
    },
    {
      icon: "fa-users",
      title: "Community Building",
      description: "Join official and community groups to collaborate and discuss",
      features: [
        { icon: "fa-chart-bar", text: "Group analytics" },
        { icon: "fa-user-shield", text: "Member roles and permissions" },
        { icon: "fa-rss", text: "Activity feeds" },
        { icon: "fa-poll", text: "Polls and surveys" },
      ]
    },
    {
      icon: "fa-calendar-alt",
      title: "Event Management",
      description: "Never miss important academic events and deadlines",
      features: [
        { icon: "fa-calendar-check", text: "Calendar integration" },
        { icon: "fa-bell", text: "Reminder system" },
        { icon: "fa-copy", text: "Event templates" },
        { icon: "fa-clipboard-check", text: "Attendance tracking" },
      ]
    },
    {
      icon: "fa-robot",
      title: "AI-Powered Chatbot",
      description: "Get instant answers to academic questions and platform guidance from our smart AI assistant",
      features: [
        { icon: "fa-question-circle", text: "24/7 academic support" },
        { icon: "fa-magic", text: "Natural language queries" },
        { icon: "fa-graduation-cap", text: "Policy and GPA guidance" },
        { icon: "fa-lightbulb", text: "Personalized help" },
      ]
    },
    {
      icon: "fa-brain",
      title: "Personalized Learning Recommendations",
      description: "AI analyzes your activity to suggest resources, events, and groups tailored to your needs",
      features: [
        { icon: "fa-bolt", text: "Smart resource suggestions" },
        { icon: "fa-users", text: "Group and event matching" },
        { icon: "fa-chart-pie", text: "Progress tracking" },
        { icon: "fa-bell", text: "Timely reminders" },
      ]
    },
  ];

  return (
    <section className="max-w-7xl mx-auto my-20 rounded-[2.5rem] bg-white/60 shadow-2xl p-16 backdrop-blur-lg">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="bg-[#0659FD]/10 rounded-full p-4">
            <i className="fas fa-cubes text-4xl text-[#0659FD]"></i>
          </div>
        </div>
        <span className="inline-block bg-[#D0DFFC] text-[#0659FD] font-semibold rounded-full px-4 py-1 mb-2">Key Features</span>
        <h2 className="text-5xl font-bold text-[#0659FD] mb-2 relative">
          Everything You Need for Academic Success
          <span className="block h-1 w-24 bg-gradient-to-r from-[#0659FD] to-[#b3cfff] rounded-full mx-auto mt-2"></span>
        </h2>
        <p className="text-2xl text-gray-700 font-light max-w-2xl mx-auto">Discover powerful tools and features designed to enhance your learning experience</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-12">
        {featuresData.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
};

export default Features;
