import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { ImCross } from "react-icons/im";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const service_id=import.meta.env.VITE_SERVICE_ID;
  const template_id=import.meta.env.VITE_TEMPLATE_ID;
  const public_key=import.meta.env.VITE_PUBLIC_KEY;

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const sectionRef = useRef(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "selvakumarpadmappiriyan@gmail.com",
      href: "mailto:selvakumarpadmappiriyan@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 767 693 235",
      href: "tel:+94767693235"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Uduvil East Chunnakam-Jaffna",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/padmappiriyan",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/selvakumar-padmappiriyan-6b9901267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-400"
    }
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: "" })); 
  };

 
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    return newErrors;
  };


   const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      
      await emailjs.send(
        service_id,     
        template_id,    
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        public_key     
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section ref={sectionRef} id="contacts" className="relative py-20">
      <div className="relative z-10 container mx-auto px-6">
        
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            Let's connect
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
         
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's talk about everything!
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Don't like forms? Send me an email. Or give me a call. I'm
                  always excited to discuss new opportunities and interesting
                  projects.
                </p>
              </div>

              
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="group flex items-center p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg mr-4 group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {info.label}
                        </h4>
                        <p className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              
              <div className="pt-8">
                <h4 className="text-white font-semibold mb-4">Follow me on</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`flex items-center justify-center w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg ${social.color} transition-all duration-300 hover:border-current hover:shadow-lg hover:shadow-current/25 hover:-translate-y-1`}
                        aria-label={social.label}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-900/50 border ${
                      errors.name ? "border-red-500" : "border-gray-700"
                    } rounded-lg text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-gray-900/70 transition-all duration-300 peer`}
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-cyan-400 peer-focus:text-sm"
                  >
                    Your Name
                  </label>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

               
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-900/50 border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } rounded-lg text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-gray-900/70 transition-all duration-300 peer`}
                    placeholder="Your Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-cyan-400 peer-focus:text-sm"
                  >
                    Your Email
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

         
              <div className="relative group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${
                    errors.subject ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-gray-900/70 transition-all duration-300 peer`}
                  placeholder="Subject"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-cyan-400 peer-focus:text-sm"
                >
                  Subject
                </label>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

             
              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-gray-900/70 transition-all duration-300 resize-none peer`}
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-cyan-400 peer-focus:text-sm"
                >
                  Your Message
                </label>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

             
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send
                        size={20}
                        className="mr-2 group-hover:translate-x-1 transition-transform duration-300"
                      />
                      Send Message
                    </>
                  )}
                </div>
              </button>

              
              {submitStatus === "success" && (
                <div className="text-center p-4 bg-green-400/10 border border-green-400/20 rounded-lg text-green-400">
                   Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-center p-4 bg-red-400/10 border border-red-400/20 rounded-lg text-red-400">
                  <ImCross />Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
