import React from 'react';
import Container from './Container';
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";

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

const connect = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/weread',
    icon: <SlSocialFacebook />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/weread',
    icon: <SlSocialInstagram />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/weread',
    icon: <SlSocialYoutube />,
  },
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
          <h3>Connect</h3>
          <div className='flex items-center justify-around'>
            {connect.map((link) => (
              <a
                href={link.href}
                key={link.name}
                className="block bg-light p-4 rounded-full text-brand hover:text-primary pt-5"
              >
                {link.icon}
              </a>
            ))
            }
          </div>
        </div>
      </div>
      <div className="py-2 text-sm font-light">© WeRead, Inc. All Rights Reserved.</div>
      </Container>
    </div>
  );
}
