import React from 'react';

const courses = [
  { 
    title: 'CBSE Class IX', 
    gradient: 'from-green-400 to-teal-600',
    image: 'cbse.jpg'
  },
  {
    title: 'CBSE Class X - AISSE',
    gradient: 'from-blue-500 to-purple-600',
    image: 'cbse.jpg'
  },
  {
    title: 'CBSE Class XII - AISSCE',
    gradient: 'from-purple-500 to-pink-600',
    image: 'cbse.jpg'
  },
  {
    title: 'CISCE ICSE Class X',
    gradient: 'from-pink-500 to-red-600',
    image: 'cisce.jpg'
  },
  {
    title: 'CISCE ISC Class XII',
    gradient: 'from-yellow-400 to-orange-600',
    image: 'cisce.jpg'
  },
  {
    title: 'CBSE Class XI',
    gradient: 'from-cyan-500 to-blue-500',
    image: 'cbse.jpg'
  },
];

const HereToConquer = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Here To Conquer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div 
              key={course.title}
              className={`relative bg-gradient-to-br ${course.gradient} p-8 rounded-3xl hover:scale-105 transform transition duration-300 shadow-lg overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
              <div className="relative flex justify-between items-center mb-6">
                <div className="flex flex-col">
                  <h3 className="font-bold text-2xl text-white">CBSE</h3>
                  <p className="text-gray-200 text-lg">{course.title.split(' ')[2]}</p>
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
                  <img src={`/images/${course.image}`} alt="Logo" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="relative flex justify-between items-center">
                <a href="#" className="text-white hover:text-gray-300 font-semibold text-lg">Explore {course.title}</a>
                <i className="fas fa-arrow-right text-white text-lg"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HereToConquer;