import React, { useEffect, useRef, useState } from 'react';
import { Button, Card } from 'pixel-retroui';
import profileImage from '../assets/images/Profile.png';

const Hero = () => {
  const sectionRef = useRef(null);
  const [visitorCount, setVisitorCount] = useState('...');

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

    const updateVisitorCount = async () => {
      // Improved visitor tracking logic
      const visitorId = localStorage.getItem('portfolioVisitorId') || 
                       sessionStorage.getItem('portfolioVisitorId');
      
      try {
        let count;
        
        // Check if we're in development (Vite) or production (Vercel)
        const isDevelopment = window.location.hostname === 'localhost';
        
        if (isDevelopment) {
          // Use a simple mock counter for development
          let devCount = localStorage.getItem('devVisitorCount') || '0';
          
          // Only increment if no visitor ID exists in either storage
          if (!visitorId) {
            const newVisitorId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('portfolioVisitorId', newVisitorId);
            sessionStorage.setItem('portfolioVisitorId', newVisitorId);
            
            // Increment the development counter
            devCount = (parseInt(devCount) + 1).toString();
            localStorage.setItem('devVisitorCount', devCount);
          }
          
          count = parseInt(devCount);
        } else {
          // Use API endpoint in production (Vercel)
          let endpoint = '/api/counter?action=get';
          
          // Only increment if no visitor ID exists in either storage
          if (!visitorId) {
            const newVisitorId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('portfolioVisitorId', newVisitorId);
            sessionStorage.setItem('portfolioVisitorId', newVisitorId);
            endpoint = '/api/counter?action=increment';
          }

          const response = await fetch(endpoint);
          const data = await response.json();
          count = data.count;
        }
        
        if (count !== undefined) {
          setVisitorCount(count.toLocaleString());
        }
      } catch (error) {
        console.error("Failed to update visitor count:", error);
        setVisitorCount('N/A'); 
      }
    };

    updateVisitorCount();

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
            <div className="bg-web2-blue text-white py-4 px-6 rounded-lg shadow-web2 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-minecraft font-bold text-shadow relative z-10">
                Hi, I'm <span className="text-web2-yellow">Ahmed Salmen</span>
              </h1>
              <div className="absolute right-0 top-0 bg-web2-red text-white px-[4px] py-[1px] shadow-md text-[9px] font-bold rounded-[5px]">
                HELLO!
              </div>
            </div>
            <div className="bg-black p-2 mb-8 border-2 border-web2-green overflow-hidden font-minecraft">
              <div className="animate-blink text-web2-green">
                &gt; <span className="typing-effect font-minecraft">Software Engineer</span>_
              </div>
            </div>
            <p className="text-xl mb-8 font-minecraft text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 border-2 border-gray-300 dark:border-gray-700 rounded-md shadow-md">
              Passionate about building web and desktop applications with modern technologies.
            </p>
            
            {/* Updated buttons with pixel-retroui */}
            <div className="flex flex-wrap gap-4">
              <Button 
                bg="#0066cc" 
                textColor="#ffffff"
                shadow="#004499"
                className="px-6 py-3 font-bold transition-all hover:scale-105 cursor-pointer"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <span className="flex items-center font-minecraft">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  View My Work
                </span>
              </Button>
              
              <Button 
                bg="#ff6b6b" 
                textColor="#ffffff"
                shadow="#cc5555"
                className="px-6 py-3 font-bold transition-all hover:scale-105 cursor-pointer"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <span className="flex items-center font-minecraft">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </span>
              </Button>
            </div>
            
            {/* Updated visitor counter with pixel-retroui */}
            <div className="mt-8">
              <Card 
                bg="#000000" 
                textColor="#00ff00"
                shadow="#333333"
                className="inline-block px-4 py-2 border-2 border-green-500"
              >
                <div className="font-minecraft text-sm animate-pulse">
                  &gt; Visitors: <span className="text-green-400">{visitorCount}</span>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 reveal opacity-0 flex justify-center">
            <div className="relative">
              <div className="border-8 border-white bg-white shadow-lg rounded-md p-2 transform rotate-3">
                <img 
                  src={profileImage} 
                  alt="Ahmed Salmen" 
                  className="w-64 h-64 object-cover border-2 border-gray-300"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-web2-yellow transform rotate-45"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gradient-to-b from-gray-200 to-gray-300 opacity-80"></div>
              </div>
              
              {/* Updated speech bubble with pixel-retroui */}
              <div className="absolute -bottom-6 -right-4">
                <Card 
                  bg="#ffffff" 
                  textColor="#000000"
                  shadow="#cccccc"
                  className="p-3 transform -rotate-2"
                >
                  <div className="font-minecraft text-sm">
                    Developer at work! 🚀
                  </div>
                </Card>
              </div>
              
              <div className="absolute -top-12 -right-12">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-web2-red rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-0 bg-web2-orange rounded-full transform rotate-45 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                    <span className="animate-bounce-slow font-minecraft">Hi!</span>
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