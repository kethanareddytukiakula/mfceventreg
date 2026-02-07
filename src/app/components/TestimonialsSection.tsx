import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { createPixelConfetti } from '../utils/confetti';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Amit Desai',
    role: 'Frontend Developer',
    company: 'TechCorp India',
    content: 'The Mozilla Firefox Developer Summit was incredible! The speakers were knowledgeable, the workshops were hands-on, and I made valuable connections with fellow developers. Highly recommended!',
    rating: 5,
    avatar: 'AD'
  },
  {
    id: 2,
    name: 'Sneha Gupta',
    role: 'Senior Engineer',
    company: 'StartUp Labs',
    content: 'Outstanding event! The web performance optimization workshop changed how I approach CSS optimization. The networking opportunities were invaluable for my career growth.',
    rating: 5,
    avatar: 'SG'
  },
  {
    id: 3,
    name: 'Rajiv Kumar',
    role: 'Tech Lead',
    company: 'Cloud Solutions',
    content: 'Best technical event I attended this year. The developer tools sessions gave me practical insights I immediately applied to our projects. Will definitely attend next year!',
    rating: 5,
    avatar: 'RK'
  },
  {
    id: 4,
    name: 'Priya Patel',
    role: 'Full Stack Developer',
    company: 'Digital Innovations',
    content: 'The security masterclass was eye-opening! Learned about latest web vulnerabilities and best practices. The event organization and hospitality were perfect.',
    rating: 5,
    avatar: 'PP'
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-linear-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-orange-600/10 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-yellow-300">
            What Attendees Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from developers who attended our previous events and transformed their careers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Card Background */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-gray-900 to-black rounded-xl border border-orange-600/30 group-hover:border-orange-500/60 transition-colors shadow-2xl"
                initial={false}
              />

              {/* Hover Glow */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-orange-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
              />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      <Star className="size-5 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 flex-grow leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-orange-600/20 pt-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-sm shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-orange-400 text-xs">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6">Join hundreds of developers at the next summit</p>
          <motion.button
            onClick={(e: any) => createPixelConfetti(e)}
            className="inline-block px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] font-bold rounded-none pixel-glow hover:bg-[var(--accent)] hover:text-black transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Register Now</span>
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-orange-400 to-yellow-300 opacity-0 group-hover:opacity-20"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
