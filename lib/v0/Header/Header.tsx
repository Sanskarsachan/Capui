import { useState, useEffect, useRef } from 'react';
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
  dropdownTextColor = 'gray-700',
  dropdownHoverBgColor = 'gray-50',
  dropdownHoverTextColor = 'gray-900',
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
        <div className="nav-bar">
          {/* Logo */}
          <div className={`logo ${logoClassName}`}>
            {typeof logo === 'string' ? <span>{logo}</span> : logo}
          </div>

          {/* Desktop Navigation */}
          <nav className={`nav-desktop ${navClassName}`} role="navigation">
            {navigationItems.map(({ label, items, href }) => (
              <div
                key={label}
                className={`nav-item ${activeDropdown === label ? 'active' : ''}`}
              >
                <button
                  className="nav-button"
                  onClick={() => toggleDropdown(label)}
                  aria-expanded={activeDropdown === label}
                  aria-haspopup="true"
                >
                  {label}
                  <svg
                    className="chevron"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className={`dropdown ${dropdownClassName}`} role="menu">
                  {items.map((item) => (
                    <a 
                      key={item} 
                      href={href || '#'} 
                      className="dropdown-item" 
                      role="menuitem"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6l12 12"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          className={`nav-mobile ${isMenuOpen ? 'active' : ''} ${mobileMenuClassName}`}
          role="navigation"
        >
          {navigationItems.map(({ label, items, href }) => (
            <div
              key={label}
              className={`mobile-nav-item ${activeDropdown === label ? 'active' : ''}`}
            >
              <button
                className="mobile-nav-button"
                onClick={() => toggleDropdown(label)}
                aria-expanded={activeDropdown === label}
              >
                {label}
                <svg
                  className="chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="mobile-dropdown">
                {items.map((item) => (
                  <a 
                    key={item} 
                    href={href || '#'} 
                    className="mobile-dropdown-item"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;