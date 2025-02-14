import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  direction?: "row" | "column"; // Layout direction (row or column)
  justify?: "start" | "center" | "end" | "between" | "around"; // Justify content
  align?: "start" | "center" | "end"; // Align items
  className?: string; // Custom class names for additional styling
  spacing?: string; // Spacing between items
  wrap?: boolean; // Whether to wrap content in flexbox
}

const Layout = ({
  children,
  direction = "column",
  justify = "start",
  align = "start",
  className = "",
  spacing = "space-y-4", // default vertical spacing
  wrap = false,
}: LayoutProps): JSX.Element => {
  // Base classes for the layout
  const baseClasses = `flex ${direction === "row" ? "flex-row" : "flex-col"} ${className}`;
  
  // Justify and Align dynamic classes
  const justifyClasses = justify ? `justify-${justify}` : "";
  const alignClasses = align ? `items-${align}` : "";
  
  // Spacing and wrap
  const spacingClass = spacing ? spacing : "";
  const wrapClass = wrap ? "flex-wrap" : "";
  
  // Combine all classes
  const layoutClasses = `${baseClasses} ${justifyClasses} ${alignClasses} ${spacingClass} ${wrapClass}`.trim();

  return <div className={layoutClasses}>{children}</div>;
};

export default Layout;
