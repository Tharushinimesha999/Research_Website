// VideoSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Smartphone, Eye, Download } from "lucide-react";
import Link from "next/link";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-green-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Play className="w-4 h-4" />
            App Demo Video
          </div>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6" 
            style={{ color: 'var(--color-foreground)' }}
          >
            See SMARTMUSA in Action
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Experience our AI-powered mobile application through this comprehensive demo showcasing 
            all four core features: ripeness prediction, disease detection, market insights, and weather-based recommendations.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <Smartphone className="w-5 h-5" />, text: "Mobile First Design" },
              { icon: <Eye className="w-5 h-5" />, text: "User-Friendly Interface" },
              { icon: <Download className="w-5 h-5" />, text: "Offline Capable" },
              { icon: <Play className="w-5 h-5" />, text: "Real-time Processing" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex flex-col items-center p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20"
              >
                <div 
                  className="p-2 rounded-full mb-2" 
                  style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                >
                  {feature.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video wrapper with modern styling */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl  p-1">
            <div className="relative rounded-xl overflow-hidden ">
              {/* YouTube Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                 src="https://www.youtube.com/embed/u1h0uonV-PI" 
                 title="SMARTMUSA – AI App for Banana Farmers" 
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Overlay gradient for better visual integration */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-black/10 rounded-xl"></div>
            </div>
          </div>

          {/* Decorative elements around video */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-3 -left-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </motion.div>

        {/* Video Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
            <h3 
              className="text-2xl font-bold mb-6 text-center" 
              style={{ color: 'var(--color-foreground)' }}
            >
              What You&apos;ll See in This Demo
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                      Disease Detection
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Real-time identification of betel leaf diseases using our CNN-based model with treatment recommendations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                      Ripeness Prediction
                    </h4>
                    <p className="text-gray-600 text-sm">
                      ML-powered system to Classify banana images into ripeness stages
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                      Market Predictions
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Data-driven price forecasting to help farmers maximize their profits through strategic selling
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                      Weather Recommendations
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Location-specific farming advice based on real-time weather data and forecasts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://youtu.be/u1h0uonV-PI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white shadow-lg transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Play className="w-4 h-4" />
              Watch on YouTube
            </a>
            <Link
              href="/#documents"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border transition-all hover:bg-gray-50"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              <Download className="w-4 h-4" />
              Download Documentations
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}