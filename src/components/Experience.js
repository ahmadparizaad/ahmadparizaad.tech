// components/Experience.js
'use client';
import { motion } from 'framer-motion';
const ExperienceCard = ({ role, company, period, achievements }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white neo-card p-6 mb-8"
      >
        <div className="bg-[#FFE600] neo-card inline-block px-4 py-2 -rotate-1 mb-4">
          <h3 className="text-2xl font-bold font-mono">{role}</h3>
        </div>
        <div className="bg-[#00FF00] neo-card inline-block px-4 py-2 rotate-1 mb-4 ml-4">
          <p className="font-mono font-bold">{company}</p>
        </div>
        <p className="font-mono text-sm text-gray-600 mb-4">{period}</p>
        <ul className="space-y-3">
          {achievements.map((achievement, index) => (
            <li key={index} className="font-mono">
              • {achievement}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };
  
  const Experience = () => {
    const experiences = [
      {
        role: "Full Stack Blockchain Developer",
        company: "NapFT Technology",
        period: "Feb 2024 - Present",
        achievements: [
          "Developed and integrated smart contracts with frontend, supporting 1,000+ daily transactions",
          "Built wallet connect feature improving accessibility by 50%",
          "Enhanced NFT utility section, optimizing contract efficiency by 30%"
        ]
      },
      {
        role: "Blockchain Developer Intern",
        company: "NapFT Technology",
        period: "June - Sept 2023",
        achievements: [
          "Deployed secure smart contracts on Polygon network",
          "Automated transaction processes reducing manual intervention by 90%",
          "Implemented IPFS for decentralized NFT data storage"
        ]
      }
    ];
  
    return (
      <section 
      id='experience'
      data-scroll-section
      className="py-20 px-4 bg-[#FFE600] neo-brutalism">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-black font-bold font-mono mb-12 bg-white neo-card inline-block px-6 py-4 rotate-2">
            Experience
          </h2>
          <div className="space-y-8 text-black">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;