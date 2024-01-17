import React from 'react';
import Button from './Button';
import Title from './Title';
import Tooltip from './Tooltip';

export default function Card({ book }) {
  function trimTitle(title) {
    const words = title.split(' ');
    if (words.length > 3) {
      return words.slice(0, 3).join(' ') + '...';
    }
    return title;
  }

  if (!book) {
    return null;
  }
  return (
    <div className='p-4 relative flex flex-col items-center' >
      <div className='absolute top-10 right-10 bg-bgSecondary/70 rounded-full p-3 lg:right-16 xl:right-10'>
        <img src='/assets/bookmark.svg' alt='Bookmark icon' />
      </div>
      <img src={book.cover_url} alt={`Cover of ${book.title}`} className='w-[200px] h-[250px] rounded-md p-2' />
      <div className='flex flex-col justify-between items-start  carousel-card'>
        <div className='uppercase flex items-center justify-between gap-2 py-2'>
          <div className='p-2 rounded-xl bg-bgSecondary text-primary text-xs'>
            {book.main_genre}
          </div>
          <div className='p-2 rounded-xl bg-bgSecondary text-primary text-xs'>
            {book.secondary_genre}
          </div>
        </div>
        <div className='flex flex-col items-start py-2'>
        <Tooltip text={book.title}>
            <Title type='small'>{trimTitle(book.title)}</Title>
          </Tooltip>
          <p className='text-sm text-text mt-4 pb-2'>{book.author.name}</p>
          <div className='flex items-center gap-2 py-2'>
            <img src='/assets/star.svg' alt='Star rating' />
            <span className='text-xl'>{book.rating}</span>
          </div>
          <Button type='bordered'>Go to Amazon</Button>
        </div>
      </div>
    </div>
  );
}