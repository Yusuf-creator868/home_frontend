import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ScrollToTop from './ScrollTop'

export default function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen '>
      <main className='flex-grow'>
        <ScrollToTop />
        <Outlet/>
      </main>
      {/* <Footer/> */}
    </div>
  )
}