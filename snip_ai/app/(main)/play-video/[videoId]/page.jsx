"use client"
import React, { useEffect, useState } from 'react'
import RemotionPlayer from "../_components/RemotionPlayer"
import VideoInfo from "../_components/VideoInfo"
import { useConvex } from 'convex/react'
import { api } from '../../../../convex/_generated/api';
import { useParams } from 'next/navigation';


export default function PlayVideo() {

    const convex = useConvex();
    const {videoId} = useParams();
   const [ videoData , setVidoeData] = useState();

    useEffect(()=>{
        videoId && GetVideoDataById();
    },[videoId])
    const GetVideoDataById = async()=>{
        const result  = await convex.query(api.videoData.GetVideoById,{
            videoId:videoId

        });
        console.log(result);
        setVidoeData(result);
        
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
        <div className=' md:col-span-2 mt-10'>
        <div className=' flex items-center justify-center h-full border rounded-xl '>
            {/* {Remotion Player} */}
            <RemotionPlayer videoData={videoData} />
        </div>
        </div>
        <div className=' md:col-span-1'>
            {/* Video Information */}
            <VideoInfo videoData={videoData} />
        </div> 
    </div>
  )
}
