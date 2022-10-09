import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  const [isAbout, setIsAbout] = useState(true);
  const [isProjects, setIsProjects] = useState(false);
  const [isContact, setIsContact] = useState(false);
  return (
    <>
    <Header
      setIsAbout={setIsAbout}
      setIsProjects={setIsProjects}
      setIsContact={setIsContact}
    ></Header>
      { isAbout && <About />}
      { isProjects && <Projects />}
      { isContact && <Contact />}
    <Footer />
    </>
  )
}

export default App;
