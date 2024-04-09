import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId, setTrailerId) => {
  useEffect(() => {
    const getMovieVideos = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();

        // Check if json.results exists before calling find method
        if (json.results && json.results.length > 0) {
          const dataTrailer = json.results.find(
            (video) => video.name === "Official Trailer"
          );
          if (dataTrailer) {
            setTrailerId(dataTrailer.key);
          }
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    getMovieVideos();
  }, [movieId, setTrailerId]);
};

export default useMovieTrailer;
