'use client';

import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'maitri';
  timestamp: Date;
}

const preWrittenPrompts = [
  "I'm feeling stressed.",
  "Suggest a quick activity.",
  "Give me a mission update.",
  "I need motivation.",
  "How's my sleep quality?",
  "Tell me a space fact."
];

const maitriResponses: { [key: string]: string } = {
  "I'm feeling stressed.": "I understand. Let's try a quick 1-minute breathing exercise. Inhale for 4 seconds, hold for 4, and exhale for 6. Shall we begin? 🌌",
  "Suggest a quick activity.": "How about some space meditation? Focus on Earth's rotation - imagine you're watching continents pass beneath you. It's incredibly calming. 🛰️",
  "Give me a mission update.": "Mission status: Excellent! You're 127 days in with 83 days remaining. All systems nominal, crew morale high, and your psychological markers are optimal. Keep it up! 🚀",
  "I need motivation.": "Remember why you're here - you're pushing humanity's boundaries! Every day in space is a step toward Mars. You're not just an astronaut; you're a pioneer! ⭐",
  "How's my sleep quality?": "Your sleep patterns show 7.2 hours average with 85% REM sleep efficiency. That's excellent for space conditions! Your circadian rhythm is well-maintained. 😴",
  "Tell me a space fact.": "Did you know that astronauts grow up to 2 inches taller in space due to spinal decompression? You're literally reaching for the stars! 🌟"
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello Eva! I'm MAITRI, your AI companion. I'm here to support your mental well-being during your mission. How are you feeling today?",
      sender: 'maitri',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (prompt: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text: prompt,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const maitriMessage: Message = {
        id: Date.now() + 1,
        text: maitriResponses[prompt] || "I'm here to help. Could you tell me more about what's on your mind?",
        sender: 'maitri',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, maitriMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
          AI Companion - MAITRI
        </h1>
        <p className="text-gray-300">Your personal AI assistant for mental well-being</p>
      </div>

      <div className="bg-black/30 backdrop-blur-md rounded-xl border border-purple-500/20 overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">MAITRI</h3>
              <p className="text-cyan-200 text-sm">AI Mental Health Assistant</p>
            </div>
            <div className="ml-auto">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-100'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Prompts */}
        <div className="p-4 bg-gray-800/50 border-t border-gray-700">
          <p className="text-gray-300 text-sm mb-3">Quick prompts:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {preWrittenPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => sendMessage(prompt)}
                className="bg-purple-600/20 hover:bg-purple-600/40 text-white px-3 py-2 rounded-md text-sm transition-colors border border-purple-500/30 hover:border-purple-400/50"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 bg-black/20 backdrop-blur-md rounded-xl border border-purple-500/20 p-6">
        <h3 className="text-lg font-semibold text-white mb-3">About MAITRI</h3>
        <p className="text-gray-300 text-sm">
          MAITRI uses advanced AI to provide personalized mental health support, CBT techniques, 
          and emotional guidance tailored for space missions. All conversations are confidential 
          and designed to enhance your psychological resilience.
        </p>
      </div>
    </div>
  );
}

