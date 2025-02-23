import React, { JSX, ReactNode } from "react";
import "./typography.css"; // Import the regular CSS file

interface TypographyProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small"; // Element types for different heading or text styles
  textAlign?: "left" | "center" | "right" | "justify"; // Text alignment
  fontWeight?: "light" | "normal" | "semibold" | "bold"; // Font weight
  fontSize?: string; // Font size (e.g., 'text-lg', 'text-2xl')
  lineHeight?: string; // Line height (e.g., 'leading-tight', 'leading-loose')
  letterSpacing?: string; // Letter spacing (e.g., 'tracking-wide')
  color?: string; // Text color (e.g., 'text-black', 'text-gray-500')
  margin?: string; // Margin (e.g., 'mt-4', 'mb-2')
  padding?: string; // Padding (e.g., 'p-4', 'px-6 py-2')
  className?: string; // Additional custom classes if needed
}

const Typography = ({
  children,
  variant = "p", // Default to 'p' for paragraph
  textAlign = "left",
  fontWeight = "normal",
  fontSize = "1rem",
  lineHeight = "1.5",
  letterSpacing = "normal",
  color = "black",
  margin = "",
  padding = "",
  className = "",
}: TypographyProps): JSX.Element => {
  // Map variant to corresponding CSS class
  const Tag = variant;
  const variantClass = `${variant}`;

  // Dynamically set styles based on props
  const textAlignClass = `text-${textAlign}`;
  const fontWeightClass = fontWeight;

  // Create inline styles for fontSize, lineHeight, letterSpacing, color, margin, and padding
  const customStyles = {
    fontSize,
    lineHeight,
    letterSpacing,
    color,
    margin,
    padding,
  };

  return (
    <Tag
      className={`typography ${variantClass} ${textAlignClass} ${fontWeightClass} ${className}`}
      style={customStyles}
    >
      {children}
    </Tag>
  );
};

export default Typography;
