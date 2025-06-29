"use client";
import React, { useState } from "react";
import { Player } from "@remotion/player";
import RemotionComposition from "../../../_components/RemotionComposition";

export default function RemotionPlayer({ videoData }) {
  const [durationInFrame, setDurationInFrame] = useState(300);
  return (
    
      <Player
        
        component={RemotionComposition}
        durationInFrames={Number(durationInFrame.toFixed(0)) + 100}
        compositionWidth={720}
        compositionHeight={1280}
        fps={30}
        style={{
          width: "100vw",
          height: "60vh",
        }}
        controls
        inputProps={{
          videoData: videoData,
          setDurationInFrame: (frameValue) => {
            setDurationInFrame(frameValue);
          },
        }}
      />
   
  );
}
