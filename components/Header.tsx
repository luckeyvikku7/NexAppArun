import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
<nav className="bg-gradient-to-tr from-black to-slate-800 w-100 px-8 md:px-auto">
	<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">

		<div className="text-indigo-500 md:order-1">
	
			<Image src="/Logo.png" alt='Logo' width={50} height={50} />
		</div>
		{/* <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold justify-between">

				<li className="md:px-4 md:py-2 text-indigo-500"><a href="#">Dashboard</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Search</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Explore</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">About</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
			</ul>
		</div> */}

		<div className="order-2 md:order-3">
    <UserButton/>
		</div>
	</div>
</nav>
    </div>


    // <div classNameNameName=' sticky top-0 text-white pr-10 pl-10 pt-6 bg-black h-20 flex justify-between'>
    //     <div classNameNameName=' h-10 w-10'><img src="/Heart.png" alt="" /></div>
    //     <div classNameNameName='  flex space-x-6 '>
    //         <div classNameNameName=''>Home</div>
    //         <div>About US</div>
    //         <div>Mission</div>
    //         <div ><UserButton/></div>
    //     </div>
    // </div>
  )
}

export default Header