import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import footerLogo from '../assets/footer-logo.svg';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const Footer = () => {
    return (
        <footer className='py-12 bg-gray-100 px-8'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8'>
                {/* First Column: Logo, Text, Social Icons */}
                <div className='space-y-6 mr-14'>
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='flex items-center space-x-2'>
                        <img src={footerLogo} alt='Logo' className='w-32 h-auto' />
                    </motion.div>
                    <motion.p
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='text-para'>
                        Happiness boosts mental well-being, strengthens relationships, and improves physical health. 
                        It fosters creativity, enhances productivity, and promotes a positive outlook on life, 
                        making challenges easier to overcome and life more fulfilling.
                    </motion.p>
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='flex space-x-4'>
                        <a href='#' className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors'>
                            <FaFacebookF className='text-xl' />
                        </a>
                        <a href='#' className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors'>
                            <FaTwitter className='text-xl' />
                        </a>
                        <a href='#' className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors'>
                            <FaInstagram className='text-xl' />
                        </a>
                        <a href='#' className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors'>
                            <FaLinkedinIn className='text-xl' />
                        </a>
                    </motion.div>
                </div>

                {/* Second Column: Quick Links */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
                    <ul className='space-y-3'>
                        <li><a href='#home' className='hover:underline text-gray-700'>Home</a></li>
                        <li><a href='#about' className='hover:underline text-gray-700'>About Us</a></li>
                        <li><a href='#services' className='hover:underline text-gray-700'>Services</a></li>
                        <li><a href='#contact' className='hover:underline text-gray-700'>Feed Back</a></li>
                    </ul>
                </motion.div>

                {/* Third Column: Contact Info */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'>
                            <FaMapMarkerAlt className='text-primary' />
                            <p className='text-gray-700'>12,Dharapuram</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaPhoneAlt className='text-primary' />
                            <p className='text-gray-700'>+123 456 7890</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaEnvelope className='text-primary' />
                            <p className='text-gray-700'>swa@gmail.com</p>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
