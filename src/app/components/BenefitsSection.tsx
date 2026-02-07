import { Zap, Users, Award, Lightbulb, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Zap,
    title: 'Learn Cutting-Edge Tech',
    description: 'Master the latest web technologies, frameworks, and best practices directly from Firefox experts.'
  },
  {
    icon: Users,
    title: 'Network with Peers',
    description: 'Connect with 500+ developers, share experiences, and build lasting professional relationships.'
  },
  {
    icon: Award,
    title: 'Earn Recognition',
    description: 'Get a certificate of participation and showcase your professional development on LinkedIn.'
  },
  {
    icon: Lightbulb,
    title: 'Future Opportunities',
    description: 'Discover job opportunities and collaborate with leading tech companies in India.'
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute inset-0 bg-linear-to-l from-orange-600/10 to-transparent"
        animate={{
          x: ['100%', '-100%'],
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
            Why Attend?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Unlock your potential with exclusive learning experiences and networking opportunities
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Card */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-gray-900 to-black rounded-xl border border-orange-600/30 group-hover:border-orange-500/60 transition-colors"
                />

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-orange-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                />

                {/* Content */}
                <div className="relative p-8 z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <motion.div
                      className="inline-flex p-4 bg-linear-to-br from-orange-500/20 to-yellow-500/10 rounded-lg border border-orange-500/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="size-8 text-orange-400" />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-600/10 border border-orange-500/30 rounded-none mb-6 pixel-glow">
            <Clock className="size-6 text-orange-300" />
            <span className="text-orange-300 font-semibold">Limited seats available - Register today!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
