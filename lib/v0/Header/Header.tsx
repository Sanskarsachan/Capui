import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.css'; // Importing the CSS file for styling

/**
 * Header component for creating a flexible and customizable header for React-based projects.
 * It supports both mobile and desktop views, offering a collapsible menu on smaller screens.
 * The component allows for custom titles, subtitles, logos, background colors, text colors, and more.
 * 
 * @component
 * 
 * @param {ReactNode} title - The main title to display in the header.
 * @param {ReactNode} [subtitle] - Optional subtitle to display below the title.
 * @param {string} [backgroundColor='#3b82f6'] - Background color of the header (defaults to blue).
 * @param {string} [textColor='#ffffff'] - Text color of the header (defaults to white).
 * @param {'left' | 'center' | 'right'} [align='center'] - Alignment of the title in the header.
 * @param {string} [fontSize='3rem'] - Font size for the title (defaults to 3rem).
 * @param {string} [height='5rem'] - Height of the header (defaults to 5rem).
 * @param {string} [padding='1rem'] - Padding around the header (defaults to 1rem).
 * @param {string} [className=''] - Custom class names for additional styling.
 * @param {ReactNode} [children] - Additional content, typically menu items or actions, to display in the header.
 * @param {string | ReactNode} [logo] - A logo, either a URL string or a JSX element, to display on the left side of the header.
 * @param {boolean} [sticky=false] - Whether to make the header sticky at the top of the page when scrolling.
 * @param {Array} [menuItems=[]] - Array of objects representing menu items with 'label' and 'link' properties for the navigation menu.
 * 
 * @returns {JSX.Element} The rendered Header component.
 */

// Define the HeaderProps type
type HeaderProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  align?: 'left' | 'center' | 'right';
  fontSize?: string;
  height?: string;
  padding?: string;
  className?: string;
  children?: React.ReactNode;
  logo?: string | React.ReactNode;
  sticky?: boolean;
  menuItems?: { link: string | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }[];
};

const Header = ({
  title,
  subtitle,
  backgroundColor = '#3b82f6', // Default bg-blue-500
  textColor = '#ffffff', // Default text-white
  align = 'center',
  fontSize = '1rem',
  height = '2rem',
  padding = '1rem',
  className = '',
  children,
  logo,
  sticky = false,
  menuItems = [], // Default empty menu
}: HeaderProps): JSX.Element => {
  // State for the hamburger menu in mobile view
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Dynamic styles based on passed props
  const headerStyle = {
    backgroundColor,
    color: textColor,
    fontSize,
    height,
    padding,
  } as React.CSSProperties;

  return (
    <header
      className={`header ${align} ${sticky ? 'sticky' : ''} ${className}`}
      style={headerStyle}
    >
      <div className="header-content">
        {/* Logo Section: Displays logo if passed */}
        {logo && (
          <div className="logo">
            {typeof logo === 'string' ? (
              <img src={logo} alt="Logo" />
            ) : (
              logo
            )}
          </div>
        )}

        {/* Title and Subtitle Section */}
        <div className="title-container">
          <h1>{title}</h1>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>

        {/* Hamburger Menu for Mobile: Displayed only on mobile screens */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-white text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Menu Links: Displayed as a horizontal list on desktop and collapsible on mobile */}
      <div className={`menu ${menuOpen ? 'show' : 'hidden'}`}>
        {menuItems?.map((item: { link: string | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
          <a href={item.link} key={index} className="menu-item">
            {item.label}
          </a>
        ))}
        {children}
      </div>
    </header>
  );
};

export default Header;
