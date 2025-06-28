import React from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xl text-blue-200">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Ayush Chauhan
              </h1>
              <p className="text-2xl text-blue-200">
                Data Science & AI Enthusiast
              </p>
            </div>

            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              Passionate about leveraging data science, artificial intelligence, and modern technologies 
              to solve real-world problems. Certified in Python, AI, Machine Learning, and digital business skills with 
              hands-on experience in data analysis, project management, and software development.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
                View Certificates
              </button>
            </div>

            <div className="flex space-x-6">
              <a
                href="mailto:ayush.chauhan@example.com"
                className="text-blue-200 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ayush-chauhan"
                className="text-blue-200 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/ayush-chauhan"
                className="text-blue-200 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 p-2">
                <img
                  src="/WhatsApp Image 2025-06-28 at 01.58.55_9fbe3a46.jpg"
                  alt="Ayush Chauhan"
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-blue-900 p-4 rounded-full shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold">9</p>
                  <p className="text-sm">Certificates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;