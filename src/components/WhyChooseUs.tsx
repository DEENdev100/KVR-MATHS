import React from 'react';
import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mr-4 text-blue-600">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: "Experienced Faculty",
      description: "Our teachers have decades of combined experience, with specialized knowledge in their subjects."
    },
    {
      icon: <Users size={32} />,
      title: "Personalized Coaching",
      description: "We maintain small batch sizes to ensure individual attention and personalized learning plans."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Bilingual Support",
      description: "Instructions available in both Tamil and English medium to accommodate all students' needs."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Proven Success Rate",
      description: "Our students consistently achieve top ranks in board exams and competitive entrance tests."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Why Choose KVR Maths?</h2>
            <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
            <p className="text-gray-600 text-lg mb-8">
              At KVR Maths, we believe that every student can excel with the right guidance and approach. 
              Our teaching methodology is designed to make even the most complex subjects accessible and enjoyable.
            </p>
            <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Our Achievement</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-yellow-300">95%</p>
                  <p className="text-sm">Students Scoring Above 90%</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-300">1000+</p>
                  <p className="text-sm">Success Stories</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-300">15+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-300">50+</p>
                  <p className="text-sm">NEET Selections</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Feature 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;