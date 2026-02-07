import { Play, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { createPixelConfetti } from '../utils/confetti';

interface IntroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IntroModal({ isOpen, onClose }: IntroModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4 overflow-hidden">
          {/* Backdrop with blur */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute -top-10 -right-10 text-gray-400 hover:text-yellow-400 transition-colors z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="size-6" />
            </motion.button>

            {/* Main Content */}
            <motion.div
              className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-yellow-600/30 overflow-hidden relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* Animated Background Elements */}
              <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.div
                className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-yellow-500/5 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />

              <div className="relative z-10">
                {/* Sparkle Icon */}
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                      <Sparkles className="size-10 text-white" />
                    </div>
                    {/* Orbiting particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                        }}
                        animate={{
                          x: Math.cos((i * Math.PI * 2) / 3) * 50,
                          y: Math.sin((i * Math.PI * 2) / 3) * 50,
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Welcome to the{' '}
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Mozilla Firefox
                  </span>
                  <br/>
                  Developer Summit
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  className="text-lg text-gray-300 text-center mb-8 max-w-lg mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Join us in Bangalore for an extraordinary experience with industry experts, hands-on workshops, and amazing networking opportunities
                </motion.p>

                {/* Event Details Grid */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {[
                    { label: 'Location', value: 'Bangalore' },
                    { label: 'Dates', value: 'Apr 10-11' },
                    { label: 'Speakers', value: '12+' },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      className="bg-black/50 backdrop-blur-sm border border-yellow-600/30 rounded-lg p-4 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                    >
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-yellow-400 font-semibold text-lg">{item.value}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <motion.button
                    onClick={onClose}
                    className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(250, 204, 21, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="size-5" />
                    Explore Event
                  </motion.button>
                  <motion.button
                    onClick={(evt: any) => { createPixelConfetti(evt); onClose(); }}
                    className="px-8 py-3 border-2 border-[var(--accent)] text-[var(--accent)] font-semibold rounded-none pixel-glow transition-all bg-transparent hover:bg-[var(--accent)] hover:text-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now
                  </motion.button>
                </motion.div>

                {/* Bottom text */}
                <motion.p
                  className="text-center text-gray-500 text-sm mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Click anywhere or close button to continue
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
