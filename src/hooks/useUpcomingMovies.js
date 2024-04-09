import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState(null);
  //making api call=
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setUpcomingMovies(json.results);
  };

  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);
  return upcomingMovies;
};

export default useUpcomingMovies;
