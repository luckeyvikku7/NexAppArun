
import React from "react";
import Header from '@/components/Header';
import Heart from "@/components/Heart";
import Image from "next/image";


export default function Home() {

  return (
        <div className=' min-h-screen bg-black '>
          <div><Header/></div>
          <div className=" h-full w-full fixed bg-gradient-to-tr from-black to-gray" />
        
        <div className=""><Heart/></div>
        </div>
  );
}
