import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-blue-900' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-2">
            <GraduationCap size={32} className={isScrolled ? 'text-blue-600' : 'text-yellow-300'} />
            <div className="flex flex-col">
              <span className="font-bold text-xl">KVR Maths</span>
              <span className="text-xs opacity-75">Learning Centre</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="font-medium hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="font-medium hover:text-yellow-300 transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#programs" 
              className="font-medium hover:text-yellow-300 transition-colors duration-300"
            >
              Programs
            </a>
            <a 
              href="#contact" 
              className={`px-4 py-2 rounded-full ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-yellow-400 text-blue-900 hover:bg-yellow-500'
              } transition-colors duration-300 font-medium`}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white text-blue-900 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="font-medium hover:text-blue-600 transition-colors duration-300 py-2"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="font-medium hover:text-blue-600 transition-colors duration-300 py-2"
              onClick={closeMenu}
            >
              About
            </a>
            <a 
              href="#programs" 
              className="font-medium hover:text-blue-600 transition-colors duration-300 py-2"
              onClick={closeMenu}
            >
              Programs
            </a>
            <a 
              href="#contact" 
              className="font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 py-3 px-4 rounded-lg text-center"
              onClick={closeMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;