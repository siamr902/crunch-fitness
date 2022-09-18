import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const EmbedVideo = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
    event.target.mute();
    setTimeout(() => event.target.pauseVideo(), 200);
  };

  const opts: YouTubeProps["opts"] = {
    height: "400",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="hidden lg:flex">
      <YouTube videoId="wsY-nHH8HlY" opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default EmbedVideo;
