import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const EmbedVideo = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "480",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  
  return (
    <div>
      <YouTube videoId="wsY-nHH8HlY" opts={opts} onReady={onPlayerReady} />;
    </div>
  );

};

export default EmbedVideo;
