import React, { useState, useRef } from "react";
import post from "./SocialPostData";
import Icon from "@mdi/react";
import { mdiPlay, mdiPause } from "@mdi/js";

export default function SocialPost() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);

  const handlePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingIndex(index);
      } else {
        video.pause();
        setPlayingIndex(null);
      }
    }
  };

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="mt-5 overflow-x-auto px-2">
      <div
        className="flex sm:flex-wrap flex-nowrap items-center justify-start sm:justify-center gap-5"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {post.map((item, index) => (
          <div
            key={index}
            className="relative w-58 h-80 flex-shrink-0 cursor-pointer group"
            style={{ scrollSnapAlign: "start" }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => handleCardClick(item.reel)}
          >
            {hoverIndex === index ? (
              <video
                className="w-full h-full object-cover rounded-md"
                src={item.video}
                muted
                loop
                autoPlay
                ref={(el) => (videoRefs.current[index] = el)}
              />
            ) : (
              <img
                className="w-full h-full object-cover rounded-md"
                src={item.thumbnail}
                alt=""
              />
            )}

            <Icon
              className="absolute top-2 right-2 text-white drop-shadow hover:scale-110 active:scale-95"
              path={playingIndex === index ? mdiPause : mdiPlay}
              size={1}
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPause(index);
              }}
            />

            <img
              className="size-5 absolute bottom-2 right-2 hover:scale-120 active:translate-y-0.5"
              src="instagram.webp"
              alt=""
              onClick={(e) => {
                e.stopPropagation();
                window.open(item.reel, "_blank"); 
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
