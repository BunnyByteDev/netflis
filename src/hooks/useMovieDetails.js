import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState(null);

  //making api call=
  //
  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    setMovieDetails(json);
  };
  useEffect(() => {
    //once the data is here, don't make any api calls
    if (!movieDetails) getMovieDetails();
  }, [movieId, movieDetails]);
  return movieDetails;
};

export default useMovieDetails;
