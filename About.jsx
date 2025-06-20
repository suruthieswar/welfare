import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const moodAdvice = {
  Happy: {
    moral: age => {
      if (age < 18) return "Keep smiling! Your joy makes the world brighter.";
      if (age < 30) return "Happiness is your superpower - use it to create wonderful experiences.";
      if (age < 50) return "Your happiness is contagious - spread it to those around you.";
      return "Your joy is a testament to a life well-lived - cherish these moments.";
    },
    advice: age => [
      age < 18 ? "Share your happiness with friends and family - they'll appreciate it!" : "Share your joy with others - happiness grows when shared",
      "Practice gratitude daily to maintain your positive outlook",
      age < 18 ? "Try a fun creative activity like drawing or music" : "Channel your energy into creative pursuits",
      age < 30 ? "Make plans with friends to enjoy your good mood" : "Use your positive mood to build stronger relationships"
    ]
  },
  Sad: {
    moral: age => {
      if (age < 18) return "It's okay to feel sad sometimes - even rainbows need rain.";
      if (age < 30) return "This feeling is temporary, like clouds passing over the sun.";
      if (age < 50) return "Difficult emotions are part of your growth journey.";
      return "You've weathered storms before - this too shall pass.";
    },
    advice: age => [
      age < 18 ? "Talk to someone you trust about how you feel" : "Allow yourself to feel without judgment - sadness is temporary",
      "Reach out to loved ones - you don't have to go through this alone",
      age < 18 ? "Try some gentle exercise like walking or dancing" : "Engage in gentle physical activity to release endorphins",
      age < 18 ? "Draw or write about your feelings" : "Express your feelings through writing or art"
    ]
  },
  Stressed: {
    moral: age => {
      if (age < 18) return "School can be tough, but you're tougher!";
      if (age < 30) return "Your 20s are for learning - don't stress about having it all figured out.";
      if (age < 50) return "You've handled challenges before - trust in your ability to cope.";
      return "With your experience, you know that most worries never come to pass.";
    },
    advice: age => [
      "Practice deep breathing exercises to calm your nervous system",
      age < 18 ? "Break homework into smaller pieces" : "Break overwhelming situations into smaller, manageable steps",
      age < 18 ? "Make sure you're getting enough sleep" : "Limit caffeine and prioritize sleep to reduce physical symptoms",
      "Challenge anxious thoughts with factual evidence"
    ]
  },
  Angry: {
    moral: age => {
      if (age < 18) return "Anger is like a storm - it's powerful but will pass.";
      if (age < 30) return "Strong emotions show you care - now channel that energy wisely.";
      if (age < 50) return "Your passion is valuable - just direct it constructively.";
      return "Wisdom teaches us that anger is often a mask for deeper feelings.";
    },
    advice: age => [
      age < 18 ? "Count to 10 before reacting" : "Take a timeout before responding to emotional situations",
      "Channel the energy into physical exercise",
      age < 18 ? "Practice saying how you feel calmly" : "Practice assertive communication rather than aggression",
      "Identify the underlying hurt behind the anger"
    ]
  }
};

const initialBotMessages = [
  "Hello there! How are you feeling today?",
  "Hi! I'm here to listen. What's on your mind?",
  "Welcome! Would you like to share how you're doing?"
];

