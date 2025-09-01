import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);
  
  const getDateString = () => {
    return currentTime.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };
  
  const formatTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${ampm}`;
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Skills', href: '#skills', icon: '🔧' },
    { name: 'Projects', href: '#projects', icon: '📂' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ];

  return (
    <header className={`w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm' : 'bg-dot-pattern'}`}>
      <a 
        href="#home" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-web2-blue focus:text-white"
      >
        Skip to content
      </a>
      <div className="bg-retro-navy text-white py-1 px-4 text-xs font-minecraft">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            Welcome, visitor! Today is {getDateString()}
          </div>
          <div className="animate-blink">{formatTime(currentTime)}</div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#home" 
            className="relative inline-block"
          >
            <div className="bg-gradient-blue text-white font-minecraft text-xl md:text-2xl py-2 px-4 rounded-lg shadow-web2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
              <span className="relative z-10 text-shadow">
                Ahmed<span className="text-web2-yellow font-bold">Salmen</span>
              </span>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="bg-gradient-button border-2 border-gray-300 text-retro-navy font-bold px-3 py-2 rounded-md shadow-web2 hover:shadow-glossy relative overflow-hidden transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent h-1/2"></div>
                <span className="relative z-10 flex items-center">
                  <span className="mr-1">{item.icon}</span>
                  {item.name}
                </span>
              </a>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className="bg-gradient-button border-2 border-gray-300 text-retro-navy font-bold p-2 rounded-md shadow-web2 hover:shadow-glossy relative overflow-hidden focus:outline-none"
              aria-label="Toggle dark mode"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent h-1/2"></div>
              <span className="relative z-10">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
          </nav>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="bg-gradient-button border-2 border-gray-300 p-2 mr-2 rounded-md shadow-web2 relative overflow-hidden focus:outline-none"
              aria-label="Toggle dark mode"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent h-1/2"></div>
              <span className="relative z-10">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gradient-button border-2 border-gray-300 p-2 rounded-md shadow-web2 relative overflow-hidden focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent h-1/2"></div>
              <span className="relative z-10">
                {isOpen ? '✖️' : '☰'}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white py-2 shadow-lg border-t-2 border-b-2 border-gray-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-retro-navy hover:bg-gray-100 font-sans"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;