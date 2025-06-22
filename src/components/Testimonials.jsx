import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Computer Science Student",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    content: "This platform has transformed how I collaborate with my peers. The resource sharing features are incredible!"
  },
  {
    name: "Fatma Ali",
    role: "Professor of Engineering",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    content: "As a faculty member, I've seen significant improvement in student engagement and collaboration."
  },
  {
    name: "Youssef Mohamed",
    role: "Biology Student",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    content: "The platform's ease of use and accessibility have made it a game-changer for my studies."
  },
  {
    name: "Mona Samir",
    role: "Mathematics Professor",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    content: "The collaborative tools have significantly enhanced my teaching methods and student interaction."
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="max-w-7xl mx-auto my-20 rounded-[2.5rem] bg-white/60 shadow-2xl px-16 pt-16 pb-[30px] backdrop-blur-lg">
      <div className="flex flex-col items-center mb-4">
        <div className="bg-[#0659FD]/10 rounded-full flex items-center justify-center w-20 h-20 mb-6">
          <i className="fas fa-quote-left text-4xl text-[#0659FD]"></i>
        </div>
        <span className="inline-block bg-[#D0DFFC] text-[#0659FD] font-semibold rounded-full px-4 py-1 mb-3">What Our Users Say</span>
        <h2 className="text-5xl font-bold text-[#0659FD] mb-2 relative text-center">
          Trusted by Students & Faculty
          <span className="block h-1 w-16 bg-gradient-to-r from-[#0659FD] to-[#b3cfff] rounded-full mx-auto mt-1"></span>
        </h2>
        <p className="text-2xl text-gray-700 font-light max-w-2xl text-center">
          Hear from real users about how our platform has transformed their academic experience.
        </p>
      </div>

      <div className="relative overflow-x-hidden overflow-y-visible h-[435px]">
          <div 
            className="flex transition-transform duration-500 ease-in-out w-full" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            id="testimonial-slider"
            >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 min-h-[200px] flex flex-col items-center justify-start"
                >
                <div className="z-20 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gradient-to-tr from-[#0659FD] to-[#b3cfff] flex items-center justify-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="group bg-white/60 border border-white/40 backdrop-blur-xl rounded-2xl shadow-2xl px-8 pt-16 pb-8 flex flex-col items-center mx-auto relative overflow-visible -mt-12">
                  <div className="bg-gradient-to-tr from-[#0659FD] to-[#b3cfff] rounded-full p-4 mb-4 shadow-lg flex items-center justify-center">
                    <i className="fas fa-quote-left text-white text-3xl"></i>
                  </div>
                  <p className="text-gray-700 mb-4 text-center font-light text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex flex-col items-center w-full mt-2">
                    <h4 className="text-lg font-bold text-[#0659FD] mb-1">{testimonial.name}</h4>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#0659FD]"></span>
                      <span className="text-gray-500 text-sm font-medium">{testimonial.role}</span>
                    </div>
                    <div class="flex gap-1 mt-2">
                      <i class="fas fa-star text-yellow-400"></i>
                      <i class="fas fa-star text-yellow-400"></i>
                      <i class="fas fa-star text-yellow-400"></i>
                      <i class="fas fa-star text-yellow-400"></i>
                      <i class="fas fa-star text-yellow-400"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        <div className="flex justify-center mt-4">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentSlide ? 'bg-[#0659FD]' : 'bg-gray-300'}`}
              onClick={() => showSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;