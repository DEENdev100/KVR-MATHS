import React from 'react';

interface ProgramCardProps {
  title: string;
  ageGroup: string;
  description: string;
  features: string[];
  color: string;
  icon: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, ageGroup, description, features, color, icon }) => {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 hover:border-blue-300",
    green: "bg-green-50 border-green-200 hover:border-green-300",
    yellow: "bg-yellow-50 border-yellow-200 hover:border-yellow-300",
    purple: "bg-purple-50 border-purple-200 hover:border-purple-300"
  };
  
  const headingClasses = {
    blue: "text-blue-800",
    green: "text-green-800",
    yellow: "text-yellow-700",
    purple: "text-purple-800"
  };

  return (
    <div className={`rounded-xl p-6 md:p-8 border-2 ${colorClasses[color as keyof typeof colorClasses]} transition-all duration-300 hover:shadow-lg`}>
      <div className="flex items-start mb-6">
        <div className="mr-4 text-4xl">{icon}</div>
        <div>
          <h3 className={`text-xl md:text-2xl font-bold ${headingClasses[color as keyof typeof headingClasses]} mb-1`}>{title}</h3>
          <p className="text-gray-500 text-sm">{ageGroup}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Foundation Program",
      ageGroup: "LKG - 5th Standard",
      description: "Building strong fundamentals in mathematics and other subjects through engaging activities and personalized attention.",
      features: [
        "Basic mathematics and number concepts",
        "Language development (Tamil & English)",
        "Interactive learning through activities",
        "Regular parent-teacher meetings"
      ],
      color: "green",
      icon: "🧒"
    },
    {
      title: "Middle School Program",
      ageGroup: "6th - 10th Standard",
      description: "Strengthening academic performance across all school subjects with special focus on mathematics.",
      features: [
        "Comprehensive math coaching",
        "Science and language subjects",
        "Exam preparation techniques",
        "Doubt clearing sessions"
      ],
      color: "blue",
      icon: "📚"
    },
    {
      title: "Higher Secondary",
      ageGroup: "11th - 12th Standard",
      description: "Specialized coaching for board exams and competitive entrance tests like NEET with focused mathematics and science training.",
      features: [
        "In-depth subject knowledge",
        "Board exam preparation",
        "NEET/JEE entrance coaching",
        "Regular mock tests and analysis"
      ],
      color: "yellow",
      icon: "🔬"
    },
    {
      title: "MBBS Support",
      ageGroup: "Medical Students",
      description: "Guidance and support for medical students tackling challenging medical subjects and examinations.",
      features: [
        "Medical mathematics applications",
        "Subject-specific assistance",
        "Exam preparation strategies",
        "One-on-one mentoring"
      ],
      color: "purple",
      icon: "⚕️"
    }
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Programs We Offer</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Comprehensive coaching programs tailored to different educational levels, ensuring every student receives the guidance they need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index}
              title={program.title}
              ageGroup={program.ageGroup}
              description={program.description}
              features={program.features}
              color={program.color}
              icon={program.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic mb-6">
            All programs available in both Tamil and English medium instruction
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 shadow-md"
          >
            Enquire About Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;