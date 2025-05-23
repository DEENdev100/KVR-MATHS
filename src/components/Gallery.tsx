import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItemProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, onClick }) => {
  return (
    <div 
      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:shadow-xl hover:scale-105"
      onClick={onClick}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
      />
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Students engaged in group study"
    },
    {
      src: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Teacher explaining mathematics"
    },
    {
      src: "https://images.pexels.com/photos/5905514/pexels-photo-5905514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Student receiving an award"
    },
    {
      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Classroom learning environment"
    },
    {
      src: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Students celebrating academic success"
    },
    {
      src: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Modern learning equipment"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Glimpses of our learning environment, student achievements, and memorable moments at KVR Maths.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <GalleryItem 
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
                aria-label="Close gallery"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged gallery image" 
                className="w-full h-auto max-h-[80vh] object-contain" 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;