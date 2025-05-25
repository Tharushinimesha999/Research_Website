// ContactSection.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, we'll just simulate a successful submission
    setFormSubmitted(true);
  };

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
            Get In Touch
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Have questions about our research or interested in collaboration? 
            We&apos;d love to hear from you. Reach out to our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl   p-8 border border-gray-200">
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <MapPin className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600 mt-1">Srilanka Institute Of Information Technology <br />Malabe, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <Mail className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 mt-1">SMARTMUSAapp@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                      <Phone className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600 mt-1">+94 77 258 6523</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h5 className="font-medium text-gray-900 mb-3">Research Areas</h5>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Computer Vision", "Mobile Development", "Agricultural Tech", "Data Science"].map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl  border-gray-200 p-8 border  ">
              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                    <CheckCircle className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-gray-900">Message Sent!</h3>
                  <p className="mt-2 text-gray-600">
                    Thank you for contacting us. We&apos;ll get back to you as soon as possible.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 border"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Send Message
                      <Send className="ml-2 -mr-1 h-5 w-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}