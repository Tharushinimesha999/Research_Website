// FeaturesSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, BarChart, Cloud, ShoppingCart, Users, Smartphone } from "lucide-react";

const features = [
  {
    name: "Disease Detection",
    description: "Utilizes Convolutional Neural Networks to identify diseases and pests affecting banana leaves with high accuracy.",
    icon: <Leaf className="h-6 w-6 text-white" />,
    color: "var(--color-primary)"
  },
  {
    name: "Harvest Prediction",
    description: "Predicts optimal harvest times and yield quantities for banana types using advanced machine learning algorithms.",
    icon: <BarChart className="h-6 w-6 text-white" />,
    color: "var(--color-primary-dark)"
  },
  {
    name: "Market Prediction",
    description: "Analyzes market trends to help farmers decide the best time to sell their harvested banana for maximum profit.",
    icon: <ShoppingCart className="h-6 w-6 text-white" />,
    color: "var(--color-accent)"
  },
  {
    name: "Weather Recommendations",
    description: "Provides location-specific advice on watering, fertilizing, and protection measures based on real-time weather data.",
    icon: <Cloud className="h-6 w-6 text-white" />,
    color: "var(--color-primary-light)"
  },
  {
    name: "Sinhala Language",
    description: "Built entirely in Sinhala and english language to ensure easy understanding and accessibility for local banana farmers.",
    icon: <Users className="h-6 w-6 text-white" />,
    color: "var(--color-primary)"
  },
  {
    name: "Mobile Accessibility",
    description: "Built using Flutter for both Android and iOS, with support for low-connectivity areas through WhatsApp integration.",
    icon: <Smartphone className="h-6 w-6 text-white" />,
    color: "var(--color-primary-dark)"
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Key Features
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Four Integrated AI-Powered Systems
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Our comprehensive solution addresses the most critical challenges faced by banana farmers through 
            innovative technology and data-driven approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl   p-8 border border-gray-100 hover:shadow-sm transition-all"
            >
              <div 
                className="w-12 h-12 rounded-lg mb-5 flex items-center justify-center"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}