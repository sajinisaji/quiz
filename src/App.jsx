import React, { useState } from 'react';

// Sample quiz data
const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippo'],
    correctAnswer: 'Blue Whale'
  },
  {
    question: ' What is the national game of India?',
     options: [ 'Hockey','Football', 'Cricket', 'Chess'],
    correctAnswer: 'Hockey'

  },
  {
    question: '  Which ocean is the largest?',
    options: [' Indian Ocean', 'Pacific Ocean', 'Atlantic Ocean', ' Antarctic Ocean'],
    correctAnswer: 'Pacific Ocean'

  },
  {
    question: ' Who is known as the “Father of Modern Physics”',
    options: ['Isaac Newton','Charles Darwin','Albert Einstein', ' Thomas Edison'],
    correctAnswer: 'Albert Einstein'

  },
  { 
    question: 'What is the capital of Australia”',
    options: ['Berlin', 'Ottawa', 'Rome', 'Canberra'],
    correctAnswer:'Canberra'

  },
  { 
    question: 'What is the main ingredient in guacamole?',
    options: ['Kiwi', 'Cherry', 'Raspberry', 'Avocado'],
    correctAnswer:'Avocado'

  },
  {
    question: 'Who is the president of France?',
    options: ['Joe Biden', 'Emmanuel macron', 'Vladimir Putin', 'Kim Jong Un'],
    correctAnswer:'Emmanuel macron'
  },
  {
    question: 'what is acrophobia a fear of?',
    options: ['Height', 'Water', 'Dark', 'Thunder'],
    correctAnswer:'Height'
  },
  {
    question: 'who was the first Disney princess',
    options: ['Cinderella', 'Tiana', 'Bella', 'Snow white'],
    correctAnswer:'Snow white'
  },
  // Add more questions here...
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (selectedOption) => {
    const isCorrect = selectedOption === quizData[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} out of {quizData.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}/{quizData.length}</h2>
          <div><h3 className="question-text">{quizData[currentQuestion].question}</h3> </div>
          <div className="options-container">
            {quizData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
