'use client';

import { useEffect, useState } from 'react';

interface CrisisModeProps {
  onDismiss: () => void;
}

export default function CrisisMode({ onDismiss }: CrisisModeProps) {
  const [alertStage, setAlertStage] = useState(0);

  useEffect(() => {
    const stages = [
      { delay: 0, message: "High stress detected!" },
      { delay: 2000, message: "Initiating relaxation protocol..." },
      { delay: 4000, message: "Ambient lighting and calming sounds activated." },
      { delay: 6000, message: "Alerting Ground Control with non-critical wellness data." }
    ];

    stages.forEach((stage) => {
      setTimeout(() => {
        setAlertStage(stage.delay / 2000 + 1);
      }, stage.delay);
    });
  }, []);

  const alerts = [
    "High stress detected!",
    "Initiating relaxation protocol...",
    "Ambient lighting and calming sounds activated.",
    "Alerting Ground Control with non-critical wellness data."
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Red Glowing Border Effect */}
      <div className="absolute inset-0 border-4 border-red-500 animate-pulse shadow-2xl shadow-red-500/50"></div>
      
      <div className="bg-gray-900 border-2 border-red-500 rounded-xl max-w-2xl w-full p-8 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 animate-pulse"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <span className="text-2xl">⚠️</span>
            </div>
            <h2 className="text-3xl font-bold text-red-400 mb-2">Crisis Response Mode</h2>
            <p className="text-gray-300">Emergency wellness protocol activated</p>
          </div>

          {/* Alert Messages */}
          <div className="space-y-4 mb-8">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all duration-500 ${
                  index < alertStage
                    ? 'bg-red-500/20 border-red-500 text-red-300'
                    : 'bg-gray-800/50 border-gray-600 text-gray-400'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    index < alertStage ? 'bg-red-400 animate-pulse' : 'bg-gray-600'
                  }`}></div>
                  <span className="font-medium">{alert}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Wellness Metrics During Crisis */}
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Current Wellness Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">HIGH</div>
                <div className="text-sm text-gray-300">Stress Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">ELEVATED</div>
                <div className="text-sm text-gray-300">Heart Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">ACTIVE</div>
                <div className="text-sm text-gray-300">Cortisol</div>
              </div>
            </div>
          </div>

          {/* Relaxation Techniques */}
          <div className="bg-blue-600/20 border border-blue-500 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">Immediate Relaxation Techniques</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">🌬️</span>
                <span className="text-white">Deep breathing exercise initiated</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">🎵</span>
                <span className="text-white">Calming ambient sounds playing</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">💡</span>
                <span className="text-white">Ambient lighting adjusted to soothing levels</span>
              </div>
            </div>
          </div>

          {/* Ground Control Alert */}
          <div className="bg-green-600/20 border border-green-500 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-green-300 mb-3">Ground Control Notification</h3>
            <div className="space-y-2">
              <p className="text-white text-sm">
                <span className="font-semibold">Status:</span> Non-critical wellness alert transmitted
              </p>
              <p className="text-white text-sm">
                <span className="font-semibold">Priority:</span> Medium - No immediate intervention required
              </p>
              <p className="text-white text-sm">
                <span className="font-semibold">Response:</span> Monitoring protocols activated
              </p>
            </div>
          </div>

          {/* Dismiss Button */}
          <div className="text-center">
            <button
              onClick={onDismiss}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Dismiss Crisis Mode
            </button>
            <p className="text-gray-400 text-xs mt-2">
              Only dismiss when stress levels have normalized
            </p>
          </div>
        </div>

        {/* Pulsing Effect */}
        <div className="absolute inset-0 bg-red-500/5 animate-ping"></div>
      </div>
    </div>
  );
}

