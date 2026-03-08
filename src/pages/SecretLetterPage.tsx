import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEffects } from '../utils/soundEffects';

interface SecretLetterPageProps {
  onBackToStart?: () => void;
}

const SecretLetterPage: React.FC<SecretLetterPageProps> = ({ onBackToStart }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const fullText = `First of all, all i can say is.. i still can’t believe we made it this far. Honestly, i’m super happy i got to meet you, and even be a part of your life. I feel so lucky to have met someone as good as you. Aku bahagia sekali dengan kehadiran kamu disini, aku beruntung bangett punya kamu di sisi aku. 

Thank you for everything you've given and done for me, for us, for our relationship. Maaf ya kalau aku masih banyak kurangnyaa, termakasih kamu udah sabar menghadapi aku yang kadang masih suka rewel atau bikin kamu kesel... aku bakal selalu berusaha yang terbaik untuk kamu, kita, dan hubungan ini.

I don’t know what the future’s gonna look like, but i really hope you’ll still be here with me, through my bad days, my good days, and every moment that’s waiting for me out there. I want you to be part of all the important things in my life.

Thank you for everything, kakak sayang. i loveeee you so much! Happy 8st mensiversary, cheers to more good days and good things for us.`;

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

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >

        <motion.div
          className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-blue-900/10 to-blue-900/5 rounded-2xl sm:rounded-3xl border-2 border-blue-600 backdrop-blur-lg shadow-2xl relative overflow-hidden"
        >

          {/* Decorative corners */}

          <div className="absolute top-2 left-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full" />
          </div>

          <div className="absolute top-2 right-2">
            <div className="w-3 h-3 bg-blue-600 rounded-sm rotate-45" />
          </div>

          <div className="absolute bottom-2 left-2">
            <div className="w-4 h-4 border-2 border-blue-600 rounded-full" />
          </div>

          <div className="absolute bottom-2 right-2">
            <div className="w-3 h-3 bg-gradient-to-br from-blue-700 to-blue-500 rounded-lg" />
          </div>

          {/* Letter text */}

          <div className="text-left space-y-4">
            <div className="text-sm sm:text-base text-blue-900 leading-relaxed whitespace-pre-wrap font-medium">
              {displayedText}

              {displayedText.length < fullText.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-blue-600 ml-1"
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
              className="text-xl sm:text-2xl font-bold text-blue-900 px-4"
            />

            <motion.div
              className="flex justify-center space-x-2 text-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="flex gap-2 justify-center"></div>
            </motion.div>

            {onBackToStart && (
              <button
                onClick={onBackToStart}
                className="px-4 py-2 bg-blue-800 text-white rounded-xl shadow-md hover:bg-blue-900 transition"
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
