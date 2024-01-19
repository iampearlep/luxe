import React from 'react'
import Navbar from './Navbar'
import SignOut from '@/app/(auth)/components/SignOut'

const Header = () => {
  return (
    <div className='flex flex-row w-full mx-auto items-center'>
       <div className='w-10/12 md:w-11/12'> <Navbar /></div>
       <div className='w-3/12 md:w-1/12'> <SignOut /></div>
    </div>
  )
}

export default Header