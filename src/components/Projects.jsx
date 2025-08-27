import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye, Filter, Code, Palette, Smartphone, Globe } from 'lucide-react';
import Home from "../assets/images/Home-estate.png";
import Portfolio from "../assets/images/porfolio.png"
import D_frame from "../assets/images/3D_Frame.png"
import Commerce from "../assets/images/e-commerce.webp"


const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Custom 3D frame design webapplication",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: D_frame,
      category: "web",
      technologies: ["Next js", "Express.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/Hasini1919/3Dminiature.git",
      featured: true
    },
    {
      id: 2,
      title: "Dream Home-estate",
      description: "A real estate web app for listing, searching, and managing properties with user authentication, Google login, Cloudinary image hosting, JWT security, and a responsive React (Vite + Redux) frontend with a Node.js/Express backend.",
      image: Home,
      category: "web",
      technologies: ["React", "Firebase", "Tailwind CSS","Redux", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "https://github.com/padmappiriyan/home-estate.git",
      featured: true
    },
   
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.",
      image: Portfolio,
      category: "web",
      technologies: ["REACT JS", "TAILWIND CSS", "EMAILJS"],
      liveUrl: "#",
      githubUrl: "https://github.com/padmappiriyan/Portfolio.git",
      featured: false
    },
    {
      id: 5,
      title: "eGov",
      description: "E-Government service platform allowing citizens to submit online requests for warrants and salary particulars efficiently, with real-time status tracking and secure document handling.",
      image: Commerce,
      category: "mobile",
      technologies: ["React Native", "Fast API", "Mongo DB"],
      liveUrl: "#",
      githubUrl: "https://github.com/padmappiriyan/Hackstreet-Boys_eGovDoc.git",
      featured: true
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'web', label: 'Web Apps', icon: Code },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'design', label: 'UI/UX Design', icon: Palette }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen py-20 px-6"
      id='projects'
    >
      <div className="relative z-10 container mx-auto">
     
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            My Work
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Discover my latest work and creative endeavors. Each project represents a unique challenge 
            and showcases different aspects of my development journey.
          </p>
        </div>

        
        <div className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center mb-12">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium">
               Featured Work
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold rounded-full shadow-lg">
                      Featured
                    </span>
                  </div>
                  
                 
                  <div className={`absolute inset-0 bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-white/90 text-gray-900 rounded-lg font-semibold hover:bg-white transition-colors transform hover:scale-105"
                      >
                        <Eye size={18} />
                        View Live
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900/90 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors transform hover:scale-105"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-cyan-400" size={20} />
            <span className="text-white font-semibold">Filter Projects:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/25 scale-105'
                      : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400'
                  }`}
                >
                  <IconComponent size={18} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${700 + index * 50}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.category === 'web' ? 'bg-blue-500/90 text-white' :
                    project.category === 'mobile' ? 'bg-green-500/90 text-white' :
                    'bg-purple-500/90 text-white'
                  }`}>
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-gray-300 text-xs rounded-full group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block p-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Like what you see?</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Let's collaborate and create something amazing together. I'm always excited about new projects!
            </p>
            <a
              href="#contacts"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:-translate-y-1"
            >
              <Eye size={18} className="mr-2" />
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;