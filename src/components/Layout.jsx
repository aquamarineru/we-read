import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ onSearch }) {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar onSearch={onSearch} />
        <main className="flex-grow">
          <Outlet />
        </main>
{/*         <Footer /> */}
    </div>
  )
}
