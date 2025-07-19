'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { quizData, Question } from '../../data/quizData';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;
  
  const [quizSetup, setQuizSetup] = useState(true);
  const [questionCount, setQuestionCount] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showMnemonic, setShowMnemonic] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  const quizCategory = quizData[category];
  const allQuestions = quizCategory?.questions || [];
  const maxQuestions = allQuestions.length;

  useEffect(() => {
    if (!quizCategory) {
      router.push('/');
      return;
    }
  }, [category, quizCategory, router]);

  const handleStartQuiz = () => {
    const count = parseInt(questionCount);
    if (isNaN(count) || count <= 0 || count > maxQuestions) {
      alert(`Please enter a valid number between 1 and ${maxQuestions}`);
      return;
    }

    // Randomly select the specified number of questions
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    setSelectedQuestions(selected);
    setAnswers(new Array(count).fill(null));
    setQuizSetup(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return; // Prevent changing answer after submission
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(newAnswers[currentQuestion + 1]);
      setShowExplanation(false);
      setShowMnemonic(false);
    } else {
      // Quiz completed
      const finalScore = newAnswers.reduce((total: number, answer, index) => {
        return total + (answer === selectedQuestions[index].correct ? 1 : 0);
      }, 0);
      setScore(finalScore);
      setQuizCompleted(true);
      
      // Save progress to localStorage
      const savedProgress = localStorage.getItem('quizProgress');
      const progress = savedProgress ? JSON.parse(savedProgress) : {};
      progress[category] = {
        category,
        completed: true,
        score: finalScore,
        totalQuestions: selectedQuestions.length,
        lastAttempted: new Date().toISOString()
      };
      localStorage.setItem('quizProgress', JSON.stringify(progress));
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]);
      setShowExplanation(false);
      setShowMnemonic(false);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    handleNext();
  };

  const handleResetQuiz = () => {
    setQuizSetup(true);
    setQuestionCount('');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowMnemonic(false);
    setAnswers([]);
    setQuizCompleted(false);
    setScore(0);
    setSelectedQuestions([]);
  };

  if (!quizCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-xl sm:text-2xl mb-4">Category not found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Quiz Setup Screen
  if (quizSetup) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-4 sm:py-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base mb-4 inline-block">
                ← Back to Categories
              </Link>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {quizCategory.title}
              </h1>
              <p className="text-gray-300 text-base sm:text-lg">
                {quizCategory.description}
              </p>
            </div>

            {/* Quiz Setup Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                🎯 Quiz Setup
              </h2>
              
              <div className="space-y-6">
                {/* Question Count Input */}
                <div>
                  <label htmlFor="questionCount" className="block text-white font-semibold mb-3 text-base sm:text-lg">
                    How many questions would you like to answer?
                  </label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      id="questionCount"
                      value={questionCount}
                      onChange={(e) => setQuestionCount(e.target.value)}
                      min="1"
                      max={maxQuestions}
                      placeholder={`1-${maxQuestions}`}
                      className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors text-base sm:text-lg"
                    />
                    <span className="text-gray-300 text-sm sm:text-base whitespace-nowrap">
                      of {maxQuestions} available
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    Questions will be randomly selected from the available pool
                  </p>
                </div>

                {/* Category Info */}
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2 text-base sm:text-lg">📊 Category Information</h3>
                  <div className="space-y-2 text-sm sm:text-base">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total Questions Available:</span>
                      <span className="text-white font-semibold">{maxQuestions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Mnemonics Available:</span>
                      <span className="text-white font-semibold">{Object.keys(quizCategory.mnemonics).length}</span>
                    </div>
                  </div>
                </div>

                {/* Start Button */}
                <button
                  onClick={handleStartQuiz}
                  disabled={!questionCount || parseInt(questionCount) <= 0 || parseInt(questionCount) > maxQuestions}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors text-base sm:text-lg disabled:opacity-50"
                >
                  🚀 Start Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / selectedQuestions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-4 sm:py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">🎉 Quiz Completed!</h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 mb-6 sm:mb-8">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">
                {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎯' : '📚'}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                {quizCategory.title}
              </h2>
              <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6">
                Score: {score}/{selectedQuestions.length} ({percentage}%)
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Correct Answers:</span>
                  <span className="text-green-400 font-bold text-sm sm:text-base">{score}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Incorrect Answers:</span>
                  <span className="text-red-400 font-bold text-sm sm:text-base">{selectedQuestions.length - score}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={handleResetQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                🔄 New Quiz
              </button>
              <Link
                href="/"
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                🏠 Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = selectedQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / selectedQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">
              ← Back to Categories
            </Link>
            <div className="text-white text-base sm:text-lg">
              Question {currentQuestion + 1} of {selectedQuestions.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 mb-6 sm:mb-8">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 sm:h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 leading-relaxed">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 min-h-[44px] sm:min-h-[48px] ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-500/20 text-white'
                      : 'border-gray-600 bg-gray-700/50 text-gray-200 hover:border-gray-500 hover:bg-gray-600/50'
                  } ${
                    showExplanation
                      ? index === currentQ.correct
                        ? 'border-green-500 bg-green-500/20'
                        : selectedAnswer === index && index !== currentQ.correct
                        ? 'border-red-500 bg-red-500/20'
                        : ''
                      : ''
                  }`}
                >
                  <span className="font-semibold mr-2 sm:mr-3 text-sm sm:text-base">{String.fromCharCode(65 + index)}.</span>
                  <span className="text-sm sm:text-base">{option}</span>
                </button>
              ))}
            </div>

            {/* Mnemonic Hint */}
            {!showExplanation && (
              <button
                onClick={() => setShowMnemonic(!showMnemonic)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded-lg mb-4 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                {showMnemonic ? '🙈 Hide' : '🧠 Show'} Mnemonic Hint
              </button>
            )}

            {showMnemonic && (
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <h3 className="text-purple-300 font-semibold mb-2 text-sm sm:text-base">💡 Mnemonic:</h3>
                <p className="text-purple-200 text-sm sm:text-base">{currentQ.mnemonic}</p>
              </div>
            )}

            {/* Explanation */}
            {showExplanation && (
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <h3 className="text-blue-300 font-semibold mb-2 text-sm sm:text-base">📖 Explanation:</h3>
                <p className="text-blue-200 text-sm sm:text-base">{currentQ.explanation}</p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                ← Previous
              </button>

              <div className="text-gray-300 text-sm sm:text-base order-first sm:order-none">
                {answers.filter(a => a !== null).length} of {selectedQuestions.length} answered
              </div>

              {selectedAnswer !== null && !showExplanation && (
                <button
                  onClick={() => setShowExplanation(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
                >
                  Check Answer
                </button>
              )}

              {showExplanation && (
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
                >
                  {currentQuestion === selectedQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
              )}
            </div>
          </div>

          {/* Question Navigation */}
          <div className="flex flex-wrap gap-2 justify-center">
            {selectedQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentQuestion(index);
                  setSelectedAnswer(answers[index]);
                  setShowExplanation(false);
                  setShowMnemonic(false);
                }}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg border-2 transition-all duration-200 text-xs sm:text-sm ${
                  index === currentQuestion
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : answers[index] !== null
                    ? 'border-green-500 bg-green-500/20 text-green-300'
                    : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 