import React, { useRef, useEffect } from 'react';
import { Card, Accordion, AccordionItem, AccordionTrigger, AccordionContent, Bubble } from 'pixel-retroui';
import profileImage from '../assets/images/Profile.png';

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
          {/* Header */}
          <div className="text-center mb-16 reveal opacity-0">
            <Card
              bg="#4CAF50"
              textColor="#ffffff"
              shadowColor="#2E7D32"
              className="inline-block p-6 relative overflow-hidden"
            >
              <h2 className="text-2xl md:text-3xl font-minecraft font-bold text-shadow">
                About <span className="text-yellow-200">Me</span>
              </h2>
              <div className="absolute right-0 top-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                BIO
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Profile Section */}
            <div className="reveal opacity-0">
              <Card
                bg="#ffffff"
                textColor="#000000"
                borderColor="#4CAF50"
                shadowColor="#cccccc"
                className="p-6 relative"
              >
                <img 
                  src={profileImage} 
                  alt="Ahmed working" 
                  className="w-full h-auto rounded-lg border-2 border-gray-300 mb-4"
                />
                
                <Card
                  bg="#2196F3"
                  textColor="#ffffff"
                  shadowColor="#1976D2"
                  className="p-3 text-center mt-4"
                >
                  <p className="font-minecraft">Software Engineer</p>
                </Card>
              </Card>
            </div>
            
            {/* FAQ/Info Section with Accordion */}
            <div className="reveal opacity-0">
              <Accordion
                bg="#ffffff"
                textColor="#000000"
                borderColor="#dddddd"
                shadowColor="#cccccc"
                collapsible={false}
              >
                <AccordionItem value="background">
                  <AccordionTrigger>🎓 My Background</AccordionTrigger>
                  <AccordionContent>
                    <p className="font-minecraft text-sm">
                      I'm a Software Engineer with a growing passion for both web and desktop application development. 
                      I've built a personal CV-based website using React, JSX, Tailwind CSS, and HTML/CSS to showcase my skills and projects.
                    </p>
                    <br />
                    <p className="font-minecraft text-sm">
                      On the desktop side, I've developed a sound player using JavaFX (JFX), FXML, and Scene Builder, 
                      working primarily in IntelliJ IDEA. I'm comfortable using version control with Git and managing my projects on GitHub.
                    </p>
                    <br />
                    <p className="font-minecraft text-sm">
                      I use both VS Code and IntelliJ in my workflow, depending on the type of project. 
                      I'm constantly learning and expanding my skills by building real-world projects that push me forward.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="interests">
                  <AccordionTrigger>🎮 What I Love</AccordionTrigger>
                  <AccordionContent>
                    <p className="font-minecraft text-sm">
                      The endless possibilities of software development from building responsive web interfaces to desktop applications. 
                      I love the learning process, approach challenging bugs, and the moment when everything clicks together. 
                      GitHub commits, clean code, and that feeling when your application finally works perfectly.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="goals">
                  <AccordionTrigger>🚀 Future Goals</AccordionTrigger>
                  <AccordionContent>
                    <p className="font-minecraft text-sm">
                      Continuing to build real-world projects that challenge me and expand my skill set. 
                      I want to get better at writing scalable, maintainable code and learn more about software design patterns. 
                      Eventually, I'd love to work on projects that make a genuine difference and collaborate with other developers who share the same passion for clean, efficient code.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="fun-facts">
                  <AccordionTrigger>✨ Fun Facts</AccordionTrigger>
                  <AccordionContent>
                    <p className="font-minecraft text-sm">
                      • I can debug for hours and completely lose track of time<br/>
                      • My browser has more development-related bookmarks than personal ones<br/>
                      • I've written more "Hello World" programs than I can count<br/>
                      • I still get excited when my code runs without errors on the first try<br/>
                      • I prefer dark mode on everything - it's easier on the eyes during long coding sessions
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;