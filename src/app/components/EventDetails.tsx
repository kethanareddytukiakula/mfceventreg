import { Calendar, Clock, MapPin, Users, Award, Coffee } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function EventDetails() {
  return (
    <section id="event-details" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-4">Event Details</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get ready for an immersive experience featuring keynote speakers, workshops, and networking sessions
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Event Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { icon: <Calendar className="size-6" />, title: 'Date', description: 'March 15-16, 2026' },
            { icon: <Clock className="size-6" />, title: 'Time', description: '9:00 AM - 6:00 PM' },
            { icon: <MapPin className="size-6" />, title: 'Venue', description: 'Tech Convention Center' },
            { icon: <Users className="size-6" />, title: 'Attendees', description: '500+ Tech Enthusiasts' },
            { icon: <Award className="size-6" />, title: 'Speakers', description: '20+ Industry Leaders' },
            { icon: <Coffee className="size-6" />, title: 'Networking', description: 'Multiple Sessions' }
          ].map((item, index) => (
            <EventInfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>

        {/* Event Highlights */}
        <div className="mt-16">
          <motion.h3
            className="text-2xl text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Event Highlights
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Keynote Speeches',
                description: 'Hear from industry pioneers about the future of technology and innovation'
              },
              {
                title: 'Technical Workshops',
                description: 'Hands-on sessions covering AI, Web3, Cloud Computing, and more'
              },
              {
                title: 'Networking Events',
                description: 'Connect with like-minded professionals and build lasting relationships'
              }
            ].map((item, index) => (
              <HighlightCard
                key={item.title}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountdownTimer() {
  const eventDate = new Date('2026-03-15T09:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <motion.div
      className="bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-800 rounded-xl p-8 text-white shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <h3 className="text-center text-2xl mb-6 relative z-10">Event Starts In</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto relative z-10">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </motion.div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.div
        className="text-3xl md:text-4xl mb-1"
        key={value}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
      <div className="text-sm text-purple-200">{label}</div>
    </motion.div>
  );
}

function EventInfoCard({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, borderColor: '#9333ea' }}
    >
      <div className="flex items-start space-x-4">
        <motion.div
          className="bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-700 p-3 rounded-lg flex-shrink-0"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <div>
          <h4 className="text-lg mb-1">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function HighlightCard({ title, description, index }: { title: string; description: string; index: number }) {
  return (
    <motion.div
      className="border-2 border-purple-200 rounded-lg p-6 hover:border-purple-600 transition-all bg-white shadow-md hover:shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <h4 className="text-xl mb-3 text-purple-900">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
