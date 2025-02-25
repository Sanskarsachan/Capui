import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Dropdown from '../Dropdown/Dropdown';
import './Header.css';

interface NavItem {
  label: string;
  items: string[];
  href?: string;
}

interface HeaderProps {
  logo?: React.ReactNode;
  navigationItems?: NavItem[];
  containerWidth?: 'full' | 'contained';
  height?: string;
  position?: 'fixed' | 'static' | 'sticky';
  backgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  hoverTextColor?: string;
  borderBottom?: boolean;
  borderColor?: string;
  dropdownBgColor?: string;
  dropdownTextColor?: string;
  dropdownHoverBgColor?: string;
  dropdownHoverTextColor?: string;
  mobileBreakpoint?: string;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  padding?: string;
  className?: string;
  logoClassName?: string;
  navClassName?: string;
  dropdownClassName?: string;
  mobileMenuClassName?: string;
  onMobileMenuToggle?: (isOpen: boolean) => void;
  onDropdownToggle?: (label: string | null) => void;
}

const Header: React.FC<HeaderProps> = ({
  logo = 'Logo',
  navigationItems = [],
  containerWidth = 'contained',
  height = 'h-16',
  position = 'static',
  backgroundColor = 'white',
  textColor = 'gray-900',
  activeTextColor = 'gray-900',
  hoverTextColor = 'gray-600',
  borderBottom = true,
  borderColor = 'gray-200',
  dropdownBgColor = 'white',
  dropdownTextColor = 'black',
  dropdownHoverBgColor = 'lightgrey',
  dropdownHoverTextColor = 'black',
  mobileBreakpoint = '768px',
  shadow = 'sm',
  padding = 'px-4',
  className = '',
  logoClassName = '',
  navClassName = '',
  dropdownClassName = '',
  mobileMenuClassName = '',
  onMobileMenuToggle,
  onDropdownToggle,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    onMobileMenuToggle?.(newState);
  };

  const toggleDropdown = (label: string) => {
    const newState = activeDropdown === label ? null : label;
    setActiveDropdown(newState);
    onDropdownToggle?.(newState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Generate CSS custom properties for dynamic styles
  const headerStyles = {
    '--header-bg': backgroundColor,
    '--header-text': textColor,
    '--header-active-text': activeTextColor,
    '--header-hover-text': hoverTextColor,
    '--header-border': borderColor,
    '--dropdown-bg': dropdownBgColor,
    '--dropdown-text': dropdownTextColor,
    '--dropdown-hover-bg': dropdownHoverBgColor,
    '--dropdown-hover-text': dropdownHoverTextColor,
    '--mobile-breakpoint': mobileBreakpoint,
  } as React.CSSProperties;

  const headerClasses = `
    header
    ${position}
    ${height}
    ${padding}
    ${shadow !== 'none' ? `shadow-${shadow}` : ''}
    ${borderBottom ? 'border-bottom' : ''}
    ${className}
  `.trim();

  const containerClasses = `
    header-container
    ${containerWidth === 'contained' ? 'max-w-7xl mx-auto' : 'w-full'}
  `.trim();

  return (
    <header 
      className={headerClasses} 
      ref={headerRef} 
      style={headerStyles}
      role="banner"
    >
      <div className={containerClasses}>
        <div className="nav-bar flex items-center justify-between">
          {/* Logo */}
          <div className={`logo ${logoClassName}`}>
            {typeof logo === 'string' ? (
              <span className="text-xl font-bold text-gray-800">{logo}</span>
            ) : (
              logo
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className={`nav-desktop ${navClassName}`} role="navigation">
            {navigationItems.map(({ label, items, href }) => (
              <Dropdown
                key={label}
                label={label}
                items={items}
                href={href}
                isOpen={activeDropdown === label}
                onToggle={toggleDropdown}
              />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button text-2xl text-gray-800"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          className={`nav-mobile ${isMenuOpen ? 'active' : ''} ${mobileMenuClassName}`}
          role="navigation"
        >
          {navigationItems.map(({ label, items, href }) => (
            <Dropdown
              key={label}
              label={label}
              items={items}
              href={href}
              isOpen={activeDropdown === label}
              onToggle={toggleDropdown}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
