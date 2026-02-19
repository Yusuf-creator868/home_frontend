import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter,} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className='w-full py-2 text-center bg-blue-950 text-white'>
            <div className='flex justify-center mb-2'>
                <a href="#" className='text-white mx-2'><FaFacebook/></a>
                <a href="#" className='text-white mx-2'><FaTwitter/></a>
                <a href="#" className='text-white mx-2'><FaInstagram/></a>
            </div>
            <p className='small mb-0'>&copy; Rent</p>
    </footer>
  )
}