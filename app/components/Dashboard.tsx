'use client';

import { useState, useEffect, useMemo } from 'react';

interface DashboardProps {
  onCrisisMode: () => void;
}

const CircularProgress = ({ percentage, label, color }: { percentage: number; label: string; color: string }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-700"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={`${color} transition-all duration-1000 ease-out`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <span className="text-sm text-gray-300 mt-2">{label}</span>
    </div>
  );
};

export default function Dashboard({ onCrisisMode }: DashboardProps) {
  const [vitals, setVitals] = useState({
    mood: 85,
    stress: 30,
    fatigue: 22
  });

  const [emotion, setEmotion] = useState({
    detected: 'Calm',
    confidence: 92
  });

  const emotions = useMemo(() => ['Calm', 'Focused', 'Slightly Anxious', 'Content', 'Determined', 'Relaxed'], []);
  const confidences = useMemo(() => [88, 92, 85, 94, 89, 91], []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate changing vitals
      setVitals(prev => ({
        mood: Math.max(60, Math.min(95, prev.mood + (Math.random() - 0.5) * 10)),
        stress: Math.max(10, Math.min(50, prev.stress + (Math.random() - 0.5) * 8)),
        fatigue: Math.max(15, Math.min(40, prev.fatigue + (Math.random() - 0.5) * 6))
      }));

      // Simulate changing emotions
      const randomIndex = Math.floor(Math.random() * emotions.length);
      setEmotion({
        detected: emotions[randomIndex],
        confidence: confidences[randomIndex]
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [emotions, confidences]);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Digital Twin Dashboard
        </h1>
        <p className="text-gray-300">Real-time astronaut well-being monitoring</p>
      </div>

      {/* Astronaut Status Card */}
      <div className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 p-6">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">👩‍🚀</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Cmdr. Eva Rostova</h2>
            <p className="text-green-400 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              On Duty
            </p>
            <p className="text-gray-300 text-sm">Mission Day 127 | ISS Expedition 68</p>
          </div>
        </div>
      </div>

      {/* Well-being Vitals */}
      <div className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 p-6">
        <h3 className="text-xl font-bold text-white mb-6">Well-being Vitals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <CircularProgress 
            percentage={Math.round(vitals.mood)} 
            label="Mood" 
            color="text-green-400" 
          />
          <CircularProgress 
            percentage={Math.round(vitals.stress)} 
            label="Stress" 
            color="text-yellow-400" 
          />
          <CircularProgress 
            percentage={Math.round(vitals.fatigue)} 
            label="Fatigue" 
            color="text-blue-400" 
          />
        </div>
      </div>

      {/* Emotion Detection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Live Emotion Detection</h3>
          <div className="relative">
            <div className="w-full h-48 bg-gray-800 rounded-lg border border-gray-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📹</div>
                <p className="text-gray-400">Live Video Feed</p>
                <p className="text-xs text-gray-500 mt-1">Facial & Voice Analysis</p>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
              LIVE
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Emotion Analysis</h3>
          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Detected Emotion</span>
                <span className="text-cyan-400 font-bold">{emotion.detected}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Confidence</span>
                <span className="text-green-400 font-bold">{emotion.confidence}%</span>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Analysis Summary</h4>
              <p className="text-gray-300 text-sm">
                Current emotional state indicates {emotion.detected.toLowerCase()} mood with high confidence. 
                Physiological markers align with expected patterns for current mission phase.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Crisis Mode Button */}
      <div className="flex justify-center">
        <button
          onClick={onCrisisMode}
          className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
        >
          Simulate High Stress Event
        </button>
      </div>
    </div>
  );
}

