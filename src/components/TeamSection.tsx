// TeamSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Award, GraduationCap } from "lucide-react";

const supervisors = [
  {
    name: "Ms. Thamali Kelegama",
    role: "Lecturer",
    designation: "Supervisor",
    image: "/supervisor.png",
    bio: "Academic Instructor in Department of Information Technology",
    qualification: "MSc in Information Technology",
    linkedin: "https://www.linkedin.com/in/sanvitha-kasthuriarachchi-31b50a37/?originalSubdomain=lkhttps://www.linkedin.com/in/thamali-bandara-kelegama-4ba15215b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8zMlcLG5Q1iltzNQ8im4eA%3D%3D",
    email: "thamali.k@sliit.lk",
    type: "supervisor"
  },
  {
    name: "Ms. Shalini Rupasinghe",
    role: "Assistant Lecturer", 
    designation: "Co-supervisor",
    image: "/co-supervisor.png",
    bio: " Assistant Lecturer in Department of Computer Science & Software Engineering",
    qualification: "Currently following Master of Information Technology",
    linkedin: "https://www.linkedin.com/in/shalini-rupasinghe/",
    email: "shalini.r@sliit.lk",
    type: "Co-supervisor"
  }
];

const students = [
  {
    name: "Malan Jayaranga",
    role: "Undergraduate",
    designation: "Research Team Member",
    image: "/member4.jpeg",  
    bio: "Information Technology undergraduate at SLIIT",
    qualification: "Undergraduate in Information Technology",
    github: "https://github.com/IT21172700",
    linkedin: "www.linkedin.com/in/malan-jayaranga-1ab25a152",
    email: "malanjayaranga@gmail.com",
    type: "student"
  },
  {
    name: "Tharushi Nimesha",
    role: "Undergraduate",
    designation: "Research Team Member",
    image: "/member1.jpg",
    bio: "Information Technology undergraduate at SLIIT",
    qualification: "Undergraduate in Information Technology",
    github: "https://github.com/it21178054",
    linkedin: "https://www.linkedin.com/in/tharushi-nimesha-b6b356218/",
    email: "tharushinimasha41@gmail.com",
    type: "student"
  },
  {
    name: "Sachini De Silva",
    role: "Undergraduate",
    designation: "Research Team Member",
    image: "/member3.jpeg",
    bio: "Software engineering undergraduate at SLIIT",
    qualification: "Undergraduate in Software Engineering",
    github: "https://github.com/umeshdewasinghe",
    linkedin: "https://www.linkedin.com/in/umesh-dewsinghe-896993217/",
    email: "mailto:it21165184@my.sliit.lk",
    type: "student"
  },
  {
    name: "Ashan Herath",
    role: "Undergraduate",
    designation: "Research Team Member",
    image: "/member2.jpeg",
    bio: "Software engineering undergraduate at SLIIT",
    qualification: "Undergraduate in Software Engineering",
    github: "https://github.com/it21388248",
    linkedin: "https://www.linkedin.com/in/kavindifernando/",
    email: "mailto:kavi.fernando2001@gmail.com",
    type: "student"
  }
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24   relative overflow-hidden">
 

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full text-sm font-medium text-white"
               style={{ backgroundColor: 'var(--color-primary)' }}>
            <GraduationCap className="w-4 h-4" />
            Research Team
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" 
              style={{ color: 'var(--color-foreground)' }}>
            Meet Our Team
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            A collaborative effort between experienced supervisors and dedicated undergraduate researchers, 
            combining academic expertise with innovative technology solutions.
          </p>
        </motion.div>

        {/* Supervisors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
              Research Supervisors
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert guidance and academic supervision from distinguished faculty members at SLIIT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8  border border-gray-200    transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="relative mx-auto w-32 h-32 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                          <Image
                            src={supervisor.image}
                            alt={supervisor.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                      </div>
                      {/* Academic badge */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
                           style={{ backgroundColor: 'var(--color-primary)' }}>
                        <Award className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{supervisor.name}</h4>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>
                      {supervisor.role}
                    </p>
                    <p className="text-sm font-medium text-gray-500 mb-4">
                      ({supervisor.designation})
                    </p>
                    <p className="text-gray-600 text-sm mb-6 font-medium">
                      {supervisor.qualification}
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      {supervisor.linkedin && (
                        <a 
                          href={supervisor.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      <a 
                        href={supervisor.email}
                        className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Students Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
              Research Team Members
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate undergraduate researchers specializing in machine learning, mobile development, 
              data science, and agricultural technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {students.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6   border border-gray-200   transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="relative mx-auto w-24 h-24 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-full p-0.5">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-primary)' }}>
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="flex justify-center space-x-3">
                      {member.github && (
                        <a 
                          href={member.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      <a 
                        href={member.email}
                        className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Department of Information Technology, SLIIT</span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}