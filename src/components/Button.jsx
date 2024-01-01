import React from 'react'

export default function Button({ children, type, onClick, ariaLabel, disabled}) {
    if (type === 'bordered') {
        return (
          <button
            className='border border-primary rounded-full px-6 py-3 text-primary md:px-8 md:py-4 md:text-base hover:text-light hover:bg-hoverSecondary focus:border-[#FF813A] active:bg-border transition duration-300 ease-in-out'
            aria-label={ariaLabel}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </button>
        );
      }
      return (
        <button
          className='bg-primary rounded-full px-6 py-3 text-sm md:px-8 md:py-4 md:text-base text-light font-light hover:bg-hover hover:text-white focus:border-border active:bg-border transition duration-300 ease-in-out'
          aria-label={ariaLabel}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
}
