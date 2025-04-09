import Image from 'next/image'
import React, { useState } from 'react'

export const options =[
    {
        name:"Realistic",
        image:"/lion.jpg"
    },
    {
        name:"Cinematic",
        image: "/cinemaa.jpg"
    },
    {
        name:"Cartoon",
        image: "/cartoon.jpeg"
    },
    {
        name:"WaterColor",
        image: "/watercolor.jpeg"
    },
    {
        name:"Cyberpunk",
        image: "/cyberpunk.jpg"
    },
    {
        name:"GTA",
        image: "/gta.jpg"
    },
    {
        name:"Anime",
        image: "/anime.png"
    },
]

function VedioStyle({onHandleInputChange}) {
  const [selectedStyle, setSelectedStyle ] = useState();
  return (
    <div className='mt-4'>
        <h2>Vedio Styles</h2>
        <p className='text-sm text-gray-500'>Select Video Style for your video</p>
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 mt-2'>
            {options.map((option,index)=>(
                <div key={index} className='relative' onClick={()=>
                {
                    setSelectedStyle(option.name);
                    onHandleInputChange("VideoStyle",option.name)
                    
                }}>
                    <Image src={option.image} alt={option.name} width={600} height={120}
                     className={`object-cover h-[90px] lg:h-[130px] xl:h-[180px] rounded-lg p-1 cursor-pointer ${selectedStyle==option.name ? 'border-2 border-blue-400' : 'hover:border-2 border-white'}`}  />
                     <h2 className='absolute bottom-1 text-center w-full text-black font-bold'>{option.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default VedioStyle