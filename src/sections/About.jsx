import React, { useRef, useEffect } from 'react';
import profileImage from '../assets/Profile.png';

const About = () => {
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
    <section id="about" className="py-20 bg-dot-pattern bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal opacity-0">
            <div className="relative inline-block">
              <div className="bg-web2-green text-white font-comic text-2xl md:text-3xl py-3 px-8 rounded-lg shadow-web2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                <h2 className="relative z-10 text-shadow">
                  About <span className="text-web2-yellow font-bold">Me</span>
                </h2>
                
                {/* BIO label */}
                <div className="absolute right-0 top-0 bg-web2-red text-white px-[3px] py-[1px] shadow-md text-[9px] font-bold rounded-[5px]">
                  BIO
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="reveal opacity-0">
              <div className="border-4 border-gray-300 bg-white p-4 rounded-lg shadow-web2 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-web2-blue"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-web2-blue"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-web2-blue"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-web2-blue"></div>
                
                <img 
                  src={profileImage} 
                  alt="Ahmed working" 
                  className="w-full h-auto rounded-lg border-2 border-gray-300"
                />
                
                {/* Web 2.0 style caption box */}
                <div className="bg-gradient-blue text-white py-2 px-4 shadow-web2 mt-4 rounded-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                  <p className="font-comic text-center relative z-10">
                    Software Engineer
                  </p>
                </div>
              </div>
              
              {/* Web 2.0 badge coding since */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-web2-orange rounded-full flex items-center justify-center text-white transform rotate-12 shadow-lg font-comic">
                <div className="text-center text-sm">
                  <div>Coding</div>
                  <div>since</div>
                  <div>2023</div>
                </div>
              </div>
            </div>
            
            <div className="reveal opacity-0">
              <div className="border-4 border-gray-300 bg-white p-6 rounded-lg shadow-web2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-comic font-bold mb-4 text-retro-navy">
                    My Background
                  </h3>
                  
                  <div className="space-y-4 font-comic text-gray-700">
                    <p>
                      I'm a Software Engineer with a growing passion for both web and desktop application development. I've built a personal CV-based website using React, JSX, Tailwind CSS, and HTML/CSS to showcase my skills and projects.
                    </p>
                    
                    <p>
                      On the desktop side, I've developed a sound player using JavaFX (JFX), FXML, and Scene Builder, working primarily in IntelliJ IDEA. I'm comfortable using version control with Git and managing my projects on GitHub.
                    </p>
                    
                    <p>
                      I use both VS Code and IntelliJ in my workflow, depending on the type of project. I'm constantly learning and expanding my skills by building real-world projects that push me forward.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    <a 
                      href="#skills" 
                      className="bg-gradient-blue text-white px-4 py-2 rounded-md border-2 border-blue-700 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                      <span className="relative z-10">
                        My Skills ➡️
                      </span>
                    </a>
                    
                    <a 
                      href="#projects" 
                      className="bg-gradient-button text-black px-4 py-2 rounded-md border-2 border-gray-300 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
                      <span className="relative z-10">
                        My Projects ➡️
                      </span>
                    </a>
                  </div>
                </div>
                
                {/* Fixed triangle decoration - correct direction */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[25px] border-r-[25px] border-t-web2-blue border-r-transparent transform scale-x-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;