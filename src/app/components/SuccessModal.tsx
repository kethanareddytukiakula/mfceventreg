import { CheckCircle, X, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-100 to-purple-100 opacity-50"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            />

            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="size-6" />
            </motion.button>

            {/* Success Icon with Animation */}
            <div className="flex justify-center mb-6 relative z-10">
              <motion.div
                className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-4 relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="size-16 text-white" />
                {/* Sparkles around the icon */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: Math.cos((i * Math.PI * 2) / 6) * 40,
                      y: Math.sin((i * Math.PI * 2) / 6) * 40,
                    }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  >
                    <Sparkles className="size-4 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Content */}
            <motion.div
              className="text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl mb-3 text-gray-900">Registration Successful!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for registering for the Annual Tech Summit 2026. 
                A confirmation email has been sent to your email address with all the event details.
              </p>

              {/* Additional Info */}
              <motion.div
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4 mb-6 text-left border border-purple-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h4 className="text-sm text-purple-900 mb-2 flex items-center gap-2">
                  <Sparkles className="size-4" />
                  What's Next?
                </h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  {[
                    'Check your email for the confirmation',
                    'Add the event to your calendar',
                    'Prepare any questions for the speakers',
                    'Share the event with colleagues'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      • {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-3 rounded-lg hover:from-purple-800 hover:to-indigo-800 transition-all shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
