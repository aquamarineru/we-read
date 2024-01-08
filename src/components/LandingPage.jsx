import React from 'react'

import Hero from './landing/Hero'
import PersonalRecom from './landing/PersonalRecom'
import FriendsLiked from './landing/Liked'
import InputField from './landing/InputField'
import Suggests from './landing/Suggests'
import Review from './landing/Review'

export default function LandingPage() {
  return (
    <div className='flex flex-col '>
        <Hero />
        <PersonalRecom />
        <FriendsLiked  />
        <Suggests />
        <InputField />
        <Review />
    </div>
  )
}
