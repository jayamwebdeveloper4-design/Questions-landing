import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50';

  const sizeStyles = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base',
  };

  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary/90',
    secondary:
      'bg-secondary text-white hover:bg-secondary/90',
    outline:
      'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    ghost:
      'bg-transparent text-gray-700 hover:bg-gray-100',
    destructive:
      'bg-red-600 text-white hover:bg-red-700',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;