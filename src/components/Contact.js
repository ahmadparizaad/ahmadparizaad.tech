// components/Contact.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <section 
    id='contact'
    data-scroll-section
    className="py-20 px-4 bg-[#FFE600] neo-brutalism">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-black font-mono mb-12 bg-white neo-card inline-block px-6 py-4 -rotate-1">
          Get In Touch
        </h2>
        
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white neo-card p-8 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <label className="block font-mono font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 font-mono bg-[#FFE600] neo-card"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block font-mono font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 font-mono bg-[#FFE600] neo-card"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block font-mono font-bold mb-2">Message</label>
            <textarea
              className="w-full p-3 font-mono bg-[#FFE600] neo-card min-h-[150px]"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          
          <motion.button
            type="submit"
            className="bg-[#FF90E8] neo-card px-8 py-3 font-mono font-bold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;