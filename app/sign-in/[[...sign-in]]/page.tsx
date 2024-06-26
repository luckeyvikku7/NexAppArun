import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-blend-darken">
    <Image alt="BgImage"
   quality="50"
   layout="fill" src='/1330529.png' className=""/>
  <div className=" flex justify-center pt-20 lg:absolute top-10 right-24 "><SignIn/></div>
</div>
  );
}