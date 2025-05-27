// src/app/project/harvest-prediction/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart, Check, ExternalLink, Calendar, Map, LineChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HarvestPredictionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-green-50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-medium mb-6 group"
                style={{ color: 'var(--color-primary)' }}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-foreground)' }}>
                Ripeness Prediction System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                A convolutional neural network based on VGG16 architecture is used to accurately classify banana ripeness stages, enabling farmers to identify the optimal harvest time for improved quality and reduced post-harvest losses.


              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with animated overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/harvest-prediction.png"
                alt="Harvest Prediction System"
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  The VGG16-based CNN model achieved over 90% accuracy in classifying three banana ripeness stages Raw, Semi Ripe, and Fully Ripe using a locally collected image dataset, ensuring high reliability for harvest timing decisions.


                </p>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary-dark)' }}>
                  <BarChart className="w-4 h-4 mr-2" />
                  Ensemble Machine Learning
                </div>
                
                <h2 className="text-3xl font-bold mb-6">Advanced Prediction Models</h2>
                
                <div className="space-y-8 mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                      <Map className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">CNN-Based Ripeness Classification</h3>
                      <p className="text-gray-600">
                        A convolutional neural network (VGG16) is trained on banana leaf images collected at different ripeness stages. The system analyzes visual cues such as color and texture to accurately classify bananas into Unrip, Ripe, overripe and rotten categories, helping farmers make data-driven harvest decisions.


                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
                      <BarChart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Smart Harvest Advisory</h3>
                      <p className="text-gray-600">
                        Combines image preprocessing, lighting normalization, and ripeness classification to recommend ideal harvesting time, minimizing post-harvest loss and enhancing quality for Sri Lankan banana varieties.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Farmer Support & Field Feedback</h3>
                      <p className="text-gray-600">
                        Mobile app with Sinhala/English support provides real-time ripeness results and confidence scores. Farmers can compare predictions with actual outcomes to refine decisions. Model learns continuously using feedback and test data stored in Supabase.
                      </p>
                    </div>
                  </motion.div>
                  
                  
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Model Performance</h3>
                  <div className="space-y-3">
                    {[
                      { leafType: "Model accuracy", accuracy: "97.07%" },
                      { leafType: "R² Value", accuracy: "> 0.85" },
                      { leafType: "Mean Absolute Error (MAE)", accuracy: "Minimized" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.leafType}</span>
                        <span className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{stat.accuracy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Additional Details */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 grid-cols-1 gap-8"
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Machine Learning Methodology</h3>
                <p className="text-gray-600 mb-6">
                  The ripeness detection system uses a deep learning pipeline tailored for real-world banana farming. It leverages transfer learning and CNN-based models to deliver highly accurate predictions with classification accuracy exceeding 97%, even under varied lighting and device conditions.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Models in Ensemble</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "VGG16 pretrained on ImageNet for transfer learning",
                    "Custom CNN architecture fine-tuned for banana stages: unripe, ripe, overripe, and rotten",
                    "Image preprocessing: resizing, normalization, RGB transformation",
                    "Modular training pipeline for model comparison and selection",
                    "Deployed for real-time use on low-end mobile devices"
                  ].map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              
            </motion.div>
          </div>
          
          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl font-bold"> Banana Ripeness Classification</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary-dark)' }}>
                <LineChart className="w-4 h-4 mr-2" />
                Data Collection and Pre-processing
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "Best Architecture", value: " VGG16", icon: <BarChart className="h-6 w-6" /> },
                { metric: "Training data", value: " 4777 images", icon: <Calendar className="h-6 w-6" /> },
                { metric: "Validation data", value: "1123 images", icon: <Map className="h-6 w-6" /> },
                { metric: "Testing data", value: "562 images", icon: <LineChart className="h-6 w-6" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full mb-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                    {stat.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--color-foreground)' }}>{stat.metric}</h4>
                  <p className="text-2xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Research</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive documentation and research findings on the ensemble ripeness prediction system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/documents"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              View Research Documentation
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              Contact Our Team
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}