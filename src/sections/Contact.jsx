import React, { useState, useRef, useEffect } from 'react';
import { Card, Input, TextArea, Button } from 'pixel-retroui';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
  const [submitting, setSubmitting] = useState(false);
  const sectionRef = useRef(null);
  
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
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const handleChange = (e) => {  
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  setSubmitMessage({ type: '', text: '' });
  setSubmitting(true);
    
    // Check if Formspree endpoint is configured
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    
    if (!formspreeEndpoint) {
      setSubmitMessage({
        type: 'error',
        text: 'Contact form is not properly configured. Please contact me directly via social media.'
      });
  setSubmitting(false);
  return;
    }
    
    console.log('Using Formspree endpoint:', formspreeEndpoint); // Debug log
    
    if (formData.email.trim().toLowerCase() === 'ahmedsalmen00@gmail.com') {
      setSubmitMessage({
        type: 'error',
        text: 'Please use a different email address to contact me.'
      });
  setSubmitting(false);
  return;
    }
    
    fetch(formspreeEndpoint, {
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
          setSubmitting(false);
        } else {
          const data = await response.json();
          setSubmitMessage({
            type: 'error',
            text: data?.errors?.[0]?.message || 'Something went wrong. Please try again.'
          });
          setSubmitting(false);
        }
      })
      .catch(() => {
        setSubmitMessage({
          type: 'error',
          text: 'Something went wrong. Please try again.'
        });
        setSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* RetroUI Enhanced Header */}
          <div className="text-center mb-16 reveal opacity-0">
            <Card
              bg="#4CAF50"
              textColor="#ffffff"
              shadowColor="#2E7D32"
              className="inline-block p-6 relative overflow-hidden"
            >
              <h2 className="text-2xl md:text-3xl font-minecraft font-bold text-shadow">
                Get In <span className="text-yellow-300">Touch</span>
              </h2>
              <div className="absolute right-0 top-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                LIVE!
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT SIDE - Social Links */}
            <div className="reveal opacity-0 space-y-6">
              {/* Social Links */}
              <Card
                bg="#ffffff"
                textColor="#000000"
                borderColor="#cccccc"
                shadowColor="#999999"
                className="p-8"
              >
                <h3 className="font-minecraft text-xl font-bold mb-6">Find me on:</h3>
                <div className="space-y-4">
                  <Button
                    bg="#0077b5"
                    textColor="#ffffff"
                    shadow="#005885"
                    className="w-full py-4 hover:scale-105 transition-transform"
                    onClick={() => window.open('https://www.linkedin.com/in/ahmed-salmen-26119a370/', '_blank', 'noopener,noreferrer')}
                    aria-label="Open LinkedIn profile in a new tab"
                  >
                    <span className="font-minecraft flex items-center justify-center text-base">
                      <FaLinkedin className="mr-3 text-xl" />
                      LinkedIn Profile
                    </span>
                  </Button>
                  
                  <Button
                    bg="#333333"
                    textColor="#ffffff"
                    shadow="#111111"
                    className="w-full py-4 hover:scale-105 transition-transform"
                    onClick={() => window.open('https://github.com/AhmedQw1', '_blank', 'noopener,noreferrer')}
                    aria-label="Open GitHub profile in a new tab"
                  >
                    <span className="font-minecraft flex items-center justify-center text-base">
                      <FaGithub className="mr-3 text-xl" />
                      GitHub Profile
                    </span>
                  </Button>
                  
                  <Button
                    bg="#E4405F"
                    textColor="#ffffff"
                    shadow="#c13584"
                    className="w-full py-4 hover:scale-105 transition-transform"
                    onClick={() => window.open('https://www.instagram.com/_klqc/', '_blank', 'noopener,noreferrer')}
                    aria-label="Open Instagram profile in a new tab"
                  >
                    <span className="font-minecraft flex items-center justify-center text-base">
                      <FaInstagram className="mr-3 text-xl" />
                      Instagram
                    </span>
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* RIGHT SIDE - Contact Form */}
            <div className="reveal opacity-0">
              <Card
                bg="#ffffff"
                textColor="#000000"
                borderColor="#cccccc"
                shadowColor="#999999"
                className="p-10 h-full"
              >
                <div className="flex items-center mb-8">
                  <h3 className="font-minecraft text-2xl font-bold text-retro-navy">
                    Send Message
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="contact-name" className="block font-minecraft text-base font-bold mb-3 text-gray-700">
                      Your Name *
                    </label>
                    <Input
                      bg="#f8f9fa"
                      textColor="#000000"
                      borderColor="#dee2e6"
                      placeholder="Enter your full name"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full py-4 text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block font-minecraft text-base font-bold mb-3 text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      bg="#f8f9fa"
                      textColor="#000000"
                      borderColor="#dee2e6"
                      placeholder="your.email@example.com"
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full py-4 text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-message" className="block font-minecraft text-base font-bold mb-3 text-gray-700">
                      Your Message *
                    </label>
                    <div className="relative">
                      <TextArea
                        bg="#f8f9fa"
                        textColor="#000000"
                        borderColor="#dee2e6"
                        placeholder="Tell me about your project, ask a question, or just say hello! I'd love to hear from you."
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full h-48 resize-none text-base"
                        style={{ 
                          minHeight: '12rem',
                          maxHeight: '12rem',
                          resize: 'none',
                          overflow: 'auto' 
                        }}
                      />
                    </div>
                  </div>
                  
                  <Button
                    bg="#007bff"
                    textColor="#ffffff"
                    shadow="#0056b3"
                    type="submit"
                    className="w-full py-5 font-bold hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={submitting}
                    aria-busy={submitting ? 'true' : 'false'}
                  >
                    <span className="font-minecraft text-xl">{submitting ? 'Sending…' : 'Send Message'}</span>
                  </Button>
                  
                  <p className="text-sm text-gray-500 font-minecraft text-center">
                    * All fields are required. I respect your privacy.
                  </p>
                </form>
                
                {/* Status Messages */}
                <div aria-live="polite" aria-atomic="true">
                  {submitMessage.text && (
                    <Card
                      bg={submitMessage.type === 'success' ? '#d4edda' : '#f8d7da'}
                      textColor={submitMessage.type === 'success' ? '#155724' : '#721c24'}
                      borderColor={submitMessage.type === 'success' ? '#c3e6cb' : '#f5c6cb'}
                      className="mt-8 p-5"
                    >
                      <p className="font-minecraft text-base text-center">{submitMessage.text}</p>
                    </Card>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;