"use client";
import { SidebarProvider } from "../../@/components/ui/sidebar";
import React, { useEffect } from "react";
import AppSidebar from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";
import { useAuthContext } from "../provider";
import { useRouter } from "next/navigation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Dashboardprovider({ children }) {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    user && CheckUserAuthentication();
  }, [user]);

  const CheckUserAuthentication = () => {
    if (!user) {
      router.replace("/");
    }
  };
  return (
    <>
       <SidebarProvider>
      <AppSidebar />
      <div className="w-full p-3">
        <AppHeader />
         <div className="p-6">
         {children}
         </div>
      </div>
    </SidebarProvider>
    <ToastContainer />
    </>
    
  );
}

export default Dashboardprovider;
