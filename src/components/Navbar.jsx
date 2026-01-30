import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Ministries', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Sermons', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <nav className="absolute w-full z-50 bg-white/95 backdrop-blur-md text-gray-900 border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="shrink-0">
              <a href="#" className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-10 w-auto rounded-full shadow-sm" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-bold tracking-wide leading-none text-gray-600 text-xs">
                    ቦሌ ሩዋንዳ ሙሉ ወንጌል ቤተ ክርስቲያን
                  </span>
                  <span className="font-bold tracking-tighter leading-none text-gray-900 text-lg">
                    Full Gospel Church
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700"
                >
                  {link.name}
                </a>
              ))}
              
              <div 
                className="relative inline-flex items-center h-6 rounded-full w-14 cursor-pointer transition-colors duration-200 ease-in-out bg-gray-200 ml-4 border border-gray-300"
                onClick={toggleLanguage}
              >
                <span className={`
                  ${language === 'en' ? 'translate-x-1' : 'translate-x-8'} 
                  inline-block w-4 h-4 transform bg-white rounded-full transition duration-200 ease-in-out z-10 shadow-sm
                `} />
                <span className={`absolute left-1.5 text-[10px] font-bold ${language === 'en' ? 'text-gray-900' : 'text-gray-400'}`}>
                  EN
                </span>
                <span className={`absolute right-1.5 text-[10px] font-bold ${language === 'am' ? 'text-gray-900' : 'text-gray-400'}`}>
                  AM
                </span>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="w-full text-left text-gray-700 px-3 py-2 rounded-md text-base font-bold transition-colors mt-2 border border-gray-200 hover:bg-gray-50 bg-gray-50"
            >
              Switch to {language === 'en' ? 'Amharic' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
