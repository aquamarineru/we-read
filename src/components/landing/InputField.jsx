import React from 'react'
import Title from '../Title'
import Input from '../Input'
import Container from '../Container'

export default function InputField() {
  return (
    <div className="w-full h-full bg-light py-14">
      <Container>
        <div className='bg-primary py-10 px-4 flex flex-col items-center rounded-3xl relative'>
        <img src="/assets/book_1.svg" alt="book_1"
        className='absolute -top-12 left-0 w-16 lg:w-auto' />
          <div className='py-4 px-2 w-[290px] md:w-[450px] flex flex-col items-center justify-center gap-2 md:gap-4  '>
            <h3 className="text-light text-center lg:text-xl">
              Monthly digests and the most important news from the world of books - in your email.
            </h3>
            <Input />
            <img src="/assets/book_stack_2.svg" alt="book_2" className='absolute -bottom-5  w-24 left-16 lg:w-auto lg:-bottom-10 hidden md:block' />
          </div>
        <img src="assets/book_stack_1.svg" alt="book_2" className=' absolute -bottom-5 right-0 w-24 lg:w-auto lg:-bottom-10' />
        </div>
      </Container>
    </div>
  )
}
