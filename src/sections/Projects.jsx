/**
 * Projects component
 * Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): 2025-08-13 10:01:37
 * Current User's Login: AhmedQw1
 */

import { IoChatbubbleOutline } from "react-icons/io5";
import React, { useEffect, useRef } from 'react';

import whatever from '../assets/images/whatever.png';
import soundPlayer from '../assets/images/SoundPlayer.png';

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

  // Project data with color-coded tags
  const projects = [
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
    {
      title: "Uni Chat",
      image: null,
      label: "LIVE",
      tags: [
        { name: "React", color: "blue-100 text-blue-800" },
        { name: "Tailwind CSS", color: "blue-100 text-blue-800" },
        { name: "Firebase", color: "blue-100 text-blue-800" }
      ],
      descriptionPrimary: "A university-focused group chat platform built with React, Firebase, and Tailwind CSS.",
      descriptionSecondary: "Features real-time messaging, file sharing, and organized chat rooms by major, course, and general topics.",
      githubUrl: "https://github.com/AhmedQw1/uni-chat-app.git",
      liveUrl: "https://uni-chat-app-vuuh.vercel.app/",
      labelColor: "web2-blue"
    }
  ];

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
              <div className="absolute -right-0 top-0 bottom-7 bg-web2-red text-white px-[0px] py-[0px] shadow-md text-[9px] font-bold rounded-[9px]">
                Showcase!
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="reveal opacity-0 h-full">
              <div className="border-4 border-gray-300 bg-white rounded-lg overflow-hidden shadow-web2 relative h-full flex flex-col">
                <div className="relative h-48">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <IoChatbubbleOutline className="h-24 w-24 object-contain text-blue-500" />
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
                    
                    {project.descriptionPrimary ? (
                      <>
                        <p className="text-gray-700 mb-2 font-comic text-sm">
                          {project.descriptionPrimary}
                        </p>
                        <p className="text-gray-700 mb-4 font-comic text-sm text-opacity-80">
                          {project.descriptionSecondary}
                        </p>
                      </>
                    ) : (
                      <p className="text-gray-700 mb-4 font-comic text-sm">
                        {project.description}
                      </p>
                    )}
                    
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;