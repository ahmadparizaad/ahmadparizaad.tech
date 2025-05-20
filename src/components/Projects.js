// components/Projects.js
'use client';

import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, features, period, link }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white neo-card p-6"
      >
        <div className="bg-[#FFE600] neo-card inline-block px-4 py-2 -rotate-2 mb-4">
          <h3 className="text-2xl font-bold font-mono">{title}</h3>
        </div>
        <p className="text-sm font-mono text-gray-600 mb-4">{period}</p>
        <p className="font-mono mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="font-mono text-sm">• {feature}</li>
          ))}
        </ul>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#00FF00] neo-card px-4 py-2 font-mono font-bold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Project
        </motion.a>
      </motion.div>
    );
  };
  
  const Projects = () => {
  const projects = [
      {
        title: "Brevity AI",
        period: "Feb 2025 - Present",
        description: "AI-driven blogging platform that automates content creation and publishing.",
        features: [
          "Built with Next.js, TypeScript, and Google Gemini API",
          "Automated publishing via Google Blogger API and OAuth 2.0",
          "Implemented n8n workflows for content scheduling",
          "Reduced manual effort by 85% in content creation workflow"
        ],
        link: "https://brevityy-ai.vercel.app/"
      },
      {
        title: "Campus Book",
        period: "Oct 2024 - Jan 2025",
        description: "Scalable second-hand book marketplace for students to save on textbook costs.",
        features: [
          "Built with Next.js, TypeScript, and MongoDB",
          "Advanced search by title, course, and location",
          "Implemented direct chat between buyers and sellers",
          "Helped students save up to 50% on textbook purchases"
        ],
        link: "https://campus-book.vercel.app/"
      },
      {
        title: "HindExpress",
        period: "June - Sept 2023",
        description: "Real-time news application delivering updates across multiple countries.",
        features: [
          "Enhanced user experience with infinite scroll",
          "Built intuitive interface for 100+ countries",
          "Integrated News API for real-time updates"
        ],
        link: "https://github.com/ahmadparizaad/HindExpress"
      }
    ];
  
    return (      <section
      id='projects'
      data-scroll-section
      className="py-20 px-4 bg-[#FFE600] neo-brutalism">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-black font-bold font-mono mb-12 bg-white neo-card inline-block px-6 py-4 -rotate-1">
            Professional Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Projects;