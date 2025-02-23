import React, { useState, useEffect } from 'react';
import { FaGithub, FaGraduationCap, FaBookOpen, FaPencilAlt, FaUsers, FaRocket } from 'react-icons/fa';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className="nav-glassmorphism fixed w-full z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-tr from-primary to-secondary p-2 rounded-lg">
              <FaGraduationCap className="text-2xl text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">Edxtra</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-8">
              <a href="#courses" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                <FaBookOpen />
                <span>Courses</span>
              </a>
              <a href="#exams" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                <FaPencilAlt />
                <span>Exams</span>
              </a>
              <a href="#community" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                <FaUsers />
                <span>Community</span>
              </a>
            </div>
            <label className="theme-switch">
              <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} />
              <span className="theme-slider"></span>
            </label>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:opacity-90">
              <FaRocket className="mr-2" />Start Learning
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;