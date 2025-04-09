"use client";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import React  from "react";
import Authentication from "./Authentication";
import { useAuthContext } from "../provider";
import Link from "next/link";


function Header() {
  const { user } = useAuthContext();

  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h1 className="text-3xl font-bold">SnipAi</h1>
      </div>
      <div>
        {!user ? (
          <Authentication>
            <Button>Get Started</Button>
          </Authentication>
        ) : (
          <div className="flex gap-4 ">
             <Link href={'/dashboard'} ><Button size={"lg"} >Dashboard</Button></Link>
             
             <div className="rounded-full hover:scale-110 transition-transform duration-200">
            <Image
              src={user?.pictureURL}
              alt="userImg"
              width={40}
              height={40}
              className="rounded-full"
            ></Image>

             </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
