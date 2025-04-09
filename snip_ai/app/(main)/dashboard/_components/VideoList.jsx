"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { useConvex } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useAuthContext } from "../../../provider";
import moment from "moment";
import { RefreshCcw } from "lucide-react";

export default function VideoList() {
  const [videoList, setVideoList] = useState([]);
  const convex = useConvex();
  const { user } = useAuthContext();

  useEffect(() => {
    user && GetUserVideoList();
  }, [user]);
  const GetUserVideoList = async () => {
    const result = await convex.query(api.videoData.GetUserVideos, {
      uid: user?._id,
    });
    setVideoList(result);
    const isPendingVideo = result?.find((item) => item.status == "pending");
    isPendingVideo && GetPendingVideoStatus(isPendingVideo);
  };
  const GetPendingVideoStatus = (pendingVideo) => {
    const intervalId = setInterval(async () => {
      //Get Video data by id.....
      const result = await convex.query(api.videoData.GetVideoById, {
        videoId: pendingVideo?._id,
      });
      if (result?.status == "completed") {
        clearInterval(intervalId);
        console.log("video processed");
        GetUserVideoList();
      }
      console.log("video generation in process...");
    }, 5000);
  };
  return (
    <div>
      {videoList?.length == 0 ? (
        <div className="flex flex-col items-center justify-center mt-28 gap-5 border border-dashed rounded-xl py-16">
          <Image src={"/logo.svg"} alt="logo" width={60} height={60} />
          <h2 className="text-lg text-gray-500 text-center">
            {" "}
            You haven't created any videos yet!
          </h2>
          <Link href={"/create-new-video"}>
            <Button size={"lg"}>+ Create your first video</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-10 gap-5 ">
          {videoList?.map((video, index) => (
            <div key={index} className="relative">
              {video?.status == "completed" ? (
                <Image
                  src={video?.images[0]}
                  alt={video?.title}
                  width={500}
                  height={500}
                  className="w-full object-cover aspect-[2/3] rounded-xl "
                />
              ) : (
                <div className="aspect-[2/3] p-5 w-full rounded-xl border flex justify-center items-center gap-2 bg-slate-900">
                  <RefreshCcw className="animate-spin" />
                  <h2>Generating....</h2>
                </div>
              )}
              <div className="absolute bottom-3 px-5 w-full">
                <h2 className="text-lg font-bold text-white">{video?.title}</h2>
                <h2 className="text-sm text-white">
                  {moment(video?._creationTime).fromNow()}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
