import React from 'react';
import { FaFlask, FaMobileAlt } from 'react-icons/fa';

const products = [
  {
    icon: <FaFlask className="text-4xl mb-4 text-white" />,
    title: "edXtra Shop",
    description: "Shop",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: <FaMobileAlt className="text-4xl mb-4 text-white" />,
    title: "Xamine",
    description: "The Test Portal",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    icon: <FaFlask className="text-4xl mb-4 text-white" />,
    title: "Xtra",
    description: "By edxtra",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: <FaMobileAlt className="text-4xl mb-4 text-white" />,
    title: "edXtra.Tech",
    description: "The next gen tech solutions",
    gradient: "from-blue-600 to-cyan-600"
  },
];

const HouseOfEdxtra = () => {
  return (
    <section className="py-20 pattern-grid" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">From The House Of edXtra</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.title}
              className={`bg-gradient-to-tr ${product.gradient} p-8 rounded-2xl hover-scale`}
            >
              {product.icon}
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-200">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseOfEdxtra;