
import React from "react";
import Header from '@/components/Header';
import Heart from "@/components/Heart";

export default function Home() {

  return (
    <div className=' min-h-screen bg-white'>
    <div><Header/></div>
    <div className=""><Heart/></div>
    </div>
    
  );
}
