import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoArrowBackCircleSharp, IoArrowForwardCircle } from 'react-icons/io5';

const NextArrow = ({ onClick }) => (
    <img 
    src='/assets/arrow_right.svg' 
    onClick={onClick}
    alt='Arrow right' className='w-12 h-12 bg-white p-2 rounded-full shadow-custom absolute top-[20%] z-10 right-0' />
);

const PrevArrow = ({ onClick }) => (
  <img src='/assets/arrow_left.svg'
  onClick={onClick}
  alt='Arrow left' className='w-12 h-12 bg-white p-2 rounded-full shadow-custom absolute top-[20%] z-10 ' />
);

export default function Carousel({ children }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
          breakpoint: 1025, 
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600, 
          settings: {
            slidesToShow: 1
          }
        }
      ]
  };

  return (
    <div className='px-3'>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}


 {/* <IoArrowForwardCircle 
  onClick={onClick}
  style={{
    color: "#F2EFFC", 
    fontSize: "50px", 
    position: 'absolute', 
    top: '40%', 
    right: '-30px',
    transform: 'translateY(-40%)'
  }} 
    /> 
  
  <IoArrowBackCircleSharp  
  onClick={onClick}
  style={{
    color: "#F2EFFC", 
    fontSize: "50px", 
    position: 'absolute', 
    top: '40%', 
    left: '-30px',
    transform: 'translateY(-40%)'
  }}  
  />*/}