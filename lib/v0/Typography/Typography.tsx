import { JSX, ReactNode } from "react";

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
  fontSize = "text-base",
  lineHeight = "leading-normal",
  letterSpacing = "tracking-normal",
  color = "text-black",
  margin = "",
  padding = "",
  className = "",
}: TypographyProps): JSX.Element => {
  // Mapping variant to the respective HTML tag
  const Tag = variant;

  // Combining classes
  const typographyClasses = `${fontSize} ${lineHeight} ${letterSpacing} ${color} ${
    textAlign ? `text-${textAlign}` : ""
  } ${fontWeight} ${margin} ${padding} ${className}`;

  return <Tag className={typographyClasses}>{children}</Tag>;
};

export default Typography;
