import type { ReactNode, ButtonHTMLAttributes, JSX } from "react";
import "./Button.css";

/**
 * Size options for the button component
 * @typedef {'sm' | 'md' | 'lg' | 'xl'} ButtonSize
 */
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Shape options for the button corners
 * @typedef {'square' | 'rounded' | 'pill'} ButtonShape
 */
type ButtonShape = 'square' | 'rounded' | 'pill';

/**
 * Properties for the Button component
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Content to be rendered inside the button */
  children: ReactNode;
  
  /** Visual style variant of the button 
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
  
  /** Horizontal alignment within container 
   * @default "center"
   */
  align?: "left" | "center" | "right";
  
  /** Size preset for the button 
   * @default "md"
   */
  size?: ButtonSize;
  
  /** Corner shape style 
   * @default "rounded"
   */
  shape?: ButtonShape;
  
  /** Whether the button should take full width 
   * @default false
   */
  fullWidth?: boolean;
  
  /** Loading state - disables button and shows spinner 
   * @default false
   */
  isLoading?: boolean;
  
  /** Whether to show a subtle animation on hover 
   * @default true
   */
  animated?: boolean;
  
  /** Custom icon to show before the button text */
  leftIcon?: ReactNode;
  
  /** Custom icon to show after the button text */
  rightIcon?: ReactNode;
}

/**
 * A highly customizable button component that supports multiple variants,
 * sizes, shapes, and states. Includes support for icons, loading states,
 * and animations.
 *
 * @example
 * // Basic usage
 * <Button variant="primary">Click me</Button>
 *
 * @example
 * // With icons and loading state
 * <Button 
 *   variant="secondary"
 *   leftIcon={<Icon name="settings" />}
 *   isLoading={true}
 *   size="lg"
 * >
 *   Settings
 * </Button>
 */
const Button = ({
  children,
  variant = "primary",
  align = "center",
  size = "md",
  shape = "rounded",
  fullWidth = false,
  isLoading = false,
  animated = true,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps): JSX.Element => {
  // Compose class names based on props
  const baseClasses = "button";
  
  const variantClasses = {
    primary: "button-primary",
    secondary: "button-secondary",
    danger: "button-danger",
    outline: "button-outline",
    ghost: "button-ghost"
  };

  const sizeClasses = {
    sm: "button-sm",
    md: "button-md",
    lg: "button-lg",
    xl: "button-xl"
  };

  const shapeClasses = {
    square: "button-square",
    rounded: "button-rounded",
    pill: "button-pill"
  };

  const alignmentClasses = {
    left: "button-left",
    center: "button-center",
    right: "button-right"
  };

  // Combine all classes conditionally
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    shapeClasses[shape],
    fullWidth ? 'button-full-width' : '',
    isLoading ? 'button-loading' : '',
    animated ? 'button-animated' : '',
    disabled ? 'button-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`button-container ${alignmentClasses[align]} ${fullWidth ? 'w-full' : ''}`}>
      <button 
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className="button-spinner" aria-hidden="true" />
        )}
        {leftIcon && (
          <span className="button-icon button-icon-left">
            {leftIcon}
          </span>
        )}
        <span className="button-content">{children}</span>
        {rightIcon && (
          <span className="button-icon button-icon-right">
            {rightIcon}
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;