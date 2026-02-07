import { Calendar, Clock, MapPin, Users, Award, Coffee, Mic, Laptop, User as LucideUser } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Speaker {
  id: number;
  name: string;
  role: string;
  expertise: string;
  bio: string;
}

const speakers: Speaker[] = [
  { id: 1, name: 'Dr. Rajesh Kumar', role: 'Web Standards Expert', expertise: 'HTML5, CSS3, JavaScript', bio: 'Lead browser engineer from India with 15+ years experience in web standards development at major tech companies.' },
  { id: 2, name: 'Priya Sharma', role: 'Performance Optimization Specialist', expertise: 'Web Performance, Rendering', bio: 'Dedicated to optimizing web performance, has worked on numerous high-traffic Indian applications.' },
  { id: 3, name: 'Arun Patel', role: 'Security Standards Lead', expertise: 'Web Security, HTTPS/TLS', bio: 'Principal security architect from India focusing on making the web safer for developers and users.' },
  { id: 4, name: 'Neha Singh', role: 'DevTools Innovation Lead', expertise: 'Developer Tools, Debugging', bio: 'Passionate about creating better developer tools and improving the debugging experience for Indian developers.' }
];

export function EventDetails() {
  return (
    <section id="event-details" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-white">Event Details</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Join us for an intensive experience featuring expert speaker sessions, hands-on workshops, and networking opportunities with Firefox developers and community leaders from across India.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Event Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { icon: <Calendar className="size-6" />, title: 'Dates', description: 'April 10-11, 2026' },
            { icon: <Clock className="size-6" />, title: 'Hours', description: '9:00 AM - 6:00 PM IST' },
            { icon: <MapPin className="size-6" />, title: 'Venue', description: 'Bangalore Convention Centre, Whitefield, Bangalore, Karnataka 560066' },
            { icon: <Users className="size-6" />, title: 'Attendees', description: '500+ Developers & Web Enthusiasts' },
            { icon: <Mic className="size-6" />, title: 'Speakers', description: '12+ Industry Experts' },
            { icon: <Laptop className="size-6" />, title: 'Workshops', description: '8 Hands-on Technical Sessions' }
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

        {/* Featured Speakers */}
        <div className="mt-16">
          <motion.h3
            className="text-2xl text-center mb-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Speakers
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
            ))}
          </div>
        </div>

        {/* Event Highlights */}
        <div className="mt-16">
          <motion.h3
            className="text-2xl text-center mb-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Workshop Sessions
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced JavaScript Workshop',
                description: 'Deep dive into modern JavaScript features, async patterns, and best practices for building scalable web applications.',
                speaker: 'James Mitchell'
              },
              {
                title: 'Building Fast Web Experiences',
                description: 'Learn techniques for optimizing performance, reducing load times, and creating smooth user interactions.',
                speaker: 'Dr. Sarah Chen'
              },
              {
                title: 'Web Security Masterclass',
                description: 'Comprehensive guide to securing web applications, understanding HTTPS, CSP, and protecting against common vulnerabilities.',
                speaker: 'Emily Rodriguez'
              }
            ].map((item, index) => (
              <HighlightCard
                key={item.title}
                title={item.title}
                description={item.description}
                speaker={item.speaker}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Networking Info */}
        <motion.div
          className="mt-16 relative bg-linear-to-r from-gray-900 via-black to-gray-900 border border-orange-600/50 rounded-lg p-8 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-orange-600/10 to-yellow-500/5"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <div className="flex items-start space-x-4 relative z-10">
            <motion.div
              className="bg-linear-to-br from-orange-500 to-orange-600 p-3 rounded-lg shrink-0"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Coffee className="size-6 text-white shrink-0" />
            </motion.div>
            <div>
              <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-300 mb-2">Networking & Social Events</h4>
              <p className="text-gray-300">
                Multiple networking sessions throughout both days including morning chai meet-ups, lunch roundtable discussions, and an evening mixer. Connect with speakers, fellow developers, and Firefox team members at the Bangalore Convention Centre. Enjoy authentic South Indian refreshments and networking opportunities.
              </p>
            </div>
          </div>
        </motion.div>
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
      className="bg-linear-to-r from-gray-800 via-black to-gray-800 rounded-xl p-8 text-white shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-orange-600/20 to-orange-500/10"
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
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 140, 0, 0.15)' }}
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
      <div className="text-sm text-orange-300">{label}</div>
    </motion.div>
  );
}

function EventInfoCard({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 shadow-lg border border-orange-600/30 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      {/* Border stripe animation */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      <div className="flex items-start space-x-4 relative z-10">
        <motion.div
          className="bg-linear-to-br from-orange-500/20 to-yellow-500/10 text-orange-400 p-3 rounded-lg shrink-0 border border-orange-500/50"
          whileHover={{ rotate: 360, scale: 1.1, backgroundColor: 'rgba(255, 140, 0, 0.3)' }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <div>
          <h4 className="text-lg mb-1 font-semibold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300">{title}</h4>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function HighlightCard({ title, description, speaker, index }: { title: string; description: string; speaker: string; index: number }) {
  return (
    <motion.div
      className="relative border border-orange-600/40 rounded-lg p-6 hover:border-orange-500 transition-all bg-linear-to-br from-gray-900 to-black shadow-md overflow-hidden group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, y: -8 }}
    >
      {/* Hover gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
      />
      
      <h4 className="text-xl mb-3 text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-yellow-200 font-semibold relative z-10">{title}</h4>
      <p className="text-gray-400 mb-3 relative z-10 group-hover:text-gray-300 transition-colors">{description}</p>
      <div className="pt-3 border-t border-orange-600/30 relative z-10">
        <motion.p
          className="text-sm text-orange-300 font-medium flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          <LucideUser className="size-4 text-orange-300" />
          Led by: {speaker}
        </motion.p>
      </div>
    </motion.div>
  );
}

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 shadow-lg border border-orange-600/30 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, borderColor: '#ff8c00' }}
    >
      {/* Hover gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
      />
      
      <div className="flex items-start space-x-4 relative z-10">
        <motion.div
          className="w-16 h-16 rounded-full bg-linear-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-semibold text-lg shrink-0 shadow-lg border-2 border-orange-400/50"
          whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(255, 140, 0, 0.6)' }}
          transition={{ duration: 0.3 }}
        >
          {speaker.name.split(' ').map(n => n[0]).join('')}
        </motion.div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">{speaker.name}</h4>
          <p className="text-orange-400 font-medium text-sm">{speaker.role}</p>
          <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors">{speaker.expertise}</p>
          <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors">{speaker.bio}</p>
        </div>
      </div>
    </motion.div>
  );
}
