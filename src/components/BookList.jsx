import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className='mt-24'>
      {books.map(book => (
        <div key={book.id}>
          <p>{book.title}</p>
          <p>{book.author.name}</p>
          <p>{book.isbn}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
