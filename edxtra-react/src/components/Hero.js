import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pattern-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Elevate Your Learning with <span className="gradient-text">Bharat's Youngest</span><br /> Educational Platform
            </h1>
            <p className="text-xl">
              Transform your educational journey with personalized learning paths, expert guidance, and comprehensive study materials designed for your success.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full hover-scale flex items-center">
                <FaPlayCircle className="mr-2" />Start Free Trial
              </button>
            </div>
          </div>
          <div className="hidden md:block floating" data-aos="fade-left">
            <div className="relative w-96 h-96 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center">
              <div className="absolute inset-0 pattern-grid opacity-20"></div>
              <i className="fas fa-lightbulb text-8xl text-white opacity-75"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;