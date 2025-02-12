import type { ReactNode, ButtonHTMLAttributes, JSX } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
  align?: "left" | "center" | "right"; // New align prop
}

const Button = ({
  children,
  variant = "primary", 
  align = "center", // Default to center alignment
  className = "",
  ...props
}: ButtonProps): JSX.Element => {
  // Base classes for the button
  const baseClasses =
    "py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Add variant-based styles
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  // Alignment handling (wrap the button in a container div with flex)
  const alignmentClasses = {
    left: "flex justify-start",
    center: "flex justify-center",
    right: "flex justify-end",
  };

  // Combine all the classNames
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={alignmentClasses[align]}>
      <button className={buttonClasses} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
