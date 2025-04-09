import React, { useState } from "react";
import {ScrollArea} from "../../../../@/components/ui/scroll-area"
const voiceOptions = [
    {
        "value" : "af_sarah",
        "name" : ` Sarah(Female)`,
    },
    {
        "value" : "am_echo",
        "name" : ` Echo(male)`,
    },
    {
        "value" : "am_adam",
        "name" : ` Adam(male)`,
    },
    {
        "value" : "hf_alpha",
        "name" : ` Alpha(female)`,
    },
    {
        "value" : "hf_beta",
        "name" : `  Beta(female)`,
    },
    {
        "value" : "hm_omega",
        "name" : ` Omega(male)`,
    },
    {
        "value" : "hf_omega",
        "name" : ` Omega(female)`,
    },
    {
        "value" : "am_michael",
        "name" : ` Michael(male)`,
    },
];

function Voice({onHandleInputChange}) {
    const[selectedVoice,setSelectedVoice] = useState();
  return (
    <div className="mt-3">
      <h2 className="">Video Voices</h2>
      <p className="text-sm text-gray-500 ">Select voice for your video</p>
      <ScrollArea className={'h-[200px] w-full p-4'} >
      <div className=" grid grid-cols-2 gap-3 mt-2">
        {voiceOptions.map((voiceOption, index) => (
          <h2  onClick={()=>{
            setSelectedVoice(voiceOption.name)
            onHandleInputChange("voice",voiceOption.value)
        }} 
        key={index}
          className={`cursor-pointer p-2 dark:bg-slate-800 border-2  rounded-lg ${selectedVoice==voiceOption.name ? 'border-blue-400':'border-slate-600 hover:border-white' }`}>
             
            {voiceOption.name}
          </h2>
        ))}
      </div>
      </ScrollArea>
    </div>
  );
}

export default Voice;
