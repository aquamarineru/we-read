import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";

export default function Search({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText) {
      navigate(`/book_search?query=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <div className="hidden md:block md:pl-4 flex-grow "> 
      <form onSubmit={handleSubmit} className="flex items-center relative ">
        <button type="submit" className="text-sm absolute px-6" aria-label="Search">
          <img src="/assets/search.svg" alt="Search" style={{ width: '24px', height: '24px' }} />
        </button>
        <input
          type="text"
          placeholder="Search by Title, Author, or ISBN"
          value={searchText}
          onChange={handleInputChange}
          className="w-full h-14 pl-14 rounded-full text-base focus:outline-none focus:ring focus:border-primary"
          style={{ maxWidth: '350px' }}
        />
      </form>
    </div>
  );
}
