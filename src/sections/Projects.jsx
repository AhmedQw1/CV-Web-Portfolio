import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'pixel-retroui';
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaHeartbeat, FaCalculator, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import whatever from '../assets/images/whatever.png';
import soundPlayer from '../assets/images/SoundPlayer.png';
import littleLemonIcon from '../assets/images/littleLemonIcon.png'; 

const allProjects = [
  {
    title: "Portfolio Website",
    image: whatever,
    label: "FEATURED",
    category: "Web Development",
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
    title: "Little Lemon Restaurant",
    image: littleLemonIcon,
    label: "LIVE",
    category: "Web Development",
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
    icon: <IoChatbubbleOutline className="h-24 w-24 object-contain text-blue-500" aria-hidden="true" />,
    label: "LIVE",
    category: "Web Development",
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
    icon: <FaCalculator className="h-24 w-24 object-contain text-green-500" aria-hidden="true" />,
    label: "TOOL",
    category: "Web Development",
    tags: [
      { name: "JavaScript", color: "green-100 text-green-800" },
      { name: "HTML", color: "green-100 text-green-800" },
      { name: "CSS", color: "green-100 text-green-800" }
    ],
    description: "A sleek, modern web-based calculator with a clean interface and responsive design, perfect for both simple and complex calculations.",
    githubUrl: "https://github.com/AhmedQw1/web-calculator",
    labelColor: "web2-green"
  },
  {
    title: "JavaFX Sound Player",
    image: soundPlayer,
    label: "DOWNLOAD",
    category: "Desktop Development",
    tags: [
      { name: "Java", color: "purple-100 text-purple-800" },
      { name: "JavaFX", color: "purple-100 text-purple-800" },
      { name: "FXML", color: "purple-100 text-purple-800" }
    ],
    description: "A desktop sound player application built with JavaFX that allows users to play, pause, and skip audio tracks with a clean and intuitive interface.",
    githubUrl: "https://github.com/AhmedQw1/SoundPlayer",
    downloadUrl: "https://github.com/AhmedQw1/SoundPlayer/releases/download/v1.0.0/SoundPlayerV1-1.0.exe",
    labelColor: "web2-purple"
  },
  {
    title: "Smart Clinic Management System",
    image: null,
    icon: <FaHeartbeat className="h-24 w-24 object-contain text-red-500" aria-hidden="true" />,
    label: "BACKEND",
    category: "Web Development",
    tags: [
      { name: "Java", color: "red-100 text-red-800" },
      { name: "Spring Boot", color: "red-100 text-red-800" },
      { name: "MySQL", color: "red-100 text-red-800" },
    ],
    description: "A web-based clinic management system with role-based portals (admin, doctor, patient), powered by a Java Spring Boot backend and MySQL.",
    githubUrl: "https://github.com/AhmedQw1/java-database-capstone.git",
    labelColor: "web2-red"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [displayedProjects, setDisplayedProjects] = useState(allProjects);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Updated categories with more specific names
  const categories = ['All', 'Web Apps', 'Desktop Apps'];

  // Calculate how many cards to show per slide based on screen size
  const getCardsPerSlide = () => {
    if (window.innerWidth >= 1024) return 3; // lg screens
    if (window.innerWidth >= 768) return 2;  // md screens
    return 1; // sm screens
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerSlide = getCardsPerSlide();
      setCardsPerSlide(newCardsPerSlide);
      // Reset to first slide when screen size changes
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  useEffect(() => {
    let filtered;
    
    // Start transition
    setIsTransitioning(true);
    
    if (filter === 'All') {
      filtered = allProjects;
    } else if (filter === 'Web Apps') {
      filtered = allProjects.filter(project => project.category === 'Web Development');
    } else if (filter === 'Desktop Apps') {
      filtered = allProjects.filter(project => project.category === 'Desktop Development');
    } else {
      // Fallback for legacy filter names
      filtered = allProjects.filter(project => project.category === filter);
    }
    
    // Add delay for smooth transition
    setTimeout(() => {
      setDisplayedProjects(filtered);
      setCurrentSlide(0);
      setIsTransitioning(false);
    }, 150);
  }, [filter]);

  const totalSlides = Math.ceil(displayedProjects.length / cardsPerSlide);

  // Fixed navigation functions - only go in intended direction
  const nextSlide = () => {
    if (isNavigating) return; // Prevent multiple clicks
    setIsNavigating(true);
    
    setCurrentSlide((prev) => {
      const nextIndex = prev + 1;
      // If we're at the last slide, stay there (don't loop back)
      return nextIndex >= totalSlides ? totalSlides - 1 : nextIndex;
    });
    
    // Reset navigation lock after animation completes
    setTimeout(() => setIsNavigating(false), 600);
  };

  const prevSlide = () => {
    if (isNavigating) return; // Prevent multiple clicks
    setIsNavigating(true);
    
    setCurrentSlide((prev) => {
      const prevIndex = prev - 1;
      // If we're at the first slide, stay there (don't loop to end)
      return prevIndex < 0 ? 0 : prevIndex;
    });
    
    // Reset navigation lock after animation completes
    setTimeout(() => setIsNavigating(false), 600);
  };

  const goToSlide = (slideIndex) => {
    if (isNavigating) return;
    setCurrentSlide(slideIndex);
  };

  // Check if navigation buttons should be disabled
  const canGoNext = currentSlide < totalSlides - 1;
  const canGoPrev = currentSlide > 0;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16 reveal opacity-0">
          <Card
            bg="#2196F3"
            textColor="#ffffff"
            shadowColor="#1976D2"
            className="inline-block p-6 relative overflow-hidden"
          >
            <h2 className="text-2xl md:text-3xl font-minecraft font-bold text-shadow">
              My <span className="text-yellow-200">Projects</span>
            </h2>
            <div className="absolute right-0 top-0 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
              NEW!
            </div>
          </Card>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex justify-center mb-12 reveal opacity-0">
          <div className="flex flex-wrap gap-3 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg border-2 border-gray-300">
            {categories.map((category) => (
              <Button
                key={category}
                bg={filter === category ? "#4CAF50" : "#ffffff"}
                textColor={filter === category ? "#ffffff" : "#000000"}
                shadow={filter === category ? "#2E7D32" : "#cccccc"}
                borderColor={filter === category ? "#4CAF50" : "#dddddd"}
                className={`px-4 py-2 font-minecraft text-sm transition-all duration-300 hover:scale-105 ${
                  filter === category ? 'ring-2 ring-green-300' : ''
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-xs opacity-75">
                    ({category === 'Web Apps' 
                      ? allProjects.filter(p => p.category === 'Web Development').length
                      : allProjects.filter(p => p.category === 'Desktop Development').length
                    })
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="reveal opacity-0">
          <div className="relative max-w-7xl mx-auto">
            {/* Navigation Arrows - Only show if there are multiple slides */}
            {totalSlides > 1 && (
              <>
                <Button
                  bg={canGoPrev ? "#FF6600" : "#cccccc"}
                  textColor={canGoPrev ? "#ffffff" : "#999999"}
                  shadow={canGoPrev ? "#CC5500" : "#aaaaaa"}
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-3 transition-all duration-300 ${
                    canGoPrev ? 'hover:scale-110 cursor-pointer' : 'cursor-not-allowed opacity-50'
                  }`}
                  onClick={canGoPrev ? prevSlide : undefined}
                  disabled={!canGoPrev || isNavigating}
                  aria-label="Previous projects"
                >
                  <FaChevronLeft className="w-5 h-5" />
                </Button>
                
                <Button
                  bg={canGoNext ? "#FF6600" : "#cccccc"}
                  textColor={canGoNext ? "#ffffff" : "#999999"}
                  shadow={canGoNext ? "#CC5500" : "#aaaaaa"}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-3 transition-all duration-300 ${
                    canGoNext ? 'hover:scale-110 cursor-pointer' : 'cursor-not-allowed opacity-50'
                  }`}
                  onClick={canGoNext ? nextSlide : undefined}
                  disabled={!canGoNext || isNavigating}
                  aria-label="Next projects"
                >
                  <FaChevronRight className="w-5 h-5" />
                </Button>
              </>
            )}

            {/* Carousel Container: hide horizontal overflow only to allow dropdowns to extend vertically */}
            <div
              className="overflow-x-hidden rounded-lg"
              role="region"
              aria-roledescription="carousel"
              aria-label="Projects carousel"
              tabIndex={0}
              onKeyDown={(e) => {
                if (isNavigating) return;
                if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
                  e.preventDefault();
                  setCurrentSlide((s) => Math.min(s + 1, totalSlides - 1));
                } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
                  e.preventDefault();
                  setCurrentSlide((s) => Math.max(s - 1, 0));
                } else if (e.key === 'Home') {
                  e.preventDefault();
                  setCurrentSlide(0);
                } else if (e.key === 'End') {
                  e.preventDefault();
                  setCurrentSlide(totalSlides - 1);
                }
              }}
            >
              <div 
                ref={carouselRef}
                className={`flex transition-all duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
                }`}
                style={{
                  transform: `translateX(-${currentSlide * 100}%) ${isTransitioning ? 'scale(0.95)' : 'scale(1)'}`
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div 
                    key={slideIndex}
                    className="w-full flex-shrink-0"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${slideIndex + 1} of ${totalSlides}`}
                  >
                    <div className={`grid gap-8 ${
                      cardsPerSlide === 3 ? 'grid-cols-3' : 
                      cardsPerSlide === 2 ? 'grid-cols-2' : 
                      'grid-cols-1'
                    }`}>
                      {displayedProjects
                        .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                        .map((project, index) => (
                          <div 
                            key={`${slideIndex}-${index}`} 
                            className={`h-full transition-all duration-300 ease-in-out ${
                              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                            }`}
                            style={{
                              transitionDelay: `${index * 50}ms`
                            }}
                          >
                            <Card
                              bg="#ffffff"
                              textColor="#000000"
                              borderColor="#dddddd"
                              shadowColor="#bbbbbb"
                              className="h-full p-6 hover:scale-105 transition-transform duration-300"
                            >
                              {/* Project Image/Icon */}
                              <div className="mb-4 h-48 flex items-center justify-center bg-gray-100 rounded">
                                {project.image ? (
                                  <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover rounded"
                                    loading="lazy"
                                  />
                                ) : (
                                  project.icon
                                )}
                              </div>

                              {/* Project Info */}
                              <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                  <h3 className="font-minecraft text-lg font-bold">{project.title}</h3>
                                  <span className="bg-blue-500 text-white px-2 py-1 text-xs font-bold rounded font-minecraft">
                                    {project.label}
                                  </span>
                                </div>

                                <p className="font-minecraft text-sm text-gray-600 line-clamp-3">
                                  {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                  {project.tags.map((tag, tagIndex) => (
                                    <span 
                                      key={tagIndex}
                                      className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded font-minecraft"
                                    >
                                      {tag.name}
                                    </span>
                                  ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 pt-4">
                                  <Button
                                    bg="#333333"
                                    textColor="#ffffff"
                                    shadow="#111111"
                                    className="flex-1 py-2 font-minecraft text-xs"
                                    onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                                    aria-label={`Open code for ${project.title} on GitHub`}
                                  >
                                    Code
                                  </Button>
                                  {project.liveUrl && (
                                    <Button
                                      bg="#4CAF50"
                                      textColor="#ffffff"
                                      shadow="#2E7D32"
                                      className="flex-1 py-2 font-minecraft text-xs"
                                      onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                                      aria-label={`Open live demo for ${project.title}`}
                                    >
                                      Live
                                    </Button>
                                  )}
                                  {project.downloadUrl && (
                                    project.title === 'JavaFX Sound Player' ? (
                                      <DropdownMenu>
                                        <DropdownMenuTrigger>
                                          <Button
                                            bg="#9C27B0"
                                            textColor="#ffffff"
                                            shadow="#7B1FA2"
                                            className="flex-1 py-2 font-minecraft text-xs"
                                            aria-label="Download JavaFX Sound Player versions"
                                          >
                                            Download ▾
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="min-w-[180px] p-1 rounded-lg border-2 border-gray-300 bg-white shadow-web2 z-50">
                                          <DropdownMenuItem>
                                            <a
                                              href="https://github.com/AhmedQw1/SoundPlayer/releases/download/v2.0.0/SoundPlayerV2-2.0.exe"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="block w-full font-minecraft text-xs"
                                            >
                                              Download v2
                                            </a>
                                          </DropdownMenuItem>
                                          <DropdownMenuItem>
                                            <a
                                              href={project.downloadUrl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="block w-full font-minecraft text-xs"
                                            >
                                              Download v1
                                            </a>
                                          </DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    ) : (
                                      <Button
                                        bg="#9C27B0"
                                        textColor="#ffffff"
                                        shadow="#7B1FA2"
                                        className="flex-1 py-2 font-minecraft text-xs"
                                        onClick={() => window.open(project.downloadUrl, '_blank', 'noopener,noreferrer')}
                                        aria-label={`Download ${project.title}`}
                                      >
                                        Download
                                      </Button>
                                    )
                                  )}
                                </div>
                              </div>
                            </Card>
                          </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators - Only show if there are multiple slides */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isNavigating}
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 font-minecraft ${
                      currentSlide === index
                        ? 'bg-web2-blue border-web2-blue shadow-web2'
                        : 'bg-white border-gray-400 hover:border-web2-blue hover:bg-blue-100'
                    } ${isNavigating ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={currentSlide === index ? 'true' : undefined}
                  />
                ))}
              </div>
            )}

            {/* Enhanced Retro Status Bar */}
            <div className="mt-6 flex justify-center">
              <Card
                bg="#000000"
                textColor="#00ff00"
                borderColor="#00ff00"
                shadowColor="#333333"
                className="px-4 py-2"
              >
                <div className="font-minecraft text-sm">
                  &gt; Projects: {displayedProjects.length} | 
                  Slide: {currentSlide + 1}/{totalSlides} | 
                  Category: {filter} | 
                  Navigation: {canGoPrev ? '←' : '●'}{canGoNext ? '→' : '●'}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;