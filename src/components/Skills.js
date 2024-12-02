// components/Skills.js
'use client';

import { motion } from 'framer-motion';

const SkillCard = ({ category, skills }) => {
    return (
      <motion.div
      data-scroll
      data-scroll-speed="2"
      data-scroll-delay="0.1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white neo-card p-6"
      >
        <h3 className="text-2xl font-bold font-mono mb-4 bg-[#00FF00] neo-card inline-block px-4 py-2 -rotate-2">
          {category}
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-[#FFE600] neo-card font-mono text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    );
  };
  
  const Skills = () => {
    const skillsData = {
      Frontend: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Aceternity UI'],
      Backend: ['Node.JS', 'ExpressJS', 'Solidity', 'Ethers.JS'],
      Other: ['Java', 'C++', 'SQL', 'MongoDB', 'Git', 'Github']
    };
  
    return (
      <section
      id='skills'
      data-scroll-section
      className="py-20 px-4 bg-[#FFE600] neo-brutalism">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold font-mono mb-12 text-black bg-white neo-card inline-block px-6 py-4 rotate-2">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <SkillCard key={category} category={category} skills={skills} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default Skills;