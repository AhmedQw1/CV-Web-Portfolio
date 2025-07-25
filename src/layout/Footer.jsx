import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);
  
  // Format date as: YYYY-MM-DD hh:mm:ss AM/PM (12-hour format)
  const formatTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    // Convert to 12-hour format with AM/PM
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
    
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${ampm}`;
  };
  
  return (
    <footer className="bg-stripe-pattern bg-white dark:bg-gray-900 border-t-4 border-web2-blue">
      {/* Old-school top footer decoration */}
      <div className="h-4 bg-gradient-blue"></div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {/* Web 2.0 style logo */}
          <a href="#home" className="relative inline-block mb-6">
            <div className="bg-gradient-blue text-white font-comic text-xl py-2 px-4 rounded-lg shadow-web2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
              <span className="relative z-10 text-shadow">
                Ahmed<span className="text-web2-yellow font-bold">Salmen</span>
              </span>
            </div>
          </a>
          
          {/* Oldschool navigation buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a href="#home" className="bg-gradient-button border-2 border-gray-300 px-3 py-1 rounded-md shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic text-sm text-gray-800">
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
              <span className="relative z-10">Home</span>
            </a>
            <a href="#about" className="bg-gradient-button border-2 border-gray-300 px-3 py-1 rounded-md shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic text-sm text-gray-800">
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
              <span className="relative z-10">About</span>
            </a>
            <a href="#skills" className="bg-gradient-button border-2 border-gray-300 px-3 py-1 rounded-md shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic text-sm text-gray-800">
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
              <span className="relative z-10">Skills</span>
            </a>
            <a href="#projects" className="bg-gradient-button border-2 border-gray-300 px-3 py-1 rounded-md shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic text-sm text-gray-800">
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
              <span className="relative z-10">Projects</span>
            </a>
            <a href="#contact" className="bg-gradient-button border-2 border-gray-300 px-3 py-1 rounded-md shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic text-sm text-gray-800">
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
              <span className="relative z-10">Contact</span>
            </a>
          </div>
          
          {/* Social media buttons classic Web 2.0 style :) */}
          <div className="flex space-x-3 mb-6">
            <a href="https://github.com/AhmedQw1" target="_blank" rel="noopener noreferrer" className="bg-gradient-blue text-white px-3 py-1 rounded-md border-2 border-blue-700 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow text-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
              <span className="relative z-10">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-salmen-26119a370/" target="_blank" rel="noopener noreferrer" className="bg-gradient-blue text-white px-3 py-1 rounded-md border-2 border-blue-700 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow text-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
              <span className="relative z-10">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/_klqc/" target="_blank" rel="noopener noreferrer" className="bg-gradient-blue text-white px-3 py-1 rounded-md border-2 border-blue-700 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow text-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
              <span className="relative z-10">Instagram</span>
            </a>
          </div>
          <div className="text-center text-gray-600 font-comic text-sm">

            <p className="text-xs text-gray-500">
              Built with React and Tailwind CSS | Current Time: {formatTime(currentTime)} | User: AhmedQw1
            </p>
          </div>
          
          {/* Back to top button very Web 2.0 */}
          <a 
            href="#home" 
            className="mt-4 bg-gradient-button border-2 border-gray-300 px-4 py-2 rounded-full shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic text-sm text-gray-800"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
            <span className="relative z-10">Back to Top ↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;