"use client";

import React from 'react';

interface ButtonProps {
  label?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconOnly?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  disabled = false,
  onClick,
  size = 'md',
  iconOnly,
  iconLeft,
  iconRight
}) => {
  const sizeClasses = {
    sm: " py-2 px-4 w-[144px] h-[43px] text-sm",
    md: "p-4 text-base",
    lg: "px-5 py-3 text-lg w-[210px] h-[47.18px]",
  };
  
  const buttonContent = () => {
    if (iconOnly) {
      return (
        < >
          <span className='sr-only'> {label || 'Edit'}</span>
          <span className='text-black' aria-hidden='true' data-slot='icon'>{iconOnly}</span>
        </>
      )
    }

    return (
      <div className='flex justify-center items-center'>
        {iconLeft && <span className='mr-2'>{iconLeft}</span>}
        {label}
        {iconRight && <span className='ml-2'>{iconRight}</span>}
      </div>
    )
  }

  const isIconTextButton = iconLeft || iconRight; 

  return (
    <button
      className={`m-1 ${sizeClasses[size] || sizeClasses.md} rounded-full cursor-pointer ${
        disabled
          ? 'opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400'
          : isIconTextButton ? 'bg-transparent text-black' : 'bg-[#61529D] text-white hover:bg-purple-900'
        } ${ iconOnly ? 'bg-transparent hover:bg-transparent text-black px-4' : ''}
      `}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
    {buttonContent()}
    </button>
  )
}

export default Button                                           