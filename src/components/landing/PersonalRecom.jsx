import React, { useEffect } from 'react';
import Title from '../Title';
import Container from '../Container';
import Carousel from '../Carousel';
import Card from '../Card';
import Loader from '../Loader';

export default function PersonalRecom({books}) {
  useEffect(() => {
    const adjustCardHeights = () => {
      const cards = document.querySelectorAll('.carousel-card');
      let maxHeight = 0;
      cards.forEach(card => {
        card.style.height = 'auto';
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });
      cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    };

    adjustCardHeights();
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
