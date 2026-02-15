
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ASSETS } from '../data';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
     if (path === '/') return location.pathname === '/';
     return location.pathname.startsWith(path) && path !== '/';
  };
  
  // Only Home and About pages have dark heroes/slideshows suitable for transparent nav
  const isTransparentPage = ['/', '/about'].includes(location.pathname);
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isTransparentPage
          ? 'h-20 bg-[#0E0E0E]/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'h-24 bg-transparent border-b border-white/5'
      } flex items-center px-4 md:px-8 lg:px-12 gap-4`}
    >
      {/* Left: Logo Group */}
      <Link to="/" className="flex items-center gap-3 group select-none shrink-0">
           <div className="bg-white px-2 py-1 md:px-3 md:py-1.5 rounded-lg shadow-md flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
               <img 
                 src={ASSETS.WIE_LOGO} 
                 alt="IEEE WIE" 
                 className="h-10 md:h-12 w-auto object-contain"
               /> 
          </div>
      </Link>

      {/* Center: Nav Links */}
      <div className="flex-1 flex items-center justify-start md:justify-center overflow-x-auto gap-6 md:gap-8 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {navLinks.map((link) => (
              <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-all duration-300 relative py-1 flex items-center gap-1.5 whitespace-nowrap ${
                      isActive(link.path)
                          ? 'text-[#B5224E]'
                          : 'text-gray-300 hover:text-white'
                  }`}
              >
                  {link.name}
                  {isActive(link.path) && (
                      <span className="absolute -bottom-1.5 left-0 w-full h-[3px] bg-[#B5224E] rounded-full shadow-[0_0_8px_#B5224E]"></span>
                  )}
              </Link>
          ))}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 shrink-0">
        <button 
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#FFB347]/10 border border-[#FFB347]/20 hover:bg-[#FFB347] transition-all duration-300 group cursor-default"
            aria-label="IEEE Computer Society"
        >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                <img 
                    src={ASSETS.IEEE_CS_ICON} 
                    alt="CS" 
                    className="w-4 h-4 object-contain"
                />
            </div>
            <span className="text-[#FFB347] font-bold text-xs tracking-wide group-hover:text-black hidden sm:block">IEEE CS</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
