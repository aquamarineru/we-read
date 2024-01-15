import React, { useState } from 'react'

import { IoSearchOutline } from "react-icons/io5";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex-grow "> 
      <form onSubmit={handleSubmit} className="flex items-center relative">
          <button
          type="submit"
          className="text-sm absolute pl-2"
          aria-label="Search"
        >
          <IoSearchOutline />
        </button>
        <input
          type="text"
          placeholder="Search by Title, Author or ISBN"
          value={query}
          onChange={handleInputChange}
          className="w-full p-2 pl-8 rounded-full text-xs font-light focus:outline-none focus:ring focus:border-primary"
          style={{ maxWidth: '350px' }}
        />
        
      </form>
    </div>
  )
}
