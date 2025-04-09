"use client"
import { SidebarTrigger } from '../../../@/components/ui/sidebar'
import { useAuthContext } from '../../provider'
import Image from 'next/image'
import React from 'react'

export default function AppHeader() {
    const {user} = useAuthContext();
  return (
    <div className=' flex justify-between min-w-full items-center '> 
       
          <SidebarTrigger/>
          <Image src={user?.pictureURL} alt="user" width={35} height={35} className={'rounded-full'} />
        
    </div>
  )
}
