import React, { useState, useEffect } from 'react'

import Hero from './landing/Hero'
import PersonalRecom from './landing/PersonalRecom'
import FriendsLiked from './landing/Liked'
import InputField from './landing/InputField'
import Suggests from './landing/Suggests'
import Review from './landing/Review'
import ReadingGirl from './landing/ReadingGirl'
import JoinOurClub from './landing/JoinOurClub'
import Loader from './Loader'

export default function LandingPage() {
  const [landingData, setLandingData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
console.log('landingData', landingData);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = import.meta.env.VITE_AUTH_PERSONAL_TOKEN;

    fetch(`${apiUrl}/personal_recommendations`, { 
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`,
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setLandingData(data); 
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
    .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!landingData) {
    return null; 
  }

  return (
    <div className='flex flex-col'>
       {isLoading ? (
      <Loader />
    ) : (
      <>
        <Hero />
        <PersonalRecom books={landingData.recommended_books} />
        <FriendsLiked />
        <Suggests />
        <InputField />
        <Review />
        <ReadingGirl />
        <JoinOurClub />
      </>
    )}
    </div>
  )
}
