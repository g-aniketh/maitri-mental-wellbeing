'use client';

import { useState } from 'react';
import Dashboard from './components/Dashboard';
import ChatInterface from './components/ChatInterface';
import ActivitiesModule from './components/ActivitiesModule';
import MediaHub from './components/MediaHub';
import CrisisMode from './components/CrisisMode';

export default function Home() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [crisisMode, setCrisisMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                MindOrbit
              </div>
              <div className="text-sm text-gray-300">
                Team LAIKA | AI for Astronaut Health & Harmony
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'dashboard' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentView('chat')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'chat' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                }`}
              >
                AI Companion
              </button>
              <button
                onClick={() => setCurrentView('activities')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'activities' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                }`}
              >
                Activities
              </button>
              <button
                onClick={() => setCurrentView('media')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'media' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                }`}
              >
                Media Hub
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {crisisMode && (
          <CrisisMode onDismiss={() => setCrisisMode(false)} />
        )}
        
        {currentView === 'dashboard' && (
          <Dashboard onCrisisMode={() => setCrisisMode(true)} />
        )}
        
        {currentView === 'chat' && <ChatInterface />}
        
        {currentView === 'activities' && <ActivitiesModule />}
        
        {currentView === 'media' && <MediaHub />}
      </main>
    </div>
  );
}
