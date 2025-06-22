import React from 'react';

const team = [
  { name: "Mona Alhusseiny", role: "Front-End Developer", image: "https://media.licdn.com/dms/image/v2/D4D03AQH03CyG1jQn3A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697228449125?e=1755734400&v=beta&t=BaiP6gvg2M5c9Wydidmh2d6VU8wSitRZPrpf8ip92TM" , linkedin: "linkedin.com/in/mona-alhusseiny" , github: "https://github.com/Mona-ahusseiny" },
  { name: "Abdullah Mohamed", role: "Penetration Tester", image: "https://media.licdn.com/dms/image/v2/D4D03AQFCXLSmGKhZlw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709147202847?e=1755734400&v=beta&t=qyTA70EpZmcm9zN3H7ig9K9ZqjqzcHbqEwHNLKUBoho" , linkedin: "linkedin.com/in/0xmrmasry" , github: "https://github.com/0xMrMasry" },
  { name: "Mo'men Ayman", role: "Mobile developer", image: "https://media.licdn.com/dms/image/v2/D4D03AQEObjwE0f46iQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1674747567356?e=1755734400&v=beta&t=CnraCi-Ktadysp7B-vtr6371cLloVAM-4O4MN6sKn58" , linkedin: "https://www.linkedin.com/in/moamen-ayman-3049b2236/" , github: "https://github.com/xMAG3" },
  { name: "Mina Zarif", role: "Mobile Team Leader", image: "https://media.licdn.com/dms/image/v2/D4D03AQFEMNS8j_OSJA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718240943434?e=1755734400&v=beta&t=DAMXCqqOt8ubRcVzJo3Q0srRLE8-3s7cXmRyNp4hRQE" , linkedin: "https://www.linkedin.com/in/mina-zarif-03b9121ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" , github: "https://github.com/Mina-Zarif"},
  { name: "Nour Allam", role: "Lead Product Designer", image: "https://media.licdn.com/dms/image/v2/D4D03AQGzIVRhohgskw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722520534573?e=1755734400&v=beta&t=cC76oD-jWJQQiZVTceOe98dxmSd8DhLGjgTBqIzRcBQ" , linkedin: "https://www.linkedin.com/in/nour-allam-8a8a56233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" , github: "https://github.com/nour-allam1412" },
  { name: "Tasbeeh Ismail", role: "Backend Developer", image: "https://media.licdn.com/dms/image/v2/D4D03AQFoJDwlZ4P4gQ/profile-displayphoto-shrink_400_400/B4DZc7NqxmGkAk-/0/1749045139278?e=1755734400&v=beta&t=PvCjeXonSQRHPTwlddxxJs4w5npTAYMNnSdjRtV7xww" , linkedin: "https://www.linkedin.com/in/tasbeeh-ismail-a4609a220" , github: "https://github.com/tasbeehismail" },
  { name: "Omnia Gamal", role: "Backend Developer", image: "https://media.licdn.com/dms/image/v2/D4D03AQHORvGkuItnQA/profile-displayphoto-shrink_400_400/B4DZPfE7SjHUAk-/0/1734614432001?e=1755734400&v=beta&t=AhnPl-IEORH8ZMc3N7tTMz-Kj1SG-BycbiLiPXhllxs" , linkedin: "https://www.linkedin.com/in/omnia-gamal25" , github: "https://github.com/OmniaGamall" },
  { name: "Ziad Ahmed", role: "Penetration Tester", image: "https://teamcsa.org/wp-content/uploads/2024/08/HeadshotPlaceholder.png" , linkedin: "#" , github: "#" },
  { name: "Youssef Abdelmaksod", role: "AI Specialist", image: "https://media.licdn.com/dms/image/v2/D4D03AQHPrbzkVRuWYg/profile-displayphoto-shrink_400_400/B4DZdRWeMwGkAk-/0/1749416536573?e=1755734400&v=beta&t=OTZa3Ehl1sTOjsRuKMNx-yOLXXqyQc5vUqvcTnHDM5E" , linkedin: "https://www.linkedin.com/in/youssefabdelmaksod?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" , github: "https://github.com/YoussefAbdelmaksod/ " },
  { name: "Abdelrahman Ahmed Saad", role: "Web developer", image: "https://media.licdn.com/dms/image/v2/D4D35AQFqUo88N_8ONg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1691497850468?e=1751162400&v=beta&t=O5WpI7zUNoW1dh60JebgI1Doh8XzPDhpkCtEmNc7DSs" , linkedin: "http://www.linkedin.com/in/abdelrahman-ahmed-saad-b74b35260" , github: "https://github.com/Abdo-Megahed" },
  { name: "Abdulrahman Abuzeid ", role: "Back-End Developer ", image: "https://media.licdn.com/dms/image/v2/D4D03AQGhVRjm01pnxg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719016311077?e=1755734400&v=beta&t=ht3uE-FIE-M3FA2nyGC1KZBRPr0NG-7Irmqo9V-yPUI" , linkedin: "https://www.linkedin.com/in/abdulrahman-abuzeid-a5a347231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " , github: "https://github.com/AbdulrahmanAbozaid" },
];

const Team = () => (
  <section className="max-w-7xl mx-auto my-20 rounded-[2.5rem] bg-white/60 shadow-2xl p-16 backdrop-blur-lg">
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4">
        <div className="bg-[#0659FD]/10 rounded-full p-4">
          <i className="fas fa-users text-4xl text-[#0659FD]"></i>
        </div>
      </div>
      <span className="inline-block bg-[#D0DFFC] text-[#0659FD] font-semibold rounded-full px-4 py-1 mb-3">Meet the Team</span>
      <h2 className="text-5xl font-bold text-[#0659FD] mb-2 relative text-center">
        Our Dedicated Contributors
        <span className="block h-1 w-24 bg-gradient-to-r from-[#0659FD] to-[#b3cfff] rounded-full mx-auto mt-2"></span>
      </h2>
      <p className="text-2xl text-gray-700 font-light max-w-2xl mx-auto">Passionate developers, designers, and educators building the future of academic collaboration.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {team.map((member, i) => (
        <div key={i} className="bg-white/60 border border-white/40 backdrop-blur-xl rounded-2xl shadow-xl p-8 flex flex-col items-center">
          <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full border-4 border-[#0659FD]/30 shadow-lg mb-4 object-cover" />
          <h4 className="text-xl font-bold text-[#0659FD] mb-1">{member.name}</h4>
          <span className="text-gray-500 mb-2">{member.role}</span>
          <div class="flex gap-4 mt-2">
            <a href={member.github} class="text-[#0659FD] text-2xl hover:text-blue-700"><i class="fab fa-github"></i></a>
            <a href={member.linkedin} class="text-[#0659FD] text-2xl hover:text-blue-700"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Team;
