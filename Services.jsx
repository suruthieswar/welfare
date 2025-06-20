import React from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";
import { fadeIn } from "../utilis/animationVariants";

const Services = () => {
    return (
        <div className='bg-[#f7f8fc]' id="services">
            <div className='pt-28 px-4 container mx-auto'>
                <motion.div 
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='space-y-5 text-center'
                >
                    <h2 className='text-center text-4xl font-bold font-secondary text-heroBg'>
                        What Can We Do Together
                    </h2>
                    <p className='md:w-1/2 mx-auto'>
                        We offer specialized counseling services to help you build better relationships, improve communication, overcome personal obstacles, and boost self-confidence.
                    </p>
                </motion.div>

                {/* React Tabs */}
                <div className='py-12 md:w-4/5 mx-auto'>
                    <Tabs>
                        <motion.TabList 
                           variants={fadeIn("up", 0.2)}
                           initial="hidden"
                           whileInView={"show"}
                           viewport={{ once: false, amount: 0.7 }}
                            className="flex flex-wrap justify-between items-center md:gap-8 gap-4"
                        >
                            <Tab>Couple Counseling</Tab>
                            <Tab>Parenting Skills</Tab>
                            <Tab>Feeling Stuck</Tab>
                            <Tab>Self-Confidence</Tab>
                        </motion.TabList>

                        {/* Couple Counseling */}
                        <TabPanel>
                            <motion.div
                               variants={fadeIn("up", 0.2)}
                               initial="hidden"
                               whileInView={"show"}
                               viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                                    <h3 className="text-3xl font-semibold text-primary mb-4">Couple Counseling</h3>
                                    <p className="mb-8">
                                        Strengthen your relationship with personalized couple counseling. Learn to communicate openly, resolve conflicts peacefully, and rebuild trust with your partner.
                                    </p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className="list-disc list-inside space-y-3">
                                        <li>Better understanding of relationship dynamics</li>
                                        <li>Improved communication skills</li>
                                        <li>Effective conflict resolution techniques</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={serviceImg1} alt="Couple Counseling" className="w-full h-auto rounded-2xl object-cover" />
                                </div>
                            </motion.div>
                        </TabPanel>

                        {/* Parenting Skills */}
                        <TabPanel>
                            <motion.div
                               variants={fadeIn("up", 0.2)}
                               initial="hidden"
                               whileInView={"show"}
                               viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                                    <h3 className="text-3xl font-semibold text-primary mb-4">Parenting Skills</h3>
                                    <p className="mb-8">
                                        Empower your parenting journey with practical guidance. Enhance your ability to nurture, guide, and connect with your children in a positive and effective manner.
                                    </p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className="list-disc list-inside space-y-3">
                                        <li>Develop positive parenting strategies</li>
                                        <li>Strengthen parent-child communication</li>
                                        <li>Understand child behavior and needs</li>
                                        <li>Build a supportive family environment</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={serviceImg2} alt="Parenting Skills" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
                                </div>
                            </motion.div>
                        </TabPanel>

                        {/* Feeling Stuck */}
                        <TabPanel>
                            <motion.div
                               variants={fadeIn("up", 0.2)}
                               initial="hidden"
                               whileInView={"show"}
                               viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                                    <h3 className="text-3xl font-semibold text-primary mb-4">Feeling Stuck</h3>
                                    <p className="mb-8">
                                        Break through mental and emotional barriers that hold you back. Discover new perspectives, set achievable goals, and take meaningful action towards personal growth.
                                    </p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className="list-disc list-inside space-y-3">
                                        <li>Clarify life goals and priorities</li>
                                        <li>Overcome procrastination and self-doubt</li>
                                        <li>Find renewed motivation and purpose</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={serviceImg3} alt="Feeling Stuck" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
                                </div>
                            </motion.div>
                        </TabPanel>

                        {/* Self-Confidence */}
                        <TabPanel>
                            <motion.div
                              variants={fadeIn("up", 0.2)}
                              initial="hidden"
                              whileInView={"show"}
                              viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                                    <h3 className="text-3xl font-semibold text-primary mb-4">Self-Confidence</h3>
                                    <p className="mb-8">
                                        Boost your self-esteem and confidence through practical exercises and mindset shifts. Learn to believe in yourself, handle criticism positively, and embrace challenges fearlessly.
                                    </p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className="list-disc list-inside space-y-3">
                                        <li>Enhance self-image and self-worth</li>
                                        <li>Develop assertive communication skills</li>
                                        <li>Overcome fear of failure</li>
                                        <li>Face new opportunities with courage</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={serviceImg4} alt="Self-Confidence" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
                                </div>
                            </motion.div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Services;
