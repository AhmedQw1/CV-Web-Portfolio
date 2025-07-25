import React, { useEffect, useRef } from 'react';
import profileImage from '../assets/Profile.png';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      className="py-20 pt-32 bg-stripe-pattern bg-white dark:bg-gray-900"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 reveal opacity-0">
            {/* Web 2.0 Welcome Banner */}
            <div className="bg-web2-blue text-white py-4 px-6 rounded-lg shadow-web2 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-comic font-bold text-shadow relative z-10">
                Hi, I'm <span className="text-web2-yellow">Ahmed Salmen</span>
              </h1>
              {/* Small HELLO! label */}
              <div className="absolute right-0 top-0 bg-web2-red text-white px-[4px] py-[1px] shadow-md text-[9px] font-bold rounded-[5px]">
                HELLO!
              </div>
            </div>
            {/* Animated subtitle with Web 2.0 style */}
            <div className="bg-black p-2 mb-8 border-2 border-web2-green overflow-hidden font-retro">
              <div className="animate-blink text-web2-green">
                &gt; <span className="typing-effect">Software Engineer</span>_
              </div>
            </div>
            <p className="text-xl mb-8 font-comic text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 border-2 border-gray-300 dark:border-gray-700 rounded-md shadow-md">
              Passionate about building web and desktop applications with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="bg-gradient-blue text-white px-6 py-3 rounded-md border-2 border-blue-700 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  View My Work
                </span>
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-button text-black dark:text-black px-6 py-3 rounded-md border-2 border-gray-300 dark:border-gray-500 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic dark:bg-gray-800"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </span>
              </a>
            </div>
            {/* Web 2.0 Counter */}
            <div className="mt-8 inline-block bg-black text-green-400 font-mono px-4 py-2 rounded-md border-2 border-green-500">
              <div className="text-sm">Online for: 365 days</div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 reveal opacity-0 flex justify-center">
            {/* Web 2.0 style image frame */}
            <div className="relative">
              <div className="border-8 border-white bg-white shadow-lg rounded-md p-2 transform rotate-3">
                <img 
                  src={profileImage} 
                  alt="Ahmed Salmen" 
                  className="w-64 h-64 object-cover border-2 border-gray-300"
                />
                {/* Web 2.0 photo corner */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-web2-yellow transform rotate-45"></div>
                {/* Photo tape */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gradient-to-b from-gray-200 to-gray-300 opacity-80"></div>
              </div>
              {/* Web 2.0 style polaroid caption */}
              <div className="absolute -bottom-6 -right-4 font-comic text-sm border-2 border-gray-200 p-3 shadow-md transform -rotate-2 rounded-md bg-white dark:bg-gray-800 text-retro-navy dark:text-white transition-colors duration-300">
                Developer at work! 🚀
              </div>
              {/* Web 2.0 Starburst */}
              <div className="absolute -top-12 -right-12">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-web2-red rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-0 bg-web2-orange rounded-full transform rotate-45 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                    <span className="animate-bounce-slow">Hi!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;