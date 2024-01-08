import React, { useState, useEffect } from 'react'

import Title from '../Title'
import Container from '../Container'
import ReviewCard from '../ReviewCard';

export default function Review() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/data/reviews.json')
        .then((response) => response.json())
        .then((data) => {
          setReviews(data.reviews);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [])

    if (!reviews || reviews.length === 0) {
        return null;
      }

  return (
    <div className='h-full w-full'>
        <Container>
            <Title> Top reviews of the week</Title>
            <div className='flex flex-col md:flex-row justify-between md:gap-2'>
                <div className=''>
                    {reviews.slice(0, 1).map((review) => (
                    <ReviewCard key={review.id} review={review} type="primary" />
                    ))}
                </div>
          <div className=''>
            {reviews.slice(1).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
        </Container>
    </div>
  )
}
