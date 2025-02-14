import { JSX } from 'react';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  color?: "blue" | "green" | "red" | "yellow" | "gray" | "purple"; // Badge color
  size?: "sm" | "md" | "lg"; // Badge size
  rounded?: "none" | "sm" | "md" | "lg" | "full"; // Border radius options
  variant?: "solid" | "outline"; // Badge variant (solid or outline)
  textColor?: "white" | "black"; // Text color
  className?: string; // Additional custom classes if needed
  icon?: ReactNode; // Optional icon to display next to the text
  isPill?: boolean; // Whether the badge should have a pill shape
}

const Badge = ({
  children,
  color = "blue",
  size = "md",
  rounded = "md",
  variant = "solid",
  textColor = "white",
  className = "",
  icon,
  isPill = false,
}: BadgeProps): JSX.Element => {

  // Badge color classes
  const colorClass = variant === "solid" ? `bg-${color}-500` : `border ${color === "blue" ? "border-blue-500" : color === "green" ? "border-green-500" : color === "red" ? "border-red-500" : color === "yellow" ? "border-yellow-500" : color === "gray" ? "border-gray-500" : "border-purple-500"} text-${color}-500`;

  // Text color classes
  const textColorClass = `text-${textColor}`;

  // Size classes
  const sizeClass = size === "sm" ? "text-xs px-2 py-1" : size === "lg" ? "text-lg px-4 py-2" : "text-sm px-3 py-1.5";

  // Border radius classes
  const roundedClass = rounded !== "none" ? `rounded-${rounded}` : isPill ? "rounded-full" : "";

  // Combine all classes
  const badgeClasses = `${colorClass} ${textColorClass} ${sizeClass} ${roundedClass} inline-flex items-center ${className} ${variant === "outline" ? "border-2" : ""}`;

  return (
    <span className={badgeClasses}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
