"use client";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import React from "react";
import Authentication from "./Authentication";
import { useAuthContext } from "../provider";
import Link from "next/link";
import { signOut } from "firebase/auth"; // <-- import signOut
import { auth } from "../configs/firebaseconfig"; // <-- import auth
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


function Header() {
  const { user } = useAuthContext();

   const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        toast.success("signin out successfully");
       setTimeout(() => {
          window.location.href = "/";
        }, 1000);
       
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="p-4 px-4 lg:px-10  flex justify-between items-center ">
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
          <div className="flex  ">
            <div className="rounded-full hover:scale-110 transition-transform duration-200">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image
                    src={user?.pictureURL}
                    alt="userImg"
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                  ></Image>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={"m-2"}>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href={"/dashboard"}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className={'cursor-pointer'} >SignOut</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
