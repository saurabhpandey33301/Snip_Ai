import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Copyright } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Footer() {
  return (
    <div className=" flex flex-col">
       <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
      <div className="  border-gray-500 py-5  mb-2 lg:mb-0  grid lg:grid-flow-col grid-col-1 lg:grid  lg:grid-col-6 gap-2 lg:gap-0">
        <div className=" col-span-1 lg:col-span-1 flex justify-center items-center"> 
          <div className=" w-20 h-20 lg:w-60  lg:h-60 overflow-hidden">
          <DotLottieReact
            src="https://lottie.host/6499120b-60f8-425e-9ecd-44e01a1e8ac9/KLGoAetZff.lottie"
            loop
            autoplay
          
          />
        </div>
        </div>
        <div className=" col-span-1 lg:col-span-2  flex justify-center items-center">
          <h1 className="text-8xl lg:text-[200px] font-bold  text-transparent bg-clip-text bg-radial-[at_25%_25%] from-zinc-400 to-zinc-900 to-75%">
            SNIP AI
          </h1>
        </div>
        <div className=" col-span-1 lg:col-span-3 flex gap-4 justify-center items-center ">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl">Pages</h1>
            <div className="flex flex-col gap-2 text-gray-400 ">
              <Link href={"#hero"} ><h2 className="cursor-pointer">About us</h2></Link>
              <Link href={"#faq"}><h2 className="cursor-pointer">FAQ</h2></Link>
              <Link href={"#Pricing"} ><h2 className="cursor-pointer">Pricing</h2></Link>
              <Link href={"#hero"} ><h2 className="cursor-pointer">Blog</h2></Link>
              <Link href={"#hero"}><h2 className="cursor-pointer">Privacy Policy</h2></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 text-center border flex flex-col lg:flex-row gap-3 lg:gap-0 lg:justify-between ">
        <div>
          A product by{" "}
          <Link
            href={"https://saurabh-portfolio-zeta.vercel.app/"}
            target="_blank"
          >
            <span className="cursor-pointer text-blue-400 underline">
              Saurabh
            </span>
          </Link>
        </div>
        <div className="flex justify-center gap-1">
          <Copyright />
          <span> 2025 All rights Reserved</span>
        </div>
        <div className="flex gap-4 justify-center ">
          <Link
            href={"https://www.linkedin.com/in/saurabh3301/"}
            target="_blank"
            className="cursor-pointer"
          >
            <LinkedInLogoIcon width={30} height={30} />
          </Link>
          <Link
            href={"https://x.com/FRONTIER3301"}
            target="_blank"
            className="cursor-pointer"
          >
            <TwitterLogoIcon width={30} height={30} />
          </Link>
          <Link
            href={"https://github.com/saurabhpandey33301"}
            target="_blank"
            className="cursor-pointer"
          >
            <GitHubLogoIcon width={30} height={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}
