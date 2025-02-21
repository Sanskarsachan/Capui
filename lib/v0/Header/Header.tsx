import React, { useState, useEffect } from "react";
import { FaHome, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import './header.css'

type HeaderProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  align?: "left" | "center" | "right";
  fontSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  height?: "sm" | "md" | "lg" | "xl";
  padding?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
  logo?: string | React.ReactNode;
  sticky?: boolean;
  menuItems?: { link: string | undefined; label: React.ReactNode }[];
  dropdownItems?: { label: string; items: { link: string; label: string }[] }[];
  glassmorphism?: boolean;
  gradient?: boolean;
};

const Header = ({
  title,
  subtitle,
  backgroundColor = "transparent",
  textColor = "white",
  align = "left",
  fontSize = "xl",
  height = "md",
  padding = "md",
  className = "",
  children,
  logo,
  sticky = false,
  menuItems = [],
  dropdownItems = [],
  glassmorphism = false,
  gradient = true,
}: HeaderProps): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (sticky) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [sticky]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const headerClasses = `
    header 
    header-height-${height} 
    header-padding-${padding} 
    header-align-${align}
    font-size-${fontSize}
    ${sticky ? "header-sticky" : ""}
    ${scrolled ? "header-scrolled" : ""}
    ${glassmorphism ? "header-glass" : ""}
    ${gradient ? "header-gradient" : ""}
    ${className}
  `;

  return (
    <header
      className={headerClasses}
      style={{ backgroundColor, color: textColor }}
    >
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo-section">
            {logo ? (
              typeof logo === "string" ? (
                <img src={logo} alt="Logo" className="header-logo-img" />
              ) : (
                logo
              )
            ) : (
              <FaHome className="header-default-logo" />
            )}
          </div>

          <div className={`header-title-section header-align-${align}`}>
            <h1 className="header-title">{title}</h1>
            {subtitle && <p className="header-subtitle">{subtitle}</p>}
          </div>

          <button
            onClick={toggleMenu}
            className="header-mobile-toggle"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className="header-nav-desktop">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="header-nav-item header-nav-link"
              >
                {item.label}
              </a>
            ))}

            {dropdownItems.map((dropdown, index) => (
              <div key={index} className="header-dropdown">
                <button
                  onClick={() => toggleDropdown(dropdown.label)}
                  className="header-dropdown-toggle"
                >
                  {dropdown.label}
                  <FaChevronDown
                    className={`dropdown-arrow ${
                      openDropdowns[dropdown.label] ? "open" : ""
                    }`}
                  />
                </button>
                {openDropdowns[dropdown.label] && (
                  <div className="header-dropdown-content">
                    {dropdown.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="header-dropdown-item"
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

        <nav className={`header-nav-mobile ${menuOpen ? "show" : ""}`}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="header-nav-item-mobile"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          {dropdownItems.map((dropdown, index) => (
            <div key={index} className="header-dropdown-mobile">
              <button
                onClick={() => toggleDropdown(dropdown.label)}
                className="header-dropdown-toggle-mobile"
              >
                {dropdown.label}
                <FaChevronDown
                  className={`dropdown-arrow ${
                    openDropdowns[dropdown.label] ? "open" : ""
                  }`}
                />
              </button>
              {openDropdowns[dropdown.label] && (
                <div className="header-dropdown-content-mobile">
                  {dropdown.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      className="header-dropdown-item-mobile"
                      onClick={() => setMenuOpen(false)}
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
    </header>
  );
};

export default Header;