const About = () => {
  const [age, setAge] = useState('');
  const [selectedMood, setSelectedMood] = useState('Happy');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: initialBotMessages[Math.floor(Math.random() * initialBotMessages.length)] }
  ]);
  const [userInput, setUserInput] = useState('');
  const [usedAdvice, setUsedAdvice] = useState([]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setUsedAdvice([]);
    const ageNum = parseInt(age) || 25; // Default to 25 if age not entered
    addBotMessage(`I see you're feeling ${mood.toLowerCase()}. ${moodAdvice[mood].moral(ageNum)}`);
  };

  const addBotMessage = (text) => {
    setChatMessages(prev => [...prev, { sender: 'bot', text }]);
  };

  const getUniqueAdvice = () => {
    const ageNum = parseInt(age) || 25;
    const availableAdvice = moodAdvice[selectedMood].advice(ageNum).filter(
      (_, index) => !usedAdvice.includes(index)
    );

    if (availableAdvice.length === 0) {
      setUsedAdvice([]);
      return moodAdvice[selectedMood].advice(ageNum)[0];
    }

    const randomIndex = Math.floor(Math.random() * availableAdvice.length);
    const adviceIndex = moodAdvice[selectedMood].advice(ageNum).findIndex(
      item => item === availableAdvice[randomIndex]
    );
    setUsedAdvice([...usedAdvice, adviceIndex]);
    return availableAdvice[randomIndex];
  };

  const detectMoodFromText = (text) => {
    const lowerText = text.toLowerCase();
    if (/(happy|joy|good|great|wonderful)/.test(lowerText)) return 'Happy';
    if (/(sad|depress|down|low|upset)/.test(lowerText)) return 'Sad';
    if (/(stress|anxious|overwhelm|pressure)/.test(lowerText)) return 'Stressed';
    if (/(angry|mad|frustrat|annoy)/.test(lowerText)) return 'Angry';
    return null;
  };

  const getBotResponse = (userMessage) => {
    const ageNum = parseInt(age) || 25;
    const detectedMood = detectMoodFromText(userMessage);
    
    if (detectedMood) {
      setSelectedMood(detectedMood);
      setUsedAdvice([]);
      return [
        `I sense you're feeling ${detectedMood.toLowerCase()}. ${moodAdvice[detectedMood].moral(ageNum)}`,
        moodAdvice[detectedMood].advice(ageNum)[0]
      ];
    }

    // General responses
    const responses = [
      "Tell me more about how you're feeling.",
      "I'm listening. What else would you like to share?",
      "That's interesting. How does that make you feel?",
      "I understand. Would you like to talk more about that?",
      "Thanks for sharing. What's been on your mind lately?"
    ];
    
    return [responses[Math.floor(Math.random() * responses.length)]];
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    setChatMessages(prev => [...prev, { sender: 'user', text: userInput }]);
    setUserInput('');

    // Bot response
    setTimeout(() => {
      const responses = getBotResponse(userInput);
      responses.forEach((response, i) => {
        setTimeout(() => addBotMessage(response), i * 800);
      });
    }, 800);
  };

  return (
    <div className='bg-[#f7f8fc] min-h-screen pb-16 pt-20' id='about'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className='w-full px-4'
        >
          <h2 className='text-2xl font-bold text-center mb-8'>About Your Wellbeing</h2>
          
          <div className='flex flex-col md:flex-row gap-8'>
            {/* Left Side - Mood Advice */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              className='md:w-1/2 bg-white rounded-lg p-6 shadow-lg'
            >
              <h3 className='text-xl font-semibold mb-4'>Enter Your Details</h3>
              <input
                type='number'
                placeholder='Enter your age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className='p-2 border rounded w-full mb-4'
                min="1"
                max="120"
              />
              
              <div className='mb-6'>
                <h3 className='text-xl font-semibold mb-2'>Select Your Mood</h3>
                <div className='flex flex-wrap gap-2'>
                  {Object.keys(moodAdvice).map((mood) => (
                    <button
                      key={mood}
                      onClick={() => handleMoodSelect(mood)}
                      className={`px-4 py-2 rounded-full ${selectedMood === mood ? 'bg-primary text-white' : 'bg-gray-200'}`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>

              <div className='space-y-4'>
                <div className='p-4 bg-blue-50 rounded-lg'>
                  <h4 className='font-medium text-lg mb-2'>Today's Moral:</h4>
                  <p className='italic'>"{moodAdvice[selectedMood].moral(parseInt(age) || 25)}"</p>
                </div>

                <div className='p-4 bg-green-50 rounded-lg'>
                  <h4 className='font-medium text-lg mb-2'>Suggestions:</h4>
                  <ul className='list-disc list-inside space-y-2'>
                    {moodAdvice[selectedMood].advice(parseInt(age) || 25).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Chatbot */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              className='md:w-1/2 bg-white rounded-lg p-6 shadow-lg flex flex-col'
            >
              <h3 className='text-xl font-semibold mb-4'>Chat with Support Assistant</h3>
              
              <div className='flex-1 mb-4 overflow-y-auto max-h-96 space-y-4 pr-2'>
                {chatMessages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${message.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-200'}`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className='mt-auto'>
                <div className='flex gap-2'>
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type how you're feeling..."
                    className='flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
                  />
                  <button 
                    type="submit"
                    className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition'
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;