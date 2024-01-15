import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import Layout from './components/Layout'
import { 
  FindBook, 
  BookClub, 
  Community, 
  NotFound,
  Register,
  BookList
 } from './pages'


function App() {
  const apiUrl = import.meta.env.VITE_API_URL
  const onSearch = async (query) => {
    try {
      const response = await fetch(`${apiUrl}/book_search?query=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("here is data from search:", data);
    } catch (error) {
      console.error('Search error:', error);
     
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout onSearch={onSearch}  />}> 
        <Route index element={<LandingPage />} />
        <Route path="find-book" element={<FindBook />} />
        <Route path="book-club" element={<BookClub />} />
        <Route path="community" element={<Community />} />
        <Route path="registration" element={<Register />} />
        <Route path='book_search' element={<BookList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
