import React from 'react'

import Hero from './landing/Hero'
import PersonalRecom from './landing/PersonalRecom'
import Liked from './landing/Liked'
import Suggests from './landing/Suggests'

export default function LandingPage() {
  return (
    <div>
        <Hero />
        <PersonalRecom />
        <Liked  />
        <Suggests />
      
    </div>
  )
}
