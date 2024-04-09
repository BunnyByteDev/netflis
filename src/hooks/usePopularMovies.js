import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  //making api call=
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setPopularMovies(json.results);
  };

  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);
  return popularMovies;
};

export default usePopularMovies;
