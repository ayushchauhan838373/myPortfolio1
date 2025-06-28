import React from 'react';
import ImageSlider from './ImageSlider';

const Certificates: React.FC = () => {
  // Your actual certificates - now 12 total
  const certificates = [
    {
      id: 1,
      title: 'Data Science & Analytics',
      issuer: 'HP LIFE Foundation',
      date: 'March 31, 2025',
      image: '/certificates/Screenshot 2025-06-28 014154.png',
      description: 'Comprehensive course covering data science and analytics practices, methodologies, and tools. Gained knowledge about essential skills needed to pursue a career in the field.',
    },
    {
      id: 2,
      title: 'AI for Beginners',
      issuer: 'HP LIFE Foundation',
      date: 'March 30, 2025',
      image: '/certificates/Screenshot 2025-06-28 014217.png',
      description: 'Gained basic understanding of artificial intelligence (AI) impact on technological landscape. Learned about key AI concepts and applications, ethical implications.',
    },
    {
      id: 3,
      title: 'Python for Data Science and AI',
      issuer: 'IBM via Coursera',
      date: 'June 17, 2025',
      image: '/certificates/Screenshot 2025-06-28 014234.png',
      description: 'Professional certification in Python programming for data science and artificial intelligence applications. Comprehensive training in data analysis and machine learning.',
    },
    {
      id: 4,
      title: 'Introduction to Digital Business Skills',
      issuer: 'HP LIFE Foundation',
      date: 'May 8, 2025',
      image: '/certificates/Screenshot 2025-06-28 014252.png',
      description: 'Gained knowledge about fundamentals and key drivers of digital economy. Learned about digital practices, tools, and skills needed to succeed in the Digital Era.',
    },
    {
      id: 5,
      title: 'Introduction to Generative AI for Data Analysis',
      issuer: 'Microsoft via Coursera',
      date: 'May 29, 2025',
      image: '/certificates/Screenshot 2025-06-28 014311.png',
      description: 'Comprehensive course on generative AI applications in data analysis. Learned advanced techniques for leveraging AI in data science workflows.',
    },
    {
      id: 6,
      title: 'Agile Project Management',
      issuer: 'HP LIFE Foundation',
      date: 'April 16, 2025',
      image: '/certificates/Screenshot 2025-06-28 014345.png',
      description: 'Learned agile project management methodologies including Scrum and Kanban. Gained skills in iterative development, team collaboration, and product management.',
    },
    {
      id: 7,
      title: 'Data Science Orientation',
      issuer: 'IBM via Coursera',
      date: 'May 28, 2025',
      image: '/certificates/Screenshot 2025-06-28 014408.png',
      description: 'Foundational course providing comprehensive orientation to data science field. Covered essential concepts, methodologies, and career pathways in data science.',
    },
    {
      id: 8,
      title: 'Git Training',
      issuer: 'Simplilearn SkillUp',
      date: 'June 24, 2025',
      image: '/certificates/Screenshot 2025-06-28 014428.png',
      description: 'Professional training in Git version control system. Mastered repository management, branching strategies, collaboration workflows, and best practices.',
    },
    {
      id: 9,
      title: 'OOPs in Java',
      issuer: 'Simplilearn SkillUp',
      date: 'May 21, 2025',
      image: '/certificates/Screenshot 2025-06-28 015107.png',
      description: 'Comprehensive training in Object-Oriented Programming concepts using Java. Covered inheritance, polymorphism, encapsulation, and advanced Java programming techniques.',
    },
    {
      id: 10,
      title: 'Cybersecurity Analyst Job Simulation',
      issuer: 'Forage (TATA)',
      date: 'June 16, 2025',
      image: '/certificates/Screenshot 2025-06-28 123143.png',
      description: 'Practical cybersecurity simulation covering IAM fundamentals, strategy assessment, custom IAM solutions, and platform integration. Real-world cybersecurity experience.',
    },
    {
      id: 11,
      title: 'Software Engineering Job Simulation',
      issuer: 'Forage (JPMorgan Chase)',
      date: 'June 25, 2025',
      image: '/certificates/Screenshot 2025-06-28 123203.png',
      description: 'Hands-on software engineering simulation including project setup, Kafka integration, H2 integration, REST API integration, and REST API controller development.',
    },
    {
      id: 12,
      title: 'Investment Banking Job Simulation',
      issuer: 'Forage (Bank of America)',
      date: 'June 14, 2025',
      image: '/certificates/Screenshot 2025-06-28 123056.png',
      description: 'Comprehensive investment banking simulation covering financial performance analysis, SWOT analysis, strategic alternatives, financial modeling, and relationship building.',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My Certificates
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive collection of my professional certifications showcasing expertise in 
            Data Science, AI, Programming, Project Management, Cybersecurity, Software Engineering, 
            and Investment Banking from leading institutions and industry partners.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ImageSlider certificates={certificates} />
        </div>

        {/* Certificate Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-800 border border-gray-700 rounded-xl">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">
              {certificates.length}
            </h3>
            <p className="text-gray-300 font-medium">Certificates Earned</p>
          </div>
          <div className="text-center p-6 bg-gray-800 border border-gray-700 rounded-xl">
            <h3 className="text-3xl font-bold text-teal-400 mb-2">6</h3>
            <p className="text-gray-300 font-medium">Leading Institutions</p>
          </div>
          <div className="text-center p-6 bg-gray-800 border border-gray-700 rounded-xl">
            <h3 className="text-3xl font-bold text-purple-400 mb-2">6</h3>
            <p className="text-gray-300 font-medium">Months of Learning</p>
          </div>
          <div className="text-center p-6 bg-gray-800 border border-gray-700 rounded-xl">
            <h3 className="text-3xl font-bold text-gold-400 mb-2">2025</h3>
            <p className="text-gray-300 font-medium">Achievement Year</p>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="mt-16 bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Skills & Technologies Mastered
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-blue-400 font-semibold">Data Science</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-teal-400 font-semibold">Python</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-purple-400 font-semibold">AI & ML</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-gold-400 font-semibold">Analytics</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-green-400 font-semibold">Digital Business</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-red-400 font-semibold">Generative AI</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-indigo-400 font-semibold">Agile/Scrum</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-orange-400 font-semibold">Git/Version Control</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-cyan-400 font-semibold">Java/OOP</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-pink-400 font-semibold">Project Management</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-yellow-400 font-semibold">Cybersecurity</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-emerald-400 font-semibold">Software Engineering</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-violet-400 font-semibold">Investment Banking</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-rose-400 font-semibold">Financial Analysis</span>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:bg-gray-600 transition-all">
              <span className="text-sky-400 font-semibold">REST APIs</span>
            </div>
          </div>
        </div>

        {/* Certification Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            2025 Certification Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right">
                    <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-white">March 2025</h4>
                      <p className="text-sm text-gray-300">AI for Beginners & Data Science Analytics</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                  </div>
                  <div className="w-5/12">
                    <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-white">April 2025</h4>
                      <p className="text-sm text-gray-300">Agile Project Management</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right">
                    <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-white">May 2025</h4>
                      <p className="text-sm text-gray-300">Digital Business Skills, OOPs Java, Data Science Orientation, Generative AI</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-teal-500 rounded-full border-2 border-gray-900"></div>
                  </div>
                  <div className="w-5/12">
                    <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-white">June 2025</h4>
                      <p className="text-sm text-gray-300">Python for Data Science & AI, Git Training, Cybersecurity, Software Engineering, Investment Banking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Partnerships */}
        <div className="mt-16 bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Industry Partnerships & Simulations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-700 border border-gray-600 rounded-xl">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">TATA Group</h4>
              <p className="text-gray-300 text-sm">Cybersecurity Analyst Job Simulation</p>
            </div>
            <div className="text-center p-6 bg-gray-700 border border-gray-600 rounded-xl">
              <h4 className="text-lg font-semibold text-teal-400 mb-2">JPMorgan Chase</h4>
              <p className="text-gray-300 text-sm">Software Engineering Job Simulation</p>
            </div>
            <div className="text-center p-6 bg-gray-700 border border-gray-600 rounded-xl">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Bank of America</h4>
              <p className="text-gray-300 text-sm">Investment Banking Job Simulation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;