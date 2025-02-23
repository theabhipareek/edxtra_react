import React from 'react';

const stats = [
  { icon: '📚', number: '24/7', text: 'Live Interactive Classes' },
  { icon: '📝', number: '10M+', text: 'Practice Questions' },
  { icon: '🎓', number: '500K+', text: 'Happy Learners' },
  { icon: '🏆', number: '99%', text: 'Success Rate' },
];

const Stats = () => {
  return (
    <section className="stats">
      {stats.map((stat, index) => (
        <div 
          key={stat.text}
          className="stat-card" 
          data-aos="fade-up" 
          data-aos-delay={(index + 1) * 100}
        >
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-number">{stat.number}</div>
          <div>{stat.text}</div>
        </div>
      ))}
    </section>
  );
};

export default Stats;