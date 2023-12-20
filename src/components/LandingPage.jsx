import React from 'react'

import Hero from './landing/Hero'
import PersonalRecom from './landing/PersonalRecom'
import Liked from './landing/Liked'
import Suggests from './landing/Suggests'
import InputField from './landing/InputField'

export default function LandingPage() {
  return (
    <div className='flex flex-col '>
        <Hero />
        <PersonalRecom />
        <Liked  />
        <Suggests />
        <InputField />
    </div>
  )
}
