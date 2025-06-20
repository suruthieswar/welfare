import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.webp';
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { fadeIn } from "../utilis/animationVariants";

const Hero = () => {
    return (
        <section className="bg-heroBg text-white flex items-center pt-28 md:h-screen" id="home">
            <div className='container mx-auto flex flex-col md:flex-row-reverse items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>

                {/* Right Side */}
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="md:w-1/2 h-full"
                >
                    <img
                        src={heroImg}
                        alt="Hero"
                        className="w-full object-cover"
                    />
                </motion.div>

                {/* Left Side */}
                <div
                    className="md:w-1/2"
                >

                    <motion.p
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-lg mb-12 md:pr-8">
                        We lower our stress levels, we get to know our pain, we connect better.
                        Happiness boosts mental well-being, strengthens relationships, and improves physical health
                    </motion.p>
                   
                </div>

            </div>
        </section>
    );
};

export default Hero;
