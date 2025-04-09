"use client"
import { Button } from "../../components/ui/button";
import React from 'react'
import Authentication from './Authentication'
import { useAuthContext } from '../provider'
import Link from 'next/link'

function Hero() {
    const {user} =  useAuthContext();
  return (
    <div className='p-10 mt-24 flex flex-col justify-center items-center md:px-20 lg:px-36 xl:px-48'>
        <h2 className='text-5xl text-center font-bold'>AI Youtube Short Video Generator</h2>
        <p className='text-center text-xl mt-4  text-gray-500'>🤖 AI-powered editing, effects, and captions.
            ⚡Create stunning YouTube Shorts and
            transform your ideas into viral short videos in seconds! </p>
        <div className='mt-10 flex gap-6'>
            <Button size={"lg"} variant={"outline"} >Explore</Button>
             {!user ? (<Authentication><Button size="lg">Get Started</Button></Authentication>):(
                   <Link href={'/dashboard'} ><Button size={"lg"} >Dashboard</Button></Link>
              
             )}
        </div>
    </div>
  )
}

export default Hero