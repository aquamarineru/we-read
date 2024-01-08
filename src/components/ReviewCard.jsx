import React from 'react';
import Title from './Title';

const ReviewCard = ({ review, type }) => {
  return (
    <div className="p-4 flex flex-col justify-between">
      {type === 'primary' ? (
        <div className="flex bg-bgSecondary flex-col items-start py-4 px-4 gap-2 lg:py-6 lg:px-10 md:gap-4 rounded-xl">
          <h3 className='text-primary text-base md:text-xl'>Editor&rsquo;s review</h3>
          <div className='flex flex-col items-center lg:flex-row lg:items-start justify-between'>
          <img src={review.image} alt={review.title} className=" w-32 md:w-1/2 object-cover rounded" />
            <div className="lg:ml-4">
                <div className='flex items-center gap-2 mt-4'>
                    <img src={review.author_img} alt="author" />
                    <h3 className='text-sm'>{review.author} </h3>
                </div>
              <Title type="small">{review.title}</Title>
              <div className='flex items-center gap-2 py-2'>
                <img src='/assets/star.svg' alt='Star rating' />
                <span className='text-base md:text-xl'>{review.rating}</span>
              </div>
            </div>
          </div>
            <p className="text-sm">{review.description}</p>
            <button className='text-input text-sm hover:text-primary cursor-pointer transform-translate'>Read the full review</button>
          </div>
      ) : (
          <div className=" flex flex-col-reverse items-center md:flex-row md:items-start">
          <div className='flex flex-col items-start gap-2'>
          <div className='flex items-center gap-2 mt-4'>
                    <img src={review.author_img} alt="author" />
                    <h3 className='text-sm'>{review.author} </h3>
                </div>
              <Title type="small">{review.title}</Title>
              <div className='flex items-center gap-2 py-2'>
                <img src='/assets/star.svg' alt='Star rating' />
                <span className='text-base md:text-xl'>{review.rating}</span>
              </div>
            <p className="text-sm">{review.description}</p>
            <button className='text-input text-sm hover:text-primary cursor-pointer'>Read the full review</button>
          </div>
          <img src={review.image} alt={review.title} className=" w-32 md:w-1/4 object-cover rounded" />
          </div>
      )}
    </div>
  );
};

export default ReviewCard;
