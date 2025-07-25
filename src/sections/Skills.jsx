import React, { useRef, useEffect } from 'react';

const Skills = () => {
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

  // Lists of skills by category
  const webDevSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS"
  ];
  
  const desktopSkills = [
    "Java",
    "JavaFX",
    "FXML",
    "Scene Builder"
  ];
  
  const toolsSkills = [
    "VS Code",
    "IntelliJ IDEA",
    "Git & GitHub",
    "Figma"
  ];
  
  // Simple skill item component
  const SkillItem = ({ name }) => (
    <div className="mb-2 border-2 border-gray-200 bg-white rounded-lg p-3 shadow-web2 relative overflow-hidden transition-transform hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent h-1/2"></div>
      <div className="flex items-center relative z-10">
        <span className="font-comic font-bold text-retro-navy">{name}</span>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-noise-pattern bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal opacity-0">
          <div className="relative inline-block">
            <div className="bg-web2-orange text-white font-comic text-2xl md:text-3xl py-3 px-8 rounded-lg shadow-web2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
              <h2 className="relative z-10 text-shadow">
                My Skills & <span className="text-web2-yellow font-bold">Expertise</span>
              </h2>

              {/* HOT! label */}
              <div className="absolute right-0 top-0 bottom-2/4 bg-web2-red text-white px-[3px] py-[1px] shadow-md text-[9px] font-bold rounded-[5px]">
                HOT!
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="reveal opacity-0">
            <div className="border-4 border-gray-300 bg-white rounded-lg p-6 shadow-web2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-blue text-white py-3 px-4 rounded-md shadow-web2 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                  <h3 className="font-comic font-bold text-center text-lg relative z-10">Web Development</h3>
                  
                  {/* Small Pro Level label */}
                  <div className="absolute right-0 top-0 bg-web2-green text-white px-1 py-0.5 shadow-md text-[7px] font-bold">
                    Pro Level
                  </div>
                </div>
                
                <div className="space-y-2">
                  {webDevSkills.map((skill, index) => (
                    <SkillItem key={index} name={skill} />
                  ))}
                </div>
                
                {/* Web 2.0 badge displaying experience */}
                <div className="mt-4 bg-gradient-to-r from-web2-purple to-web2-blue p-3 rounded-lg text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                  <div className="relative z-10 font-comic">
                    <span className="block text-sm">Building with React & TailwindCSS</span>
                  </div>
                </div>
              </div>
              
              {/* Corner embellishment */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[25px] border-r-[25px] border-t-web2-blue border-r-transparent transform scale-x-[-1]"></div>
            </div>
          </div>
          
          {/* Desktop Development */}
          <div className="reveal opacity-0">
            <div className="border-4 border-gray-300 bg-white rounded-lg p-6 shadow-web2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-blue text-white py-3 px-4 rounded-md shadow-web2 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                  <h3 className="font-comic font-bold text-center text-lg relative z-10">Desktop Development</h3>
                  
                  {/* Small Pro Level label */}
                  <div className="absolute right-0 top-0 bg-web2-green text-white px-1 py-0.5 shadow-md text-[7px] font-bold">
                    Pro Level
                  </div>
                </div>
                
                <div className="space-y-2">
                  {desktopSkills.map((skill, index) => (
                    <SkillItem key={index} name={skill} />
                  ))}
                </div>
                
                {/* Web 2.0 badge displaying experience */}
                <div className="mt-4 bg-gradient-to-r from-web2-green to-web2-blue p-3 rounded-lg text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                  <div className="relative z-10 font-comic">
                    <span className="block text-sm">Building with JavaFX & Scene Builder</span>
                  </div>
                </div>
              </div>
              
              {/* Corner embellishment */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[25px] border-r-[25px] border-t-web2-blue border-r-transparent transform scale-x-[-1]"></div>
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="reveal opacity-0">
            <div className="border-4 border-gray-300 bg-white rounded-lg p-6 shadow-web2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-blue text-white py-3 px-4 rounded-md shadow-web2 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                  <h3 className="font-comic font-bold text-center text-lg relative z-10">Tools & Technologies</h3>
                  
                  {/* Small Pro Level label */}
                  <div className="absolute right-0 top-0 bg-web2-green text-white px-1 py-0.5 shadow-md text-[7px] font-bold">
                    Pro Level
                  </div>
                </div>
                
                <div className="space-y-2">
                  {toolsSkills.map((skill, index) => (
                    <SkillItem key={index} name={skill} />
                  ))}
                </div>
                
                {/* Web 2.0 badge displaying experience */}
                <div className="mt-4 bg-gradient-to-r from-web2-orange to-web2-red p-3 rounded-lg text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                  <div className="relative z-10 font-comic">
                    <span className="block text-sm">Working with Modern Dev Tools</span>
                  </div>
                </div>
              </div>
              
              {/* Corner embellishment */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[25px] border-r-[25px] border-t-web2-blue border-r-transparent transform scale-x-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;  