import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import './header.css'

type HeaderProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  align?: 'left' | 'center' | 'right';
  fontSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  height?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  logo?: string | React.ReactNode;
  sticky?: boolean;
  menuItems?: { link: string | undefined; label: React.ReactNode }[];
  dropdownItems?: { label: string; items: { link: string; label: string }[] }[];
};

const Header = ({
  title,
  subtitle,
  backgroundColor = 'bg-blue-500',
  textColor = 'text-white',
  align = 'center',
  fontSize = 'xl',
  height = 'md',
  padding = 'md',
  className = '',
  children,
  logo,
  sticky = false,
  menuItems = [],
  dropdownItems = []
}: HeaderProps): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const toggleDropdown = (label: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const heightClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-20',
    xl: 'h-24'
  };

  const paddingClasses = {
    sm: 'px-2 py-1',
    md: 'px-4 py-2',
    lg: 'px-6 py-3'
  };

  const fontSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <header className={`
      w-full ${backgroundColor} ${textColor}
      ${heightClasses[height]} ${paddingClasses[padding]}
      ${sticky ? 'sticky top-0 z-50' : ''}
      transition-colors duration-300 ease-in-out
      ${className}
    `}>
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Main header content */}
        <div className="flex items-center justify-between w-full">
          {/* Logo section */}
          {logo && (
            <div className="flex-shrink-0">
              {typeof logo === 'string' ? (
                <img src={logo} alt="Logo" className="h-8 w-auto" />
              ) : (
                logo
              )}
            </div>
          )}

          {/* Title and subtitle */}
          <div className={`flex-grow ${alignClasses[align]}`}>
            <h1 className={`${fontSizeClasses[fontSize]} font-bold`}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm mt-1 opacity-90">
                {subtitle}
              </p>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-opacity-20 hover:bg-black"
          >
            {menuOpen ? <FaCheckCircle size={24} /> : <FaCheckCircle size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="px-3 py-2 rounded-md hover:bg-opacity-20 hover:bg-black transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            
            {/* Desktop Dropdowns */}
            {dropdownItems.map((dropdown, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(dropdown.label)}
                  className="flex items-center px-3 py-2 rounded-md hover:bg-opacity-20 hover:bg-black transition-colors duration-200"
                >
                  {dropdown.label}
                  <FaCheckCircle size={16} className="ml-1" />
                </button>
                {openDropdowns[dropdown.label] && (
                  <div className="absolute top-full right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    {dropdown.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {children}
          </nav>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav className="lg:hidden mt-2 space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-3 py-2 rounded-md hover:bg-opacity-20 hover:bg-black transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            {/* Mobile Dropdowns */}
            {dropdownItems.map((dropdown, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleDropdown(dropdown.label)}
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-opacity-20 hover:bg-black transition-colors duration-200"
                >
                  {dropdown.label}
                  <FaCheckCircle size={16} className="ml-1" />
                </button>
                {openDropdowns[dropdown.label] && (
                  <div className="pl-4 space-y-1">
                    {dropdown.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="block px-3 py-2 rounded-md hover:bg-opacity-20 hover:bg-black transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {children}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;