import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState(null);
  //making api call=
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setNowPlayingMovies(json.results);
  };
  useEffect(() => {
    //once the data is here, don't make any api calls
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
  return nowPlayingMovies;
};

export default useNowPlayingMovies;
