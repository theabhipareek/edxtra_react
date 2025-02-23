// src/App.js
import React, { useEffect } from 'react';

import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import HereToConquer from './components/HereToConquer';
import HouseOfEdxtra from './components/HouseOfEdxtra';
import WhatsAppCommunity from './components/WhatsAppCommunity';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import WhyChooseEdxtra from './components/WhyChooseEdxtra';

import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <HereToConquer />
      <HouseOfEdxtra />
      <WhatsAppCommunity />
      <Statistics />
      <Testimonials />
      <WhyChooseEdxtra />
    </div>
  );
}

export default App;
