import React, { ReactNode } from "react";
import "./Badge.css"; // Import the CSS file

interface BadgeProps {
  children: ReactNode;
  color?: "blue" | "green" | "red" | "yellow" | "gray" | "purple" | "pink" | "orange"; 
  size?: "sm" | "md" | "lg"; 
  rounded?: "none" | "sm" | "md" | "lg" | "full"; 
  variant?: "solid" | "outline"; 
  textColor?: "white" | "black"; 
  className?: string; 
  icon?: ReactNode; 
  iconSize?: "sm" | "md" | "lg"; 
  isPill?: boolean; 
  positionIcon?: "left" | "right"; 
  tooltip?: string; 
  style?: React.CSSProperties; 
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

  const badgeClasses = [
    "badge",
    `badge-${size}`,
    `badge-${variant}`,
    `badge-${color}`,
    `badge-text-${textColor}`,
    rounded !== "none" ? `badge-rounded-${rounded}` : isPill ? "badge-pill" : "",
    tooltip ? "tooltip" : "",
    className
  ].join(" ");

  const iconSizeClass = iconSize === "sm" ? "text-xs" : iconSize === "md" ? "text-sm" : "text-lg";
  
  return (
    <span className={badgeClasses} style={style} data-tooltip={tooltip}>
      {icon && positionIcon === "left" && <span className={`badge-icon-left ${iconSizeClass}`}>{icon}</span>}
      {children}
      {icon && positionIcon === "right" && <span className={`badge-icon-right ${iconSizeClass}`}>{icon}</span>}
    </span>
  );
};

export default Badge;
