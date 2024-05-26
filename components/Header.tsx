import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <div className=' sticky top-0 text-white pr-10 pl-10 pt-6 bg-black h-20 flex justify-between'>
        <div className=' h-10 w-10'><img src="/Heart.png" alt="" /></div>
        <div className='  flex space-x-6 '>
            <div className=''>Home</div>
            <div>About US</div>
            <div>Mission</div>
            <div ><UserButton/></div>
        </div>
    </div>
  )
}

export default Header