import React from 'react';
import { Users, Target, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">About KVR Maths</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            For over a decade, KVR Maths has been nurturing minds and building foundations for academic excellence in Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8 text-center shadow-md transform transition duration-300 hover:scale-105">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-blue-700" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To transform education by making learning enjoyable, accessible, and effective for every student regardless of their background.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-8 text-center shadow-md transform transition duration-300 hover:scale-105">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-green-700" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">Our Approach</h3>
            <p className="text-gray-600">
              We blend traditional teaching methods with modern techniques to create an engaging learning environment that fosters curiosity.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-8 text-center shadow-md transform transition duration-300 hover:scale-105">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-yellow-700" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-yellow-700 mb-3">Our Team</h3>
            <p className="text-gray-600">
              Our experienced educators are passionate about teaching and committed to the academic growth of every student.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-blue-800 text-white p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Supporting Students at Every Stage</h3>
              <p className="mb-6">
                From the early foundations in LKG to advanced medical studies in MBBS, we provide tailored guidance that adapts to each student's learning style and needs.
              </p>
              <p>
                We believe that with the right guidance and a supportive environment, every student can excel academically and develop a lifelong love for learning.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Students learning together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;