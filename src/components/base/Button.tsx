'use client';

import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactElement
} from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
type Variant = 'filled' | 'outlined';
type Size = 'small' | 'medium' | 'large';
type Type = 'button' | 'submit' | 'reset';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: Color;
  variant?: Variant;
  size?: Size;
  type?: Type;
  className?: string;
}

const Button = ({
  startIcon,
  endIcon,
  color = 'primary',
  variant = 'filled',
  size = 'medium',
  type = 'button',
  className,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const baseClass = `flex items-center justify-center font-medium 
    focus:outline-none transition-all border duration-200 cursor-pointer`;

  const sizeClasses: Record<Size, string> = {
    small: 'px-3 py-1.5 text-sm rounded-sm',
    medium: 'px-4 py-2 text-base rounded-md',
    large: 'px-5 py-2.5 text-lg rounded-lg'
  };

  const variantClasses: Record<Color, Record<Variant, string>> = {
    primary: {
      filled:
        'bg-primary text-white border border-primary hover:bg-primary-hover hover:border-primary-hover',
      outlined:
        'border border-primary text-primary hover:bg-primary-subtle hover:text-primary-hover'
    },
    secondary: {
      filled:
        'bg-secondary text-primary border border-secondary hover:bg-secondary-hover hover:border-secondary-hover',
      outlined:
        'border border-secondary text-secondary hover:bg-secondary-subtle hover:text-secondary-hover'
    },
    success: {
      filled: classNames(
        'bg-success text-white border border-success hover:bg-success-hover hover:border-success-hover'
      ),
      outlined:
        'border border-success text-success hover:bg-success-subtle hover:text-success-hover'
    },
    warning: {
      filled:
        'bg-warning text-white border border-warning hover:bg-warning-hover hover:border-warning-hover',
      outlined:
        'border border-warning text-warning hover:bg-warning-subtle hover:text-warning-hover'
    },
    danger: {
      filled:
        'bg-danger text-white border border-danger hover:bg-danger-hover hover:border-danger-hover',
      outlined:
        'border border-danger text-danger hover:bg-danger-subtle hover:text-danger-hover'
    }
  };

  const buttonClass = twMerge(
    baseClass,
    sizeClasses[size],
    variantClasses[color][variant],
    className
  );
  return (
    <button type={type} className={buttonClass} {...rest}>
      {React.isValidElement(startIcon)
        ? React.cloneElement(startIcon as ReactElement<any>, {
            className: classNames(
              (startIcon as ReactElement<any>).props?.className,
              'me-2'
            )
          })
        : startIcon}

      {children}

      {React.isValidElement(endIcon)
        ? React.cloneElement(endIcon as ReactElement<any>, {
            className: classNames(
              (endIcon as ReactElement<any>).props?.className,
              'ms-2'
            )
          })
        : endIcon}
    </button>
  );
};

export default Button;
