'use client'

import { useState, useEffect } from 'react';
import TicketList from '@/components/card';
import React from 'react'
import Image from 'next/image';

const Heart = () => {


    const [showComponent, setShowComponent] = useState(false); // State to manage component visibility
    
    const handleClick = () => {
        setShowComponent(true); 
    };



  return (
    <div className=' pt-20 pb-20'>
        <div className=' flex justify-center'> 
        <Image
            onClick={() => handleClick()}
            style={{cursor: 'pointer'}}
            className="HeartLogo animate-pulse dark:drop-shadow-[0_0_0.3rem_#FF7052]"
            src="/Heart.png"
            alt="Heart Logo"
            width={180}
            height={37}
            ></Image>

        </div>
        <div>
        {showComponent && <TicketList />} 
        </div>
      
    </div>
  )
}

export default Heart