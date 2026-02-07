import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-gray-300 border-t border-orange-600/20 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-transparent opacity-30"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300 text-lg mb-4 font-semibold">About Mozilla Firefox India</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Join us for innovative web development events, workshops, and networking opportunities in India. 
              Building the future of the web for Indian developers, one event at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-orange-500/10"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  title={label}
                >
                  <Icon className="size-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300 text-lg mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '#event-details', text: 'Event Details' },
                { href: '#registration', text: 'Register Now' },
                { href: '#contact', text: 'Contact Us' },
                { href: '#', text: 'Past Events' }
              ].map((link, index) => (
                <motion.li
                  key={link.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-300 transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.text}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300 text-lg mb-4 font-semibold">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <motion.li 
                className="flex items-start space-x-3 text-gray-400 hover:text-orange-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                <MapPin className="size-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Bangalore Convention Centre, Whitefield, Bangalore, Karnataka 560066</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 text-gray-400 hover:text-orange-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="size-5 text-orange-400 flex-shrink-0" />
                <span>+91 80 1234 5678</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 text-gray-400 hover:text-orange-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="size-5 text-orange-400 flex-shrink-0" />
                <span>events@mozilla-firefox-india.dev</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-orange-600/20 mt-12 pt-8 text-sm text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-500">© {new Date().getFullYear()} Mozilla Firefox Developer Events India. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
