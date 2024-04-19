import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../../hooks/usePopularMovies";
import useTopRatedMovies from "../../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../../hooks/useUpcomingMovies";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const nowPlayingMovies = useNowPlayingMovies();
  const popularMovies = usePopularMovies();
  const topRatedMovies = useTopRatedMovies();
  const upComingMovies = useUpcomingMovies();
  return (
    <div
      className="  bg-black w-screen
    "
    >
      <div
        className="-mt-10 relative
        w-screen 
      sm:mt-0
      lg:-mt-52
      md:-mt-14
      md:pl-12"
      >
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Upcoming"} movies={upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
