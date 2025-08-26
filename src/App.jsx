import React, { useState } from 'react';
import Header from './layout/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import useKonamiCode from './hooks/useKonamiCode';
import SecretPanel from './components/SecretPanel';
import SecretPage from './sections/SecretPage';
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the new component

function App() {
  const [onSecretPage, setOnSecretPage] = useState(false);

  useKonamiCode(() => {
    window.scrollTo(0, 0);
    setOnSecretPage(true);
  });

  return (
    <div className="min-h-screen theme-transition">
      <Header />
      <main>
        {onSecretPage ? (
          <SecretPage onBack={() => setOnSecretPage(false)} />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <SecretPanel />
          </>
        )}
      </main>
      <Footer />
      <ScrollToTopButton /> {/* Add the button here */}
    </div>
  );
}

export default App;