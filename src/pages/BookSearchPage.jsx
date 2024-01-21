import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookList from '../components/BookList';

const BookSearchPage = () => {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_AUTH_SEARCH_TOKEN;

  useEffect(() => {
    const fetchBooks = async () => {
      const query = searchParams.get("query");
      if (!query) return;

      try {
        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        });
  
        const response = await fetch(`${apiUrl}/book_search?search_text=${encodeURIComponent(query)}`, {
          method: 'GET',
          headers: headers,
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Search error:', error);
      }
    };

    fetchBooks();
  }, [searchParams, apiUrl, token]); // Including apiUrl and token as dependencies

  return (
    <div>
      <BookList books={books} />
    </div>
  );
};

export default BookSearchPage;
