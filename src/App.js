import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [isAbout, setIsAbout] = useState(true);
  const [isProjects, setIsProjects] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isResume, setIsResume] = useState(false);
  return (
    <>
    <Header
      setIsAbout={setIsAbout}
      setIsProjects={setIsProjects}
      setIsContact={setIsContact}
      setIsResume={setIsResume}
    ></Header>
      { isAbout && <About />}
      { isProjects && <Projects />}
      { isContact && <Contact />}
      { isResume && <Resume />}
    <Footer />
    </>
  )
}

export default App;
