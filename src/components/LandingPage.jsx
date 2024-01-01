import React from 'react'

import Hero from './landing/Hero'
import PersonalRecom from './landing/PersonalRecom'
import FriendsLiked from './landing/FriendsLiked'
import InputField from './landing/InputField'
import Suggests from './landing/Suggests'

export default function LandingPage() {
  return (
    <div className='flex flex-col '>
        <Hero />
        <PersonalRecom />
        <FriendsLiked  />
        <Suggests />
        <InputField />
    </div>
  )
}
