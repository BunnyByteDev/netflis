import { useState } from "react";
import useMovieTrailer from "../../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState(null);

  useMovieTrailer(movieId, setTrailerId);
  return (
    <div className="w-screen bg-black">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/lV1OOlGwExM?si=ool91AjACx3LaeJg" +
          trailerId +
          "&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
