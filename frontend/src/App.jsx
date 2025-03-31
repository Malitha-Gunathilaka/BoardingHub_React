import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import Footer from './components/Footer';
import BoardingSection from './components/BoardingSection';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BoardingSection />
      <About />
      <Footer />
    </div>
  );
};

export default App;