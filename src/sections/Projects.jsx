import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaHeartbeat, FaCalculator } from "react-icons/fa";

import whatever from '../assets/images/whatever.png';
import soundPlayer from '../assets/images/SoundPlayer.png';
import littleLemonIcon from '../assets/images/littleLemonIcon.png'; 

const allProjects = [
  {
    title: "Portfolio Website",
    image: whatever,
    label: "FEATURED",
    tags: [
      { name: "React", color: "black" },
      { name: "Tailwind CSS", color: "black" },
      { name: "JavaScript", color: "black" }
    ],
    description: "A personal portfolio website built with React and Tailwind CSS featuring Web 2.0 design elements, responsive layout, and interactive components.",
    githubUrl: "https://github.com/AhmedQw1/CV-Web-Portfolio.git",
    liveUrl: "https://cv-web-portfolio.vercel.app/",
    labelColor: "black"
  },
  {
    title: "Smart Clinic Management System",
    image: null,
    icon: <FaHeartbeat className="h-24 w-24 object-contain text-red-500" />,
    label: "BACKEND",
    tags: [
      { name: "Java", color: "red-100 text-red-800" },
      { name: "Spring Boot", color: "red-100 text-red-800" },
      { name: "MySQL", color: "red-100 text-red-800" },
    ],
    description: "A full-stack clinic management system with role-based portals for admins, doctors, and patients, built with a Java Spring Boot backend.",
    githubUrl: "https://github.com/AhmedQw1/java-database-capstone.git",
    labelColor: "web2-red"
  },
  {
    title: "Little Lemon Restaurant",
    image: littleLemonIcon,
    label: "LIVE",
    tags: [
      { name: "React", color: "yellow-100 text-yellow-800" },
      { name: "Tailwind CSS", color: "yellow-100 text-yellow-800" },
      { name: "API", color: "yellow-100 text-yellow-800" }
    ],
    description: "A responsive restaurant booking application that allows users to reserve tables and view an updated menu with daily specials.",
    githubUrl: "https://github.com/AhmedQw1/little-lemon-capstone.git",
    liveUrl: "https://little-lemon-capstone-ochre.vercel.app/",
    labelColor: "web2-yellow"
  },
  {
    title: "Uni Chat",
    image: null,
    icon: <IoChatbubbleOutline className="h-24 w-24 object-contain text-blue-500" />,
    label: "LIVE",
    tags: [
      { name: "React", color: "blue-100 text-blue-800" },
      { name: "Tailwind CSS", color: "blue-100 text-blue-800" },
      { name: "Firebase", color: "blue-100 text-blue-800" }
    ],
    description: "A university-focused group chat platform with real-time messaging, file sharing, and organized chat rooms by major and course.",
    githubUrl: "https://github.com/AhmedQw1/uni-chat-app.git",
    liveUrl: "https://uni-chat-app-vuuh.vercel.app/",
    labelColor: "web2-blue"
  },
  {
    title: "Web Calculator",
    image: null,
    icon: <FaCalculator className="h-24 w-24 object-contain text-gray-500" />,
    label: "TOOL",
    tags: [
      { name: "JavaScript", color: "gray-100 text-gray-800" },
      { name: "HTML", color: "gray-100 text-gray-800" },
      { name: "CSS", color: "gray-100 text-gray-800" }
    ],
    description: "A sleek, modern web-based calculator with a clean interface and responsive design, perfect for both simple and complex calculations.",
    githubUrl: "https://github.com/AhmedQw1/web-calculator.git",
    liveUrl: "https://ahmedqw1.github.io/web-calculator/",
    labelColor: "gray-500"
  },
  {
    title: "JavaFX Sound Player",
    image: soundPlayer,
    label: "DOWNLOAD",
    tags: [
      { name: "Java", color: "green-100 text-green-800" },
      { name: "JavaFX", color: "green-100 text-green-800" },
      { name: "FXML", color: "green-100 text-green-800" }
    ],
    description: "A desktop sound player application built with JavaFX that allows users to play, pause, and skip audio tracks with a clean and intuitive interface.",
    githubUrl: "https://github.com/AhmedQw1/SoundPlayer.git",
    downloadUrl: "https://github.com/AhmedQw1/SoundPlayer/releases/download/v1.0.0/SoundPlayerV1-1.0.exe",
    labelColor: "web2-green"
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(allProjects);
      return;
    }
    const filtered = allProjects.filter((project) =>
      project.tags.some(tag => tag.name.includes(activeFilter))
    );
    setFilteredProjects(filtered);
  }, [activeFilter]);
  
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

  const filterCategories = ['All', 'React', 'Java', 'JavaScript'];

  return (
    <section id="projects" className="py-20 bg-dot-pattern bg-white dark:bg-gray-900 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal opacity-0">
          <div className="relative inline-block">
            <div className="bg-web2-purple text-white font-comic text-2xl md:text-3xl py-3 px-8 rounded-lg shadow-web2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
              <h2 className="relative z-10 text-shadow">
                My <span className="text-web2-yellow font-bold">Projects</span>
              </h2>
              <div className="absolute -right-0 top-0 bottom-7 bg-web2-red text-white px-1 py-0 shadow-md text-[9px] font-bold rounded-md">
                Showcase!
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12 reveal opacity-0">
          {filterCategories.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-comic font-bold px-4 py-2 rounded-md shadow-web2 transition-all duration-300 transform ${
                activeFilter === filter
                  ? 'bg-web2-blue text-white scale-110'
                  : 'bg-gradient-button text-black hover:shadow-glossy hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <motion.div
          layout
          className="flex overflow-x-auto space-x-8 py-4 snap-x snap-mandatory"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-72 md:w-80 flex-shrink-0 snap-center"
              >
                <div className="border-4 border-gray-300 bg-white rounded-lg overflow-hidden shadow-web2 relative h-full flex flex-col">
                  <div className="relative h-48">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        {project.icon || <IoChatbubbleOutline className="h-24 w-24 object-contain text-blue-500" />}
                      </div>
                    )}
                    
                    <div className={`absolute right-0 top-0 bg-${project.labelColor} text-white px-1 py-0.5 shadow-md text-[9px] font-bold rounded-[5px]`}>
                      {project.label}
                    </div>
                  </div>
                  
                  <div className="p-6 relative flex-grow flex flex-col justify-between">
                    <div className="relative z-10">
                      <h3 className="text-xl font-comic font-bold mb-2 text-retro-navy">{project.title}</h3>
                      
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className={`bg-${tag.color} text-xs font-semibold px-2 py-1 rounded`}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-gray-700 mb-4 font-comic text-sm">
                          {project.description}
                      </p>
                      
                      <div className="flex space-x-3">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gradient-blue text-white px-3 py-1 rounded-md border-2 border-blue-700 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow text-sm"
                        >
                          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                          <span className="relative z-10">GitHub</span>
                        </a>
                        
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gradient-button text-black px-3 py-1 rounded-md border-2 border-gray-300 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow text-sm"
                          >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
                            <span className="relative z-10">Live Demo</span>
                          </a>
                        )}
                        
                        {project.downloadUrl && (
                          <a 
                            href={project.downloadUrl}
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
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;