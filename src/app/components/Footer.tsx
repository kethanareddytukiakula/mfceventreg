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
    <footer className="bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-lg mb-4">About Tech Club</h3>
            <p className="text-sm text-gray-400 mb-4">
              Join us for innovative tech events, workshops, and networking opportunities. 
              Building the future, one event at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  className="hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
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
            <h3 className="text-white text-lg mb-4">Quick Links</h3>
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
                    className="hover:text-purple-400 transition-colors inline-block"
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
            <h3 className="text-white text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <motion.li 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <MapPin className="size-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>123 Tech Street, Innovation City, TC 12345</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Phone className="size-5 text-purple-400 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Mail className="size-5 text-purple-400 flex-shrink-0" />
                <span>events@techclub.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} Tech Club. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
