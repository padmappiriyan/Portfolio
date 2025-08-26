import React, { useRef, useState, useEffect } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import my2 from "../assets/images/Profile.jpg";
import Type from "./Type";

const socialMediaLinks = [
  "https://www.instagram.com/_aaaryaan__/",
  "https://github.com/padmappiriyan",
  "https://www.linkedin.com/in/selvakumar-padmappiriyan-6b9901267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
];

const Hero = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const socialIcons = [
    FaInstagram,
    FaGithub, 
    FaLinkedin,
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
     
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30 blur-sm"></div>
          </div>
        ))}
      </div>

   
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
         
          <div className={`flex-1 flex items-center justify-center transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'
          }`}>
            <div className="relative group">
              
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 animate-spin-slow blur-sm"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 rounded-full opacity-50 group-hover:opacity-75 animate-spin-slow-reverse blur"></div>
              
            
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src={my2} 
                    alt="Selvakumar Padmappiriyan" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <span className="text-white font-bold">✦</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <span className="text-white text-sm">⚡</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className={`flex-1 text-center lg:text-left transition-all duration-1200 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            
            
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 font-medium text-sm mb-6 animate-fade-in">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Welcome to my Portfolio
              </div>
              
             
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <div className="overflow-hidden">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                    Hello There! 👋
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-white mt-3 animate-slide-up">
                    I'm{' '}
                    <span className="relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Selvakumar Padmappiriyan
                      </span>
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 animate-scale-x origin-left"></div>
                    </span>
                  </span>
                </div>
              </h1>
              
             
              <div className="text-xl md:text-2xl text-gray-300 mb-8 min-h-[80px] flex items-center justify-center lg:justify-start">
                <div className="relative">
                  <Type />
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 animate-pulse"></div>
                </div>
              </div>

              
              <p className="text-gray-400 text-lg mb-10 max-w-2xl leading-relaxed">
                Passionate about creating{' '}
                <span className="text-cyan-400 font-medium">digital experiences</span>{' '}
                that make a difference. Let's build something{' '}
                <span className="text-blue-400 font-medium">amazing</span> together! 
              </p>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-12">
              <button 
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-2 hover:scale-105"
                onClick={scrollToContact}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Connect with Me
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 animate-pulse"></div>
              </button>
              
              <button className="group flex items-center gap-2 px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/25 backdrop-blur-sm">
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </button>
            </div>

            
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <span className="text-gray-400 text-sm font-medium">Connect:</span>
              <div className="flex gap-4">
                {socialIcons.map((Icon, index) => (
                  <a
                    key={index}
                    href={socialMediaLinks[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 border border-gray-700 hover:border-cyan-500"
                  >
                    <Icon className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                    
                    
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

   
      

      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;