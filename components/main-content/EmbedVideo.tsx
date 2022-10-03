import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const EmbedVideo = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
    event.target.mute();
    setTimeout(() => event.target.pauseVideo(), 300);
  };

  const opts: YouTubeProps["opts"] = {
    height: "700",
    width: "1400",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="hidden xl:flex justify-center items-center flex-col space-y-4 mt-5 overflow-x-hidden">
      <h4 className="crunchism">Crunchism #4</h4>
      <div className="text-5xl font-bold scale-x-75 text-[#222] text-center -z-10">
        Goals Are Made to be Crushed
      </div>
      <div className="font-semibold">
        Train with our experts to drive your results.
      </div>
      <div className="uppercase font-bold text-xs tracking-widest cursor-pointer pt-4 text-orange-400 hover:text-black transition duration-300 ease-in-out">
        Learn more about our individual and small group training programs
      </div>
      <YouTube videoId="KFSsMS2mZkM" opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default EmbedVideo;
