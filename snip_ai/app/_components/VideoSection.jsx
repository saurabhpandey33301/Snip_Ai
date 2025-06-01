"use client";
import React from "react";
import HeroVideoDialog from "../../components/magicui/hero-video-dialog";
import { motion } from 'framer-motion';
export default function VideoSection() {
  return (
    <div className="w-full  flex justify-center items-center overflow-hidden">
        <HeroVideoDialogDemo />
    </div>
  );
}
export function HeroVideoDialogDemo() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8, ease:"easeOut" }}
    >
      <HeroVideoDialog
        className="md:max-w-5xl w-[90%] mx-auto"
        animationStyle="from-bottom"
        videoSrc="https://www.youtube.com/embed/kJQP7kiw5Fk?si=OpcADRBuSFMQ92wC"
        thumbnailSrc="video.png"
        thumbnailAlt="Hero Video"
      />
    </motion.div>
  );
}
