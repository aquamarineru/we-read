import React, { useState, useEffect } from 'react'
import Title from '../Title'
import Container from '../Container'

export default function Suggests() {
    const [suggests, setSuggests] = useState([]);

    useEffect(() => {
      fetch('/data/suggests.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setSuggests(data.suggests))
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }, []);
  
    return (
      <div className='w-full h-full bg-light'>
        <Container>
          <Title title='Suggests'>WeRead suggests</Title>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-10'>
            {suggests.map((suggest, index) => (
              <div key={index} className='flex flex-col items-start justify-center gap-2'>
                <img src={suggest.image} alt={suggest.title} className='' />
                <Title type="small" className='text-primary font-semibold text-xl'>{suggest.title}</Title>
                <p className='text-text font-light text-sm'>{suggest.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
