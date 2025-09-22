'use client';

import { useState } from 'react';

interface ActivityModal {
  isOpen: boolean;
  type: 'trivia' | 'puzzle' | 'journal' | null;
}

export default function ActivitiesModule() {
  const [modal, setModal] = useState<ActivityModal>({ isOpen: false, type: null });

  const openModal = (type: 'trivia' | 'puzzle' | 'journal') => {
    setModal({ isOpen: true, type });
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: null });
  };

  const activities = [
    {
      id: 'trivia',
      title: 'Space Trivia',
      description: 'Test your knowledge of space exploration and astronomy',
      icon: '🌌',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'puzzle',
      title: 'Brain-Buster Puzzles',
      description: 'Challenge your mind with logic puzzles and riddles',
      icon: '🧩',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'journal',
      title: 'Gratitude Journal',
      description: 'Reflect on positive moments and express gratitude',
      icon: '📔',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const renderModalContent = () => {
    switch (modal.type) {
      case 'trivia':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Space Trivia Challenge</h3>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Which planet is known as the &quot;Red Planet&quot;?
              </h4>
              <div className="space-y-3">
                {['Venus', 'Mars', 'Jupiter', 'Saturn'].map((option, index) => (
                  <button
                    key={index}
                    className={`w-full p-3 rounded-lg text-left transition-colors ${
                      option === 'Mars'
                        ? 'bg-green-600/20 border border-green-500 text-green-300'
                        : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                    }`}
                  >
                    {String.fromCharCode(65 + index)}. {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-green-600/20 border border-green-500 rounded-lg p-4">
              <p className="text-green-300 text-sm">
                ✅ Correct! Mars appears red due to iron oxide on its surface.
              </p>
            </div>
          </div>
        );

      case 'puzzle':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Logic Puzzle</h3>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Complete the sequence: 2, 6, 12, 20, 30, ?
              </h4>
              <div className="space-y-3">
                <input
                  type="number"
                  placeholder="Enter your answer..."
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                />
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Check Answer
                </button>
              </div>
            </div>
            <div className="bg-blue-600/20 border border-blue-500 rounded-lg p-4">
              <p className="text-blue-300 text-sm">
                💡 Hint: Look at the differences between consecutive numbers!
              </p>
            </div>
          </div>
        );

      case 'journal':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Gratitude Journal</h3>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                What are you grateful for today?
              </h4>
              <textarea
                placeholder="Today I'm grateful for..."
                className="w-full h-32 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none"
              />
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-400 text-sm">Mission Day 127</span>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Save Entry
                </button>
              </div>
            </div>
            <div className="bg-green-600/20 border border-green-500 rounded-lg p-4">
              <p className="text-green-300 text-sm">
                🌟 Research shows that gratitude practice improves mood and resilience in isolated environments!
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Resilience Activities
        </h1>
        <p className="text-gray-300">Engage in activities designed to boost your psychological resilience</p>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 p-6 hover:border-purple-400/40 transition-all duration-200 cursor-pointer transform hover:scale-105"
            onClick={() => openModal(activity.id as 'trivia' | 'puzzle' | 'journal')}
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
              <span className="text-2xl">{activity.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-2">{activity.title}</h3>
            <p className="text-gray-300 text-center text-sm">{activity.description}</p>
            <div className="mt-4 text-center">
              <button className="bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 px-4 py-2 rounded-lg text-sm transition-colors border border-purple-500/30">
                Start Activity
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Section */}
      <div className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 p-6">
        <h3 className="text-xl font-bold text-white mb-4">Activity Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Trivia Completed</span>
              <span className="text-cyan-400 font-bold">12/15</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Puzzles Solved</span>
              <span className="text-purple-400 font-bold">8/10</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-purple-400 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Journal Entries</span>
              <span className="text-green-400 font-bold">45/50</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-xl border border-purple-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div></div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {renderModalContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

