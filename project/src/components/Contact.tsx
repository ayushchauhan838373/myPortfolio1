import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing data science projects, AI opportunities, 
            software development collaborations, or agile project management initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">ayush.chauhan@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-teal-600 p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gold-600 p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">India</p>
                </div>
              </div>
            </div>

            {/* Certifications Summary */}
            <div className="pt-8 bg-gray-800 p-6 rounded-xl">
              <h4 className="font-semibold mb-4">Recent Certifications (2025)</h4>
              <div className="grid grid-cols-1 gap-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>• Data Science & Analytics</span>
                  <span className="text-blue-400">HP LIFE</span>
                </div>
                <div className="flex justify-between">
                  <span>• Python for Data Science & AI</span>
                  <span className="text-blue-400">IBM</span>
                </div>
                <div className="flex justify-between">
                  <span>• Generative AI for Data Analysis</span>
                  <span className="text-blue-400">Microsoft</span>
                </div>
                <div className="flex justify-between">
                  <span>• Agile Project Management</span>
                  <span className="text-blue-400">HP LIFE</span>
                </div>
                <div className="flex justify-between">
                  <span>• Git Training & OOPs in Java</span>
                  <span className="text-blue-400">Simplilearn</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/ayush-chauhan"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/ayush-chauhan"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-600 transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://twitter.com/ayush_chauhan"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-colors duration-200"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;