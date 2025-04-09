"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../../@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { Gem,  LayoutDashboard, LucideFileVideo, Search, WalletCards } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthContext } from "../../provider";

function AppSidebar() {
  const path = usePathname();
  const {user} = useAuthContext();
  const MenuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      Link: "/dashboard",
    },
    {
      name: "Create New Video",
      icon: LucideFileVideo,
      Link: "/create-new-video",
    },
    {
      name: "Explore",
      icon: Search,
      Link: "/explore",
    },
    {
      name: "Billing",
      icon: WalletCards,
      Link: "/billing",
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-col items-center gap-2 justify-center">
          <div className="flex items-center gap-3 w-full justify-center mt-3 transform -translate-x-3">
            <Image src={"/logo.svg"} alt="logo" width={40} height={40}></Image>
            <h1 className="text-2xl  font-bold">SnipAi</h1>
          </div>
          <h1 className="text-md flex justify-center items-center text-gray-400">
            AI Short Video Generator
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="mx-5 mt-8">
               <Link href={"/create-new-video"}><Button className={"w-full"}>+ Create New Vedio</Button></Link>
            </div>
            <SidebarMenu className={"mt-3"}>
              {MenuItems.map((item, index) => (
                <div key={item.name} className="mx-5">
                  <SidebarMenuItem className={"mt-3"}>
                    <SidebarMenuButton
                      isActive={path == item.Link}
                      className={"p-5"}
                    >
                      <Link
                        href={item.Link}
                        className="flex items-center gap-3 w-full "
                      >
                        <item.icon />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter >
          <div className="p-5 border rounded-lg  mb-6 bg-gray-800 mx-4">
             <div className="flex items-center justify-around gap-3">
                <Gem/>
                 <h2 className="text-gray-300">{user?.credits} credits Left</h2>
             </div>
             <Button className={"w-full mt-4"}>Buy More Credits</Button>
          </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
