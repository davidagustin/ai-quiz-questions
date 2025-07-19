'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { quizData } from '../data/quizData';

interface QuizProgress {
  category: string;
  completed: boolean;
  score?: number;
  totalQuestions: number;
  lastAttempted?: Date;
}

export default function ProgressPage() {
  const [progress, setProgress] = useState<Record<string, QuizProgress>>({});

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('quizProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    } else {
      // Initialize progress for all categories
      const initialProgress: Record<string, QuizProgress> = {};
      Object.keys(quizData).forEach(category => {
        initialProgress[category] = {
          category,
          completed: false,
          totalQuestions: quizData[category].questions.length
        };
      });
      setProgress(initialProgress);
      localStorage.setItem('quizProgress', JSON.stringify(initialProgress));
    }
  }, []);

  const categoryIcons = {
    numpy_fundamentals: '🧮',
    pandas_operations: '📊',
    prompt_engineering: '💬',
    ml_fundamentals: '🤖',
    spatial_data: '🌐'
  };

  const categoryColors = {
    numpy_fundamentals: 'from-blue-500 to-cyan-500',
    pandas_operations: 'from-green-500 to-emerald-500',
    prompt_engineering: 'from-purple-500 to-pink-500',
    ml_fundamentals: 'from-orange-500 to-red-500',
    spatial_data: 'from-indigo-500 to-blue-600'
  };

  const totalQuizzes = Object.keys(quizData).length;
  const completedQuizzes = Object.values(progress).filter(p => p.completed).length;
  const overallProgress = Math.round((completedQuizzes / totalQuizzes) * 100);

  const averageScore = Object.values(progress)
    .filter(p => p.completed && p.score !== undefined)
    .reduce((sum, p) => sum + (p.score || 0), 0) / 
    Object.values(progress).filter(p => p.completed).length || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            📊 Your Progress
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Track your learning journey across all quiz categories. See your performance 
            and identify areas for improvement.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">
            ← Back to Home
          </Link>
        </div>

        {/* Overall Stats */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{completedQuizzes}/{totalQuizzes}</div>
              <div className="text-gray-300 text-sm sm:text-base">Quizzes Completed</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{overallProgress}%</div>
              <div className="text-gray-300 text-sm sm:text-base">Overall Progress</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                {completedQuizzes > 0 ? Math.round(averageScore) : 0}%
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Average Score</div>
            </div>
          </div>
        </div>

        {/* Progress by Category */}
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
          {Object.entries(quizData).map(([key, category]) => {
            const categoryProgress = progress[key];
            const isCompleted = categoryProgress?.completed;
            const score = categoryProgress?.score;
            const percentage = score ? Math.round((score / category.questions.length) * 100) : 0;

            return (
              <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-3">
                  <div className="flex items-center">
                    <div className="text-2xl sm:text-3xl mr-3 sm:mr-4">
                      {categoryIcons[key as keyof typeof categoryIcons]}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{category.questions.length} questions</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    {isCompleted ? (
                      <div className="text-green-400 font-bold text-lg sm:text-xl">
                        {score}/{category.questions.length} ({percentage}%)
                      </div>
                    ) : (
                      <div className="text-gray-400 text-sm sm:text-base">Not attempted</div>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 mb-3 sm:mb-4">
                  <div
                    className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                      isCompleted 
                        ? percentage >= 80 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                          : percentage >= 60
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                          : 'bg-gradient-to-r from-red-500 to-pink-500'
                        : 'bg-gray-600'
                    }`}
                    style={{ width: `${isCompleted ? percentage : 0}%` }}
                  />
                </div>

                {/* Status and Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                      isCompleted
                        ? percentage >= 80
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : percentage >= 60
                          ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                          : 'bg-red-500/20 text-red-300 border border-red-500/30'
                        : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                    }`}>
                      {isCompleted
                        ? percentage >= 80
                          ? '🏆 Excellent'
                          : percentage >= 60
                          ? '🎯 Good'
                          : '📚 Needs Review'
                        : '⏳ Not Started'}
                    </span>
                    
                    {categoryProgress?.lastAttempted && (
                      <span className="text-gray-400 text-xs sm:text-sm">
                        Last: {new Date(categoryProgress.lastAttempted).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/quiz/${key}`}
                    className={`px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base w-full sm:w-auto text-center ${
                      isCompleted
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : `bg-gradient-to-r ${categoryColors[key as keyof typeof categoryColors]} text-white hover:scale-105`
                    }`}
                  >
                    {isCompleted ? '🔄 Retake' : '🎯 Start Quiz'}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Insights */}
        {completedQuizzes > 0 && (
          <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
                📈 Performance Insights
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">🎯 Your Strengths</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {Object.entries(progress)
                      .filter(([_, p]) => p.completed && p.score && (p.score / p.totalQuestions) >= 0.8)
                      .map(([key, p]) => (
                        <div key={key} className="flex items-center justify-between bg-green-500/10 rounded-lg p-2 sm:p-3 border border-green-500/20">
                          <span className="text-green-300 text-sm sm:text-base">{quizData[key].title}</span>
                          <span className="text-green-400 font-bold text-sm sm:text-base">
                            {Math.round((p.score! / p.totalQuestions) * 100)}%
                          </span>
                        </div>
                      ))}
                    {Object.entries(progress).filter(([_, p]) => p.completed && p.score && (p.score / p.totalQuestions) >= 0.8).length === 0 && (
                      <p className="text-gray-400 text-sm sm:text-base">Keep practicing to identify your strengths!</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">📚 Areas for Improvement</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {Object.entries(progress)
                      .filter(([_, p]) => p.completed && p.score && (p.score / p.totalQuestions) < 0.6)
                      .map(([key, p]) => (
                        <div key={key} className="flex items-center justify-between bg-red-500/10 rounded-lg p-2 sm:p-3 border border-red-500/20">
                          <span className="text-red-300 text-sm sm:text-base">{quizData[key].title}</span>
                          <span className="text-red-400 font-bold text-sm sm:text-base">
                            {Math.round((p.score! / p.totalQuestions) * 100)}%
                          </span>
                        </div>
                      ))}
                    {Object.entries(progress).filter(([_, p]) => p.completed && p.score && (p.score / p.totalQuestions) < 0.6).length === 0 && (
                      <p className="text-gray-400 text-sm sm:text-base">Great job! All completed quizzes are above 60%.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Study Recommendations */}
        <div className="max-w-4xl mx-auto mt-6 sm:mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
              💡 Study Recommendations
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3 mt-1">📚</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Review Mnemonics</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Visit the mnemonics page to reinforce key concepts.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3 mt-1">🔄</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Retake Low-Score Quizzes</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Focus on categories where you scored below 60%.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3 mt-1">🎯</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Practice Regularly</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Take quizzes weekly to maintain knowledge retention.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3 mt-1">📖</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Read Explanations</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Always review explanations for incorrect answers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-400 px-4">
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">
              🏠 Back to Categories
            </Link>
            <Link href="/mnemonics" className="text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base">
              📚 View Mnemonics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 