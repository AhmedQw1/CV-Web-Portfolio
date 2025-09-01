import React, { useRef, useEffect } from 'react';
import { Card } from 'pixel-retroui';

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

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "#3498db",
      icon: "🌐",
      skills: [
        { name: "React", experience: "Advanced", description: "Component-based apps, hooks, state management" },
        { name: "JavaScript", experience: "Advanced", description: "ES6+, async/await, DOM manipulation" },
        { name: "HTML5", experience: "Expert", description: "Semantic markup, accessibility, forms" },
        { name: "CSS3", experience: "Advanced", description: "Flexbox, Grid, animations, responsive design" },
        { name: "Tailwind CSS", experience: "Advanced", description: "Utility-first styling, custom components" }
      ]
    },
    {
      title: "Backend & Desktop", 
      color: "#e74c3c",
      icon: "⚙️",
      skills: [
        { name: "Java", experience: "Advanced", description: "OOP, Spring Boot, desktop applications" },
        { name: "JavaFX", experience: "Intermediate", description: "GUI applications, FXML, Scene Builder" },
        { name: "MySQL", experience: "Intermediate", description: "Database design, queries, optimization" },
        { name: "Spring Boot", experience: "Intermediate", description: "REST APIs, dependency injection" }
      ]
    },
    {
      title: "Tools & Workflow",
      color: "#f39c12",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", experience: "Advanced", description: "Version control, collaboration, CI/CD" },
        { name: "VS Code", experience: "Expert", description: "Extensions, debugging, productivity" },
        { name: "IntelliJ IDEA", experience: "Advanced", description: "Java development, refactoring, debugging" },
        { name: "Figma", experience: "Intermediate", description: "UI/UX design, prototyping, collaboration" }
      ]
    },
    {
      title: "Other Technologies",
      color: "#9b59b6", 
      icon: "🚀",
      skills: [
        { name: "Firebase", experience: "Intermediate", description: "Real-time database, authentication" },
        { name: "Vercel", experience: "Intermediate", description: "Deployment, hosting, domain management" },
        { name: "API Integration", experience: "Advanced", description: "REST APIs, data fetching, error handling" },
        { name: "Responsive Design", experience: "Advanced", description: "Mobile-first, cross-browser compatibility" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-noise-pattern bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal opacity-0">
          <Card
            bg="#FF9800"
            textColor="#ffffff"
            shadowColor="#F57C00"
            className="inline-block p-6 relative overflow-hidden"
          >
            <h2 className="text-2xl md:text-3xl font-minecraft font-bold text-shadow">
              My Skills & <span className="text-yellow-200">Expertise</span>
            </h2>
            <div className="absolute right-0 top-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
              HOT!
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="reveal opacity-0">
              <Card
                bg="#ffffff"
                textColor="#000000"
                borderColor={category.color}
                shadowColor="#cccccc"
                className="p-6 h-full"
              >
                <div className="flex items-center justify-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="font-minecraft text-xl font-bold text-center" 
                      style={{ color: category.color }}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-50 p-4 rounded-lg">
                      <div className="mb-2">
                        <span className="font-minecraft text-lg font-bold">
                          {skill.name}
                        </span>
                      </div>
                      <p className="font-minecraft text-sm text-gray-600">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;