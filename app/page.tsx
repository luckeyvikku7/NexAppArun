
import React from "react";
import Header from '@/components/Header';
import Heart from "@/components/Heart";
import Image from "next/image";


export default function Home() {

  return (
        <div className=' min-h-screen bg-white '>
          <div className=" h-full w-full fixed bg-gradient-to-tr from-black to-gray-900" />
        <div><Header/></div>
        <div className=""><Heart/></div>
        </div>
  );
}
