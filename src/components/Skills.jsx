import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    {
      name: "HTML",
      color: "from-orange-400 to-orange-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="currentColor" d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"/>
        </svg>
      )
    },
    {
      name: "CSS",
      color: "from-blue-400 to-blue-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="currentColor" d="M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z"/>
        </svg>
      )
    },
    {
      name: "JAVASCRIPT",
      color: "from-yellow-400 to-yellow-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="currentColor" d="M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z"/>
        </svg>
      )
    },
    {
      name: "REACT",
      color: "from-cyan-400 to-cyan-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="currentColor" d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.63,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.63,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69"/>
        </svg>
      )
    },
    { name: "FIREBASE", 
      color: "from-yellow-400 to-orange-500",
      icon: ( <svg viewBox="0 0 24 24" className="w-12 h-12"> <path fill="currentColor" d="M20,18.69L12.7,22.74C12.2,22.95 11.8,22.95 11.3,22.74L4,18.69L17.05,5.54L17.4,5.44C17.7,5.44 18,5.64 18.1,5.94L20,18.69M9.35,5.74L4.8,13.29L6.7,1.34C6.8,1.04 7.1,0.84 7.4,0.84C7.7,0.84 8,1.04 8.1,1.34L9.35,5.74M2,14.79L7.2,7.74L9.3,12.79L2,14.79M8.9,2L11.9,2C12.2,2 12.5,2.2 12.6,2.5L14.5,7.74L11.4,12.79L8.9,2Z"/> </svg> )
    },
     { name: "NODE JS", 
      color: "from-yellow-400 to-orange-500",
      icon: ( <svg viewBox="0 0 24 24" className="w-12 h-12"> <path fill="currentColor" d="M20,18.69L12.7,22.74C12.2,22.95 11.8,22.95 11.3,22.74L4,18.69L17.05,5.54L17.4,5.44C17.7,5.44 18,5.64 18.1,5.94L20,18.69M9.35,5.74L4.8,13.29L6.7,1.34C6.8,1.04 7.1,0.84 7.4,0.84C7.7,0.84 8,1.04 8.1,1.34L9.35,5.74M2,14.79L7.2,7.74L9.3,12.79L2,14.79M8.9,2L11.9,2C12.2,2 12.5,2.2 12.6,2.5L14.5,7.74L11.4,12.79L8.9,2Z"/> </svg> )
    },
     { name: "NEXT JS", 
      color: "from-yellow-400 to-orange-500",
      icon: ( <svg viewBox="0 0 24 24" className="w-12 h-12"> <path fill="currentColor" d="M20,18.69L12.7,22.74C12.2,22.95 11.8,22.95 11.3,22.74L4,18.69L17.05,5.54L17.4,5.44C17.7,5.44 18,5.64 18.1,5.94L20,18.69M9.35,5.74L4.8,13.29L6.7,1.34C6.8,1.04 7.1,0.84 7.4,0.84C7.7,0.84 8,1.04 8.1,1.34L9.35,5.74M2,14.79L7.2,7.74L9.3,12.79L2,14.79M8.9,2L11.9,2C12.2,2 12.5,2.2 12.6,2.5L14.5,7.74L11.4,12.79L8.9,2Z"/> </svg> )
    },
    { name: "EXPRESS JS", 
      color: "from-yellow-400 to-orange-500",
      icon: ( <svg viewBox="0 0 24 24" className="w-12 h-12"> <path fill="currentColor" d="M20,18.69L12.7,22.74C12.2,22.95 11.8,22.95 11.3,22.74L4,18.69L17.05,5.54L17.4,5.44C17.7,5.44 18,5.64 18.1,5.94L20,18.69M9.35,5.74L4.8,13.29L6.7,1.34C6.8,1.04 7.1,0.84 7.4,0.84C7.7,0.84 8,1.04 8.1,1.34L9.35,5.74M2,14.79L7.2,7.74L9.3,12.79L2,14.79M8.9,2L11.9,2C12.2,2 12.5,2.2 12.6,2.5L14.5,7.74L11.4,12.79L8.9,2Z"/> </svg> )
    },
    { name: "MY SQL", 
      color: "from-yellow-400 to-orange-500",
      icon: ( <svg viewBox="0 0 24 24" className="w-12 h-12"> <path fill="currentColor" d="M20,18.69L12.7,22.74C12.2,22.95 11.8,22.95 11.3,22.74L4,18.69L17.05,5.54L17.4,5.44C17.7,5.44 18,5.64 18.1,5.94L20,18.69M9.35,5.74L4.8,13.29L6.7,1.34C6.8,1.04 7.1,0.84 7.4,0.84C7.7,0.84 8,1.04 8.1,1.34L9.35,5.74M2,14.79L7.2,7.74L9.3,12.79L2,14.79M8.9,2L11.9,2C12.2,2 12.5,2.2 12.6,2.5L14.5,7.74L11.4,12.79L8.9,2Z"/> </svg> )
    },
    { name: "MONGO DB", 
      color: "from-yellow-400 to-orange-500",
      icon: ( <svg viewBox="0 0 24 24" className="w-12 h-12"> <path fill="currentColor" d="M20,18.69L12.7,22.74C12.2,22.95 11.8,22.95 11.3,22.74L4,18.69L17.05,5.54L17.4,5.44C17.7,5.44 18,5.64 18.1,5.94L20,18.69M9.35,5.74L4.8,13.29L6.7,1.34C6.8,1.04 7.1,0.84 7.4,0.84C7.7,0.84 8,1.04 8.1,1.34L9.35,5.74M2,14.79L7.2,7.74L9.3,12.79L2,14.79M8.9,2L11.9,2C12.2,2 12.5,2.2 12.6,2.5L14.5,7.74L11.4,12.79L8.9,2Z"/> </svg> )
    },
    { name: "SPRING BOOT", 
      color: "from-yellow-400 to-orange-500",
      icon: ( <svg viewBox="0 0 24 24" className="w-12 h-12"> <path fill="currentColor" d="M20,18.69L12.7,22.74C12.2,22.95 11.8,22.95 11.3,22.74L4,18.69L17.05,5.54L17.4,5.44C17.7,5.44 18,5.64 18.1,5.94L20,18.69M9.35,5.74L4.8,13.29L6.7,1.34C6.8,1.04 7.1,0.84 7.4,0.84C7.7,0.84 8,1.04 8.1,1.34L9.35,5.74M2,14.79L7.2,7.74L9.3,12.79L2,14.79M8.9,2L11.9,2C12.2,2 12.5,2.2 12.6,2.5L14.5,7.74L11.4,12.79L8.9,2Z"/> </svg> )
    },
  ];

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative py-20">
    
      

      <div className="relative z-10 container mx-auto px-6">
       
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            What I know
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </h2>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10 flex flex-col items-center mb-6">
                
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-700" />
                </svg>

               
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{skill.name}</h3>
                <div className="flex items-center justify-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                  <span className="text-gray-400 font-medium">{skill.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
