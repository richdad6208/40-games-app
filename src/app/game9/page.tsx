"use client";

import { useRef, useState } from "react";

export default function Page() {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function playVideo() {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  function pauseVideo() {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  return (
    <div className="relative h-full">
      <div className="absolute z-10 w-full h-full bg-black/90 opacity-70 flex justify-center items-center text-white text-5xl">
        Video Project
      </div>
      <video className="absolute object-fill w-full h-full" ref={videoRef}>
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-36 bottom-10 left-10 text-center flex z-20 bg-white rounded-lg">
        <span
          onClick={() => {
            playVideo();
            setIsPlay(true);
          }}
          className={`cursor-pointer text-2xl text-white z-20 w-1/2 rounded-lg ${
            isPlay && "bg-sky-300"
          }`}
        >
          Play
        </span>
        <span
          onClick={() => {
            pauseVideo();
            setIsPlay(false);
          }}
          className={`cursor-pointer text-2xl text-white z-20 w-1/2 rounded-lg ${
            !isPlay && "bg-sky-300"
          }`}
        >
          Pause
        </span>
      </div>
    </div>
  );
}
