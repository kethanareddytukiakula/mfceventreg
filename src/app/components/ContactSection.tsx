import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is included in the registration fee?',
    answer: 'Your registration includes full access to all speaker sessions, technical workshops, networking events, lunch and refreshments for both days (including vegetarian and vegan options), event materials and Firefox swag bag, access to the mobile event app, and a certificate of attendance. Premium ticket holders also get exclusive access to VIP speaker meet-and-greets and reserved seating in all sessions.'
  },
  {
    question: 'Can I get a refund if I can\'t attend?',
    answer: 'Yes, we offer a full refund if you cancel more than 30 days before the event. Cancellations made 15-30 days before receive a 50% refund. Unfortunately, we cannot provide refunds for cancellations made less than 15 days before the event, but you may transfer your ticket to another person at no additional cost.'
  },
  {
    question: 'Are there group discounts available?',
    answer: 'Absolutely! We offer 10% off for groups of 3-5 people, 15% off for groups of 6-10 people, and 20% off for groups of 11 or more. Contact us at events@mozilla-firefox-india.dev with your group details to receive a custom discount code. All group members must register using the same code to qualify.'
  },
  {
    question: 'Which workshops will be offered at the Bangalore event?',
    answer: 'We offer 8 hands-on technical workshops in English including Advanced JavaScript, Building Fast Web Experiences, Web Security Masterclass, Web Performance Optimization, Modern CSS Techniques, Web Standards & Browser APIs, Developer Tools Mastery, and Accessibility Best Practices. Each workshop is limited to 30 participants for optimal interaction with instructors.'
  }
];

export function ContactSection() {
  const [message, setMessage] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    setMessage('');
    setInquiryType('');
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section id="contact" className="py-16 bg-linear-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-orange-600/5 to-transparent opacity-30 pointer-events-none"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-yellow-300">Contact Us</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Have questions about the Mozilla Firefox Developer Summit in Bangalore? We're here to help. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-yellow-300 font-semibold">Get in Touch</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-orange-600/30 hover:border-orange-500/60 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/10 text-orange-400 p-3 rounded-lg flex-shrink-0 border border-orange-500/30">
                  <Mail className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-white">Email</h4>
                  <p className="text-gray-400">events@mozilla-firefox-india.dev</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-orange-600/30 hover:border-orange-500/60 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/10 text-orange-400 p-3 rounded-lg flex-shrink-0 border border-orange-500/30">
                  <Phone className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-white">Phone</h4>
                  <p className="text-gray-400">+91 80 1234 5678</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 10 AM - 6 PM IST</p>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-orange-600/30 hover:border-orange-500/60 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/10 text-orange-400 p-3 rounded-lg flex-shrink-0 border border-orange-500/30">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-white">Office Location</h4>
                  <p className="text-gray-400">Bangalore Convention Centre</p>
                  <p className="text-gray-400">Whitefield, Bangalore, Karnataka 560066</p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-orange-600/30 hover:border-orange-500/60 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/10 text-orange-400 p-3 rounded-lg flex-shrink-0 border border-orange-500/30">
                  <Clock className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-white">Support Hours</h4>
                  <p className="text-gray-400">Monday - Friday: 10 AM - 6 PM IST</p>
                  <p className="text-gray-400">Saturday: 10 AM - 2 PM IST</p>
                  <p className="text-gray-400">Sunday: Closed</p>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div 
              className="mt-8 rounded-lg overflow-hidden shadow-lg relative h-64"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1590393820812-8a2ed3ece96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzA0Njg5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mozilla San Francisco Office Location Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-5" />
                    <p className="font-medium">Bangalore Convention Centre</p>
                  </div>
                  <p className="text-sm text-gray-200">Whitefield, Bangalore, Karnataka</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Inquiry Form and FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-yellow-300 font-semibold">Quick Inquiry</h3>
            
            <motion.form 
              onSubmit={handleQuickInquiry} 
              className="bg-linear-to-br from-gray-900 to-black rounded-xl p-6 shadow-lg border border-orange-600/30"
              whileHover={{ borderColor: '#ff8c00' }}
            >
              <div className="mb-4">
                <label htmlFor="inquiryType" className="block text-sm mb-2 text-orange-300 font-medium">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3 py-3 bg-gray-800 border border-orange-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="" className="bg-gray-800 text-white">Select a topic</option>
                  <option value="registration" className="bg-gray-800 text-white">Registration Question</option>
                  <option value="event" className="bg-gray-800 text-white">Event Details</option>
                  <option value="sponsorship" className="bg-gray-800 text-white">Sponsorship Opportunities</option>
                  <option value="speaking" className="bg-gray-800 text-white">Speaking Opportunities</option>
                  <option value="other" className="bg-gray-800 text-white">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm mb-2 text-orange-300 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-3 bg-gray-800 border border-orange-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none placeholder-gray-500"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-lg hover:from-yellow-300 hover:to-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="size-5" />
                Send Message
              </motion.button>
            </motion.form>

            {/* FAQ Accordion */}
            <div className="mt-8">
              <h4 className="text-lg mb-4 text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-yellow-300 font-semibold">Frequently Asked Questions</h4>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border border-orange-600/30 rounded-lg overflow-hidden hover:border-orange-500/60 transition-colors"
                    initial={false}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left px-4 py-4 bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 transition-colors flex items-center justify-between"
                    >
                      <span className="pr-4 text-gray-300 group-hover:text-white transition-colors">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="size-5 text-orange-400 flex-shrink-0" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {expandedFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-4 py-4 bg-black/50 text-gray-300 border-t border-orange-600/20">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
