
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      sticky 
        ? "bg-white/90 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              sticky ? "text-gray-900" : "text-white"
            }`}>
              Piriyan
            </h1>
          </div>

         
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuLinks.map((menu, i) => (
                <a
                  key={i}
                  href={menu.link}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-cyan-500 ${
                    sticky ? "text-gray-700 hover:text-cyan-600" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {menu.name}
                </a>
              ))}
            </div>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                sticky ? "text-gray-700 hover:text-gray-900" : "text-gray-300 hover:text-white"
              }`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        open 
          ? "max-h-screen opacity-100" 
          : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuLinks.map((menu, i) => (
              <a
                key={i}
                href={menu.link}
                onClick={handleMenuClick}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                {menu.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;