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
    answer: 'Your registration includes full access to all keynote sessions, technical workshops, networking events, lunch and refreshments for both days, event materials and swag bag, access to the mobile event app, and a certificate of attendance. Premium ticket holders also get exclusive access to VIP networking sessions and reserved seating.'
  },
  {
    question: 'Can I get a refund if I can\'t attend?',
    answer: 'Yes, we offer a full refund if you cancel more than 30 days before the event. Cancellations made 15-30 days before receive a 50% refund. Unfortunately, we cannot provide refunds for cancellations made less than 15 days before the event, but you may transfer your ticket to another person at no additional cost.'
  },
  {
    question: 'Are there group discounts available?',
    answer: 'Absolutely! We offer 10% off for groups of 3-5 people, 15% off for groups of 6-10 people, and 20% off for groups of 11 or more. Contact us at events@techclub.com with your group details to receive a custom discount code. All group members must register using the same code to qualify.'
  },
  {
    question: 'What COVID-19 precautions are in place?',
    answer: 'Your health and safety is our priority. We maintain enhanced cleaning protocols, provide hand sanitizing stations throughout the venue, ensure proper ventilation in all spaces, and offer masks upon request. We also have a hybrid attendance option available for those who prefer to attend virtually. Please check our website for the latest health and safety guidelines.'
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
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions about the event? We're here to help. Reach out to us through any of the channels below.
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
            <h3 className="text-2xl mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-purple-100 text-purple-700 p-3 rounded-lg flex-shrink-0">
                  <Mail className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Email</h4>
                  <p className="text-gray-600">events@techclub.com</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-purple-100 text-purple-700 p-3 rounded-lg flex-shrink-0">
                  <Phone className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9 AM - 6 PM EST</p>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-purple-100 text-purple-700 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Office Location</h4>
                  <p className="text-gray-600">123 Tech Street</p>
                  <p className="text-gray-600">Innovation City, TC 12345</p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-purple-100 text-purple-700 p-3 rounded-lg flex-shrink-0">
                  <Clock className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Support Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
                  <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
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
                alt="Tech Convention Center Location Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-5" />
                    <p className="font-medium">Tech Convention Center</p>
                  </div>
                  <p className="text-sm text-gray-200">123 Tech Street, Innovation City</p>
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
            <h3 className="text-2xl mb-6">Quick Inquiry</h3>
            
            <motion.form 
              onSubmit={handleQuickInquiry} 
              className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 shadow-lg"
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="mb-4">
                <label htmlFor="inquiryType" className="block text-sm mb-2 text-gray-700">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="registration">Registration Question</option>
                  <option value="event">Event Details</option>
                  <option value="sponsorship">Sponsorship Opportunities</option>
                  <option value="speaking">Speaking Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-3 rounded-lg hover:from-purple-800 hover:to-indigo-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="size-5" />
                Send Message
              </motion.button>
            </motion.form>

            {/* FAQ Accordion */}
            <div className="mt-8">
              <h4 className="text-lg mb-4">Frequently Asked Questions</h4>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                    initial={false}
                    whileHover={{ borderColor: '#9333ea' }}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left px-4 py-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="size-5 text-purple-600 flex-shrink-0" />
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
                          <div className="px-4 py-4 bg-purple-50 text-gray-700 border-t border-gray-200">
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
