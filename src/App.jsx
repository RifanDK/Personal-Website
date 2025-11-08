import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// METADATA
// ============================================
const PORTOFOLIO_DATA = {
  overview: {
    name: "RIFAN DANA KUSUMA",
    title: "FRESH GRADUATE OF COMPUTER ENGINEERING PROGRAM",
    description: "I am a Computer Engineering graduate from ITS with a focus on IoT, Machine Learning, and Computer Vision. Experienced in data analysis (Python, Tableau, Looker Studio) and backend development (Node.js, Flask), I have developed AI-powered IoT systems that connect real-world sensors with intelligent Machine Learning models. I am passionate about delivering innovative and practical technology solutions while continuously improving my skills in collaborative, fast-paced environments.",
    image: "http://localhost:5173/self_pic.png"
  },
  education: [
    {
      id: 1,
      institution: "Institute Technology Sepuluh Nopember Surabaya",
      degree: "Bachelor Degree of Computer Engineering",
      startYear: 2021,
      endYear: 2025,
      description: "IPK: 3.54/4.00"
    },
    {
      id: 2,
      institution: "SMA Negeri 2 Tuban",
      degree: "Science",
      startYear: 2018,
      endYear: 2021,
      description: "Participate in Robotic and IoT Club"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Smart Door System Using Face Recognition and Gesture Control",
      description: "Research project developing an intelligent door access system with face recognition using dlib and MLP architecture based on 68 facial landmarks, plus gesture control using MediaPipe and LSTM for training models",
      tech: "Python, dlib, MediaPipe, LSTM, Microcontroller",
      link: "https://drive.google.com/drive/folders/1VVEFWgm-X_hJc1zEYoUeatviUcp1D--S?usp=sharing"
    },
    {
      id: 2,
      title: "DemiApp - Navigator Application for DemiWatch",
      description: "Android navigation application designed for dementia patients, featuring in-app navigation to guide users to destinations and home, integrated with Google Cloud services",
      tech: "Kotlin, Android Studio, Google Maps API, Places API, Routes API, Google Cloud",
      link: "https://drive.google.com/drive/folders/1cXjpjkupEQVdUzjEu-A4m8u7c00kkF-L?usp=sharing"
    },
    {
      id: 3,
      title: "Backend for Mobile Camera Filter App",
      description: "Designed and developed microservices backend for a mobile camera filter application with authentication, routing, and request handling, deployed on Vercel",
      tech: "Node.js, Express, Google Firestore, NoSQL, Vercel",
      link: "https://drive.google.com/drive/folders/1i3A0oz61JVHuYmkf5IvIVEoKccujAdGo?usp=sharing"
    },
    {
      id: 4,
      title: "Gold Price Predictor Using Machine Learning",
      description: "Machine learning system for predicting gold prices with real-time data streaming, processing, and model training with evaluation metrics",
      tech: "Python, Apache Kafka, PostgreSQL, Docker, Machine Learning",
      link: "https://drive.google.com/drive/folders/1ibjPBUj4lz45yamN-bg_j9VkXor1x33o?usp=sharing"
    },
    {
      id: 5,
      title: "Server Logging and Monitoring System",
      description: "Comprehensive monitoring solution using Prometheus and Grafana for collecting metrics, and ELK Stack for log processing and visualization from Nginx and Squid servers",
      tech: "Prometheus, Grafana, ELK Stack, Nginx, Squid, Kibana, debian server",
      link: "https://drive.google.com/drive/folders/1X3huHKlQNvLdO-HliMNgexuLzdV3tpJ1?usp=sharing"
    },
    {
      id: 6,
      title: "Startup Fundability Classification Model",
      description: "Deep Neural Network model for classifying startup fundability using startup data from America and Europe, achieving 88% accuracy through data preprocessing and training",
      tech: "Python, DNN, Machine Learning, Data Analysis",
      link: "https://drive.google.com/drive/folders/1IZ_7J83uQ4hgI_JudW41ef3NS9OtEfIs?usp=sharing"
    },
    {
      id: 7,
      title: "IoT Egg Counter Sensor for Smart Fridge",
      description: "Smart home IoT device that monitors egg quantity in refrigerators using microswitch sensors, integrated with Home Assistant via MQTT broker for real-time state visualization",
      tech: "Microcontroller, MQTT, Home Assistant, IoT",
      link: "https://drive.google.com/drive/folders/1SaYyobQAzERt0n1uRVCFIHTfyEs8ak2i?usp=sharing"
    },
    {
      id: 8,
      title: "Local Hosted AI Platform",
      description: "Self-hosted AI platform using open-source LLM models with Ollama server, integrated with OpenRouter API and OpenWebUI for a complete local AI solution",
      tech: "Ollama, LLM, OpenRouter API, OpenWebUI, Python",
      link: "https://github.com/yourusername/local-ai-platform"
    },
    {
      id: 9,
      title: "Web Scheduler App (Private Project)",
      description: "Full-stack scheduler application designed for organization and team usage with comprehensive database design and service workflow",
      tech: "React, Node.js, PostgreSQL, Fullstack",
      link: "https://github.com/yourusername/scheduler-app"
    }
  ],
  workExperience: [
    {
      id: 1,
      company: "Internship at PT. Telkom Indonesia Regional III",
      position: "Intern Staff of RWS Division (Mobile broadband Part)",
      startYear: "December 2024",
      endYear: "April 2025",
      responsibilities: [
        "Placed in Mobile Broadband section in RWS Division",
        "Daily work in web testing and troubleshooting, and internal database management",
        "Fetch operator data from central database and site report",
        "Add fetched data to internal database",
        "Study at neucentrix datacenter",
        "Create desktop application for PDF document processor and telegram bot for internship project"
      ]
    },
    {
      id: 2,
      company: "Mutimedia and IOT laboratory ITS",
      position: "Administrator of Basic Programming Practicum 2024",
      startYear: "July 2024",
      endYear: "December 2024",
      responsibilities: [
        "Together with coordinator of practicum creating and apply basic rules to all activities of Practicum",
        "Manage processing time and monitor the work of other divisions in the practicum",
        "Together with Secretary Division creating schedule for both participants and practicum assistants",
        "Become the administrator of the connecting platform between participants and assistants",
        "Scheduling Technical Meeting to informing update information about activities to 350+ participants",
        "Manage all administrative needs for both assistants and participants"
      ]
    },

    {
      id: 3,
      company: "Mutimedia and IOT laboratory ITS",
      position: "Assistant for Basic Programming Practicum 2024",
      startYear: "September 2024",
      endYear: "December 2024",
      responsibilities: [
        "Assisted in guiding students during basic programming practical session",
        "Prepared and maintained lab equipment, configured hardware and software setups",
        "Carry out assessments and evaluations of practitioner performance",
      ]
    }
  ],
  contact: {
    email: "rifandanakusuma@gmail.com",
    github: "https://github.com/RifanDK",
    linkedin: "https://www.linkedin.com/in/rifan-dana-kusuma-472341251/"
  }
};

