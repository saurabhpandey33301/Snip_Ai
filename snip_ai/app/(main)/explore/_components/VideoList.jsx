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
    const result = await convex.query(api.videoData.GetOtherUserVideos, {
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
            There isn't any other creators video.
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-10 gap-5 ">
          {videoList?.map((video, index) => (
            <Link href={`/play-video/` + video?._id} key={index}>
              <div className="relative hover:border-2 rounded-xl border-white">
                {video?.status === "completed" && video?.images?.[0] && (
                  <Image
                    src={video.images[0]}
                    alt={video?.title || ""}
                    width={500}
                    height={500}
                    className="w-full object-cover aspect-[2/3] rounded-xl"
                  />
                )}
                <div className="absolute bottom-3 px-5 w-full">
                  <h2 className=" text-md lg:text-lg font-bold text-white">
                    {video?.title}
                  </h2>
                  <h2 className="text-sm text-white">
                    {moment(video?._creationTime).fromNow()}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
