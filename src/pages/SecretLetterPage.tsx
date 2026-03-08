import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEffects } from '../utils/soundEffects';

interface SecretLetterPageProps {
  onBackToStart?: () => void;
}

const SecretLetterPage: React.FC<SecretLetterPageProps> = ({ onBackToStart }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const fullText = `February 14, 2026
  
Happy Valentine's Day, my love. Thank you for being here and adding color to my Valentine's Day. I truly love you unconditionally. You're the one who always makes me fall in love over and over again. I hope we'll always be happy together. I once thought we might never be together, but I always try to be with you. I always want to be seen by you. I always want you to love me forever. Please, don't leave me, okay? I'm still learning a lot about understanding you, so please help me too, okay? Thank you for giving me the opportunity to be by your side.`;

  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowFinalMessage(true);
        }, 2000);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-center space-y-4 sm:space-y-6 max-w-md mx-auto px-4">
      {/* Letter box with glow effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div
          className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/90 to-blue-50/90 rounded-2xl sm:rounded-3xl border-2 border-blue-200 backdrop-blur-lg shadow-2xl relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-2 left-2">
            <div className="w-4 h-4 bg-blue-300 rounded-full" />
          </div>
          <div className="absolute top-2 right-2">
            <div className="w-3 h-3 bg-blue-300 rounded-sm rotate-45" />
          </div>
          <div className="absolute bottom-2 left-2">
            <div className="w-4 h-4 border-2 border-blue-300 rounded-full" />
          </div>
          <div className="absolute bottom-2 right-2">
            <div className="w-3 h-3 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-lg" />
          </div>

          {/* Letter content */}
          <div className="text-left space-y-4">
            <div className="text-sm sm:text-base text-blue-800 leading-relaxed whitespace-pre-wrap font-medium">
              {displayedText}
              {displayedText.length < fullText.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-blue-400 ml-1"
                />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showFinalMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl sm:text-2xl font-bold text-blue-800 px-4"
            ></motion.div>

            {/* Final decorative hearts */}
            <motion.div
              className="flex justify-center space-x-2 text-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="flex gap-2 justify-center">
              </div>
            </motion.div>

            {onBackToStart && (
              <button
                onClick={onBackToStart}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                Back to Start
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecretLetterPage;