// ============================================
// COMPONENTS
// ============================================

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['overview', 'education', 'projects', 'experience', 'contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-transparent backdrop-blur-xl"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-lg">
                P
              </div>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              ortofolio Rifan Dana Kusuma
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {sections.map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                  activeSection === section 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === section && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg"></div>
                    <div className="absolute inset-0 border border-purple-500/30 rounded-lg"></div>
                  </>
                )}
                <span className="relative z-10">
                  {section === 'experience' ? 'Work Experience' : section}
                </span>
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-white relative z-10 p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 relative">
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-2 mt-2">
              {sections.map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 rounded-lg capitalize transition-all ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-purple-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section === 'experience' ? 'Work Experience' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// ===========================
// Section Animations
// ===========================
const sectionAnimation = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -60, transition: { duration: 0.6, ease: "easeIn" } }
};

// ===========================
// Overview
// ===========================
const Overview = ({ data, isActive }) => (
  <motion.section
    id="overview"
    variants={sectionAnimation}
    initial="hidden"
    animate={isActive ? "visible" : "hidden"}
    exit="exit"
    className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
  >
    <div className="max-w-7xl w-full grid md:grid-cols-[1.1fr_1fr] gap-16 items-center relative z-10">
      <div className="flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <img src={data.image} alt={data.name} className="relative rounded-lg w-full max-w-sm object-cover" />
        </div>
      </div>
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
          {data.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300">{data.title}</h2>
        <p className="text-gray-400 text-lg leading-relaxed">{data.description}</p>
      </div>
    </div>
  </motion.section>
);

// ===========================
// Education
// ===========================
const Education = ({ data, isActive }) => (
  <motion.section
    id="education"
    variants={sectionAnimation}
    initial="hidden"
    animate={isActive ? "visible" : "hidden"}
    exit="exit"
    className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
  >
    <div className="max-w-6xl w-full relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="relative">
        {data.map((edu, index) => (
          <div key={edu.id} className="flex items-center mb-8 last:mb-0">
            <div className="flex-1 group">
              <div className="relative bg-gray-900 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                <p className="text-lg text-purple-400 mb-2">{edu.degree}</p>
                <p className="text-gray-400 mb-2">{edu.startYear} - {edu.endYear}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

// ===========================
// Projects
// ===========================
const Projects = ({ data, isActive }) => (
  <motion.section
    id="projects"
    variants={sectionAnimation}
    initial="hidden"
    animate={isActive ? "visible" : "hidden"}
    exit="exit"
    className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
  >
    <div className="max-w-6xl w-full relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="relative bg-gray-900 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col transform group-hover:-translate-y-2">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
              </div>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(',').map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </motion.section>
);

// ===========================
// Work Experience
// ===========================
const WorkExperience = ({ data, isActive }) => (
  <motion.section
    id="experience"
    variants={sectionAnimation}
    initial="hidden"
    animate={isActive ? "visible" : "hidden"}
    exit="exit"
    className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
  >
    <div className="max-w-6xl w-full">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Work Experience
      </h2>
      <div className="space-y-8">
        {data.map((work) => (
          <div key={work.id} className="group">
            <div className="relative bg-gray-900 rounded-lg p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{work.position}</h3>
                  <p className="text-xl text-purple-400">{work.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">
                  {work.startYear} - {work.endYear}
                </span>
              </div>
              <ul className="space-y-3">
                {work.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">▹</span>
                    <span className="text-gray-300">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

// ===========================
// Contact
// ===========================
const Contact = ({ data, isActive }) => (
  <motion.section
    id="contact"
    variants={sectionAnimation}
    initial="hidden"
    animate={isActive ? "visible" : "hidden"}
    exit="exit"
    className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
  >
    <div className="max-w-4xl w-full text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-gray-400 text-lg mb-12">
        Saya selalu terbuka untuk peluang baru dan kolaborasi menarik. Jangan ragu untuk menghubungi saya!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href={`mailto:${data.email}`}
          className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto justify-center"
        >
          <Mail size={24} />
          <span className="font-semibold">Email</span>
        </a>
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-gray-800 px-8 py-4 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-gray-700 w-full sm:w-auto justify-center"
        >
          <Github size={24} />
          <span className="font-semibold">GitHub</span>
        </a>
        <a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
        >
          <Linkedin size={24} />
          <span className="font-semibold">LinkedIn</span>
        </a>
      </div>
    </div>
  </motion.section>
);

// ===========================
// Background
// ===========================
const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
  </div>
);

// ===========================
// Main Component
// ===========================
const Portofolio = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const sections = ['overview', 'education', 'projects', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { overview, education, projects, workExperience, contact } = PORTOFOLIO_DATA;

  return (
    <div className="text-white min-h-screen font-sans">
      <AnimatedBackground />
      <Navbar activeSection={activeSection} />
      <AnimatePresence mode="wait">
        <Overview key="overview" data={overview} isActive={activeSection === 'overview'} />
        <Education key="education" data={education} isActive={activeSection === 'education'} />
        <Projects key="projects" data={projects} isActive={activeSection === 'projects'} />
        <WorkExperience key="experience" data={workExperience} isActive={activeSection === 'experience'} />
        <Contact key="contact" data={contact} isActive={activeSection === 'contact'} />
      </AnimatePresence>
    </div>
  );
};

export default Portofolio;
