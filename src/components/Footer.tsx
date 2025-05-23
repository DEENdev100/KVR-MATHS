import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-yellow-300 mr-2">KVR</span> Maths
            </h3>
            <p className="mb-4 text-blue-200">
              Empowering students with quality education from LKG to MBBS. We make learning enjoyable and effective.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#programs" className="text-blue-200 hover:text-white transition-colors duration-300">Programs</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-200">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#programs" className="text-blue-200 hover:text-white transition-colors duration-300">Foundation (LKG-5th)</a>
              </li>
              <li>
                <a href="#programs" className="text-blue-200 hover:text-white transition-colors duration-300">Middle School (6th-10th)</a>
              </li>
              <li>
                <a href="#programs" className="text-blue-200 hover:text-white transition-colors duration-300">Higher Secondary (11th-12th)</a>
              </li>
              <li>
                <a href="#programs" className="text-blue-200 hover:text-white transition-colors duration-300">NEET Preparation</a>
              </li>
              <li>
                <a href="#programs" className="text-blue-200 hover:text-white transition-colors duration-300">MBBS Coaching</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-200">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-yellow-300" />
                <div>
                  <p className="text-white">+91 98765 43210</p>
                  <p className="text-blue-200 text-sm">Mon-Sat, 9am-7pm</p>
                </div>
              </li>
              <li>
                <p className="text-blue-200">KVR Maths Learning Centre</p>
                <p className="text-blue-200">123 Education Street</p>
                <p className="text-blue-200">Chennai, Tamil Nadu 600001</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 mt-8 text-center text-blue-300">
          <p>&copy; {currentYear} KVR Maths. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors duration-300 ml-2">Terms of Service</a>
          </p>
          <div className="mt-4 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 p-3 rounded-lg inline-block">
            <p className="text-sm font-medium bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Site made by Deen
              <span className="mx-1">•</span>
              <span className="text-white opacity-90">web designer and developer</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;