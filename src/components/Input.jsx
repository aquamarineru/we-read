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
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    try {
      const token = import.meta.env.VITE_AUTH_EMAIL_TOKEN; 
      const response = await fetch(`${apiUrl}/email_subscription/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({ email: email }),
      });
      console.log('Using token:', token);
      if (!response.ok) {
        const text = await response.text();
        setError(text || 'An error occurred while saving the email.');
        console.error('Server error:', text);
        return;
      }
  
      const data = await response.json();
      console.log('Email saved:', data);
      setEmail('');
      setError(''); 
  
    } catch (error) {
      setError('Network error: Could not send email to the server.');
      console.error('Fetch error:', error);
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
