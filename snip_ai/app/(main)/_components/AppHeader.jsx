"use client";
import { SidebarTrigger } from "../../../@/components/ui/sidebar";
import { useAuthContext } from "../../provider";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../@/components/ui/dropdown-menu";
import Link from "next/link";

export default function AppHeader() {
  const { user } = useAuthContext();
  return (
    <div className=" flex justify-between min-w-full items-center ">
      <SidebarTrigger />
      <div className="me-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={user?.pictureURL}
              alt="user"
              width={35}
              height={35}
              className={"rounded-full cursor-pointer"}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className={"m-3"} >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/"} > Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>SignOut</DropdownMenuItem>
            
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  );
}
