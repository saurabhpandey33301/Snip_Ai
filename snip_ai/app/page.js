"use client";
import Hero from "./_components/Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoSection from "../app/_components/VideoSection";
import Footer from "../app/_components/footer";
import React from "react";
import Pricing from "../app/_components/Pricing"
import TechStack from "../app/_components/TechStack";
import Faq from "../app/_components/Faq"
import { Button } from "../components/ui/button";
import { AuroraText } from "../components/magicui/aurora-text";
import { useAuthContext } from "./provider";
import Authentication from "./_components/Authentication";
import Link from "next/link";
import { DashboardIcon } from "@radix-ui/react-icons";

export default function Home() {
  const { user } = useAuthContext();
  return (
    <div className="w-full ">
      <section
        id="hero"
        className="hero w-full min-h-screen overflow-hidden "
      >
        {/* Hero */}
        <Hero />
      </section>
      <section
        id="videosection"
        className="videosection w-full h-[300px] lg:min-h-screen overflow-hidden  "
      >
        <VideoSection />
      </section>
      <section
        id="Techstack"
        className="Techstack w-full min-h-screen "
      >
        <TechStack />
      </section>
      <section
         id="Pricing"
         className="Pricing w-full min-h-screen "
      >
         <Pricing/>
      </section>
      <section
        id="faq"
        className="faq w-full min-h-screen flex flex-col "
      >
        <Faq />
         <div className="flex flex-col justify-center items-center gap-8 mb-20 ">
             <div className="text-lg text-gray-400 font-mono text-center">READY TO GET STARTED ?</div>
            <div className="text-4xl lg:text-5xl font-bold text-center">Start your <AuroraText>free</AuroraText> trail today.</div>
            {!user ? (
                <Authentication>
                  <Button size="lg"><DashboardIcon/>Get Started for free</Button>
                </Authentication>
              ) : (
                <Link href={"/dashboard"}>
                  <Button size={"lg"} ><DashboardIcon/>Get Started for free</Button>
                </Link>
              )}

         </div>
      </section>
      <footer className="footer w-full">
        <Footer />
      </footer>

      <ToastContainer />
    </div>
  );
}
