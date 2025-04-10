// "use client";
// import React, { useEffect } from "react";
// import {
//   AbsoluteFill,
//   Audio,
//   Img,
//   interpolate,
//   Sequence,
//   useCurrentFrame,
//   useVideoConfig,
// } from "remotion";

// export default function RemotionComposition({ videoData, setDurationInFrame }) {
//   const captions = videoData?.captionJson;
//   const { fps } = useVideoConfig();
//   const imageList = videoData?.images;
//   console.log(videoData);
  
//   const frame = useCurrentFrame();
//   useEffect(() => {
//     videoData && getDurationFrame();
//   }, [videoData]);

//   const getDurationFrame = () => {
//     const totalDurationFrame = captions[captions?.length - 1]?.end * fps;
//     setDurationInFrame(totalDurationFrame);
//     return totalDurationFrame;
//   };

//   const getCurrentCaption = () => {
//     const currentTime = frame/fps;
//     const currentCaption = captions?.find(
//       (item)=>currentTime >= item?.start && currentTime <= item?.end
//     );
//     return currentCaption ? currentCaption?.word : "";
//   };

//   return (
//     <div>
//       <AbsoluteFill>
//         {imageList?.map((item, index) => {
//           const startTime = (index * getDurationFrame()) / imageList?.length;
//           const duration = getDurationFrame();
//           const scale = (index) =>
//             interpolate(
//               frame,
//               [startTime, startTime + duration / 2, startTime + duration],
//               index % 2 == 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
//               { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
//             );
//           return (
            
//               <Sequence
//                 key={index}
//                 from={startTime}
//                 durationInFrames={getDurationFrame()}
//               >
//                 <AbsoluteFill>
//                   <Img
//                     src={item}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       transform: `scale(${scale(index)})`,
//                     }}
//                   />
//                 </AbsoluteFill>
//               </Sequence>
            
//           );
//         })}
//       </AbsoluteFill>
//       <AbsoluteFill
//         style={{
//           color: "white",
//           justifyContent: "center",
//           bottom: 50,
//           height: 150,
//           top:undefined,
//           textAlign: "center",
          
//         }}
//       >
//         <h2  className={`${videoData?.caption?.style} text-8xl `}>{getCurrentCaption()}</h2>
//       </AbsoluteFill>
//       {videoData && <Audio src={videoData?.audioUrl} />}
//     </div>
//   );
// }






"use client";
import React, { useEffect } from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export default function RemotionComposition({ videoData, setDurationInFrame }) {
  const captions = videoData?.captionJson;
  const { fps } = useVideoConfig();
  const imageList = videoData?.images || [];
  const frame = useCurrentFrame();

  // ✅ Set duration only once, not during render
  useEffect(() => {
    if (captions?.length > 0) {
      const lastCaption = captions[captions.length - 1];
      const totalDurationFrame = lastCaption.end * fps;
      setDurationInFrame(totalDurationFrame);
    }
  }, [captions, fps, setDurationInFrame]);

  // ✅ Compute once for render
  const totalDurationFrame = captions?.[captions.length - 1]?.end * fps || 0;

  const getCurrentCaption = () => {
    const currentTime = frame / fps;
    const currentCaption = captions?.find(
      (item) => currentTime >= item?.start && currentTime <= item?.end
    );
    return currentCaption?.word || "";
  };

  return (
    <div>
      <AbsoluteFill>
        {imageList.map((item, index) => {
          const startTime = (index * totalDurationFrame) / imageList.length;

          const scale = interpolate(
            frame,
            [startTime, startTime + totalDurationFrame / 2, startTime + totalDurationFrame],
            index % 2 === 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <Sequence
              key={index}
              from={startTime}
              durationInFrames={totalDurationFrame}
            >
              <AbsoluteFill>
                <Img
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: `scale(${scale})`,
                  }}
                />
              </AbsoluteFill>
            </Sequence>
          );
        })}
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          bottom: 50,
          height: 150,
          textAlign: "center",
          top:undefined,
        }}
      >
        <h2 className={`${videoData?.caption?.style || ""} text-8xl`}>
          {getCurrentCaption()}
        </h2>
      </AbsoluteFill>

      {videoData?.audioUrl && <Audio src={videoData.audioUrl} />}
    </div>
  );
}
