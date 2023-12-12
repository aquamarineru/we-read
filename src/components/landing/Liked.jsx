import React, { useEffect, useState } from 'react';
import Title from '../Title';
import Container from '../Container';
import Carousel from '../Carousel';
import Card from '../Card';

export default function Liked() {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/data/books.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setBooks(data.books); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  if (!books || books.length === 0) {
    return null;
  }
  return (
    <div className='w-full h-screen bg-light relative'>
    <Container>
      <div className='flex flex-row items-center justify-around lg:justify-between py-5'>
        <Title>Because Linda liked</Title>
        <button
          className='text-primary hover:text-brand cursor-pointer transform transition-all hover:scale-105 ease-in-out hidden md:block text-sm'
          aria-label='See all recommendations'
        >
          See all
        </button>
      </div>
      <Carousel>
        {books.map((book) => (
          <Card key={book.ISBN} book={book} />
        ))}
      </Carousel>
      <img src='/assets/book_3.svg' alt='Book' className='hidden xl:block md:absolute bottom-0 right-0' />
    </Container>
  </div>
  )
}
