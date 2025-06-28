import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

interface ImageSliderProps {
  certificates: Certificate[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ certificates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (certificates.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No certificates to display</p>
      </div>
    );
  }

  const currentCertificate = certificates[currentIndex];

  return (
    <div className="relative">
      {/* Main Slider */}
      <div className="relative bg-gray-800 border border-gray-700 rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-96 md:h-[600px]">
          <img
            src={currentCertificate.image}
            alt={currentCertificate.title}
            className="w-full h-full object-contain bg-gray-900 p-4"
          />
          
          {/* Expand Button */}
          <button
            onClick={openModal}
            className="absolute top-4 right-4 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200 border border-gray-600"
          >
            <Maximize2 size={20} />
          </button>

          {/* Navigation Arrows */}
          {certificates.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200 border border-gray-600"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200 border border-gray-600"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Certificate Info */}
        <div className="p-6 bg-gray-800 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-2">
            {currentCertificate.title}
          </h3>
          <p className="text-blue-400 font-medium mb-1">
            {currentCertificate.issuer}
          </p>
          <p className="text-gray-400 text-sm mb-3">
            {currentCertificate.date}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {currentCertificate.description}
          </p>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {certificates.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
          {certificates.map((certificate, index) => (
            <button
              key={certificate.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex
                  ? 'border-blue-500 shadow-lg shadow-blue-500/25'
                  : 'border-gray-600 hover:border-gray-500'
              }`}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover bg-gray-900"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200 z-10 border border-gray-600"
            >
              <X size={24} />
            </button>
            <img
              src={currentCertificate.image}
              alt={currentCertificate.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;