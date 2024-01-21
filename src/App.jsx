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
  BookSearchPage
 } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout  />}> 
        <Route index element={<LandingPage />} />
        <Route path="find-book" element={<FindBook />} />
        <Route path="book-club" element={<BookClub />} />
        <Route path="community" element={<Community />} />
        <Route path="registration" element={<Register />} />
        <Route path='/book_search' element={<BookSearchPage  />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
