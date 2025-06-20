import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const moodRiddles = {
  Happy: [
    { question: 'What has keys but can\'t open locks?', answer: 'A Piano' },
    { question: 'What comes once in a minute, twice in a moment, but never in a thousand years?', answer: 'The letter M' },
    { question: 'What is full of holes but still holds water?', answer: 'A Sponge' },
    { question: 'I\'m tall when I\'m young, and I\'m short when I\'m old. What am I?', answer: 'A Candle' },
    { question: 'What can you catch but not throw?', answer: 'A Cold' },
    { question: 'What begins with T, finishes with T, and has T in it?', answer: 'A Teapot' }
  ],
  Sad: [
    { question: 'What gets wetter as it dries?', answer: 'A Towel' },
    { question: 'I speak without a mouth and hear without ears. What am I?', answer: 'An Echo' },
    { question: 'What can you break, even if you never pick it up or touch it?', answer: 'A Promise' },
    { question: 'I have branches, but no fruit, trunk or leaves. What am I?', answer: 'A Bank' },
    { question: 'What can travel around the world while staying in the same corner?', answer: 'A Stamp' },
    { question: 'What has hands but can\'t clap?', answer: 'A Clock' }
  ],
  Stressed: [
    { question: 'The more you take, the more you leave behind. What am I?', answer: 'Footsteps' },
    { question: 'What can fill a room but takes up no space?', answer: 'Light' },
    { question: 'What has one eye but can\'t see?', answer: 'A Needle' },
    { question: 'What invention lets you look right through a wall?', answer: 'A Window' },
    { question: 'What goes up but never comes down?', answer: 'Your Age' },
    { question: 'What can\'t talk but will reply when spoken to?', answer: 'An Echo' }
  ]
};

const MoodActivities = () => {
  const [selectedMood, setSelectedMood] = useState('Happy');
  const [currentRiddle, setCurrentRiddle] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [usedRiddleIndices, setUsedRiddleIndices] = useState([]);

  const selectMood = (mood) => {
    setSelectedMood(mood);
    setCurrentRiddle(null);
    setShowAnswer(false);
    setUsedRiddleIndices([]);
  };

  const getNextRiddle = () => {
    const availableRiddles = moodRiddles[selectedMood];
    
    // If all riddles have been used, reset the used indices
    if (usedRiddleIndices.length >= availableRiddles.length) {
      setUsedRiddleIndices([]);
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * availableRiddles.length);
    } while (usedRiddleIndices.includes(randomIndex));

    setUsedRiddleIndices([...usedRiddleIndices, randomIndex]);
    setCurrentRiddle(availableRiddles[randomIndex]);
    setShowAnswer(false);
  };

  const renderGame = () => {
    switch (selectedMood) {
      case 'Happy':
        return <TicTacToeGame />;
      case 'Sad':
        return <RockPaperScissorsGame />;
      case 'Stressed':
        return <BreathingExercise />;
      default:
        return null;
    }
  };

  return (
    <div className='bg-[#f7f8fc] pt-32' id='mood-activities'>
      <div className='container mx-auto px-8'>
        <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.7 }} className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-3'>Mood Wise Fun Zone</h2>
          <p className='text-lg mb-12 md:w-3/5 mx-auto'>Select your mood to enjoy personalized riddles and games!</p>
        </motion.div>

        <div className='flex justify-center gap-4 mb-8'>
          {Object.keys(moodRiddles).map((mood) => (
            <button key={mood} onClick={() => selectMood(mood)} className={`px-4 py-2 rounded ${selectedMood === mood ? 'bg-primary text-white' : 'bg-gray-300'}`}>{mood}</button>
          ))}
        </div>

        <div className='flex flex-col md:flex-row gap-8 md:w-5/6 mx-auto'>
          <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.7 }} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
            <h3 className='text-2xl font-semibold mb-4 text-center'>Riddle</h3>
            {currentRiddle ? (
              <>
                <p className='text-lg mb-4'>{currentRiddle.question}</p>
                {showAnswer && <p className='text-green-600'>Answer: {currentRiddle.answer}</p>}
                <button onClick={() => setShowAnswer(true)} className='bg-primary text-white px-4 py-2 rounded mt-4'>Show Answer</button>
              </>
            ) : (
              <p className='text-gray-600'>Click below to get a riddle!</p>
            )}
            <button onClick={getNextRiddle} className='bg-primary text-white px-4 py-2 rounded mt-4'>
              Get New Riddle
            </button>
          </motion.div>

          <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.7 }} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
            <h3 className='text-2xl font-semibold mb-4 text-center'>Game</h3>
            {renderGame()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState(true);

  const handleClick = (index) => {
    if (!isUserTurn || board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsUserTurn(false);
  };

  useEffect(() => {
    if (!isUserTurn && !calculateWinner(board)) {
      const emptyIndices = board.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
      if (emptyIndices.length === 0) return;
      const randomMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      const newBoard = [...board];
      newBoard[randomMove] = 'O';
      setTimeout(() => {
        setBoard(newBoard);
        setIsUserTurn(true);
      }, 500);
    }
  }, [isUserTurn, board]);

  const winner = calculateWinner(board);

  return (
    <div className='text-center'>
      <p>{winner ? `Winner: ${winner}` : `Next: ${isUserTurn ? 'You (X)' : 'Computer (O)'}`}</p>
      <div className='grid grid-cols-3 gap-1 w-32 mx-auto mt-2'>
        {board.map((cell, index) => (
          <div key={index} onClick={() => handleClick(index)} className='w-10 h-10 flex items-center justify-center border border-black cursor-pointer text-xl'>
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const RockPaperScissorsGame = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const playGame = (choice) => {
    const computerPick = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(computerPick);

    if (choice === computerPick) {
      setResult('It\'s a Draw!');
    } else if (
      (choice === 'Rock' && computerPick === 'Scissors') ||
      (choice === 'Scissors' && computerPick === 'Paper') ||
      (choice === 'Paper' && computerPick === 'Rock')
    ) {
      setResult('You Win!');
    } else {
      setResult('Computer Wins!');
    }
  };

  return (
    <div className='text-center'>
      <h4 className='mb-4'>Rock Paper Scissors</h4>
      <div className='flex justify-center gap-4 mb-4'>
        {choices.map(choice => (
          <button key={choice} onClick={() => playGame(choice)} className='bg-primary text-white px-3 py-1 rounded'>
            {choice}
          </button>
        ))}
      </div>
      {userChoice && (
        <p>You: {userChoice} | Computer: {computerChoice} | Result: {result}</p>
      )}
    </div>
  );
};

const BreathingExercise = () => (
  <div className='flex flex-col items-center'>
    <p className='text-center mb-4'>Breathe In... Hold... Breathe Out...</p>
    <div className='w-24 h-24 rounded-full bg-blue-400 animate-pulse'></div>
  </div>
);

export default MoodActivities;