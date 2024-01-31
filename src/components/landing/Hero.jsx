import React from 'react'

import Button from '../Button'

export default function Hero() {
  return (
    <div className='w-full h-full bg-bgSecondary flex flex-col items-center justify-center py-16 md:py-24 lg:py-40 wave-background 2xl:px-[184px]'>
      <div className='flex-grow flex flex-col items-center justify-center gap-2 md:gap-6 px-4 text-center mt-[104px] lg:pb-0'>
            <h1 className='text-[40px] leading-[44px] font-semibold text-brand  md:text-6xl lg:text-[92px]'> Find your next <br /> best read </h1>
            <Button
            aria-label='Choose a book'
            >Choose a book</Button>
        </div>
        <div className='w-full flex md:justify-center lg:justify-between lg:px-0 '>
          <img src="/assets/image_left.svg" alt="left" className="w-[254px] md:w-[414px] " />
          <img src="/assets/image_right.svg" alt="right" className="hidden lg:inline-block" /> 
      </div>
    </div>
  )
}
