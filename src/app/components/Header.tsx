import { Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header 
      className="bg-linear-to-r from-black via-gray-900 to-black shadow-2xl sticky top-0 z-50 backdrop-blur-xl bg-opacity-95 border-b border-orange-600/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-orange-600/10 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="bg-linear-to-br from-orange-500 to-yellow-500 p-2 rounded-lg shadow-lg border border-orange-400/50"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(255, 140, 0, 0.3)",
                  "0 0 35px rgba(255, 140, 0, 0.5)",
                  "0 0 20px rgba(255, 140, 0, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
            >
              <Calendar className="size-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold bg-linear-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent group-hover:from-orange-200 group-hover:to-yellow-200 transition-all">Mozilla Firefox</h1>
              <p className="text-xs text-orange-400 group-hover:text-orange-300 transition-colors">Developer Events</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {['event-details', 'registration', 'contact'].map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-orange-300 transition-colors relative px-4 py-2 rounded-lg group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-orange-600/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="relative z-10">{section === 'event-details' ? 'Event Details' : section === 'registration' ? 'Register' : 'Contact'}</span>
                <motion.div
                  className="absolute -bottom-1 left-4 right-4 h-0.5 bg-linear-to-r from-orange-400 to-yellow-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-orange-400 p-2 rounded-lg hover:bg-orange-600/10 transition-all"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden pb-4 space-y-2 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {['event-details', 'registration', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 px-4 text-gray-300 hover:text-orange-300 hover:bg-orange-600/10 rounded-lg hover:pl-6 transition-all"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {section === 'event-details' ? 'Event Details' : section === 'registration' ? 'Register' : 'Contact'}
                </motion.button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
