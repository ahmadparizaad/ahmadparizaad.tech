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
        title: "HindExpress",
        period: "June - Sept 2023",
        description: "Real-time news application delivering updates across multiple countries.",
        features: [
          "Enhanced user experience with infinite scroll",
          "Built intuitive interface for 100+ countries",
          "Integrated News API for real-time updates"
        ],
        link: "https://github.com/ahmadparizaad/HindExpress"
      },
      {
        title: "S2S Book Marketplace",
        period: "June - Sept 2023",
        description: "Platform for buying/selling second-hand books within communities.",
        features: [
          "50% cost savings for students",
          "MongoDB integration for efficient data management",
          "Responsive design with Next.JS and Tailwind"
        ],
        link: "https://buysellbook.vercel.app/"
      },
      {
        title: "NapFT Marketplace",
        period: "2023",
        description: "Optimized smart contracts for NFT transactions.",
        features: [
          "Enhanced contract efficiency",
          "Improved platform functionality",
          "Automated transaction processes"
        ],
        link: "https://www.napft.com/"
      }
    ];
  
    return (
      <section
      id='projects'
      data-scroll-section
      className="py-20 px-4 bg-[#FFE600] neo-brutalism">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-black font-bold font-mono mb-12 bg-white neo-card inline-block px-6 py-4 -rotate-1">
            Featured Projects
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