// components/Hero.js
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialIcon = ({ type }) => {
    switch (type) {
        case "github":
        return <FaGithub />;
        case "linkedin":
        return <FaLinkedin />;
        case "twitter":
        return <FaTwitter />;
        case "instagram":
        return <FaInstagram />;
        default:
        return null;
    }
};
// SocialLink Component
const SocialLink = ({ href, icon, text }) => {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-[#FFE600] neo-card
                   text-black font-bold hover:bg-[#FFD700] transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-xl">{icon}</span>
        <span className="font-mono uppercase tracking-wider">{text}</span>
      </motion.a>
    );
  };
  
  const Hero = () => {
    useEffect(() => {
      gsap.from(".hero-title", { 
        duration: 1, 
        y: -50, 
        opacity: 0,
        ease: "bounce.out"
      });
      gsap.from(".hero-tagline", { 
        duration: 1, 
        delay: 0.5, 
        x: -50, 
        opacity: 0,
        ease: "power4.out"
      });
      gsap.from(".hero-social", { 
        duration: 1, 
        delay: 1, 
        y: 50, 
        opacity: 0,
        stagger: 0.2
      });
    }, []);
  
    const socialLinks = [
      {
        href: "https://github.com/ahmadparizaad",
        icon: <SocialIcon type="github" />,
        text: "GitHub"
      },
      {
        href: "https://www.linkedin.com/in/ahmadparizaad",
        icon: <SocialIcon type="linkedin" />,
        text: "LinkedIn"
      },
      {
        href: "https://twitter.com/ahmadparizaad",
        icon: <SocialIcon type="twitter" />,
        text: "Twitter"
      },
      {
        href: "http://instagram.com/ahmadparizaad",
        icon: <SocialIcon type="instagram" />,
        text: "Instagram"
      }
    ];
  
    return (
      <section
      id="home"
      data-scroll-section
       className="relative min-h-screen neo-brutalism bg-[#FFE600] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#FF90E8] neo-card rotate-12"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#00FF00] neo-card -rotate-12"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        >
          {/* Main Content Container */}
          <div className="bg-white neo-card p-8 md:p-12 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl text  text-black  -black hero-title mb-6 font-mono z-[3]">
              Mohammad Ahmad
            </h1>
            <div className="bg-[#00FF00] neo-card p-4 mb-8 transform -rotate-1">
              <h2 className="text-2xl text-black md:text-3xl font-bold hero-tagline font-mono z-99">
                Full Stack Blockchain Developer
              </h2>
            </div>
            <p className="text-lg md:text-xl text-black mb-12 font-mono leading-relaxed">
              Computer Engineering graduate specializing in blockchain development 
              and full-stack web applications.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-6 hero-social">
              {socialLinks.map((link, index) => (
                <SocialLink 
                  key={index}
                  href={link.href}
                  icon={link.icon}
                  text={link.text}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    );
  };  

export default Hero;