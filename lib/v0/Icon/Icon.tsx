import React, { ReactNode } from 'react';
import { IconType } from 'react-icons'; // If using `react-icons` or any icon library

interface IconProps {
  icon: ReactNode | IconType; // Icon can be a React component or ReactNode (JSX element)
  size?: string; // Size of the icon (e.g., 'text-lg', 'text-2xl')
  color?: string; // Color of the icon (e.g., 'text-blue-500', 'text-gray-800')
  className?: string; // Additional custom classes if needed
  style?: React.CSSProperties; // Custom styles for more flexibility
}

const Icon = ({ icon, size = 'text-base', color = 'text-black', className = '', style = {} }: IconProps): JSX.Element => {
  // Class for the icon size and color
  const iconClasses = `${size} ${color} ${className}`;

  // Render the icon properly, checking if it is a string (for image URL) or a component
  return (
    <span className={iconClasses} style={style}>
      {typeof icon === 'string' ? (
        <img src={icon} alt="icon" className="inline-block" />
      ) : (
        // Ensure that we render the icon as a JSX element if it's an IconType
        React.createElement(icon as React.ElementType)
      )}
    </span>
  );
};

export default Icon;
