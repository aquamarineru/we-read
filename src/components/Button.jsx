import React from 'react'

export default function Button({ children, type, onClick, ariaLabel, disabled}) {
    if (type === 'bordered') {
        return (
          <button
            className='border border-primary  md:py-4 md:text-base hover:text-light hover:bg-hoverSecondary focus:border-[#FF813A] active:bg-border transition  h-11 rounded-[40px] px-4 py-1.5 text-base md:px-8 md:h-14 text-primary font-semibold hover:text-white   duration-300 ease-in-out'
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
          className='bg-primary h-11 rounded-[40px] px-4 py-1.5 text-base md:px-8 md:h-14 text-white font-semibold hover:bg-hover hover:text-white focus:border-border active:bg-border transition duration-300 ease-in-out'
          aria-label={ariaLabel}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
}
