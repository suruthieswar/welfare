// Ensure 'text-primary' is defined in your Tailwind CSS or CSS file

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const sections = ['home', 'services', 'about', 'pricing', 'testimonial'];
    const scrollPosition = window.scrollY + 100; // Adjust offset as needed

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };


  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          href="#home"
          className={`text-white ${activeSection === 'home' ? 'isactive' : ''}`}
          onClick={(e) => { e.preventDefault(); handleScrollTo('home'); handleCloseMenu(); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#services"
          className={`text-white ${activeSection === 'services' ? 'isactive' : ''}`}
          onClick={(e) => { e.preventDefault(); handleScrollTo('services'); handleCloseMenu(); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#about"
          className={`text-white ${activeSection === 'about' ? 'isactive' : ''}`}
          onClick={(e) => { e.preventDefault(); handleScrollTo('about'); handleCloseMenu(); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          About Us
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#pricing"
          className={`text-white ${activeSection === 'pricing' ? 'isactive' : ''}`}
          onClick={(e) => { e.preventDefault(); handleScrollTo('pricing'); handleCloseMenu(); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Pricing
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#testimonial"
          className={`text-white ${activeSection === 'testimonial' ? 'isactive' : ''}`}
          onClick={(e) => { e.preventDefault(); handleScrollTo('testimonial'); handleCloseMenu(); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Testimonial
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-white text-lg font-semibold">
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        <div className="hidden md:flex flex-grow justify-center">
          <nav>
            {navLinks}
          </nav>
        </div>
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
          >
            Feed Back
          </a>
        </div>
        <div className="block md:hidden">
          <button 
            onClick={handleToggle}
            className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}
          >
            <HiOutlineMenuAlt3 className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden"
        >
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.props.children}
            <li className='py-2'>
              <a 
                onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); handleCloseMenu(); }}
                href="#contact" 
                className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
              >
                Feedback
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
