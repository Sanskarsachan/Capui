import { JSX, ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  center?: boolean; // Center the content horizontally
  borderColor?: string; // Border color (e.g., 'black', 'red-500')
  borderWidth?: string; // Border width (e.g., 'border-2')
  fillColor?: string; // Background color (e.g., 'bg-green-500')
  margin?: string; // Margin (e.g., 'm-10', 'mt-4')
  padding?: string; // Padding (e.g., 'p-4', 'px-6 py-2')
  rounded?: "none" | "sm" | "md" | "lg" | "full"; // Border radius options
  shadow?: "none" | "sm" | "md" | "lg"; // Shadow options
  textColor?: string; // Text color (e.g., 'text-white', 'text-black')
  height?: string; // Height (e.g., 'h-64', 'h-screen')
  className?: string; // Additional custom classes if needed
  width?: string; // Width (e.g., 'w-full', 'w-1/2')
  flexDirection?: "row" | "column"; // Flexbox direction
  display?: string; // Display property (e.g., 'block', 'flex')
  overflow?: string; // Overflow property (e.g., 'hidden', 'auto')
  zIndex?: string; // z-index for layering (e.g., 'z-10')
  role?: string; // ARIA role (e.g., 'region', 'contentinfo')
  ariaLabel?: string; // ARIA label for accessibility
}

const Box = ({
  children,
  center = false,
  borderColor = "black",
  borderWidth = "border",
  fillColor = "",
  margin = "",
  padding = "p-4",
  rounded = "none",
  shadow = "none",
  textColor = "black",
  height = "",
  className = "",
  width = "w-full",
  flexDirection = "row",
  display = "block",
  overflow = "visible",
  zIndex = "auto",
  role = "region",
  ariaLabel = "",
}: BoxProps): JSX.Element => {

  // Flexbox alignment and layout classes
  const alignmentClasses = center ? "flex justify-center items-center" : "flex";
  const flexClass = `flex-${flexDirection}`;
  const displayClass = `display-${display}`;
  const overflowClass = `overflow-${overflow}`;
  const zIndexClass = `z-${zIndex}`;

  // Border, background, and text color classes
  const borderClass = borderColor ? `border ${borderWidth} border-${borderColor}` : "";
  const bgColorClass = fillColor ? fillColor : "";
  const textColorClass = textColor ? `text-${textColor}` : "";

  // Other utility classes
  const marginClass = margin ? margin : "";
  const paddingClass = padding ? padding : "";
  const roundedClass = rounded !== "none" ? `rounded-${rounded}` : "";
  const shadowClass = shadow !== "none" ? `shadow-${shadow}` : "";
  const heightClass = height ? height : "";
  const widthClass = width ? width : "";

  // Combine all classes into a single string
  const boxClasses = `${alignmentClasses} ${flexClass} ${displayClass} ${overflowClass} ${zIndexClass} ${borderClass} ${bgColorClass} ${textColorClass} ${marginClass} ${paddingClass} ${roundedClass} ${shadowClass} ${heightClass} ${widthClass} ${className}`;

  return (
    <div className={boxClasses} role={role} aria-label={ariaLabel}>
      {children}
    </div>
  );
};

export default Box;
