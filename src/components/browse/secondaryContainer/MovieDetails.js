import { useState } from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../../../hooks/useMovieDetails";
import useMovieTrailer from "../../../hooks/useMovieTrailer";
import HeaderBrowse from "../HeaderBrowse";
import {
  IMG_CDN_URL,
  IMG_CDN_URL_ORIGINAL,
  YOUTUBE_URL,
} from "../../../utils/constants";
import { FaStar } from "react-icons/fa";
import { IMG_CDN_URL_200 } from "../../../utils/constants";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movieDetails = useMovieDetails(movieId);
  const [trailerId, setTrailerId] = useState(null);
  useMovieTrailer(movieId, setTrailerId);

  // Check if movieDetails is null before destruturing its properties
  if (!movieDetails) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  // Destructure movieDetails after ensuring it's not null
  const {
    backdrop_path,
    original_title,
    poster_path,
    release_date,
    genres,
    overview,
    tagline,
    vote_average,
    production_companies,
    status,
    runtime,
  } = movieDetails;

  const genresString = genres.map((genre) => genre.name).join("/");

  const handleButtonClick = () => {
    const url = YOUTUBE_URL + trailerId;
    //redirect to the youtube link
    window.open(url, "_blank"); // Open the URL in a new window/tab
  };

  return (
    <div className=" relative overflow-hidden w-screen h-screen">
      <HeaderBrowse />

      <div className="absolute" id="background">
        <img
          src={IMG_CDN_URL_ORIGINAL + backdrop_path}
          alt="background"
          className=" object-cover w-screen h-screen  text-opacity-60"
        ></img>
      </div>

      <div
        id="overlay"
        className=" absolute
        bg-black bg-opacity-85  w-screen h-screen
      "
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-full flex 
      sm:justify-center
      md:justify-center"
      >
        <div
          id="reception"
          className=" absolute mt-52 
            ml-72
            sm:ml-24
            text-white flex flex-col 
          "
        >
          <p className="w-96 flex ">
            <FaStar className="text-yellow-400 mr-2 mt-1" />
            Score: {Math.round(vote_average)}/10
          </p>
          <p>Produced by</p>
          {production_companies.map((company) => (
            <div key={company.id} className="flex items-center space-x-2">
              <div className="relative">
                <img
                  alt={"logo"}
                  src={IMG_CDN_URL_200 + company.logo_path}
                  className="h-5 my-2"
                />
              </div>
            </div>
          ))}
          <p
            className={`text-sm font-semibold ${
              status === "Released" ? "text-green-700" : "text-red-500"
            }`}
          >
            {status}
          </p>
        </div>
        <div
          className="my-24 ml-8 w-65 relative z-10
       text-white flex flex-col 
     "
          id="poster"
        >
          <div className="mb-4 ">
            <h1
              className="font-bold text-lg
                w-50
              sm:text-xl
              sm:absolute
              sm:ml-80
              sm:mt-2
              md:text-2xl"
            >
              {original_title}
            </h1>
            <p
              className="font-semibold from-neutral-500 text-s
                w-50
              sm:absolute
              sm:ml-80
              sm:mt-10"
            >
              {release_date}
            </p>
            <p
              className="font-semibold w-60 text-s from-neutral-600
              sm:absolute
              sm:ml-80
              sm:mt-16
              sm:text-lg
              sm:w-96"
            >
              {genresString}
            </p>
          </div>

          <img
            src={IMG_CDN_URL + poster_path}
            alt="background"
            className="w-60 rounded-md
              sm:w-72"
          ></img>
          <button
            onClick={handleButtonClick}
            className="bg-red-800  my-3 w-60 py-2 rounded-lg font-semibold
            hover:bg-opacity-80
            sm:w-72"
          >
            Watch Trailer
          </button>
          <div>
            <h2
              className="font-bold text-lg
              sm:text-2xl"
            >
              Overview
            </h2>
            <p className="text-lg italic">{tagline}</p>
            <p
              className="
              sm:w-[60em] 
              w-80
              "
            >
              {overview}
            </p>
            <p>Run time: {runtime} minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
