import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  //making api call=
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setTopRatedMovies(json.results);
  };

  useEffect(() => {
    if (!topRatedMovies) getTopRatedMovies();
  }, []);
  return topRatedMovies;
};

export default useTopRatedMovies;
