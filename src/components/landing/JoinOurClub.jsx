import React from 'react'
import Button from '../Button'

export default function JoinOurClub() {
  return (
    <div className='w-full h-screen bg-club bg-no-repeat mt-4 pt-4 bg-center'>
    <div className='flex flex-col justify-center items-center gap-2 md:gap-5'>
      <h2 className='text-2xl md:text-5xl lg:text-7xl font-semibold text-brand text-center pt-10'>Join our Book club</h2>
      <p className='text-sm px-4 md:text-xl text-center md:w-[500px]  lg:w-[600px] font-light'>We are here together. Meet your fellow booklovers and get involved in the conversation.</p>
      <Button>
        Let’s chat
      </Button>
    </div>
  </div>
  )
}
