import React, { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
  const sectionRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    // Observer for animation
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
    
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
      clearInterval(timer);
    };
  }, []);
  
  // Format date as: yyyy-mm-dd hh:mm:ss AM/PM (12 hour format)
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
  
  const handleChange = (e) => {  
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage({ type: '', text: '' });
    if (formData.email.trim().toLowerCase() === 'ahmedsalmen00@gmail.com') {
      setSubmitMessage({
        type: 'error',
        text: 'Please use a different email address to contact me.'
      });
      return;
    }
    
    // UPDATED: Use the environment variable for the endpoint
    fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    })
      .then(async (response) => {
        if (response.ok) {
          setSubmitMessage({
            type: 'success',
            text: "Thank you for your message! I'll get back to you soon."
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          const data = await response.json();
          setSubmitMessage({
            type: 'error',
            text: data?.errors?.[0]?.message || 'Something went wrong. Please try again.'
          });
        }
      })
      .catch(() => {
        setSubmitMessage({
          type: 'error',
          text: 'Something went wrong. Please try again.'
        });
      });
  };

  return (
    <section id="contact" className="py-20 bg-stripe-pattern bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal opacity-0">
          <div className="relative inline-block">
            <div className="bg-web2-purple text-white font-comic text-2xl md:text-3xl py-5 px-5 rounded-lg shadow-web2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
              <h2 className="relative z-10 text-shadow">
                Get In <span className="text-web2-yellow font-bold">Touch</span>
              </h2>
              <div className="absolute right-0 top-0 bottom-2/3 bg-web2-red text-white px-[3px] py-[0.124px] shadow-md text-[9px] font-bold rounded-[5px]">
                MAIL ME
              </div>
            </div>
          </div>
          <div className="mt-6 bg-black text-web2-green font-retro py-2 overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-block">
              ★ SEND ME A MESSAGE ★ I'LL GET BACK TO YOU SOON ★ LET'S WORK TOGETHER ★ DROP ME A LINE ★
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="md:w-1/3 reveal opacity-0">
            <div className="border-4 border-gray-300 bg-white rounded-lg p-6 shadow-web2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-comic font-bold mb-6 text-retro-navy">
                  Contact Info
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-blue w-10 h-10 rounded-md shadow-web2 flex items-center justify-center text-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                      <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-500 text-sm font-comic mb-1">Email</p>
                      <p className="text-gray-800 font-medium font-comic">ahmedsalmen00@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-blue w-10 h-10 rounded-md shadow-web2 flex items-center justify-center text-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                      <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-500 text-sm font-comic mb-1">Location</p>
                      <p className="text-gray-800 font-medium font-comic">Abu Dhabi, UAE</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-comic mb-3">Follow Me</p>
                    <div className="flex space-x-2 mt-2">
                      <a href="https://github.com/AhmedQw1" target="_blank" rel="noopener noreferrer" 
                         className="bg-gradient-button border-2 border-gray-300 p-2 rounded-md shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
                        <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" className="text-black"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/ahmed-salmen-26119a370/" target="_blank" rel="noopener noreferrer" 
                         className="bg-gradient-button border-2 border-gray-300 p-2 rounded-md shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
                        <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" className="text-black"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/_klqc/" target="_blank" rel="noopener noreferrer" 
                         className="bg-gradient-button border-2 border-gray-300 p-2 rounded-md shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent h-1/2"></div>
                        <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" className="text-black"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[25px] border-r-[25px] border-t-web2-purple border-r-transparent transform scale-x-[-1]"></div>
            </div>
          </div>
          <div className="md:w-2/3 reveal opacity-0">
            <form 
              onSubmit={handleSubmit}
              className="border-4 border-gray-300 bg-white rounded-lg p-6 shadow-web2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
              <div className="relative z-10">
                <div className="bg-gradient-blue text-white py-3 px-4 rounded-md shadow-web2 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                  <h3 className="font-comic font-bold text-center text-lg relative z-10">Send Me a Message</h3>
                </div>
                {submitMessage.text && (
                  <div className={`mb-6 p-4 rounded-lg border-2 ${
                    submitMessage.type === 'success' 
                      ? 'bg-green-100 text-green-700 border-green-500' 
                      : 'bg-red-100 text-red-700 border-red-500'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-comic font-bold">Your Name</label>
                  <div className="border-2 border-gray-300 rounded-md overflow-hidden shadow-sm">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 focus:outline-none font-comic text-gray-900 dark:text-black bg-transparent placeholder-black dark:placeholder-black"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-comic font-bold">Your Email</label>
                  <div className="border-2 border-gray-300 rounded-md overflow-hidden shadow-sm">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 focus:outline-none font-comic text-gray-900 dark:text-black bg-transparent placeholder-black dark:placeholder-black"
                      required
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-comic font-bold">Your Message</label>
                  <div className="border-2 border-gray-300 rounded-md overflow-hidden shadow-sm">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 focus:outline-none font-comic text-gray-900 dark:text-black bg-transparent placeholder-black dark:placeholder-black"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-blue text-white px-6 py-3 rounded-md border-2 border-blue-700 font-bold shadow-web2 hover:shadow-glossy relative overflow-hidden transition-shadow font-comic"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Send Message
                  </span>
                </button>
                <div className="mt-4 text-xs text-gray-500 text-center font-comic">
                  * All fields are required. Your information will never be shared.
                </div>
              </div>
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[25px] border-r-[25px] border-t-web2-blue border-r-transparent transform scale-x-[-1]"></div>
            </form>
            <div className="mt-6 flex justify-center">
              <div className="bg-black text-green-400 font-mono px-4 py-2 rounded-md border-2 border-green-500 text-sm">
                Current Time: {formatTime(currentTime)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;