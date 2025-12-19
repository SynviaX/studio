import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, ArrowRightIcon, SparklesIcon, CodeBracketIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

// Button Component
const Button = ({ children, variant = 'primary', className = '', icon, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-gradient-to-r from-[#3E1444] to-[#5a1f63] hover:from-[#5a1f63] hover:to-[#3E1444] text-white shadow-lg hover:shadow-2xl hover:scale-105',
    secondary: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700',
    outline: 'border-2 border-[#3E1444] dark:border-[#d4a5ff] text-[#3E1444] dark:text-[#d4a5ff] hover:bg-[#3E1444] dark:hover:bg-[#5a1f63] hover:text-white'
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && icon}
    </button>
  );
};

// Section Component
const Section = ({ children, className = '', id = '' }) => {
  return (
    <section id={id} className={`py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

// Card Component
const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 ${hover ? 'hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-[#3E1444]/30 dark:hover:border-[#d4a5ff]/30' : ''} ${className}`}>
      {children}
    </div>
  );
};

// Header Component
const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-3 group">
            <img 
              src="https://i.postimg.cc/vmTvY9fr/image.png" 
              alt="SynviaTech Logo" 
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#3E1444] to-[#5a1f63] dark:from-[#d4a5ff] dark:to-purple-400 bg-clip-text text-transparent">
              SynviaTech
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-[#3E1444] dark:hover:text-[#d4a5ff] transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3E1444] to-[#5a1f63] dark:from-[#d4a5ff] dark:to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5 text-yellow-500" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5 text-yellow-500" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-[#3E1444] dark:hover:text-[#d4a5ff] transition-colors font-medium py-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

// Hero Section
const Hero = () => {
  return (
    <Section id="home" className="pt-32 pb-24 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3E1444]/10 dark:bg-[#d4a5ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3E1444]/10 to-purple-400/10 dark:from-[#d4a5ff]/10 dark:to-purple-400/10 border border-[#3E1444]/20 dark:border-[#d4a5ff]/20 mb-8">
          <SparklesIcon className="w-5 h-5 text-[#3E1444] dark:text-[#d4a5ff]" />
          <span className="text-sm font-medium text-[#3E1444] dark:text-[#d4a5ff]">Transforming Ideas into Reality</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Ideas awaken into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E1444] via-[#5a1f63] to-purple-600 dark:from-[#d4a5ff] dark:via-purple-400 dark:to-purple-500 animate-gradient">
            reality
          </span>
          <span className="text-[#3E1444] dark:text-[#d4a5ff]">.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          SynviaTech builds modern, scalable digital solutions that turn ideas into real-world products. We craft experiences that matter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />}>
            View Our Work
          </Button>
          <Button variant="outline">Contact Us</Button>
        </div>

        {/* Floating cards */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card className="p-6 text-center" hover={false}>
            <div className="text-3xl font-bold text-[#3E1444] dark:text-[#d4a5ff] mb-2">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
          </Card>
          <Card className="p-6 text-center" hover={false}>
            <div className="text-3xl font-bold text-[#3E1444] dark:text-[#d4a5ff] mb-2">25+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
          </Card>
          <Card className="p-6 text-center" hover={false}>
            <div className="text-3xl font-bold text-[#3E1444] dark:text-[#d4a5ff] mb-2">99%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

// About Section
const About = () => {
  return (
    <Section id="about" className="bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-800/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E1444] to-[#5a1f63] dark:from-[#d4a5ff] dark:to-purple-400">Us</span>
          </h2>
        </div>
        
        <Card className="p-8 sm:p-12">
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center mb-8">
            SynviaTech is a team-driven software startup focused on crafting reliable, scalable, and user-centric applications for real-world needs. We believe in transforming innovative ideas into tangible solutions that make a difference.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#3E1444]/10 to-purple-400/10 dark:from-[#d4a5ff]/10 dark:to-purple-400/10 flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Mission-Driven</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Focused on delivering real value and impact</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#3E1444]/10 to-purple-400/10 dark:from-[#d4a5ff]/10 dark:to-purple-400/10 flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Innovation First</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Leveraging cutting-edge technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#3E1444]/10 to-purple-400/10 dark:from-[#d4a5ff]/10 dark:to-purple-400/10 flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Client-Centric</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Your success is our priority</p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      title: 'Web Application Development',
      description: 'Modern, scalable, secure web platforms built with cutting-edge technologies and best practices',
      icon: <CodeBracketIcon className="w-8 h-8" />,
      features: ['React & Next.js', 'Cloud Infrastructure', 'API Development', 'Real-time Features']
    },
    {
      title: 'Mobile Application Development',
      description: 'Cross-platform and native mobile solutions for iOS and Android with seamless user experiences',
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      features: ['React Native', 'Native iOS/Android', 'Offline Support', 'Push Notifications']
    }
  ];

  return (
    <Section id="services" className="bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E1444] to-[#5a1f63] dark:from-[#d4a5ff] dark:to-purple-400">Services</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Comprehensive solutions tailored to your digital transformation needs
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="p-8 group">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#3E1444]/10 to-purple-400/10 dark:from-[#d4a5ff]/10 dark:to-purple-400/10 flex items-center justify-center text-[#3E1444] dark:text-[#d4a5ff] group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gradient-to-r from-[#3E1444]/10 to-purple-400/10 dark:from-[#d4a5ff]/10 dark:to-purple-400/10 border border-[#3E1444]/20 dark:border-[#d4a5ff]/20 text-[#3E1444] dark:text-[#d4a5ff] rounded-lg text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      name: 'CloudSync Platform',
      description: 'Enterprise-grade cloud synchronization platform with real-time collaboration features and advanced security',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      name: 'HealthTrack Mobile',
      description: 'Cross-platform health and fitness tracking app with AI-powered insights and personalized recommendations',
      tech: ['React Native', 'TypeScript', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      name: 'FinanceFlow Dashboard',
      description: 'Modern financial analytics dashboard with advanced data visualization and predictive modeling',
      tech: ['Next.js', 'Python', 'MongoDB', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      name: 'SmartRetail POS',
      description: 'Intelligent point-of-sale system with inventory management, analytics, and customer insights',
      tech: ['Vue.js', 'Express', 'MySQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop',
      gradient: 'from-orange-500/10 to-red-500/10'
    }
  ];

  return (
    <Section id="projects" className="bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-800/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E1444] to-[#5a1f63] dark:from-[#d4a5ff] dark:to-purple-400">Projects</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Showcasing our latest work and innovative solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} dark:opacity-50`}></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#3E1444] dark:group-hover:text-[#d4a5ff] transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gradient-to-r from-[#3E1444]/10 to-purple-400/10 dark:from-[#d4a5ff]/10 dark:to-purple-400/10 border border-[#3E1444]/20 dark:border-[#d4a5ff]/20 text-[#3E1444] dark:text-[#d4a5ff] rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button variant="outline" className="w-full" icon={<ArrowRightIcon className="w-5 h-5" />}>
                View Demo
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <Section id="contact" className="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E1444] to-[#5a1f63] dark:from-[#d4a5ff] dark:to-purple-400">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Have a project in mind? Let's bring your ideas to life together.
          </p>
        </div>

        <Card className="p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3E1444]/10 to-purple-400/10 dark:from-[#d4a5ff]/10 dark:to-purple-400/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info.synviatech@gmail.com"
                    className="text-[#3E1444] dark:text-[#d4a5ff] hover:underline transition-colors"
                  >
                    info.synviatech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3E1444]/10 to-purple-400/10 dark:from-[#d4a5ff]/10 dark:to-purple-400/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    GitHub
                  </h3>
                  <a
                    href="#"
                    className="text-[#3E1444] dark:text-[#d4a5ff] hover:underline transition-colors"
                  >
                    github.com/SynviaX
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/vmTvY9fr/image.png" 
                alt="SynviaTech" 
                className="w-48 h-48 opacity-20 dark:opacity-10"
              />
            </div>
          </div>

          <Button variant="primary" className="w-full" icon={<ArrowRightIcon className="w-5 h-5" />}>
            Start a Conversation
          </Button>
        </Card>
      </div>
    </Section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#3E1444] via-[#4a1852] to-[#5a1f63] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="https://i.postimg.cc/vmTvY9fr/image.png" 
              alt="SynviaTech Logo" 
              className="w-12 h-12"
            />
            <span className="text-3xl font-bold">SynviaTech</span>
          </div>
          <p className="text-purple-200 mb-6 text-lg">Ideas awaken into reality.</p>
          <div className="h-px bg-white/20 max-w-md mx-auto mb-6"></div>
          <p className="text-purple-300">© 2025 SynviaTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;