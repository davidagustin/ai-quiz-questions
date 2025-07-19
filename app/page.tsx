'use client';

import { useState } from 'react';
import Link from 'next/link';
import { quizData } from './data/quizData';

export default function Home() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            🧠 MLI Learning Quiz
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Master complex concepts through interactive quizzes and powerful memory aids. 
            Choose a category below to start your learning journey!
          </p>
        </div>

        {/* Quiz Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {Object.entries(quizData).map(([key, category]) => (
            <Link key={key} href={`/quiz/${key}`}>
              <div
                className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:rotate-1 active:scale-95`}
                onMouseEnter={() => setHoveredCategory(key)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[key as keyof typeof categoryColors]} rounded-xl sm:rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Card Content */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl">
                  {/* Icon */}
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">
                    {categoryIcons[key as keyof typeof categoryIcons]}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 text-center">
                    {category.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-200 text-center mb-3 sm:mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex justify-between items-center text-xs sm:text-sm text-gray-300">
                    <span>{category.questions.length} Questions</span>
                    <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full">
                      {Object.keys(category.mnemonics).length} Mnemonics
                    </span>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[key as keyof typeof categoryColors]} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Arrow */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-400 px-4">
          <p className="text-base sm:text-lg">
            🎓 Master your MLI precourse knowledge with interactive quizzes and powerful mnemonics
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-6">
            <Link href="/mnemonics" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">
              📚 View All Mnemonics
            </Link>
            <Link href="/progress" className="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base">
              📊 Track Progress
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
