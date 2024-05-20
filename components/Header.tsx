import React from 'react'

const Header = () => {
  return (
    <div className=' sticky top-0 text-white pr-5 pl-5 pt-6 bg-gray-900 h-20 flex justify-between'>
        <div className=' h-10 w-10'><img src="/Heart.png" alt="" /></div>
        <div className='  flex flex-row space-x-6 '>
            <div className=''>Home</div>
            <div>About US</div>
            <div>Mission</div>
        </div>
        <div></div>
    </div>
  )
}

export default Header