import React, { useEffect, useRef } from 'react';
import whatever from '../assets/whatever.png';      
import soundPlayer from '../assets/SoundPlayer.png'; 
import luffyGif from '../assets/luffyBeingDumb.gif'; 

const Projects = () => {
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
    <section id="projects" className="py-20 bg-dot-pattern bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal opacity-0">
          <div className="relative inline-block">
            <div className="bg-web2-purple text-white font-comic text-2xl md:text-3xl py-3 px-8 rounded-lg shadow-web2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
              <h2 className="relative z-10 text-shadow">
                My <span className="text-web2-yellow font-bold">Projects</span>
              </h2>

              <div className="absolute -right-0 top-0 bottom-1/2 bg-web2-red text-white px-[1px] py-[0px] shadow-md text-[9px] font-bold rounded-[5px]">
                NEW!
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portfolio Website */}
          <div className="reveal opacity-0">
            <div className="border-4 border-gray-300 bg-white rounded-lg overflow-hidden shadow-web2 relative">
              <div className="relative">
                <img 
                  src={whatever} 
                  alt="Portfolio Website" 
                  className="w-full h-48 object-cover"
                />
                
                {/* Small FEATURED label */}
                <div className="absolute right-0 top-0 bg-web2-blue text-white px-1 py-0.5 shadow-md text-[9px] font-bold rounded-[5px]">
                  FEATURED
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-comic font-bold mb-2 text-retro-navy">Portfolio Website</h3>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">React</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Tailwind CSS</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">JavaScript</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 font-comic text-sm">
                    A personal portfolio website built with React and Tailwind CSS featuring Web 2.0 design elements, responsive layout, and interactive components.
                  </p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href="https://github.com/AhmedQw1/CV-Web-Portfolio.git" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-blue text-white px-3 py-1 rounded-md border-2 border-blue-700 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow text-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                      <span className="relative z-10">
                        GitHub
                      </span>
                    </a>
                    <a 
                      href="https://AhmedQw1-portfolio-xi.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-button text-black px-3 py-1 rounded-md border-2 border-gray-300 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow text-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
                      <span className="relative z-10">
                        Live Demo
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* JavaFX Sound Player */}
          <div className="reveal opacity-0">
            <div className="border-4 border-gray-300 bg-white rounded-lg overflow-hidden shadow-web2 relative">
              <div className="relative">
                <img 
                  src={soundPlayer} 
                  alt="JavaFX Sound Player" 
                  className="w-full h-48 object-cover"
                />
                
                {/* Small DOWNLOAD label */}
                <div className="absolute right-0 top-0 bg-web2-green text-white px-1 py-0.5 shadow-md text-[9px] font-bold rounded-[5px]">
                  DOWNLOAD
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-comic font-bold mb-2 text-retro-navy">JavaFX Sound Player</h3>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">Java</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">JavaFX</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">FXML</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 font-comic text-sm">
                    A desktop sound player application built with JavaFX that allows users to play, pause, and skip audio tracks with a clean and intuitive interface.
                  </p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href="https://github.com/AhmedQw1/SoundPlayer.git" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-blue text-white px-3 py-1 rounded-md border-2 border-blue-700 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow text-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                      <span className="relative z-10">
                        GitHub
                      </span>
                    </a>
                    <a 
                      href="https://github.com/AhmedQw1/SoundPlayer/releases/download/v1.0.0/SoundPlayerV1-1.0.exe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-web2-green text-white px-3 py-1 rounded-md border-2 border-green-700 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow text-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                      <span className="relative z-10 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Upcoming Project */}
          <div className="reveal opacity-0">
            <div className="border-4 border-gray-300 bg-white rounded-lg overflow-hidden shadow-web2 relative">
              <div className="relative">
                <img 
                  src={luffyGif} 
                  alt="Upcoming Project" 
                  className="w-full h-48 object-cover"
                />
                
                {/* Small UPCOMING label */}
                <div className="absolute right-0 top-0 bg-web2-orange text-white px-1 py-0.5 shadow-md text-[9px] font-bold rounded-[5px]">
                  UPCOMING
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-comic font-bold mb-2 text-retro-navy">Upcoming Project</h3>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">Secret</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">Secret</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">Secret</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 font-comic text-sm">
                    Coming Soon!
                  </p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href="#projects" 
                      className="bg-gradient-metal text-gray-700 px-3 py-1 rounded-md border-2 border-gray-400 font-bold shadow-web2 relative overflow-hidden text-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                      <span className="relative z-10">
                        Coming Soon
                      </span>
                    </a>
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

export default Projects;