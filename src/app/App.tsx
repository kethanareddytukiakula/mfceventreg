import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EventDetails } from './components/EventDetails';
import { RegistrationForm } from './components/RegistrationForm';
import { SuccessModal } from './components/SuccessModal';
import { ContactSection } from './components/ContactSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CustomCursor } from './components/CustomCursor';
import { IntroModal } from './components/IntroModal';
import { Users, Mic, Laptop, Calendar, Sparkles } from 'lucide-react';
import { createPixelConfetti } from './utils/confetti';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(true);

  useEffect(() => {
    // Auto-close intro modal after 8 seconds if user hasn't closed it
    if (isIntroModalOpen) {
      const timer = setTimeout(() => {
        setIsIntroModalOpen(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isIntroModalOpen]);

  const handleRegistrationSuccess = () => {
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black cursor-none">
      <CustomCursor />
      <IntroModal isOpen={isIntroModalOpen} onClose={() => setIsIntroModalOpen(false)} />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-b from-black via-gray-900 to-black text-white py-32 relative overflow-hidden">
          {/* Animated Background Elements */}
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-yellow-500/20 to-orange-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-orange-500/20 to-yellow-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />

          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(250, 204, 21, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 140, 0, 0.2) 0%, transparent 50%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              className="mb-6 inline-block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-2 bg-linear-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-500/30 rounded-none text-yellow-300 text-sm font-semibold inline-flex items-center gap-2">
                <Sparkles className="size-4 text-yellow-300" />
                India's Largest Web Development Summit
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl mb-6 font-bold bg-linear-to-r from-yellow-300 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mozilla Firefox Developer Summit 2026
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join 500+ developers for exclusive workshops, expert sessions, and networking in Bangalore
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={(e: any) => { createPixelConfetti(e); document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] font-bold rounded-none pixel-glow hover:bg-[var(--accent)] hover:text-black transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0,255,156,0.18)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Register Now</span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-orange-400 to-yellow-300 opacity-0 group-hover:opacity-20"
                  initial={false}
                />
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-300 font-bold rounded-lg hover:bg-yellow-400/10 transition-all"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(250, 204, 21, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          {/* Floating particles effect */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-linear-to-b from-yellow-400 to-transparent rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </section>

        {/* Stats Section */}
        <section className="bg-black py-16 relative overflow-hidden border-y border-orange-600/20">
          {/* Background animation */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-orange-600/5 via-transparent to-orange-600/5"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Expected Attendees', icon: <Users className="size-10 text-[var(--accent)] mx-auto" /> },
                { value: '12+', label: 'Expert Speakers', icon: <Mic className="size-10 text-[var(--accent)] mx-auto" /> },
                { value: '8', label: 'Technical Workshops', icon: <Laptop className="size-10 text-[var(--accent)] mx-auto" /> },
                { value: '2', label: 'Days of Learning', icon: <Calendar className="size-10 text-[var(--accent)] mx-auto" /> }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <motion.div
                    className="text-4xl mb-3"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-orange-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-400 mt-2 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <EventDetails />

        {/* Registration Section */}
        <RegistrationForm onSuccess={handleRegistrationSuccess} />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
      
      {/* Success Modal */}
      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={() => setIsSuccessModalOpen(false)} 
      />
    </div>
  );
}
