'use client';
import { motion } from 'framer-motion';

const Navigation = () => {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-[999]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="flex flex-col gap-4">
        {['home', 'skills', 'projects', 'experience', 'contact'].map((section) => (
          <motion.button
            key={section}
            onClick={() => scrollTo(section)}
            className="w-3 h-3 bg-black neo-card rounded-full hover:scale-150 transition-all"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;