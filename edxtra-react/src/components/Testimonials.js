import React from 'react';

const testimonials = [
  {
    image: "cbse.jpg",
    name: "Abhi Pareek",
    role: "CBSE'24 (AIR 1)",
    text: "EDXTRA IS THE BEST",
    hours: "450+ Learning Hours"
  },
  {
    image: "science-student.jpg",
    name: "Ishita Metkar",
    role: "AIR 1 CBSE'25",
    text: "edXtra helped me achieve my love-Aishani Thakur",
    hours: "100+ Learning Hours"
  }
];

const Testimonials = () => {
  return (
    <section style={{ position: 'relative', padding: '80px 0', background: 'linear-gradient(to bottom right, #f8fafc, rgba(191, 128, 255, 0.3))' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.name}
            style={{ perspective: '1000px', transition: 'transform 0.3s ease-out' }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('.testimonial-inner').style.transform = "rotateY(5deg) rotateX(5deg)";
              e.currentTarget.querySelector('.subject-icon').style.transform = "scale(1.2) rotate(-5deg)";
              e.currentTarget.querySelector('.achievement-badge').style.transform = "skew(-10deg) scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('.testimonial-inner').style.transform = "rotateY(0deg) rotateX(0deg)";
              e.currentTarget.querySelector('.subject-icon').style.transform = "scale(1)";
              e.currentTarget.querySelector('.achievement-badge').style.transform = "skew(-10deg)";
            }}
          >
            <div className="testimonial-inner" style={{ position: 'relative', transformStyle: 'preserve-3d', background: 'white', borderRadius: '24px', border: '2px solid rgba(255,255,255,0.9)', boxShadow: '0px 20px 40px rgba(75, 85, 99, 0.3)', padding: '32px', overflow: 'hidden', transition: 'transform 0.6s' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '50%', opacity: '0.1', animation: 'float 6s infinite)' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <div className="subject-icon" style={{ width: '80px', height: '80px', background: 'linear-gradient(to bottom right, #eef2ff, #f5f3ff)', borderRadius: '24px', padding: '4px', boxShadow: '0 10px 20px rgba(79, 70, 229, 0.3)', transition: 'transform 0.3s ease' }}>
                  <img src={`/images/${testimonial.image}`} alt={testimonial.name} style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover' }} />
                </div>
                <div style={{ marginLeft: '16px' }}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', color: '#1e293b' }}>{testimonial.name}</h4>
                  <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px' }}>{testimonial.role}</p>
                  <div className="achievement-badge" style={{ background: 'hsl(240, 60%, 55%)', padding: '4px 12px', display: 'inline-block', fontSize: '12px', fontWeight: '600', color: 'white', borderRadius: '4px', clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%))', transform: 'skew(-10deg)', transition: 'transform 0.3s ease' }}>
                    {testimonial.name.includes('Abhi') ? 'COMPUTER XPERT' : 'Xpert Learner'}
                  </div>
                </div>
              </div>
              <div style={{ position: 'relative', marginBottom: '24px', paddingLeft: '16px', borderLeft: '4px solid rgba(99, 102, 241, 0.8)' }}>
                <p style={{ color: '#475569', fontStyle: 'italic', lineHeight: '1.5' }}>{testimonial.text}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#facc15' }}>
                  {[...Array(4)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div style={{ color: '#4f46e5', fontSize: '12px', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-clock" style={{ marginRight: '4px' }}></i>
                  {testimonial.hours}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;