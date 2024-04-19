import { useState, useEffect } from "react";
import useMovieTrailer from "../../../hooks/useMovieTrailer";
import {
  IMG_CDN_URL_ORIGINAL,
  YOUTUBE_VIDEO_URL,
} from "../../../utils/constants";

const VideoBackground = ({ movieId, backdrop, title }) => {
  const [trailerId, setTrailerId] = useState(null);
  const [background, setBackground] = useState(null);
  useMovieTrailer(movieId, setTrailerId);

  // Change the background to a still image after 1.5 minutes (90 seconds)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBackground(imgBg);
    }, 90000); // 90 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  const videoBg = (
    <iframe
      className=" w-screen aspect-video "
      src={YOUTUBE_VIDEO_URL + "&autoplay=1&mute=1"}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  );

  const imgBg = (
    <img
      alt={title}
      src={IMG_CDN_URL_ORIGINAL + backdrop}
      className="w-screen"
    />
  );

  return <div className="w-screen bg-black ">{background || videoBg}</div>;
};

export default VideoBackground;
