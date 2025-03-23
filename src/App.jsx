import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import InterestingCases from './components/InterestingCases.jsx';


export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <InterestingCases />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
