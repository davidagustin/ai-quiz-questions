'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { quizData, Question } from '../../data/quizData';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showMnemonic, setShowMnemonic] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const quizCategory = quizData[category];
  const questions = quizCategory?.questions || [];

  useEffect(() => {
    if (!quizCategory) {
      router.push('/');
      return;
    }
    setAnswers(new Array(questions.length).fill(null));
  }, [category, quizCategory, questions.length, router]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return; // Prevent changing answer after submission
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(newAnswers[currentQuestion + 1]);
      setShowExplanation(false);
      setShowMnemonic(false);
    } else {
      // Quiz completed
      const finalScore = newAnswers.reduce((total: number, answer, index) => {
        return total + (answer === questions[index].correct ? 1 : 0);
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
        totalQuestions: questions.length,
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

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!quizCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl mb-4">Category not found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-8">🎉 Quiz Completed!</h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <div className="text-6xl mb-4">
                {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎯' : '📚'}
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {quizCategory.title}
              </h2>
              <div className="text-2xl text-gray-300 mb-6">
                Score: {score}/{questions.length} ({percentage}%)
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Correct Answers:</span>
                  <span className="text-green-400 font-bold">{score}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Incorrect Answers:</span>
                  <span className="text-red-400 font-bold">{questions.length - score}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/quiz/${category}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                🔄 Retake Quiz
              </Link>
              <Link
                href="/"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                🏠 Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              ← Back to Categories
            </Link>
            <div className="text-white text-lg">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-3 mb-8">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 leading-relaxed">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
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
                  <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>

            {/* Mnemonic Hint */}
            {!showExplanation && (
              <button
                onClick={() => setShowMnemonic(!showMnemonic)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg mb-4 transition-colors"
              >
                {showMnemonic ? '🙈 Hide' : '🧠 Show'} Mnemonic Hint
              </button>
            )}

            {showMnemonic && (
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 mb-6">
                <h3 className="text-purple-300 font-semibold mb-2">💡 Mnemonic:</h3>
                <p className="text-purple-200">{currentQ.mnemonic}</p>
              </div>
            )}

            {/* Explanation */}
            {showExplanation && (
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-6">
                <h3 className="text-blue-300 font-semibold mb-2">📖 Explanation:</h3>
                <p className="text-blue-200">{currentQ.explanation}</p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                ← Previous
              </button>

              <div className="text-gray-300">
                {answers.filter(a => a !== null).length} of {questions.length} answered
              </div>

              {selectedAnswer !== null && !showExplanation && (
                <button
                  onClick={() => setShowExplanation(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Check Answer
                </button>
              )}

              {showExplanation && (
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
              )}
            </div>
          </div>

          {/* Question Navigation */}
          <div className="flex flex-wrap gap-2 justify-center">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentQuestion(index);
                  setSelectedAnswer(answers[index]);
                  setShowExplanation(false);
                  setShowMnemonic(false);
                }}
                className={`w-10 h-10 rounded-lg border-2 transition-all duration-200 ${
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