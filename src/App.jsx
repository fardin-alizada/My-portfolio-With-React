import React from 'react';
import { 
  Navbar, 
  Hero, 
  About, 
  Projects, 
  Services, 
  Contact, 
  Footer
} from './components';
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}