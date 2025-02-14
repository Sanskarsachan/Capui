import { JSX } from 'react';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  color?: "blue" | "green" | "red" | "yellow" | "gray" | "purple" | "pink" | "orange"; // Badge color with more options
  size?: "sm" | "md" | "lg"; // Badge size
  rounded?: "none" | "sm" | "md" | "lg" | "full"; // Border radius options
  variant?: "solid" | "outline"; // Badge variant (solid or outline)
  textColor?: "white" | "black"; // Text color
  className?: string; // Additional custom classes if needed
  icon?: ReactNode; // Optional icon to display next to the text
  iconSize?: "sm" | "md" | "lg"; // Icon size inside the badge
  isPill?: boolean; // Whether the badge should have a pill shape
  positionIcon?: "left" | "right"; // Position of the icon relative to text
  tooltip?: string; // Tooltip for showing information on hover
  style?: React.CSSProperties; // Custom styles for the badge
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
  iconSize = "sm",
  isPill = false,
  positionIcon = "left",
  tooltip,
  style,
}: BadgeProps): JSX.Element => {

  // Badge color classes
  const colorClass = variant === "solid" ? `bg-${color}-500` : `border ${color === "blue" ? "border-blue-500" : color === "green" ? "border-green-500" : color === "red" ? "border-red-500" : color === "yellow" ? "border-yellow-500" : color === "gray" ? "border-gray-500" : color === "pink" ? "border-pink-500" : color === "orange" ? "border-orange-500" : "border-purple-500"} text-${color}-500`;

  // Text color classes
  const textColorClass = `text-${textColor}`;

  // Size classes
  const sizeClass = size === "sm" ? "text-xs px-2 py-1" : size === "lg" ? "text-lg px-4 py-2" : "text-sm px-3 py-1.5";

  // Border radius classes
  const roundedClass = rounded !== "none" ? `rounded-${rounded}` : isPill ? "rounded-full" : "";

  // Icon size classes
  const iconSizeClass = iconSize === "sm" ? "text-xs" : iconSize === "md" ? "text-sm" : "text-lg";

  // Combine all classes
  const badgeClasses = `${colorClass} ${textColorClass} ${sizeClass} ${roundedClass} inline-flex items-center ${className} ${variant === "outline" ? "border-2" : ""} ${tooltip ? "cursor-pointer" : ""}`;

  return (
    <span className={badgeClasses} style={style} title={tooltip}>
      {icon && positionIcon === "left" && <span className={`mr-1 ${iconSizeClass}`}>{icon}</span>}
      {children}
      {icon && positionIcon === "right" && <span className={`ml-1 ${iconSizeClass}`}>{icon}</span>}
    </span>
  );
};

export default Badge;
