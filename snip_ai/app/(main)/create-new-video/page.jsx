"use client";

import React, { useState } from "react";
import Topic from "./_components/Topic";
import VedioStyle from "./_components/VedioStyle";
import Voice from "./_components/voice";
import Captions from "./_components/Captions";
import { Button } from "../../../components/ui/button";
import { Loader2Icon, WandSparkles } from "lucide-react";
import Preveiw from "./_components/Preveiw";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useAuthContext } from "../../provider";
import { toast } from 'react-toastify';


function CreateNewVideo() {
  const [formData, setFormData] = useState();
  const CreateInitialVideoRecord = useMutation(api.videoData.CreateVideoData);
  const [loading,setLoading] = useState(false);
  const {user} = useAuthContext();
  const onHandleInputChange = (feildName, feildValue) => {
    setFormData((prev) => ({ ...prev, [feildName]: feildValue }));
    console.log("formData", formData);
  };
  const GenerateVideo = async() => {

    if(user?.credits<=0){
       toast.dark("Please add more credits!")
       return;
    }
    setLoading(true);
    if (
      !formData?.topic ||
      !formData?.script ||
      !formData?.VideoStyle ||
      !formData?.Caption ||
      !formData?.voice||
      !formData?.title
    ) {
      console.log("error");
      toast.dark("Please fill out all the feilds")
      setLoading(false);
      return;
    }
    // Save krege video data ko apne database me......
    const resp = await CreateInitialVideoRecord({
       title: formData.title,
       topic: formData.topic,
       script: formData.script,
       voice: formData.voice,
       videoStyle: formData.VideoStyle,
       caption: formData.Caption,
       uid : user?._id,
       createdBy : user?.email,
       credits : user?.credits,
    })
     console.log(resp);
     
    const result = await axios.post('/api/generate-video-data',{
       ...formData,
       recordId:resp,
      
    })
    console.log(result);
    setLoading(false)
    
  };
  return (
    <div className="">
      <h2 className="text-3xl">Create New Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <div className="col-span-2 border rounded-xl mt-8 p-7 h-[70vh] overflow-auto w-full ">
          {/* Topic & Script */}
          <Topic onHandleInputChange={onHandleInputChange} />
          {/* Vedio Image style */}
          <VedioStyle onHandleInputChange={onHandleInputChange} />
          {/* Voices */}
          <Voice onHandleInputChange={onHandleInputChange} />
          {/* Captions */}
          <Captions onHandleInputChange={onHandleInputChange} />

          <Button
            onClick={GenerateVideo}
            size={"sm"}
            className={"w-full mt-5 "}
          >
            {loading==true ? <Loader2Icon className="animate-spin"/> :   <WandSparkles /> }
           Genrate Video
          </Button>
        </div>
        <div>
          <Preveiw formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewVideo;
