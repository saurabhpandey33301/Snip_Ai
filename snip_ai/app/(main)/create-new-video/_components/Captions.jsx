import React, { useState } from 'react'

const options=[
       {
        name:"YOUTUBER",
        style: " text-yellow-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-lg px-3 py-1 rounded-lg "
       },
       {
        name:"Superme",
        style: " italic text-white  font-mono text-3xl font-bold drop-shadow-lg px-3 py-1 rounded-lg "
       },
       {
        name:"NEON",
        style: "text-green-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-lg px-3 py-1 rounded-lg "
       },
       {
        name:"GLITCH",
        style: "text-pink-500 text-3xl font-mono font-extrabold uppercase tracking-wide drop-shadow-lg px-3 py-1 rounded-lg" 
       },
       {
        name:"FIRE",
        style: "text-red-500 text-3xl font-extrabold tracking-wide drop-shadow-lg px-3 py-1 rounded-lg"
       },
       {
        name:"futuristic",
        style: "text-blue-400 font-mono text-3xl font-extrabold tracking-wide drop-shadow-lg px-3 py-1 rounded-lg"
       }
]

function Captions({onHandleInputChange}) {
    const[caption,setCaption] = useState()
  return (
    <div className='mt-2'>
        <h2>Video Captions</h2>
        <p className='text-sm text-gray-500'>Select caption for your Video</p>
        <div className='flex flex-wrap gap-4 mt-4'>
             {
                options.map((option,index)=>(
                    <div key={index} className='p-1'>
                        <h2 onClick={()=>{
                            setCaption(option.name);
                            onHandleInputChange("Caption",option)
                        }} className={`${option.style } ${caption==option.name? 'border-2 border-blue-400' : 'border-2 hover:border-white' } `}>{option.name}</h2>
                    </div>
                ))
             }
        </div>
    </div>
  )
}

export default Captions