import React from 'react';
import Container from './Container';

const links = [
  {
    name: 'Search',
    href: '/search',
  },
  {
    name: 'Book Lists',
    href: '/book-lists',
  },
  {
    name: 'Join a Book Club',
    href: '/book-club',
  },
  {
    name: 'About Us',
    href: '/about-us',
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
  {
    name: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    name: 'Terms of Service',
    href: '/terms-of-service',
  },
  {
    name: 'Cookie Settings',
    href: '/cookie-settings',
  }
];

export default function Footer() {
  

  return (
    <div className=" bg-brand w-full  -mt-5 pt-2 text-light">
      <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <div className="col-span-1 md:col-span-3 grid grid-cols-3 gap-4">
          {links.map((link) => (
            <a href={link.href} key={link.name} className="block hover:text-primary">
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="col-span-1">
          <div>Social Media</div>
        </div>
      </div>

      <div className="text-center py-2">© WeRead, Inc. All Rights Reserved.</div>
      </Container>
    </div>
  );
}
