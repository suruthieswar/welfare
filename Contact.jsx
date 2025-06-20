import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !feedback) {
      alert('Please fill in all fields');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5001/contact', { 
        name, 
        feedback,
        contactNumber: '', // default as empty since you are not collecting these
        address: ''
      });
      setMessage('Thank you for your feedback!');
      setName('');
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setMessage('Failed to submit feedback');
    }
  };

  return (
    <div className='bg-heroBg flex items-center justify-center py-28 px-8' id='contact'>
      <div className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>

          {/* Left Side: Feedback Form */}
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            className='space-y-8 p-8 bg-white shadow-xl rounded-md'
          >
            <h2 className='text-2xl font-bold mb-4'>Feedback Form</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <input
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full p-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary'
              />
              <textarea
                placeholder='Your Feedback'
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className='w-full p-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary'
                rows='5'
              ></textarea>
              <button
                type='submit'
                className='w-full p-3 bg-primary text-white rounded-md hover:bg-green-600'
              >
                Submit Feedback
              </button>
              {message && <p className="text-green-600">{message}</p>}
            </form>
          </motion.div>

          {/* Right Side: Importance of Feedback */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            className='text-white space-y-4'
          >
            <h2 className='text-3xl font-bold'>Importance of Feedback</h2>
            <p>Feedback helps us to improve our services and understand our users better.</p>
            <p>Your opinion matters. Let us know what you think so we can make things even better for you!</p>
            <p>We value transparency and constant improvement based on your suggestions.</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
