import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.isbn}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
