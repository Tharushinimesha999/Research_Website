// src/components/ResearchResultsSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { BookOpen, Code, Lightbulb, Award, ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function ResearchResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    { 
      icon: <BookOpen className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "Research Innovation", 
      value: "First of its Kind", 
      description: "ML-powered betel farming app for Sri Lanka" 
    },
    { 
      icon: <Code className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "Technical Integration", 
      value: "4 Core Systems", 
      description: "Disease detection, harvest prediction, weather & market insights" 
    },
    { 
      icon: <Lightbulb className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "AI Architecture", 
      value: "Multi-Model", 
      description: "CNN, XGBoost, Random Forest ensemble approach" 
    },
    { 
      icon: <Award className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
      title: "Accessibility Focus", 
      value: "Multilingual", 
      description: "Sinhala, Tamil & English WhatsApp integration" 
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-green-50" />
        <svg className="absolute top-0 right-0 h-full w-48" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
          <polygon points="0,0 100,0 100,100" fill="var(--color-primary)" fillOpacity="0.05" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
              Research Achievements
            </h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Innovation in Agricultural Technology
            </h3>
            
            <p className="text-lg text-gray-600 mb-8">
              Our research addresses a critical gap in Sri Lankan agriculture by developing the first comprehensive 
              ML-powered mobile application specifically designed for betel farmers in Kurunegala, Puttalam, and Anamaduwa regions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center mb-3">
                    {achievement.icon}
                    <h4 className="ml-2 font-medium text-gray-900">{achievement.title}</h4>
                  </div>
                  <p className="text-2xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>{achievement.value}</p>
                  <p className="text-gray-600 text-sm mt-1">{achievement.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Key Contributions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 p-6 bg-gray-50 rounded-xl"
            >
              <h4 className="font-semibold mb-4" style={{ color: 'var(--color-primary-dark)' }}>Key Research Contributions</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Bridging traditional farming methods with modern AI technology</li>
                <li>• First conversational AI system for betel farming market insights</li>
                <li>• Comprehensive ensemble approach for agricultural predictions</li>
                <li>• Multilingual accessibility for diverse farming communities</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-8"
            >
              <Link 
                href="/documents" 
                className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
                style={{ color: 'var(--color-primary-dark)' }}
              >
                Explore our complete research methodology
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/banner2.png"
                alt="BetelCare research and development visualization"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAaSQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            
            {/* Floating research highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-gray-100 max-w-xs"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                  <GraduationCap className="w-5 h-5" />
                </div>
                <p className="ml-3 font-medium">Research Innovation</p>
              </div>
              <p className="text-gray-600 text-sm">
                &quot;Developing technology solutions that bridge the gap between traditional farming practices and modern agricultural advancements.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Research Methodology Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 bg-white rounded-2xl   p-8 border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Research Methodology & Innovation</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach combines multiple machine learning techniques with user-centered design 
              to create accessible agricultural technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                <Code className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Technical Development</h4>
              <p className="text-gray-600 text-sm">Flutter mobile app with integrated ML models, backend APIs, and database systems</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Literature & Research</h4>
              <p className="text-gray-600 text-sm">Comprehensive analysis of precision agriculture gaps in betel farming sector</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
                <Lightbulb className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Innovation Focus</h4>
              <p className="text-gray-600 text-sm">Addressing technology adoption barriers through multilingual, accessible interfaces</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}