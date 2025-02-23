import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppCommunity = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-400 to-teal-500" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm">
          <FaWhatsapp className="text-6xl text-white pulse-icon" />
        </div>
        <h2 className="text-4xl font-bold mt-8 mb-4 text-white">Join 1L+ CBSE Champions</h2>
        <p className="text-xl text-white/90 mb-8">24/7 Doubt Solving • Exam Updates • Peer Learning</p>
        <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 hover-scale">
          <FaWhatsapp className="mr-2" />Join Now
        </button>
      </div>
    </section>
  );
};

export default WhatsAppCommunity;