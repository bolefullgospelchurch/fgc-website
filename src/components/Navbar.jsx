import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ transparent = false }) {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Events', href: '/events' },
    { name: 'Sermons', href: '/sermons' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const bgColor = transparent ? 'bg-transparent border-off-white/15' : 'bg-off-white/95 backdrop-blur-md border-midnight-navy/10';
  const textColor = transparent ? 'text-off-white' : 'text-midnight-navy';
  const subTextColor = transparent ? 'text-off-white/70' : 'text-midnight-navy/60';
  const linkColor = transparent ? 'text-off-white/90 hover:text-off-white' : 'text-midnight-navy/80 hover:text-deep-blue';
  const mobileMenuBg = transparent ? 'bg-midnight-navy/95 border-off-white/10' : 'bg-off-white border-midnight-navy/10';
  const mobileLinkColor = transparent ? 'text-off-white/80 hover:text-off-white' : 'text-midnight-navy hover:text-deep-blue';

  return (
    <nav className={`absolute w-full z-50 ${bgColor} border-b transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="shrink-0">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-12 w-auto rounded-full shadow-sm bg-white" />
                <div className="flex flex-col gap-0.5">
                  <span className={`font-bold tracking-wide leading-none ${subTextColor}`}>
                    የኢትዮጵያ ሙሉ ወንጌል<br/> አማኞች ቤተ ክርስቲያን ቦሌ አጥቢያ
                  </span>
                  <span className={`tracking-tighter leading-none ${textColor}`}>
                    Ethiopian Full Gospel Believers Church, Bole Local
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`${linkColor} px-3 py-2 rounded-md text-sm font-bold transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div 
                className={`relative inline-flex items-center h-6 rounded-full w-14 cursor-pointer transition-colors duration-200 ease-in-out ml-4 border ${transparent ? 'bg-off-white/15 border-off-white/30' : 'bg-off-white border-midnight-navy/20'}`}
                onClick={toggleLanguage}
              >
                <span className={`
                  ${language === 'en' ? 'translate-x-1' : 'translate-x-8'} 
                  inline-block w-4 h-4 transform bg-off-white rounded-full transition duration-200 ease-in-out z-10 shadow-sm
                `} />
                <span className={`absolute left-1.5 text-[10px] font-bold ${language === 'en' ? (transparent ? 'text-off-white' : 'text-midnight-navy') : (transparent ? 'text-off-white/50' : 'text-midnight-navy/40')}`}>
                  EN
                </span>
                <span className={`absolute right-1.5 text-[10px] font-bold ${language === 'am' ? (transparent ? 'text-off-white' : 'text-midnight-navy') : (transparent ? 'text-off-white/50' : 'text-midnight-navy/40')}`}>
                  AM
                </span>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${transparent ? 'text-off-white hover:bg-off-white/10' : 'text-midnight-navy hover:text-deep-blue hover:bg-off-white/80'}`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t shadow-xl ${mobileMenuBg}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`${mobileLinkColor} block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className={`w-full text-left px-3 py-2 rounded-md text-base font-bold transition-colors mt-2 border ${transparent ? 'text-off-white border-off-white/20 hover:bg-off-white/10' : 'text-midnight-navy border-midnight-navy/10 hover:bg-off-white/80 bg-off-white'}`}
            >
              Switch to {language === 'en' ? 'Amharic' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
