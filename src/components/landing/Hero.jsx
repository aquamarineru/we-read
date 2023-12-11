import React from 'react'

import Button from '../Button'

export default function Hero() {
  return (
    <div className='w-full h-full bg-bgSecondary flex flex-col items-center justify-center py-16 md:py-24 lg:py-40 wave-background'>
      <div className='flex-grow flex flex-col items-center justify-center gap-5 px-4 pt-12 text-center py-5 lg:pb-0'>
            <h1 className='text-4xl font-semibold text-brand leading-tight md:text-6xl lg:text-7xl'> Find your next <br /> best read </h1>
            <Button
            aria-label='Choose a book'
            >Choose a book</Button>
        </div>
        <div className='w-full flex justify-center lg:justify-between lg:items-end'>
        <img src="/assets/image_left.png" alt="left" className="w-1/2 lg:w-auto   lg:left-0 lg:inline-block lg:h-full" />
        <img src="/assets/image_right.png" alt="right" className="hidden lg:inline-block lg:right-0 " />
      </div>
    </div>
  )
}
