import React from 'react';
import { GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8471899/pexels-photo-8471899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 animate-pulse">
            <GraduationCap size={48} className="text-yellow-300" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            From LKG to MBBS – We Teach with{' '}
            <span className="text-yellow-300">Love</span> and{' '}
            <span className="text-green-400">Logic</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
            Empowering students in Tamil Nadu with personalized coaching that makes learning enjoyable and effective, especially mathematics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#programs" 
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Programs
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold rounded-full transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;