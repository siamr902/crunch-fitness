import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const EmbedVideo = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
    event.target.mute();
    setTimeout(() => event.target.pauseVideo(), 300);
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex justify-center items-center flex-col space-y-4 mt-5 overflow-x-hidden p-5">
      <h4 className="crunchism">Crunchism #3</h4>
      <div className="text-4xl sm:text-5xl font-bold scale-x-75 text-[#222] text-center -z-10">
        Goals Are Made to be{" "}
        <span className="text-red-600 font-croissant">
          Crushed
        </span>
      </div>
      <div className="font-semibold tracking-wide text-center text-md sm:text-lg">
        Train with our experts to drive your results.
      </div>
      <div className="uppercase font-bold text-xs text-center tracking-widest cursor-pointer pt-4 text-orange-600 hover:text-black transition duration-300 ease-in-out">
        Learn more about our individual and small group training programs
      </div>
      <YouTube
        videoId="KFSsMS2mZkM"
        opts={opts}
        onReady={onPlayerReady}
        iframeClassName="w-[90vw] h-[50vh] md:h-[60vh] lg:h-[68vh] xl:h-[700px] xl:w-[calc(100vw-5rem)]"
      />
    </div>
  );
};

export default EmbedVideo;
