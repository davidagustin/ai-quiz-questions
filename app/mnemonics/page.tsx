'use client';

import Link from 'next/link';
import { quizData } from '../data/quizData';

export default function MnemonicsPage() {
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
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🧠 Mnemonics Reference
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master complex concepts with these powerful memory aids. Each mnemonic is designed to help you 
            remember key concepts and techniques in machine learning and data science.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Home
          </Link>
        </div>

        {/* Mnemonics by Category */}
        <div className="max-w-6xl mx-auto space-y-8">
          {Object.entries(quizData).map(([key, category]) => (
            <div key={key} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">
                  {categoryIcons[key as keyof typeof categoryIcons]}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>

              {/* Mnemonics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(category.mnemonics).map(([mnemonicKey, mnemonic]) => (
                  <div
                    key={mnemonicKey}
                    className={`bg-gradient-to-br ${categoryColors[key as keyof typeof categoryColors]} p-6 rounded-xl border border-white/20`}
                  >
                    <h3 className="text-xl font-bold text-white mb-3 capitalize">
                      {mnemonicKey.replace('_', ' ')}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {mnemonic}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sample Questions */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Sample Questions</h3>
                <div className="space-y-4">
                  {category.questions.slice(0, 3).map((question, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <p className="text-gray-200 mb-2">{question.question}</p>
                      <div className="text-sm text-gray-400">
                        <span className="text-purple-400">Mnemonic:</span> {question.mnemonic}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practice Button */}
              <div className="mt-8 text-center">
                <Link
                  href={`/quiz/${key}`}
                  className={`inline-block bg-gradient-to-r ${categoryColors[key as keyof typeof categoryColors]} text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform`}
                >
                  🎯 Practice {category.title} Quiz
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Study Tips */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              💡 How to Use Mnemonics Effectively
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">1️⃣</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Create Associations</h3>
                    <p className="text-gray-300">Link mnemonics to real examples and use cases you encounter.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3">2️⃣</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Practice Regularly</h3>
                    <p className="text-gray-300">Review mnemonics daily and apply them while solving problems.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3">3️⃣</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Visualize Concepts</h3>
                    <p className="text-gray-300">Create mental images that connect the mnemonic to the concept.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">4️⃣</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Use in Context</h3>
                    <p className="text-gray-300">Apply mnemonics while taking quizzes and solving real problems.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3">5️⃣</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Create Your Own</h3>
                    <p className="text-gray-300">Develop personal mnemonics that work best for your learning style.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3">6️⃣</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Group Study</h3>
                    <p className="text-gray-300">Share and discuss mnemonics with peers to reinforce learning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-400">
          <p className="text-lg">
            🎓 Ready to test your knowledge? Take a quiz to practice these mnemonics!
          </p>
          <div className="mt-6">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              🏠 Back to Quiz Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 