"use client"
import React from 'react'
import { Button } from '../../../components/ui/button'
import { useAuthContext } from '../../provider';

function Billing() {
  const {user} = useAuthContext();
  return (
    <div className='flex flex-col w-full lg:w-2/3 gap-4' >
      <h2 className="font-bold text-3xl">Credits</h2>
      <div className='border p-3 flex justify-between rounded-xl' > 
               <div>
                  <h2 className='text-2xl font-bold' >Total Credits Left</h2>
                  <h2 className='text-sm'>1 credit = 1 video</h2>
               </div>
               <div> 
                  <h2 className='text-3xl font-bold'> {user?.credits} Credits</h2>
               </div>
      </div>
      <div className='text-gray-500 text-sm'>
          <h2 className='px-5'>When your credit balance reaches $0, your Video generation will stop working. Add Credits balance topped up.</h2>
      </div>
      <h2 className="font-bold text-3xl">Buy More Credits</h2>
      <div className='flex flex-col gap-2'>
          <div className='p-4 border rounded-xl flex justify-between '>
               <div className='flex flex-col gap-1'>
                   <h2 className='text-xl font-bold '>Basic Plan</h2>
                   <h2 className='text-sm text-gray-400'>10 credits</h2> 
               </div>
               <div className='flex gap-2 items-center justify-center'>
                    <h2 className='text-xl font-bold'>₹ <span className='text-2xl'>9</span></h2>
                    <Button size={'sm'} className={'bg-green-400 hover:bg-green-500'}>Buy now</Button>
               </div>
               
          </div>
          <div className='p-4 border rounded-xl flex justify-between '>
              <div className='flex flex-col gap-1'>
                   <h2 className='text-xl font-bold '>Premium Plan</h2>
                   <h2 className='text-sm text-gray-400'>120 credits</h2> 
              </div>
              <div className='flex gap-2 items-center justify-center'>
                    <h2 className='text-xl font-bold'>₹ <span className='text-2xl'>99</span></h2>
                    <Button size={'sm'} className={'bg-green-400 hover:bg-green-500'} >Buy now</Button>
               </div>
          </div>
      </div>
    </div>
  )
}

export default Billing