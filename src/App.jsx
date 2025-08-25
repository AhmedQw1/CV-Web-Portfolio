import React, { useState } from 'react';
import Header from './layout/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './layout/Footer';

// Import the hook and the new components
import useKonamiCode from './hooks/useKonamiCode';
import SecretPanel from './components/SecretPanel';
import SecretPage from './sections/SecretPage';

function App() {
  // This state controls whether we show the main site or the secret page
  const [onSecretPage, setOnSecretPage] = useState(false);

  // The hook now lives here, listening globally. When the code is entered,
  // it will set onSecretPage to true.
  useKonamiCode(() => {
    // Scroll to top and show secret page
    window.scrollTo(0, 0);
    setOnSecretPage(true);
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {onSecretPage ? (
          // If we are on the secret page, render it
          <SecretPage onBack={() => setOnSecretPage(false)} />
        ) : (
          // Otherwise, render the main portfolio sections
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
    </div>
  );
}

export default App;