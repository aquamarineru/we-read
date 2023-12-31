import React, { useEffect, useState } from 'react';
import Title from '../Title';
import Container from '../Container';
import Carousel from '../Carousel';
import Card from '../Card';

export default function PersonalRecom() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = import.meta.env.VITE_AUTH_PERSONAL_TOKEN;
    fetch(`${apiUrl}/personal_recommendations`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`, 
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setBooks(data.recommended_books);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);
    // New useEffect for adjusting card heights
    useEffect(() => {
      const adjustCardHeights = () => {
        // Query all card elements
        const cards = document.querySelectorAll('.carousel-card');
        let maxHeight = 0;
  
        // Reset the height to compute the maximum height
        cards.forEach(card => {
          card.style.height = 'auto';
          maxHeight = Math.max(maxHeight, card.offsetHeight);
        });
  
        // Apply the maximum height to all cards
        cards.forEach(card => {
          card.style.height = `${maxHeight}px`;
        });
      };
  
      adjustCardHeights();
  
      // Re-run when window resizes or books data changes
      window.addEventListener('resize', adjustCardHeights);
      return () => window.removeEventListener('resize', adjustCardHeights);
    }, [books]);
  if (!books || books.length === 0) {
    return null;
  }

  return (
    <div className='w-full h-screen bg-light relative'>
      <Container>
        <div className='flex flex-row items-center justify-around lg:justify-between py-5'>
          <Title>Personal Recommendation</Title>
          <button
            className='text-primary hover:text-brand cursor-pointer transform transition-all hover:scale-105 ease-in-out hidden md:block text-sm'
            aria-label='See all recommendations'
          >
            See all
          </button>
        </div>
        <Carousel>
          {books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </Carousel>
        <img src='/assets/book_2.svg' alt='Book' className='hidden xl:block md:absolute bottom-0 left-0' />
      </Container>
    </div>
  );
}
