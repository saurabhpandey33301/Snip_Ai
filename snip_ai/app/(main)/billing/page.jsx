"use client"
import React, { useState } from 'react'
import { useAuthContext } from '../../provider';
import Script from 'next/script';
import { toast } from 'react-toastify';
import { BadgeIndianRupee } from 'lucide-react';
import { useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';

function Billing() {
  const {user , setUser} = useAuthContext();

  const updateUserCredits = useMutation(api.users.UpdateCredit);

  const CreateOrder = async (payAmt,credits)=>{
     //   toast.success('hello');
       const res = await fetch("/api/createOrder",{
          method:"POST",
          body: JSON.stringify({amount:payAmt*100}),
       })
       const data = await res.json();

       const paymentData = {
           key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
           order_id: data.id,
           handler: async function (response) {
               const res = await fetch("/api/verifyOrder", {
                   method: "POST",
                   body: JSON.stringify({
                       orderId: response.razorpay_order_id,
                       razorpayPaymentId: response.razorpay_payment_id,
                       razorpaySignature: response.razorpay_signature,
                   })
               })
               const data = await res.json();
               console.log(data);
               if (data.isOk) {
                   //do whatever page transaction u want to do
                   const result = await updateUserCredits({
                      uid : user?._id,
                      credits:Number(user?.credits)+Number(credits)
                   })
                   console.log(result);
                   setUser(prev => ({
                      ...prev,
                      credits:Number(user?.credits)+Number(credits)
                   }));
                   
                   await handleEmail(user?.name,user?.email,credits);
                   toast.success("credits Added!");
               } else {
                   toast.error("payment failed");
               }
           }
       }

       const payment = new (window).Razorpay(paymentData);
       payment.open()
  }
  
  return (
    <div className='flex flex-col w-full lg:w-2/3 gap-4' >
      <Script 
         type='text/javascript'
         src='https://checkout.razorpay.com/v1/checkout.js'
      />
      <h2 className="font-bold text-3xl">Credits</h2>
      <div className='border p-3 flex justify-between rounded-xl gap-2' > 
               <div>
                  <h2 className='text-lg lg:text-2xl font-bold' >Total Credits Left</h2>
                  <h2 className='text-sm'>1 credit = 1 video</h2>
               </div>
               <div> 
                  <h2 className=' text-lg lg:text-3xl font-bold flex gap-2 justify-center items-center' ><BadgeIndianRupee size={32} color="#08e20c" strokeWidth={2.25} /><span>{user?.credits} Credits</span></h2>
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
                    <button 
                     onClick={()=>{
                         
                         CreateOrder(9,10)
                     }}
                    className='bg-green-400 hover:bg-green-500 p-1  rounded-md text-black px-2 cursor-pointer'>Buy now</button>
               </div>
               
          </div>
          <div className='p-4 border rounded-xl flex justify-between '>
              <div className='flex flex-col gap-1'>
                   <h2 className='text-xl font-bold '>Premium Plan</h2>
                   <h2 className='text-sm text-gray-400'>120 credits</h2> 
              </div>
              <div className='flex gap-2 items-center justify-center'>
                    <h2 className='text-xl font-bold'>₹ <span className='text-2xl'>99</span></h2>
                    <button 
                      onClick={()=>{
                         CreateOrder(99,120)
                     }}
                    className='bg-green-400 hover:bg-green-500 p-1  rounded-md text-black px-2 cursor-pointer' >Buy now</button>
               </div>
          </div>
      </div>
    </div>
  )
}


const handleEmail = async(name,email,credits)=>{
        fetch('/api/sendMail',{
            method:"POST",
            cache:'no-cache',
            body:JSON.stringify({
                name,
                email,
                credits
            }),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
}

export default Billing