import React, { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Input() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;
  const validateEmail = (email) => {
    return email.match(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (validateEmail(email)) {
      setError(''); 
      try {
        const response = await fetch(`${apiUrl}/emails`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Email saved:', data);
          
          setEmail(''); 
        } else {
          
          setError(data.message || 'An error occurred while saving the email.');
        }
      } catch (error) {
        setError('Network error: Could not send email to the server.');
        console.error('Fetch error:', error);
      }
    } else {
      setError('Please enter a valid email address.');
    }
  }


  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 bg-white rounded-full px-2 relative md:w-[400px]">
      <input 
        className={`flex-grow px-4 py-2 rounded-full text-sm focus:outline-none focus:border-primary focus:border-[1px] ${error ? 'border-[1px] border-[#ff0000] ' : ''}`} 
        type="email" 
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-invalid={error ? "true" : "false"}
      />
      {error && <p className="text-red-500 text-xs absolute left-0 -bottom-6">{error}</p>}
      <button 
        type="submit"
        className="flex items-center justify-center px-4 rounded-r-full transition-all duration-300 ease-in-out bg-white hover:bg-gray-100 absolute right-0 top-0 bottom-0"
      >
        <IoIosArrowRoundForward size={24} />
      </button>
    </form>
  );
}
