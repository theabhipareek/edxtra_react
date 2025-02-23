import React from 'react';
import { FaUserGraduate, FaBook, FaChartLine, FaCertificate } from 'react-icons/fa';

const stats = [
  { icon: <FaUserGraduate className="text-4xl text-purple-400 mb-4" />, number: "1M+", text: "Successful Students" },
  { icon: <FaBook className="text-4xl text-blue-400 mb-4" />, number: "10K+", text: "Learning Resources" },
  { icon: <FaChartLine className="text-4xl text-green-400 mb-4" />, number: "95%", text: "Satisfaction Rate" },
  { icon: <FaCertificate className="text-4xl text-yellow-400 mb-4" />, number: "50K+", text: "Certifications" },
];

const Statistics = () => {
  return (
    <section className="py-20 bg-gradient-to-tr from-purple-900 to-blue-900" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.text} className="glass-card p-8 rounded-2xl text-center hover-scale">
              {stat.icon}
              <div className="text-3xl font-bold gradient-text">{stat.number}</div>
              <p className="text-gray-300">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;