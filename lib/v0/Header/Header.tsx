// Header.tsx
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import "./Header.css";

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
  logo?: string | React.ReactNode; // Allow either string or ReactNode for logo
  sticky?: boolean;
  menuItems?: { link: string | undefined; label: React.ReactNode }[];
  dropdownItems?: { label: string; items: { link: string; label: string }[] }[];
};

const Header = ({
  title,
  subtitle,
  backgroundColor,
  textColor,
  align = "center",
  fontSize = "xl",
  height = "md",
  padding = "md",
  className = "",
  children,
  logo,
  sticky = false,
  menuItems = [],
  dropdownItems = [],
}: HeaderProps): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const headerStyle = {
    backgroundColor,
    color: textColor,
  } as React.CSSProperties;

  return (
    <header
      className={`
        header 
        header-height-${height} 
        header-padding-${padding} 
        header-align-${align}
        font-size-${fontSize}
        ${sticky ? "header-sticky" : ""}
        ${className}
      `}
      style={headerStyle}
    >
      <div className="header-container">
        <div className="header-content">
          {/* Logo section - If no logo is passed, use FaHome as default */}
          <div className="header-logo">
            {logo ? (
              typeof logo === "string" ? (
                <img src={logo} alt="Logo" />
              ) : (
                logo
              )
            ) : (
              <FaHome size={40} color={textColor || "#ffffff"} />
            )}
          </div>

          {/* Title and subtitle */}
          <div className={`header-title-container header-align-${align}`}>
            <h1 className="header-title">{title}</h1>
            {subtitle && <p className="header-subtitle">{subtitle}</p>}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="header-mobile-toggle"
            aria-label="Toggle menu"
          >
            <span className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Desktop navigation */}
          <nav className="header-nav-desktop">
            {menuItems.map((item, index) => (
              <a key={index} href={item.link} className="header-nav-item">
                {item.label}
              </a>
            ))}

            {/* Desktop Dropdowns */}
            {dropdownItems.map((dropdown, index) => (
              <div key={index} className="header-dropdown">
                <button
                  onClick={() => toggleDropdown(dropdown.label)}
                  className="header-dropdown-toggle"
                >
                  {dropdown.label}
                  <span className="dropdown-arrow"></span>
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

        {/* Mobile navigation */}
        <nav className={`header-nav-mobile ${menuOpen ? "show" : ""}`}>
          {menuItems.map((item, index) => (
            <a key={index} href={item.link} className="header-nav-item-mobile">
              {item.label}
            </a>
          ))}
          {/* Mobile Dropdowns */}
          {dropdownItems.map((dropdown, index) => (
            <div key={index} className="header-dropdown-mobile">
              <button
                onClick={() => toggleDropdown(dropdown.label)}
                className="header-dropdown-toggle-mobile"
              >
                {dropdown.label}
                <span
                  className={`dropdown-arrow ${
                    openDropdowns[dropdown.label] ? "open" : ""
                  }`}
                ></span>
              </button>
              {openDropdowns[dropdown.label] && (
                <div className="header-dropdown-content-mobile">
                  {dropdown.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      className="header-dropdown-item-mobile"
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
