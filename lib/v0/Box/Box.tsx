import { JSX, ReactNode, CSSProperties } from 'react';
import './Box.css'; // Import the CSS file

interface BoxProps {
  children: ReactNode;
  // Layout
  display?: CSSProperties['display']; // e.g. "flex", "grid", "block", etc.
  flexDirection?: "row" | "column"; // "row" for horizontal layout, "column" for vertical
  justifyContent?: CSSProperties['justifyContent']; // e.g. "center", "space-between"
  alignItems?: CSSProperties['alignItems']; // e.g. "center", "flex-start"
  flexWrap?: CSSProperties['flexWrap']; // e.g. "wrap", "nowrap"
  
  // Spacing
  margin?: string; // e.g. "20px", "1rem"
  padding?: string; // e.g. "10px", "2rem"
  gap?: string; // Gap between flex/grid items
  
  // Styling
  backgroundColor?: string; // e.g. "blue", "#f0f0f0"
  border?: string; // e.g. "1px solid black"
  borderRadius?: string; // e.g. "8px", "50%"
  boxShadow?: string; // e.g. "0px 4px 6px rgba(0, 0, 0, 0.1)"
  height?: string; // e.g. "100px", "50vh"
  width?: string; // e.g. "200px", "100%"
  
  // Text
  color?: string; // e.g. "white", "#333"
  fontSize?: string; // e.g. "14px", "1rem"
  
  // Responsive
  // These can be passed as breakpoints (e.g. "sm", "md", "lg")
  sm?: string;
  md?: string;
  lg?: string;

  className?: string; // Custom additional classes
  role?: string; // ARIA role (e.g., "region")
  ariaLabel?: string; // ARIA label for accessibility
}

const Box = ({
  children,
  display = "block",
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "stretch",
  flexWrap = "nowrap",
  margin = "0",
  padding = "0",
  gap = "0",
  backgroundColor = "transparent",
  border = "none",
  borderRadius = "0",
  boxShadow = "none",
  height = "auto",
  width = "auto",
  color = "black",
  fontSize = "1rem",
  sm,
  md,
  lg,
  className = "",
  role = "region",
  ariaLabel = "",
}: BoxProps): JSX.Element => {
  
  // Combine styles dynamically
  const boxStyles: CSSProperties = {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    margin,
    padding,
    gap,
    backgroundColor,
    border,
    borderRadius,
    boxShadow,
    height,
    width,
    color,
    fontSize,
  };

  return (
    <div
      className={`box ${className}`} // Basic box class with additional custom classes if passed
      style={boxStyles} // Apply dynamic styles
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

export default Box;
