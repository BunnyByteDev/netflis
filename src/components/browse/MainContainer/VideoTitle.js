import useMovieTrailer from "../../../hooks/useMovieTrailer";
import { useState } from "react";
import { YOUTUBE_URL } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  const [trailerId, setTrailerId] = useState(null);
  useMovieTrailer(movieId, setTrailerId);

  const handleInfoButtonClick = () => {
    navigate(`movie/${movieId}`);
  };

  const handlePlayButtonClick = () => {
    const url = YOUTUBE_URL + trailerId;
    //redirect to the youtube link
    window.open(url, "_blank"); // Open the URL in a new window/tab
  };

  return (
    <div
      className=" pt-[10%] md:pt-[25%] px-12 absolute bg-gradient-to-r from-black
  w-screen aspect-video "
    >
      <h1 className="text-xl md:text-3xl font-bold  text-white text-left">
        {title}
      </h1>
      <p className="text-xs py-3 md:text-lg w-1/2 text-white text-left">
        {overview}
      </p>
      <div className="flex">
        <button
          onClick={handlePlayButtonClick}
          className="bg-white bg-opacity-80 text-black px-6 py-1 mr-3 text-xs
          rounded-md font-medium hover:bg-opacity-50
          md:text-xl
          md:px-12 
          md:py-2 
          sm:text-[90%]
          sm:px-8
          sm:py-1
          
        "
        >
          ▷ Play
        </button>
        <button
          onClick={handleInfoButtonClick}
          className="bg-slate-600 ¿ text-white mr-3 px-6 py-1 text-xs
          rounded-md
        hover:bg-opacity-50
          md:text-xl
          md:px-12 
          md:py-2 
          sm:text-[90%]
          sm:px-8
          sm:py-1
        "
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
