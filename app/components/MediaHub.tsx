'use client';

import { useState } from 'react';

export default function MediaHub() {
  const [loadingItem, setLoadingItem] = useState<string | null>(null);

  const mediaItems = [
    {
      id: 'family',
      title: 'Family Messages',
      description: 'Personal messages from loved ones on Earth',
      icon: '👨‍👩‍👧‍👦',
      color: 'from-pink-500 to-rose-500',
      items: ['Message from Mom', 'Video from Dad', 'Photo from Sister', 'Voice Note from Brother']
    },
    {
      id: 'music',
      title: 'Music Library',
      description: 'Curated playlist for relaxation and focus',
      icon: '🎵',
      color: 'from-indigo-500 to-purple-500',
      items: ['Ambient Space Sounds', 'Classical Collection', 'Nature Sounds', 'Focus Beats']
    },
    {
      id: 'movies',
      title: 'Favorite Movies',
      description: 'Pre-downloaded entertainment content',
      icon: '🎬',
      color: 'from-orange-500 to-red-500',
      items: ['Space Documentaries', 'Sci-Fi Classics', 'Comedy Collection', 'Drama Series']
    },
    {
      id: 'books',
      title: 'Digital Library',
      description: 'E-books and audiobooks for leisure reading',
      icon: '📚',
      color: 'from-emerald-500 to-teal-500',
      items: ['Space Exploration', 'Fiction Novels', 'Self-Help', 'Biographies']
    }
  ];

  const handleItemClick = (itemId: string) => {
    setLoadingItem(itemId);
    setTimeout(() => {
      setLoadingItem(null);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Media & Connection Hub
        </h1>
        <p className="text-gray-300">Access your personal content and stay connected</p>
      </div>

      {/* Media Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {mediaItems.map((category) => (
          <div
            key={category.id}
            className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 p-6 hover:border-purple-400/40 transition-all duration-200"
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
              <span className="text-2xl">{category.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-2">{category.title}</h3>
            <p className="text-gray-300 text-center text-sm mb-4">{category.description}</p>
            
            {/* Category Items */}
            <div className="space-y-2">
              {category.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(`${category.id}-${index}`)}
                  disabled={loadingItem === `${category.id}-${index}`}
                  className="w-full text-left p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors text-sm disabled:opacity-50"
                >
                  {loadingItem === `${category.id}-${index}` ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    item
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
            <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center">
              <span className="text-sm">👨‍👩‍👧‍👦</span>
            </div>
            <div className="flex-1">
              <p className="text-white text-sm">New message from family</p>
              <p className="text-gray-400 text-xs">2 hours ago</p>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
            <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
              <span className="text-sm">🎵</span>
            </div>
            <div className="flex-1">
              <p className="text-white text-sm">Playlist &quot;Space Meditation&quot; completed</p>
              <p className="text-gray-400 text-xs">4 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
            <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
              <span className="text-sm">🎬</span>
            </div>
            <div className="flex-1">
              <p className="text-white text-sm">Documentary &quot;Cosmos&quot; bookmarked</p>
              <p className="text-gray-400 text-xs">6 hours ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Storage Usage */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 p-6">
          <h4 className="text-lg font-semibold text-white mb-3">Storage Usage</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Family Content</span>
                <span className="text-pink-400">2.3 GB</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-pink-400 h-2 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Media Library</span>
                <span className="text-indigo-400">5.7 GB</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-indigo-400 h-2 rounded-full" style={{ width: '57%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Available Space</span>
                <span className="text-green-400">2.0 GB</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 p-6">
          <h4 className="text-lg font-semibold text-white mb-3">Connection Status</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Earth Communication</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Connected</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Mission Control</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Active</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Crew Network</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-400 text-sm">Limited</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 p-6">
          <h4 className="text-lg font-semibold text-white mb-3">Next Sync</h4>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">3h 42m</div>
            <p className="text-gray-300 text-sm">Until next Earth contact window</p>
            <div className="mt-4 bg-cyan-600/20 border border-cyan-500 rounded-lg p-3">
              <p className="text-cyan-300 text-xs">
                New family messages and media updates will be available during the next sync window.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

