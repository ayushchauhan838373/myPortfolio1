import React from 'react';
import { Code, Database, Cpu, Globe, GitBranch, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Database size={32} />,
      title: 'Data Science & Analytics',
      description: 'Python, Data Analysis, Statistical Methods, Data Visualization, Machine Learning',
    },
    {
      icon: <Cpu size={32} />,
      title: 'Artificial Intelligence',
      description: 'Machine Learning, Generative AI, AI Applications, Neural Networks, Data Science',
    },
    {
      icon: <Code size={32} />,
      title: 'Programming & Development',
      description: 'Python, Java, OOP Concepts, Software Engineering, Problem Solving',
    },
    {
      icon: <Globe size={32} />,
      title: 'Digital Business Skills',
      description: 'Digital Transformation, Business Analytics, Technology Strategy, Innovation',
    },
    {
      icon: <Users size={32} />,
      title: 'Project Management',
      description: 'Agile Methodologies, Scrum, Kanban, Team Collaboration, Product Development',
    },
    {
      icon: <GitBranch size={32} />,
      title: 'Version Control & DevOps',
      description: 'Git, Repository Management, Branching Strategies, Collaboration Workflows',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm Ayush Chauhan, a passionate data science and AI enthusiast with expertise in 
            modern technologies, project management, and a strong foundation in analytical thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
            <p className="text-gray-700 leading-relaxed">
              My journey in technology began with a curiosity about how data can drive 
              meaningful insights and decisions. Through continuous learning and professional 
              certifications from leading institutions like HP LIFE Foundation, IBM, Microsoft, 
              and Simplilearn, I've developed comprehensive expertise across multiple domains.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I believe in the power of data-driven solutions, AI technologies, and agile methodologies 
              to solve complex problems. My approach combines analytical rigor with creative problem-solving 
              and effective project management to deliver impactful results in the rapidly evolving digital landscape.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">2025 Achievements</h4>
              <ul className="space-y-2 text-gray-700">
                <li>🎓 9 Professional Certifications Completed</li>
                <li>🤖 AI & Machine Learning Specialist</li>
                <li>📊 Data Science & Analytics Expert</li>
                <li>💼 Digital Business Skills Certified</li>
                <li>🐍 Python Programming Proficient</li>
                <li>☕ Java & OOP Concepts Mastered</li>
                <li>🚀 Agile Project Management Certified</li>
                <li>🔧 Git Version Control Expert</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About Ayush Chauhan"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">9</p>
              <p className="text-blue-200">Certifications</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-teal-600 text-white p-4 rounded-xl shadow-lg">
              <p className="text-xl font-bold">2025</p>
              <p className="text-teal-200 text-sm">Learning Year</p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-600 mb-4">{skill.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {skill.title}
              </h4>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;