import React, { useState } from 'react'

import Search from './Search';


const links = [
    { href: '/', label: 'Home' },
    { href: '/find-book', label: 'Find a Book' },
    { href: '/book-club', label: 'Book Club' },
    { href: '/community', label: 'Community' },
  ];


export default function Navbar({ onSearch }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);
    const filteredLinks = links.filter((link) => link.label !== 'Home');

  return (
    <header className="bg-bgSecondary fixed left-0 top-0 w-full p-4 z-10 h-20 md:h-[104px] 2xl:px-[184px] ">
      <div className="container mx-auto flex items-center justify-between md:px-12 lg:px-20 ">
        <div className='flex flex-grow items-center  md:flex-row'>
          <a href="/" className='cursor-pointer'>
            <img src='/assets/Logo.png' alt="Logo" className="h-11 w-11 md:w-[66px] md:h-[66px]" />
          </a>
          <Search onSearch={onSearch} />
        </div>
        <div className="lg:flex hidden space-x-4 cursor-pointer ml-4 ">
        {filteredLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-black text-base hover:text-primary"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
          <span> | </span>
        </div>
        <button
          className="lg:hidden block text-white text-2xl z-20"
          onClick={toggleMenu}
        >
          {
            isOpen 
              ? '✕' 
              : <img src="/assets/burger.svg" alt="Menu" style={{ width: '24px', height: '24px' }} />
          }
        </button>
        <nav
          className={`lg:hidden fixed h-screen inset-0 flex flex-col justify-center transition-transform top-0 left-0 w-full transition-height transform items-center bg-bgSecondary z-0 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-screen py-8 space-y-4 text-white text-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-semibold hover:text-gray-300"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
        <div className="hidden px-2 md:flex flex-row gap-1 ml-3 items-center cursor-pointer hover:text-hover">
          <img src="/assets/person.svg" alt="person" className='pl' style={{ width: '24px', height: '24px' }}/>
          <span className="text-base">My shelf</span>
        </div>
      </div>
    </header>
  )
}
