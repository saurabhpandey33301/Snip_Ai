import { ArrowBigLeft, ArrowLeft, DownloadIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../../../../components/ui/button'
import Link from 'next/link'

export default function VideoInfo({videoData}) {
  return (
    <div className='flex flex-col gap-4'>
        
        <Link href={'/dashboard'}>
        <h2 className='flex gap-2'>
            <ArrowLeft/>
            Back to Dashboard
        </h2>
        </Link>
        <h2 className=' flex gap-2'>
            <p>Project Name : </p>
            <p className='text-lime-400 font-bold  text-center items'>{videoData?.title}</p>
        </h2>
        <div className='flex flex-col gap-2'>
            <h2>Description :</h2>
            <h2 className='text-sm text-gray-500' >{videoData?.script}</h2>
        </div>
        <h2 className=' flex gap-2' ><p>Video Style : </p>
        <p className='text-gray-500  text-center items'>{videoData?.videoStyle}</p></h2>
        <Button size={'sm'} className={'w-full cursor-pointer mt-2 '} > <DownloadIcon/> Export & Download</Button>
    </div>
  )
}
