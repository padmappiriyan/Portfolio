import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, companies: 0 });
  const sectionRef = useRef(null);

  const info = [
    { text: "Completed Projects", count: 4, key: "projects" },
    { text: "Companies Work", count: 1, key: "companies" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          info.forEach((item) => {
            let current = 0;
            const increment = item.count / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= item.count) {
                current = item.count;
                clearInterval(timer);
              }
              setCounters((prev) => ({
                ...prev,
                [item.key]: Math.floor(current),
              }));
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
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

  return (
    <section ref={sectionRef} id="about" className="relative py-20 ">
      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            Get to know me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern
            technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center space-y-8 text-gray-300 text-lg leading-relaxed">
              <p className="relative max-w-3xl mx-auto">
                I am a{" "}
                <strong className="text-white">
                  third-year undergraduate student
                </strong>{" "}
                following a{" "}
                <strong className="text-cyan-400">
                  B.Sc. (Hons) in Information and Technology
                </strong>
                . Currently maintaining an{" "}
                <strong className="text-cyan-400">CGPA of 3.6</strong>, I am
                passionate about software development and actively preparing for
                a{" "}
                <strong className="text-white">
                  Software Engineering Internship
                </strong>
                .
              </p>

              <p className="relative max-w-3xl mx-auto">
                My technical expertise includes{" "}
                <strong className="text-cyan-400">
                  HTML, CSS, JavaScript, Tailwind CSS, React.js, Next.js,
                  Node.js, Express.js, and Spring Boot
                </strong>
                . I have hands-on experience in building both frontend and
                backend systems, focusing on performance, scalability, and
                user-friendly design.
              </p>

              <p className="relative max-w-3xl mx-auto">
                For my{" "}
                <strong className="text-white">secondary education</strong>, I
                studied at{" "}
                <strong className="text-cyan-400">
                  Kokuvil Hindu College, Jaffna, Sri Lanka
                </strong>
                , where I completed Advanced Level examinations with{" "}
                <strong className="text-white">A2B</strong> grades and a{" "}
                <strong className="text-cyan-400">Z-score of 1.801</strong>.
              </p>

              <p className="relative max-w-3xl mx-auto">
                I am currently working on several{" "}
                <strong className="text-cyan-400">
                  academic and personal projects
                </strong>{" "}
                while continuing my degree journey, aiming to combine my
                academic knowledge with real-world software development
                practices.
              </p>
            </div>

            <div className="flex justify-center gap-16 mt-16">
              {info.map((content, index) => (
                <div key={content.text} className="text-center group">
                  <div className="relative">
                    <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                      {counters[content.key]}
                      <span className="text-cyan-400">+</span>
                    </h3>
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <span className="text-gray-400 font-medium text-lg">
                    {content.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
